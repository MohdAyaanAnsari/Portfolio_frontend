import HeroSection from "./HeroSection";
import ServicesSection from "./ServiceSection";
import ProjectsSection from "./ProjectsSection";
import FaqSection from "./FaqSection";
import { useLayoutEffect } from "react";

function HomePage() {
  useLayoutEffect(() => {
    document.title = "Home | Ayaan | Portfolio";
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <FaqSection />
    </>
  );
}

export default HomePage;