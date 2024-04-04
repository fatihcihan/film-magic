import { Card, Col, Container, Row } from "react-bootstrap";
import { LuClock } from "react-icons/lu";
import { MdOutlineInsertComment } from "react-icons/md";

const BlogSection = () => {
  return (
    <section id="blog" className="generic">
      <Container>
        <h2 className="display-5 text-danger mb-5">WHAT WE SAY?</h2>
        <Row>
          <Col md="6" lg="4">
            <Card className="bg-light border-0">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
              ></Card.Img>
              <Card.Body>
                <h5 className="lead text-uppercase text-danger mb-4">
                  5 OUTRAGEOUS IDEAS FOR YOUR TECHNOLOGCY
                </h5>
                <h6 className="card-title text-danger text-uppercase">
                  ARMANDA DIEGO
                </h6>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  accusamus ipsa fugiat eius provident ducimus consectetur
                  adipisci et doloribus. Maiores?
                </Card.Text>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <LuClock /> 2 Days Ago |
                    </small>
                  </li>
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <MdOutlineInsertComment /> 10
                    </small>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4">
            <Card className="bg-light border-0">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1585951237313-1979e4df7385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vdmllfGVufDB8fDB8fHww"
              ></Card.Img>
              <Card.Body>
                <h5 className="lead text-uppercase text-danger mb-4">
                  5 OUTRAGEOUS IDEAS FOR YOUR TECHNOLOGCY
                </h5>
                <h6 className="card-title text-danger text-uppercase">
                  ARMANDA DIEGO
                </h6>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  accusamus ipsa fugiat eius provident ducimus consectetur
                  adipisci et doloribus. Maiores?
                </Card.Text>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <LuClock /> 2 Days Ago |
                    </small>
                  </li>
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <MdOutlineInsertComment /> 10
                    </small>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4">
            <Card className="bg-light border-0">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
              ></Card.Img>
              <Card.Body>
                <h5 className="lead text-uppercase text-danger mb-4">
                  5 OUTRAGEOUS IDEAS FOR YOUR TECHNOLOGCY
                </h5>
                <h6 className="card-title text-danger text-uppercase">
                  ARMANDA DIEGO
                </h6>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  accusamus ipsa fugiat eius provident ducimus consectetur
                  adipisci et doloribus. Maiores?
                </Card.Text>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <LuClock /> 2 Days Ago |
                    </small>
                  </li>
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <MdOutlineInsertComment /> 10
                    </small>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" lg="4" className="d-none d-md-block d-lg-none">
            <Card className="bg-light border-0">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
              ></Card.Img>
              <Card.Body>
                <h5 className="lead text-uppercase text-danger mb-4">
                  5 OUTRAGEOUS IDEAS FOR YOUR TECHNOLOGCY
                </h5>
                <h6 className="card-title text-danger text-uppercase">
                  ARMANDA DIEGO
                </h6>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  accusamus ipsa fugiat eius provident ducimus consectetur
                  adipisci et doloribus. Maiores?
                </Card.Text>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <LuClock /> 2 Days Ago |
                    </small>
                  </li>
                  <li className="list-inline-item">
                    <small className="text-muted">
                      <MdOutlineInsertComment /> 10
                    </small>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
