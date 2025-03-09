// 'use client'

// import { Canvas, useFrame } from '@react-three/fiber'
// import { useGLTF, MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
// import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing'
// import { easing } from 'maath'
// import { Instances, Computers } from '../components/realism-effects/Computers'
// import { Vector3 } from 'three';

// export default function LandingPage() {

// return (
//   <div  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
//   <Canvas shadows dpr={[1, 1.5]} camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }} eventPrefix="client">
//     {/* Lights */}
//     <color attach="background" args={['#020C1D']} />
//     <hemisphereLight intensity={0.15} groundColor="black" />
//     <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
//     {/* Main scene */}
//     <group position={[-0, -1, 0]}>
//       {/* Auto-instanced sketchfab model */}
//       <Instances>
//         <Computers scale={0.45} />
//       </Instances>
//       {/* Plane reflections + distance blur */}
//       <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
//         <planeGeometry args={[50, 50]} />
//         <MeshReflectorMaterial
//           mirror={0}
//           blur={[300, 30]}
//           resolution={2048}
//           mixBlur={1}
//           mixStrength={180}
//           roughness={1}
//           depthScale={1.2}
//           minDepthThreshold={0.4}
//           maxDepthThreshold={1.4}
//           color="#202020"
//           metalness={0.8}
//         />
//       </mesh>
//       <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="orange" />
//     </group>
//     {/* Postprocessing */}
//     <EffectComposer enableNormalPass>
//     <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={3} />
//       <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={800} />
//     </EffectComposer>
//     {/* Camera movements */}
//     <CameraRig />
//     {/* Small helper that freezes the shadows for better performance */}
//     <BakeShadows />
//   </Canvas>

//   </div>
// )


// }

// const CameraRig: React.FC = () => {
//   useFrame((state, delta) => {
//     // Smoothly update the camera position based on pointer movements
//     const targetPosition = new Vector3(
//       -1 + (state.pointer.x * state.viewport.width) / 3,
//       (1 + state.pointer.y) / 2,
//       5.5
//     );
//     easing.damp3(state.camera.position, targetPosition, 0.5, delta);

//     // Ensure the camera always looks at the origin
//     state.camera.lookAt(0, 0, 0);
//   });

//   return null; // This component doesn't render anything itself
// };
