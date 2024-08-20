import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaLocationDot,
  FaPhoneFlip,
  FaRegUser,
  FaSquareInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { LuMail } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { HiEye } from "react-icons/hi";
import { Element as ScrollElement } from "react-scroll";


const ContactSection = (): JSX.Element => {
  return (
    <>
      <ScrollElement name="contact">
        <section id="contact" className="generic dark-bg">
          <Container>
            <h2 className="display-5 text-danger mb-5">GET IN TOUCH</h2>
            <Row>
              <Col md="12" lg="6">
                <Form className="row">
                  <Col md={6}>
                    <InputGroup>
                      <InputGroup.Text className="rounded-0 bg-danger border-danger text-white">
                        <FaRegUser />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        title="Please enter your name"
                        className="form-control rounded-0 border-danger text-white bg-transparent"
                        placeholder="NAME *"
                        required
                      ></Form.Control>
                    </InputGroup>
                  </Col>
                  <Col md={6}>
                    <InputGroup>
                      <InputGroup.Text className="rounded-0 bg-danger border-danger text-white">
                        <MdAlternateEmail />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        title="Please enter your email address"
                        className="form-control rounded-0 border-danger text-white bg-transparent"
                        placeholder="EMAIL *"
                        required
                      ></Form.Control>
                    </InputGroup>
                  </Col>

                  <Col md={12} className="py-5">
                    <InputGroup>
                      <InputGroup.Text className="rounded-0 bg-danger border-danger text-white">
                        <LuMail />
                      </InputGroup.Text>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        title="Please enter your message"
                        className="form-control rounded-0 border-danger text-white bg-transparent"
                        placeholder="MESSAGE *"
                        required
                      ></Form.Control>
                    </InputGroup>
                  </Col>
                  <div className="d-grid">
                    <Button
                      type="submit"
                      variant="outline-danger"
                      className="rounded-0 text-uppercase"
                    >
                      SEND MESSAGE
                    </Button>
                  </div>
                </Form>
              </Col>
              <Col>
                <table className="table-transparent table-striped border-0 d-flex h-100 flex-column justify-content-center">
                  <tbody>
                    <tr>
                      <td colSpan={7} className="align-middle">
                        <span className="text-light">
                          C/St Diego 13, D:2-K:44 3563 Austin Secret Lane United
                          States
                        </span>
                      </td>
                      <th scope="row" className="text-danger lead text-center">
                        <FaLocationDot />
                      </th>
                    </tr>
                    <tr>
                      <td colSpan={7} className="align-middle">
                        <span className="text-light">
                          +90 555 - 444 - 333 - 222 -111
                        </span>
                      </td>
                      <th scope="row" className="text-danger lead text-center">
                        <span>
                          <FaPhoneFlip />
                        </span>
                      </th>
                    </tr>
                    <tr>
                      <td className="align-middle">
                        <span className="text-light">
                          <ImFacebook2 />
                        </span>
                      </td>
                      <td className="align-middle">
                        <span className="text-light">
                          <ImYoutube />
                        </span>
                      </td>
                      <td className="align-middle">
                        <span className="text-light">
                          <FaTwitter />
                        </span>
                      </td>
                      <td className="align-middle">
                        <span className="text-light">
                          <FaLinkedin />
                        </span>
                      </td>
                      <td className="align-middle">
                        <span className="text-light">
                          <FaGoogle />
                        </span>
                      </td>
                      <td className="align-middle">
                        <span className="text-light">
                          <FaSquareInstagram />
                        </span>
                      </td>
                      <td className="align-middle">
                        <span className="text-light">
                          <FaGithub />
                        </span>
                      </td>
                      <th scope="row" className="text-danger lead text-center">
                        <span>
                          <HiEye />
                        </span>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
          </Container>
        </section>
      </ScrollElement>
    </>
  );
};

export default ContactSection;
