// @ts-nocheck

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor } from '@react-three/drei'

export function SpinningBox({ scale,href,onHover,...props }) {
    const handleClick = () => {
      document.body.classList.add('zoom-effect');
        if (href) {
            window.location.href = href;
        }
      };
      
    const ref = useRef()
  // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useCursor(hovered)
  // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta))
    return (
    <mesh
        {...props}
        ref={ref}
        scale={clicked ? scale * 1.4 : scale * 1.2}
        onClick={handleClick}
        onPointerOver={(event) => {hover(true); onHover?.(true);}}
        onPointerOut={(event) => {hover(false); onHover?.(false);}}>
        <boxGeometry />
        <meshStandardMaterial color={hovered ? 'lightblue' : 'indianred'} />
    </mesh>
    )
}
