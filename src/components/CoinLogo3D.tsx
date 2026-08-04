import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import bseLogo from "@/assets/bse-logo.png";

const RADIUS = 1;
const THICKNESS = 0.16;

const Coin = ({ autoRotate = true }: { autoRotate?: boolean }) => {
  const group = useRef<THREE.Group>(null);
  const logo = useLoader(TextureLoader, bseLogo);

  useMemo(() => {
    logo.colorSpace = THREE.SRGBColorSpace;
    logo.anisotropy = 8;
  }, [logo]);

  // slow, calm rotation: one full turn every ~26 seconds (only if autoRotate is true)
  useFrame((_, delta) => {
    if (autoRotate && group.current) group.current.rotation.y += delta * ((Math.PI * 2) / 26);
  });

  return (
    <group ref={group} rotation={[0.14, 0, 0]}>
      {/* coin body / milled rim */}
      <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[RADIUS, RADIUS, THICKNESS, 160]} />
        <meshStandardMaterial color="#e8edf5" metalness={0.85} roughness={0.22} />
      </mesh>

      {/* bright field + raised rim on both sides */}
      {[1, -1].map((s) => (
        <group key={s} position={[0, 0, s * (THICKNESS / 2 + 0.001)]} rotation={[0, s === 1 ? 0 : Math.PI, 0]}>
          <mesh>
            <circleGeometry args={[RADIUS * 0.995, 160]} />
            <meshStandardMaterial color="#f6f8fc" metalness={0.55} roughness={0.3} side={THREE.DoubleSide} />
          </mesh>
          <mesh position={[0, 0, 0.004]}>
            <ringGeometry args={[RADIUS * 0.88, RADIUS * 0.96, 160]} />
            <meshStandardMaterial color="#c9d4e4" metalness={0.95} roughness={0.15} side={THREE.DoubleSide} />
          </mesh>
          {/* emblem, kept flat and legible over the metal field */}
          <mesh position={[0, 0, 0.006]}>
            <circleGeometry args={[RADIUS * 0.78, 160]} />
            <meshBasicMaterial map={logo} transparent toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

/** Real-time 3D coin minted from the society emblem (three.js / react-three-fiber) */
const CoinLogo3D = ({ size = 320, autoRotate = true }: { size?: number; autoRotate?: boolean }) => (
  <div style={{ width: size, height: size }} className="select-none" aria-hidden="true">
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ position: [0, 0.2, 3.9], fov: 34 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} castShadow />
      <directionalLight position={[-4, -1, 3]} intensity={1.2} color="#bcd8ff" />
      <spotLight position={[0, 4, 3]} angle={0.6} intensity={1.6} penumbra={1} />
      <Suspense fallback={null}>
        <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.35}>
          <Coin autoRotate={autoRotate} />
        </Float>
        <ContactShadows position={[0, -1.5, 0]} opacity={0.3} scale={6} blur={2.8} far={3} />
      </Suspense>
    </Canvas>
  </div>
);


export default CoinLogo3D;
