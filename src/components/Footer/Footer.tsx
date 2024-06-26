import { Container } from "react-bootstrap";

const Footer: React.FC = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container fluid className="bg-danger text-center py-4 lead text-light">
        NO &copy; {currentYear} FILM-MAGIC INC
      </Container>
    </footer>
  );
};

export default Footer;
