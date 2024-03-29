import Container from "react-bootstrap/Container";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";

function MainLayout() {
  const location = useLocation();
  const showHeroSection = location.pathname === "/";
  const projetSection = location.pathname === "/";
  const aboutUsSection = location.pathname === "/";
  return (
    <>
      <Header />
      {showHeroSection && <HeroSection />}
      {aboutUsSection && <AboutUsSection />}
      {projetSection && <ProjectSection />}
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
