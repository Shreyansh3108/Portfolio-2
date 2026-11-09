"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { useStore } from "@/store/useStore";

function AnimatedModels() {
  const groupRef = useRef<THREE.Group>(null);
  const activeIndex = useStore((state) => state.activeProjectIndex);

  useFrame(() => {
    if (!groupRef.current) return;
    
    // Absolute positions: 3.5 (Right) and -3.5 (Left)
    const targetX = activeIndex === -1 
      ? 3.5 
      : (activeIndex % 2 === 0 ? 3.5 : -3.5);
    
    // Using simple lerp instead of damp to guarantee movement
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x, 
      targetX, 
      0.05
    );
  });

  return (
    <group ref={groupRef}>
      {/* High-Glow Cyan Orb */}
      <Float speed={3} rotationIntensity={2} floatIntensity={3} position={[-0.5, 1.2, 1]}>
        <Sphere args={[0.5, 64, 64]}>
          <MeshDistortMaterial 
            color="#00D2FF" 
            attach="material" 
            distort={0.4} 
            speed={2} 
            roughness={0.2}
            emissive="#0099FF" // This guarantees the bright glow without external lighting
            emissiveIntensity={0.6}
          />
        </Sphere>
      </Float>

      {/* Wireframe Sphere */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[0, -0.5, 0]}>
        <mesh>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshBasicMaterial color="#64748b" wireframe={true} transparent={true} opacity={0.4} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <Suspense fallback={null}>
          <AnimatedModels />
        </Suspense>
      </Canvas>
    </div>
  );
}