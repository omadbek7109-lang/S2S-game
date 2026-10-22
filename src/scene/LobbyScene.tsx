import { Canvas } from '@react-three/fiber';

export default function LobbyScene() {
  return (
    <Canvas
      className="scene-canvas"
      dpr={[1, 1.75]}
      shadows
      camera={{ position: [0, 6, 14], fov: 50 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <color attach="background" args={['#050002']} />
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 10, 5]} intensity={0.4} />
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#7a0a0a" />
      </mesh>
    </Canvas>
  );
}
