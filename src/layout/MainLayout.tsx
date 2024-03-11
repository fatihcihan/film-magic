import CustomNavbar from "../components/CustomNavbar";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default MainLayout;
