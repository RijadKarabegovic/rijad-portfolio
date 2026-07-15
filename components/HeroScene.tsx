'use client'

import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const MODEL_URL = '/Head2.glb'

useGLTF.preload(MODEL_URL)

function useDotTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')!
    ctx.beginPath()
    ctx.arc(16, 16, 14, 0, Math.PI * 2)
    ctx.fillStyle = 'white'
    ctx.fill()
    return new THREE.CanvasTexture(canvas)
  }, [])
}

function PointCloudModel() {
  const groupRef = useRef<THREE.Group>(null)
  const dotTexture = useDotTexture()
  const gltf = useLoader(GLTFLoader, MODEL_URL)

  useEffect(() => {
    useGLTF.clear('/rishpa.glb')
  }, [])

  const { geometry, scale } = useMemo(() => {
    const positions: number[] = []
    const cloned = gltf.scene.clone(true)
    cloned.updateMatrixWorld(true)

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        const posAttr = mesh.geometry.attributes.position
        if (!posAttr) return

        const vertex = new THREE.Vector3()
        for (let i = 0; i < posAttr.count; i++) {
          vertex.fromBufferAttribute(posAttr, i).applyMatrix4(mesh.matrixWorld)
          positions.push(vertex.x, vertex.y, vertex.z)
        }
      }
    })

    const pointsGeo = new THREE.BufferGeometry()
    pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    pointsGeo.computeBoundingBox()
    pointsGeo.computeBoundingSphere()

    if (pointsGeo.boundingBox) {
      const center = new THREE.Vector3()
      pointsGeo.boundingBox.getCenter(center)
      pointsGeo.translate(-center.x, -center.y, -center.z)
    }

    const normalizedScale = 1.8 / (pointsGeo.boundingSphere?.radius ?? 1)

    return { geometry: pointsGeo, scale: normalizedScale }
  }, [gltf.scene])

  return (
    <group ref={groupRef} scale={scale}>
      <points geometry={geometry}>
        <pointsMaterial
          size={0.025}
          color="#96D7F7"
          map={dotTexture}
          alphaTest={0.5}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

function SceneControls() {
  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      enableDamping
      dampingFactor={0.08}
      autoRotate
      autoRotateSpeed={0.8}
      rotateSpeed={0.7}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={(3 * Math.PI) / 4}
      makeDefault
    />
  )
}

export default function HeroScene() {
  return (
    <Canvas
      key={MODEL_URL}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: '100%', height: '100%', touchAction: 'none', cursor: 'grab' }}
      onPointerDown={(e) => {
        ;(e.target as HTMLElement).style.cursor = 'grabbing'
      }}
      onPointerUp={(e) => {
        ;(e.target as HTMLElement).style.cursor = 'grab'
      }}
    >
      <ambientLight intensity={0.6} />
      <PointCloudModel key={MODEL_URL} />
      <SceneControls />
    </Canvas>
  )
}
