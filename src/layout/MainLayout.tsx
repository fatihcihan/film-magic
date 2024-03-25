import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";

function MainLayout() {
  return (
    <>
      <Header />
      <HeroSection />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
