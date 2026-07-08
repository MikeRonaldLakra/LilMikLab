"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function useSwarmGeometry(count: number, radius: number, linkDistance: number) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let x = 0,
        y = 0,
        z = 0,
        d = 0;
      do {
        x = (Math.random() * 2 - 1) * radius;
        y = (Math.random() * 2 - 1) * radius;
        z = (Math.random() * 2 - 1) * radius;
        d = x * x + y * y + z * z;
      } while (d > radius * radius);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    const linePositions: number[] = [];
    const maxDistSq = linkDistance * linkDistance;

    for (let i = 0; i < count; i++) {
      const ax = positions[i * 3];
      const ay = positions[i * 3 + 1];
      const az = positions[i * 3 + 2];
      let links = 0;

      for (let j = i + 1; j < count && links < 3; j++) {
        const bx = positions[j * 3];
        const by = positions[j * 3 + 1];
        const bz = positions[j * 3 + 2];
        const dx = ax - bx;
        const dy = ay - by;
        const dz = az - bz;
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistSq) {
          linePositions.push(ax, ay, az, bx, by, bz);
          links++;
        }
      }
    }

    return {
      pointPositions: positions,
      linePositions: new Float32Array(linePositions),
    };
  }, [count, radius, linkDistance]);
}

function SwarmField({ scrollIntensity }: { scrollIntensity: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const { pointPositions, linePositions } = useSwarmGeometry(240, 5.4, 1.15);
  const pointer = useRef({ x: 0, y: 0 });
  const { size, gl } = useThree();

  useEffect(() => {
    const dom = gl.domElement;
    const handleMove = (e: PointerEvent) => {
      const rect = dom.getBoundingClientRect();
      pointer.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };
    dom.addEventListener("pointermove", handleMove);
    return () => dom.removeEventListener("pointermove", handleMove);
  }, [gl]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const speed = 0.045 + scrollIntensity.current * 0.25;
    groupRef.current.rotation.y += delta * speed;
    const targetX = pointer.current.y * 0.15;
    groupRef.current.rotation.x +=
      (targetX - groupRef.current.rotation.x) * 0.02;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={pointPositions.length / 3}
            array={pointPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={size.width < 640 ? 0.055 : 0.045}
          color="#b794ff"
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.14}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

/**
 * Fixed full-viewport swarm background. `scrollIntensity` (0–1) can be fed
 * from a parent to make the swarm spin up during specific scroll passages —
 * used behind the Hero and pulsed slightly during the Pipeline section.
 */
export default function SwarmCanvas({
  scrollIntensity,
  fixed = false,
}: {
  scrollIntensity?: React.MutableRefObject<number>;
  fixed?: boolean;
}) {
  const localIntensity = useRef(0);
  const intensityRef = scrollIntensity ?? localIntensity;

  return (
    <div
      className={`${fixed ? "fixed" : "absolute"} inset-0 z-0`}
      aria-hidden="true"
      style={{
        maskImage:
          "radial-gradient(ellipse 70% 70% at 50% 40%, black 40%, transparent 90%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 70% at 50% 40%, black 40%, transparent 90%)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <SwarmField scrollIntensity={intensityRef} />
      </Canvas>
    </div>
  );
}
