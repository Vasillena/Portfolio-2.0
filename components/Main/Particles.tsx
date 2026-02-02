"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { useBreakpoints } from "@/utils/useBreakpoints";
import { useTheme } from "next-themes";

export default function Particles() {
  const { theme = "light" } = useTheme();
  const { up } = useBreakpoints();

  const enabled = theme === "dark" && up("xl");

  if (!enabled) return null;

  return (
    <>
      <Canvas
        style={{ position: "fixed", height: "100vh" }}
        className="hidden xl:block"
        frameloop="always"
        gl={{ powerPreference: "low-power", alpha: true }}
      >
        {enabled && (
          <>
            {/* БЛИЗО */}
            <Sparkles
              count={4}
              size={20}
              scale={[10, 8, 10]}
              position={[0, 0, 2]}
              speed={0.6}
              noise={[6, 6, 8]}
              color="#8781C3"
              opacity={0.6}
            />
            {/* СРЕДНО */}
            <Sparkles
              count={40}
              size={10}
              scale={[20, 8, 10]}
              position={[0, 0, 0]}
              speed={0.4}
              noise={[5, 5, 6]}
              color="#94AAFF"
              opacity={0.45}
            />
            {/* ДАЛЕЧ */}
            <Sparkles
              count={20}
              size={2}
              scale={[16, 8, 10]}
              position={[0, 0, -3]}
              speed={0.15}
              noise={[3, 3, 4]}
              color="#8781C3"
            />
          </>
        )}
      </Canvas>
    </>
  );
}
