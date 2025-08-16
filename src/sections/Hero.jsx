import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      {/* Replace 3D astronaut with a simple animated element */}
      <div className="absolute inset-0 flex items-center justify-end pr-20">
        <div className="animate-bounce text-6xl">
          🚀
        </div>
      </div>
    </section>
  );
};

export default Hero;
