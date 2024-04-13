import React, { useState } from "react";
import { Button, Col, Container, Row, Image, Collapse } from "react-bootstrap";
import { HiChevronDoubleDown } from "react-icons/hi";
import CloseButton from "react-bootstrap/CloseButton";
import "./ProjectSection.css";

const ProjectSection = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  return (
    <section id="latest" className="generic">
      <Container>
        <h2 className="display-5 text-danger mb-4">WHAT WE DO?</h2>
      </Container>
      <Container fluid>
        <Row>
          <Col xl="3" sm="6" className="p-0">
            <div className="latest-item">
              <Button
                onClick={() => setOpen1(!open1)}
                aria-controls="example-collapse-text"
                aria-expanded={open1}
                className="p-0 rounded-0 border-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  fluid
                />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <HiChevronDoubleDown className="chevron-icon" />
                </div>
              </Button>
            </div>
          </Col>

          <Col xl="3" sm="6" className="p-0">
            <div className="latest-item">
              <Button
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text"
                aria-expanded={open2}
                className="p-0 rounded-0 border-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1537884944318-390069bb8665?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGV8ZW58MHx8MHx8fDA%3D"
                  fluid
                />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <HiChevronDoubleDown className="chevron-icon" />
                </div>
              </Button>
            </div>
          </Col>

          <Col xl="3" sm="6" className="p-0">
            <div className="latest-item">
              <Button
                onClick={() => setOpen3(!open3)}
                aria-controls="example-collapse-text"
                aria-expanded={open3}
                className="p-0 rounded-0 border-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1594377157609-5c996118ac7f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  fluid
                />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <HiChevronDoubleDown className="chevron-icon" />
                </div>
              </Button>
            </div>
          </Col>

          <Col xl="3" sm="6" className="p-0">
            <div className="latest-item">
              <Button
                onClick={() => setOpen4(!open4)}
                aria-controls="example-collapse-text"
                aria-expanded={open4}
                className="p-0 rounded-0 border-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  fluid
                />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <HiChevronDoubleDown className="chevron-icon" />
                </div>
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Collapse in={open1}>
            <Container fluid className="p-0 mt-5">
              <Row className="p-0" shadow="true">
                <Col sm="6" xl="3">
                  <CloseButton onClick={() => setOpen1(!open1)} />
                  <dl className="row ps-5">
                    <dt className="col-12">
                      <span className="text-danger lead">Porject Name 1</span>
                    </dt>
                    <dt className="col-4">CLIENT</dt>
                    <dd className="col-8">Abc Company</dd>
                    <dt className="col-4">CATEGORY</dt>
                    <dd className="col-8">Branding</dd>
                    <dt className="col-4">DURATION</dt>
                    <dd className="col-8">2 weeks</dd>
                  </dl>
                </Col>
                <Col sm="6" xl="3" className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                  />
                </Col>
                <Col sm="6" xl="3" className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                  />
                </Col>
                <Col sm="6" xl="3" className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                  />
                </Col>
              </Row>
            </Container>
          </Collapse>

          <Collapse in={open2}>
            <Container fluid className="p-0">
              <Row className="p-0" shadow="true">
                <Col sm="6" xl="3">
                  <CloseButton onClick={() => setOpen2(!open2)} />
                  <dl className="row ps-5">
                    <dt className="col-12">
                      <span className="text-danger lead">Porject Name 2</span>
                    </dt>
                    <dt className="col-4">lorem0</dt>
                    <dd className="col-8">Klm Company</dd>
                    <dt className="col-4">CATEGORY</dt>
                    <dd className="col-8">Branding</dd>
                    <dt className="col-4">DURATION</dt>
                    <dd className="col-8">2 weeks</dd>
                  </dl>
                </Col>
                <Col sm="6" xl="3" className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                  />
                </Col>
                <Col sm="6" xl="3" className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                  />
                </Col>
                <Col sm="6" xl="3" className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                  />
                </Col>
              </Row>
            </Container>
          </Collapse>

          <Collapse in={open3}>
            <Container fluid>
              <Row>
                <Col sm="6" xl="3">
                  <CloseButton onClick={() => setOpen3(!open3)} />
                  <dl className="row ps-5">
                    <dt className="col-12">
                      <span className="text-danger lead">Porject Name 3</span>
                    </dt>
                    <dt className="col-4">CLIENT</dt>
                    <dd className="col-8">XYZ Company</dd>
                    <dt className="col-4">CATEGORY</dt>
                    <dd className="col-8">Branding</dd>
                    <dt className="col-4">DURATION</dt>
                    <dd className="col-8">2 weeks</dd>
                  </dl>
                </Col>
                <Col sm="6" xl="3" className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                  />
                </Col>
                <Col sm="6" xl="3" className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                  />
                </Col>
                <Col sm="6" xl="3" className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                  />
                </Col>
              </Row>
            </Container>
          </Collapse>

          <Collapse in={open4}>
            <Container fluid>
              <Row>
                <Col>
                  <CloseButton onClick={() => setOpen4(!open4)} />
                  <dl className="row ps-5">
                    <dt className="col-12">
                      <span className="text-danger lead">Porject Name 4</span>
                    </dt>
                    <dt className="col-4">CLIENT</dt>
                    <dd className="col-8">Asd Company</dd>
                    <dt className="col-4">CATEGORY</dt>
                    <dd className="col-8">Branding</dd>
                    <dt className="col-4">DURATION</dt>
                    <dd className="col-8">2 weeks</dd>
                  </dl>
                </Col>
                <Col sm="6" xl="3" className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                  />
                </Col>
                <Col sm="6" xl="3" className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                  />
                </Col>
                <Col sm="6" xl="3" className="p-0">
                  <Image
                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fluid
                  />
                </Col>
              </Row>
            </Container>
          </Collapse>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectSection;
