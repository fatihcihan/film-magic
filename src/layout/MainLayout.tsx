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
import TeamSection from "../components/TeamSection/TeamSection";
import ContactSection from "../components/ContactSection/ContactSection";

function MainLayout() {
  const location = useLocation();
  const showHeroSection = location.pathname === "/";
  const projetSection = location.pathname === "/";
  const aboutUsSection = location.pathname === "/";
  const blogSection = location.pathname === "/";
  const dividerSection = location.pathname === "/";
  const approachSection = location.pathname === "/";
  const teamSection = location.pathname === "/";
  const contactSection = location.pathname === "/";

  return (
    <>
      <Header />
      {showHeroSection && <HeroSection />}
      {aboutUsSection && <AboutUsSection />}
      {projetSection && <ProjectSection />}
      {blogSection && <BlogSection />}
      {dividerSection && <DividerSection />}
      {approachSection && <ApproachSection />}
      {teamSection && <TeamSection />}
      {contactSection && <ContactSection />}
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
