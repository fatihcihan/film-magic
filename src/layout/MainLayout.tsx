import Container from "react-bootstrap/Container";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import BlogSection from "../components/BlogSection/BlogSection";
import DividerSection from "../components/DividerSection/DividerSection";
import ApproachSection from "../components/ApproachSection/ApproachSection";

function MainLayout() {
  const location = useLocation();
  const showHeroSection = location.pathname === "/";
  const projetSection = location.pathname === "/";
  const aboutUsSection = location.pathname === "/";
  const blogSection = location.pathname === "/";
  const dividerSection = location.pathname === "/";
  const approachSection = location.pathname === "/";

  return (
    <>
      <Header />
      {showHeroSection && <HeroSection />}
      {aboutUsSection && <AboutUsSection />}
      {projetSection && <ProjectSection />}
      {blogSection && <BlogSection />}
      {dividerSection && <DividerSection />}
      {approachSection && <ApproachSection />}
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
