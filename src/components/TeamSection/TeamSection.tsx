import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";

function TeamSection() {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);
  return (
    <div>
      <section id="team-generic">
        <Container>
          <h2 className="display-5 text-danger mb-5">THE TEAM</h2>
        </Container>
        <Container fluid>
          <Row>
            <Col className="p-0">
              <div className="d-grid bg-danger py-5">
                <Button
                  className="rounded-0"
                  variant="danger"
                  onClick={() => setModalShow1(true)}
                >
                  <span className="lead"> DESIGNER</span>
                </Button>
                <TeamMemberModal1
                  show={modalShow1}
                  onHide={() => setModalShow1(false)}
                />
              </div>
            </Col>
            <Col className="p-0">
              <div className="d-grid bg-warning py-5">
                <Button
                  className="rounded-0"
                  variant="warning"
                  onClick={() => setModalShow2(true)}
                >
                  <span className="lead">DEVELOPER</span>
                </Button>
                <TeamMemberModal2
                  show={modalShow2}
                  onHide={() => setModalShow2(false)}
                />
              </div>
            </Col>
            <Col className="p-0">
              <div className="d-grid bg-success py-5">
                <Button
                  className="rounded-0"
                  variant="success"
                  onClick={() => setModalShow3(true)}
                >
                  <span className="lead">ENGINEER</span>
                </Button>
                <TeamMemberModal3
                  show={modalShow3}
                  onHide={() => setModalShow3(false)}
                />
              </div>
            </Col>
            <Col className="p-0">
              <div className="d-grid bg-primary py-5">
                <Button
                  className="rounded-0"
                  variant="primary"
                  onClick={() => setModalShow4(true)}
                >
                  <span className="lead">ARTIST</span>
                </Button>
                <TeamMemberModal4
                  show={modalShow4}
                  onHide={() => setModalShow4(false)}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default TeamSection;

function TeamMemberModal1(props: any) {
  console.log(props, "props");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          className="img-fluid"
          src="https://images.unsplash.com/photo-1524749292158-7540c2494485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRlc2lnbmVyfGVufDB8fDB8fHww"
        />
        <h4 className="text-danger lead mt-2">Jon Doe</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <ul className="list-unstyled">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <ButtonGroup className="mb-2 btn-group w-100">
          <Button variant="danger">LINKEDIN</Button>
          <Button variant="warning">FACEBOOK</Button>
          <Button variant="success">TWITTER</Button>
        </ButtonGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function TeamMemberModal2(props: any) {
  console.log(props, "props");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function TeamMemberModal3(props: any) {
  console.log(props, "props");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function TeamMemberModal4(props: any) {
  console.log(props, "props");

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
