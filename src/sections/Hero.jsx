import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  
  // Error boundary for 3D content
  const SafeCanvas = () => {
    try {
      return (
        <Canvas camera={{ position: [0, 1, 3] }} gl={{ alpha: true, antialias: true }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.15 : 0.3}
                position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      );
    } catch (error) {
      console.warn("3D Canvas failed to load:", error);
      return (
        <div className="flex items-center justify-center h-full text-white text-center">
          <p>3D content not available</p>
        </div>
      );
    }
  };

  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <SafeCanvas />
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
