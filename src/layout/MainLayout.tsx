import CustomNavbar from "../components/CustomNavbar/CustomNavbar";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <Outlet />
      </Container>
      <Footer/>
    </>
  );
}

export default MainLayout;
