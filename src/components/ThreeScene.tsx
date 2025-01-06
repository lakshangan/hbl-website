import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

export const ThreeScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial
            color="#9333ea"
            wireframe
            transparent
            opacity={0.3}
          />
        </Sphere>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};