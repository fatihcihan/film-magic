import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const DividerSection: React.FC = (): JSX.Element => {
  return (
    <div>
      <section id="divider" className="generic dark-bg">
        <Container>
          <Row>
            <Col lg={8}>
              <Form>
                <InputGroup className="mb-3">
                  <Form.Control
                    className="form-control rounded-0 border-danger text-white bg-transparent"
                    size="lg"
                    type="email"
                    placeholder="@JOIN NEWSLETTER"
                  />
                  <Button
                    className="btn btn-danger rounded-0 text-white border-danger"
                    size="lg"
                    type="submit"
                  >
                    SUBSCRIBE
                  </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default DividerSection;
