import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import bseLogo from "@/assets/bse-logo.png";

const RADIUS = 1;
const THICKNESS = 0.16;

const Coin = () => {
  const group = useRef<THREE.Group>(null);
  const logo = useLoader(TextureLoader, bseLogo);

  useMemo(() => {
    logo.colorSpace = THREE.SRGBColorSpace;
    logo.anisotropy = 8;
  }, [logo]);

  // slow, calm rotation: one full turn every ~22 seconds
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * ((Math.PI * 2) / 22);
  });

  return (
    <group ref={group} rotation={[0.12, 0, 0]}>
      {/* coin body / milled rim */}
      <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[RADIUS, RADIUS, THICKNESS, 128]} />
        <meshStandardMaterial color="#d8dee8" metalness={0.95} roughness={0.28} />
      </mesh>

      {/* raised rim rings */}
      {[1, -1].map((s) => (
        <mesh key={s} position={[0, 0, s * (THICKNESS / 2 + 0.001)]} rotation={[0, 0, 0]}>
          <ringGeometry args={[RADIUS * 0.9, RADIUS, 128]} />
          <meshStandardMaterial color="#eef2f8" metalness={0.9} roughness={0.2} side={THREE.DoubleSide} />
        </mesh>
      ))}

      {/* both faces with the society emblem */}
      {[1, -1].map((s) => (
        <mesh key={`f${s}`} position={[0, 0, s * (THICKNESS / 2 + 0.002)]} rotation={[0, s === 1 ? 0 : Math.PI, 0]}>
          <circleGeometry args={[RADIUS * 0.9, 128]} />
          <meshStandardMaterial map={logo} metalness={0.45} roughness={0.35} />
        </mesh>
      ))}
    </group>
  );
};

/** Real-time 3D coin minted from the society emblem (three.js / react-three-fiber) */
const CoinLogo3D = ({ size = 320 }: { size?: number }) => (
  <div style={{ width: size, height: size }} className="select-none" aria-hidden="true">
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ position: [0, 0.25, 4.1], fov: 34 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={2.4} castShadow />
      <directionalLight position={[-4, -1, 2]} intensity={1.1} color="#9ec5ff" />
      <spotLight position={[0, 5, 2]} angle={0.5} intensity={2} penumbra={1} />
      <Suspense fallback={null}>
        <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.5}>
          <Coin />
        </Float>
        <ContactShadows position={[0, -1.5, 0]} opacity={0.35} scale={6} blur={2.6} far={3} />
      </Suspense>
    </Canvas>
  </div>
);

export default CoinLogo3D;
