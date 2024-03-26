import Container from "react-bootstrap/Container";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";

function MainLayout() {
  const location = useLocation();
  const showHeroSection = location.pathname === "/";
  return (
    <>
      <Header />
      {showHeroSection && <HeroSection />}
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
