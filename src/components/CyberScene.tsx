import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function MatrixParticles() {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.01;
      ref.current.rotation.y += delta * 0.015;
      // Subtle pulse
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff88"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function DataStream({ position, speed }: { position: [number, number, number]; speed: number }) {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.3;
      positions[i * 3 + 1] = (i / count) * 8 - 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = ((state.clock.elapsedTime * speed) % 8) - 4;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false} position={position}>
      <PointMaterial
        transparent
        color="#00ffcc"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function HexGrid() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -5]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[3, 0.01, 6, 6]} />
      <meshBasicMaterial color="#00ff88" transparent opacity={0.15} wireframe />
    </mesh>
  );
}

const CyberScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.05} />
        <MatrixParticles />
        <DataStream position={[-3, 0, -2]} speed={0.8} />
        <DataStream position={[4, 0, -3]} speed={1.2} />
        <DataStream position={[0, 0, -1]} speed={0.6} />
        <HexGrid />
      </Canvas>
    </div>
  );
};

export default CyberScene;
