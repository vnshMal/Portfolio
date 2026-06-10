import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial } from '@react-three/drei';

const AnimatedShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[3, 0, -5]} scale={1.8}>
        <torusKnotGeometry args={[1.2, 0.3, 128, 32]} />
        <MeshDistortMaterial 
          color="#7b2cbf" 
          emissive="#ff007f" 
          emissiveIntensity={0.4} 
          wireframe={true}
          distort={0.5} 
          speed={2.5} 
        />
      </mesh>
    </Float>
  );
};

const ThreeBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -2, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#7b2cbf" />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={4000} 
          factor={4} 
          saturation={1} 
          fade 
          speed={1.2} 
        />
        
        <AnimatedShape />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
