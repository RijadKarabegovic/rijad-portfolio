
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, ToneMapping } from '@react-three/postprocessing'
import { easing } from 'maath'
import { Instances, Computers } from '../components/realism-effects/Computers'
import { Vector3 } from 'three';

export default function LandingPage() {

return (
  <div  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>

  </div>
)


}

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
