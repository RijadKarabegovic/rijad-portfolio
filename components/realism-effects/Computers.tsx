// @ts-nocheck
import * as THREE from 'three'
import { useMemo, useContext, createContext, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Merged, RenderTexture, PerspectiveCamera, Text } from '@react-three/drei'
import { SpinningBox } from './SpinningBox'
THREE.ColorManagement.legacyMode = false
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400"
  });
  
const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/computers_1-transformed.glb')
  const instances = useMemo(
    () => ({
    }),
    [nodes]
  )
  return (
    <Merged castShadow receiveShadow meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances}>
        {children}
      </context.Provider>
      }
    </Merged>
  )
}

export function Computers(props) {
  const { nodes: n, materials: m } = useGLTF('/computers_1-transformed.glb')
  const instances = useContext(context)
  const [hovered, setHovered] = useState(false);
  const hoverVar = useContext(context)

return (
  <group {...props} dispose={null}>
    {/* Main monitor */}
    <ScreenInteractive hovered={hovered} setHovered={setHovered} frame="Object_206" panel="Object_207" position={[0.27, 1.53, -2.7]} scale={1.5}/>
    {/* First row of the monitors */}
    <ScreenText hovered={hovered} invert frame="Object_212" panel="Object_219" y={2} position={[-5.5,0,-1]} rotation={[0, 0.6, 0]} scale={1.2} />
    <ScreenText hovered={hovered} frame="Object_218" panel="Object_219" y={1} position={[-3.75,0,-1.8]} rotation={[0, 0.4, 0]} scale={1.25} />
    <ScreenText hovered={hovered} invert frame="Object_212" panel="Object_219" y={2.3} position={[-1.75,0,-2.35]} rotation={[0, 0.2, 0]} scale={1.3} />
    <ScreenText hovered={hovered} frame="Object_218" panel="Object_219" y={1.6} position={[0.27,0,-2.61]} rotation={[0, 0, 0]} scale={1.25} />
    <ScreenText hovered={hovered} invert frame="Object_212" panel="Object_219" y={3} position={[2.27,0,-2.61]} rotation={[0, -0.2, 0]} scale={1.35} />
    <ScreenText hovered={hovered} frame="Object_218" panel="Object_219" y={1.3} position={[4.37,0,-2]} rotation={[0, -0.4, 0]} scale={1.4} />
    <ScreenText hovered={hovered} invert frame="Object_212" panel="Object_219" y={2} position={[6.17,0,-1]} rotation={[0, -0.6, 0]} scale={1.3} />
  {/* Second row of the monitors */}
    <ScreenText hovered={hovered} frame="Object_218" panel="Object_219" y={2.6} position={[-5.55,1.5,-1]} rotation={[0, 0.55, 0]} scale={1.2} />
    <ScreenText hovered={hovered} invert frame="Object_212" panel="Object_219" y={2.2} position={[-3.75,1.4,-1.8]} rotation={[0, 0.4, 0]} scale={1.25} />
    <ScreenText hovered={hovered} frame="Object_218" panel="Object_219" y={3} position={[-1.75,1.4,-2.35]} rotation={[0, 0.2, 0]} scale={1.25} />

    <ScreenText hovered={hovered} frame="Object_218" panel="Object_219" y={1.8} position={[2.47,1.5,-2.45]} rotation={[0, -0.2, 0]} scale={1.3} />
    <ScreenText hovered={hovered} invert frame="Object_212" panel="Object_219" y={2.2} position={[4.5,1.6,-1.85]} rotation={[0, -0.45, 0]} scale={1.28} />
    <ScreenText hovered={hovered} frame="Object_218" panel="Object_219" y={2.9} position={[6.45,1.6,-1]} rotation={[0, -0.65, 0]} scale={1.3} />
    {/* Third row of the monitors */}
    <ScreenText hovered={hovered} invert frame="Object_212" panel="Object_219" y={2} position={[-5.45,3,-0.8]} rotation={[0, 0.6, 0]} scale={1.15} />
    <ScreenText hovered={hovered} frame="Object_218" panel="Object_219" y={2.8} position={[-3.75,2.95,-1.8]} rotation={[0, 0.4, 0]} scale={1.3} />
    <ScreenText hovered={hovered} invert frame="Object_212" panel="Object_219" y={2} position={[-1.75,2.85,-2.35]} rotation={[0, 0.2, 0]} scale={1.3} />
    <ScreenText hovered={hovered} frame="Object_218" panel="Object_219" y={2} position={[0.37,3.3,-2.61]} rotation={[0, 0.05, 0]} scale={1.3} />
    <ScreenText hovered={hovered} invert frame="Object_212" panel="Object_219" y={2} position={[2.47,3.09,-2.55]} rotation={[0, -0.22, 0]} scale={1.25} />
    <ScreenText hovered={hovered} frame="Object_218" panel="Object_219" y={3} position={[4.5,3.05,-2]} rotation={[0, -0.45, 0]} scale={1.4} />
    <ScreenText hovered={hovered} invert frame="Object_212" panel="Object_219" y={1.8} position={[6.35,3.1,-0.9]} rotation={[0, -0.6, 0]} scale={1.3} />
  </group>
)
}


/* This component renders a monitor (taken out of the gltf model)
   It renders a custom scene into a texture and projects it onto monitors screen */
function Screen({ frame, panel, children, ...props }) {
  const { nodes, materials } = useGLTF('/computers_1-transformed.glb')
  return (
    <group {...props}>
      <mesh castShadow receiveShadow geometry={nodes[frame].geometry} material={materials.Texture} />
      <mesh geometry={nodes[panel].geometry}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture width={412} height={412} attach="map" anisotropy={16}>
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  )
}

/* Renders a monitor with some text */
function ScreenText({ invert, x = 0, y = 0.6, hovered, ...props }) {

  function getRandomDarkColor() {
    const r = Math.floor(Math.random() * 10); 
    const g = Math.floor(Math.random() * 10); 
    const b = Math.floor(Math.random() * 101);
    return `rgb(${r}, ${g}, ${b})`;
  }
  const color = getRandomDarkColor();

  const textRef = useRef()
  const rand = Math.random() * 100000
  useFrame((state) => (textRef.current.position.x = x + Math.sin(rand + state.clock.elapsedTime / 4) * 12))
  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 25]} />
      <color attach="background" args={[invert ?  '#96D7F7' : color ]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Text font='/Poppins-Regular.ttf' position={[x, y, 0]} ref={textRef} fontSize={2} letterSpacing={-0.1} color={!invert ? '#96D7F7' : color}>
      {hovered ? 'Home  Home  Home  Home  Home  Home  Home  Home' : 'Rijad Karabegovic   Rijad Karabegovic   Rijad Karabegovic'}
      </Text>
    </Screen>
  )
}

/* Renders a monitor with a spinning box */
function ScreenInteractive(props) {
  return (
    <Screen {...props} >
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
      <color attach="background" args={['orange']} />
      <ambientLight intensity={Math.PI / 2} />
      <pointLight decay={0} position={[10, 10, 10]} intensity={Math.PI} />
      <pointLight decay={0} position={[-10, -10, -10]} />
      <SpinningBox href={`${window.location.pathname}/home`} position={[-3.15, 0.75, 0]} scale={0.5} onHover={props.setHovered}  />
    </Screen>
  )
}