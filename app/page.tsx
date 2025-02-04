
'use client'
// import Spline from '@splinetool/react-spline';
// import { createRoot } from 'react-dom/client'
// import { Canvas } from '@react-three/fiber'
// import { GradientTexture, MeshDistortMaterial, Sphere, useTexture } from '@react-three/drei'
// import * as THREE from 'three'
// import React, { useRef, useState } from 'react'

// import * as THREE from 'three'
// import { useRef, useReducer, useMemo } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Environment, Lightformer, Text , Text3D } from '@react-three/drei'
// import { BallCollider, Physics, RigidBody } from '@react-three/rapier'
// import { easing } from 'maath'
// import {Effects} from "@/components/Effect";

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'
import { suspend } from 'suspend-react'
import { Instances, Computers } from '../components/realism-effects/Computers'
import { Vector3 } from 'three';

// const accents: string[] = ['#033FBF', '#78DDFF', '#41A9D9', '#4060ff'];
// const shuffle = (accent = 0) => [
//   { color: '#444', roughness: 0.1, metalness: 0.5 },
//   { color: '#444', roughness: 0.1, metalness: 0.5 },
//   { color: '#444', roughness: 0.1, metalness: 0.5 },
//   { color: 'white', roughness: 0.1, metalness: 0.1 },
//   { color: 'white', roughness: 0.1, metalness: 0.1 },
//   { color: 'white', roughness: 0.1, metalness: 0.1 },
//   { color: accents[accent], roughness: 0.5, accent: true },
//   { color: accents[accent], roughness: 0.5, accent: true },
//   { color: accents[accent], roughness: 0.5, accent: true },
//   { color: '#444', roughness: 0.1 },
//   { color: '#444', roughness: 0.3 },
//   { color: '#444', roughness: 0.3 },
//   { color: 'white', roughness: 0.1 },
//   { color: 'white', roughness: 0.2 },
//   { color: 'white', roughness: 0.1 },
//   { color: accents[accent], roughness: 0.5, accent: true, transparent: true, opacity: 0.7 },
//   { color: accents[accent], roughness: 0.3, accent: true },
//   { color: accents[accent], roughness: 0.5, accent: true }
// ]
export default function LandingPage() {
// export default function LandingPage(props) {
//   return (
//     <main className="landing-page relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 h-screen"> 
//       <div className='pb-10 md:pb-20 pt-16'>
//         <div className='h-full absolute top-0 left-1/2 transform -translate-x-1/2'>
//         <div id="canvas-container">
//           <Canvas>
//             <Sphere args={[3]}></Sphere>
//           </Canvas>
//         </div>
//             {/* <Spline
//                 scene="https://prod.spline.design/6SPFlstwubLoHQIl/scene.splinecode"
//             /> */}
            
//         </div>
//       </div>
//     </main>
//   );
// }

// const [accent, click] = useReducer((state) => (state + 1) % accents.length, 0);
// const connectors = useMemo(() => shuffle(accent), [accent]);
// return (
//   <div className='h-screen'>
//     <Canvas
//       flat
//       shadows
//       onClick={click}s
//       dpr={[1, 1.5]}
//       gl={{ antialias: false }}
//       camera={{ position: [0, 0, 30], fov: 17.5, near: 10, far: 40 }}
//       {...props}
//     >
//       <Text color="black" anchorX="center" anchorY="middle">
//       {`Rijad\nKarabegovic`}
//       </Text>
//       {/* <Text3D smooth={1} lineHeight={0.5} letterSpacing={-0.025}>{`Rijad\nKarabegovic`}</Text3D> */}
//       <color attach="background" args={['#141622']} />
//       <Physics /*debug*/ timeStep="vary" gravity={[0, 0, 0]}>
//         <Pointer />
//         {connectors.map((props, i) => (
//           <Sphere key={i} {...props} />
//         ))}
//       </Physics>
//       <Environment resolution={256}>
//         <group rotation={[-Math.PI / 3, 0, 1]}>
//           <Lightformer form="circle" intensity={100} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
//           <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
//           <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
//           <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
//           <Lightformer form="ring" color="#4060ff" intensity={80} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 10, 0]} scale={10} />
//         </group>
//       </Environment>
//       <Effects />
//     </Canvas>
//   </div>
// );
return (
  <div  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
  <Canvas shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }} eventPrefix="client">
    {/* Lights */}
    <color attach="background" args={['#020C1D']} />
    <hemisphereLight intensity={0.15} groundColor="black" />
    <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
    {/* Main scene */}
    <group position={[-0, -1, 0]}>
      {/* Auto-instanced sketchfab model */}
      <Instances>
        <Computers scale={0.45} />
      </Instances>
      {/* Plane reflections + distance blur */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          mirror={0}
          blur={[300, 30]}
          resolution={2048}
          mixBlur={1}
          mixStrength={180}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#202020"
          metalness={0.8}
        />
      </mesh>
      <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="orange" />
    </group>
    {/* Postprocessing */}
    <EffectComposer disableNormalPass>
    <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={3} />
      <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={800} />
    </EffectComposer>
    {/* Camera movements */}
    <CameraRig />
    {/* Small helper that freezes the shadows for better performance */}
    <BakeShadows />
  </Canvas>
  </div>
)


}
// function Sphere({ position, children, vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, accent, color = 'white', ...props }) {
//   const api = useRef()
//   const ref = useRef()
//   const pos = useMemo(() => position || [r(10), r(10), r(10)], [])
//   useFrame((state, delta) => {
//     delta = Math.min(0.1, delta)
//     api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.2))
//     easing.dampC(ref.current.material.color, color, 0.2, delta)
//   })
//   return (
//     <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
//       <BallCollider args={[1]} />
//       <mesh ref={ref} castShadow receiveShadow>
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshStandardMaterial {...props} />
//         {children}
//       </mesh>
//     </RigidBody>
//   )
// }

// function Pointer({ vec = new THREE.Vector3() }) {
//   const ref = useRef()
//   useFrame(({ mouse, viewport }) => ref.current?.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0)))
//   return (
//     <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
//       <BallCollider args={[1]} />
//     </RigidBody>
//   )
// }

const CameraRig: React.FC = () => {
  useFrame((state, delta) => {
    // Smoothly update the camera position based on pointer movements
    const targetPosition = new Vector3(
      -1 + (state.pointer.x * state.viewport.width) / 3,
      (1 + state.pointer.y) / 2,
      5.5
    );
    easing.damp3(state.camera.position, targetPosition, 0.5, delta);

    // Ensure the camera always looks at the origin
    state.camera.lookAt(0, 0, 0);
  });

  return null; // This component doesn't render anything itself
};
