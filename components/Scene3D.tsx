import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * A single premium surface that gently floats and responds to pointer movement.
 * - One mesh only (plane) for performance and clarity.
 * - Subtle, weighted motion for an \"expensive\" feel.
 */
function FloatingSurface() {
  const meshRef = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);
  const targetScrollRef = useRef(0);
  const { viewport, mouse } = useThree();

  // Base transform values to interpolate toward
  const basePosition = new THREE.Vector3(0, 0, 0);
  const baseRotation = new THREE.Euler(-0.15, 0.3, 0);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const mesh = meshRef.current;
    if (!mesh) return;

    // Read scroll position and convert to a smooth 0–1 range
    if (typeof window !== "undefined") {
      const maxScroll = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1
      );
      targetScrollRef.current = window.scrollY / maxScroll;
    }

    // Smoothly interpolate scroll factor for weighted, delayed motion
    scrollRef.current = THREE.MathUtils.lerp(
      scrollRef.current,
      targetScrollRef.current,
      0.06
    );

    const s = scrollRef.current; // 0 = top (desktop-ish), 1 = bottom (mobile-ish)

    // Gentle breathing in Y, slightly modulated by scroll
    const baseBreathAmp = 0.18;
    const targetY =
      basePosition.y + Math.sin(t * 0.25) * (baseBreathAmp + s * 0.05);

    // Aspect morphing between desktop (wider) and mobile (taller) via scroll
    const desktopScale = { x: 1.25, y: 0.9 };
    const mobileScale = { x: 0.75, y: 1.3 };
    const targetScaleX = THREE.MathUtils.lerp(desktopScale.x, mobileScale.x, s);
    const targetScaleY = THREE.MathUtils.lerp(desktopScale.y, mobileScale.y, s);

    // Subtle rotation shift as layout \"tilts\" between modes (scroll-driven)
    let targetRotX = baseRotation.x + THREE.MathUtils.lerp(0, 0.12, s);
    let targetRotY = baseRotation.y + THREE.MathUtils.lerp(0.08, -0.08, s);

    // Add gentle mouse interaction on top of scroll-driven orientation
    // - Small influence, heavily damped, for a premium feel
    const mouseRotX = mouse.y * 0.1; // invert Y for natural feel if needed
    const mouseRotY = mouse.x * 0.16;
    targetRotX += mouseRotX;
    targetRotY += mouseRotY;

    // Slight additional bend from mouse to feel more tactile
    const pointerScaleX = 1 + mouse.x * 0.04;
    const pointerScaleY = 1 + mouse.y * 0.04;

    // Smooth interpolation (no abrupt changes, no hard looping)
    mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, targetY, 0.045);
    mesh.rotation.x = THREE.MathUtils.lerp(mesh.rotation.x, targetRotX, 0.055);
    mesh.rotation.y = THREE.MathUtils.lerp(mesh.rotation.y, targetRotY, 0.055);

    mesh.scale.x = THREE.MathUtils.lerp(
      mesh.scale.x || 1,
      targetScaleX * pointerScaleX,
      0.08
    );
    mesh.scale.y = THREE.MathUtils.lerp(
      mesh.scale.y || 1,
      targetScaleY * pointerScaleY,
      0.08
    );
  });

  return (
    <group ref={meshRef} position={basePosition} rotation={baseRotation}>
      {/* Primary surface */}
      <mesh>
        {/* Thin rectangular slab with enough subdivisions for smooth shading */}
        <planeGeometry args={[5.5, 3.2, 64, 32]} />
        <meshStandardMaterial
          color="#9ca3af" // neutral, desaturated base
          metalness={0.85}
          roughness={0.18}
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Faint layout guides, engraved into the surface */}
      <mesh position={[0, 0, -0.001]}>
        {/* Central column split + header band */}
        <planeGeometry args={[5.4, 3.1]} />
        <meshBasicMaterial
          color="#020617"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* A couple of stronger keylines for hierarchy */}
      <mesh position={[-0.9, 0.4, -0.0005]}>
        <planeGeometry args={[0.02, 2.0]} />
        <meshBasicMaterial color="#020617" transparent opacity={0.18} />
      </mesh>
      <mesh position={[0.9, 0.4, -0.0005]}>
        <planeGeometry args={[0.02, 2.0]} />
        <meshBasicMaterial color="#020617" transparent opacity={0.18} />
      </mesh>
      <mesh position={[0, -0.8, -0.0005]}>
        <planeGeometry args={[4.6, 0.02]} />
        <meshBasicMaterial color="#020617" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 40 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Subtle dark backdrop */}
      <color attach="background" args={["#020617"]} />

      {/* Key light: soft, slightly cool, from above/right */}
      <directionalLight
        intensity={1.1}
        position={[4, 5, 6]}
        color={new THREE.Color("#e5e7eb")}
      />

      {/* Rim light: very soft, from behind/left to reveal edges */}
      <directionalLight
        intensity={0.4}
        position={[-5, -3, -4]}
        color={new THREE.Color("#60a5fa")}
      />

      {/* Single hero surface */}
      <FloatingSurface />
    </Canvas>
  );
}
