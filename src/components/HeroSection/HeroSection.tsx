import React, { useState } from "react";
import { Button, Col, Collapse, Container, Image, Row } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
import "./HeroSection.css";
import { HiChevronDoubleDown } from "react-icons/hi";

const HeroSection = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className="dark-bg" id="hero">
        <Container>
          <Row className="d-flex h-100 flex-column justify-content-center text-light">
            <p className="display-2">The Magic of Cinema at Your Fingers...</p>
            <h1 className="display-3">
              Fil<span className="text-danger">`M`</span>agic
            </h1>
          </Row>
        </Container>
      </section>

      <section className="generic">
        <Container>
          <h2 className="display-5 text-danger mb-4">WHO WE ARE?</h2>
          <Row className="mb-3">
            <Col className="col-8 bg-light p-0">
              <div className="d-flex h-100 flex-column justify-content-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ratione pariatur provident quas quidem dignissimos
                  ducimus voluptate odio deserunt! Doloremque necessitatibus
                  odit saepe corporis quisquam tempore asperiores nemo hic
                  possimus dolor, culpa beatae magni animi tenetur ut excepturi
                  dicta ullam totam reiciendis quae nihil ea voluptas. Sequi
                  fuga voluptatum explicabo!
                </p>
              </div>
            </Col>
            <Col className="col-4 p-0">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdmllJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
              />
            </Col>
          </Row>

          <Row>
            <Col className="col-8 bg-light">
              <div className="d-flex h-100 flex-column justify-content-center">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ratione pariatur provident quas quidem dignissimos
                  ducimus voluptate odio deserunt! Doloremque necessitatibus
                  odit saepe corporis quisquam tempore asperiores nemo hic
                  possimus dolor, culpa beatae magni animi tenetur ut excepturi
                  dicta ullam totam reiciendis quae nihil ea voluptas. Sequi
                  fuga voluptatum explicabo!
                </p>
              </div>
            </Col>
            <Col className="col-4 order-first p-0">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBjb21wYW55fGVufDB8fDB8fHww"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="latest">
        <Container>
          <h2 className="display-5 text-danger mb-4">WHAT WE DO?</h2>
        </Container>
        <Container fluid>
          <Row>
            <Col className="p-0">
              <div className="latest-item">
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
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

            <Col className="p-0">
              <div className="latest-item">
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
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

            <Col className="p-0">
              <div className="latest-item">
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
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

            <Col className="p-0">
              <div className="latest-item">
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
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
            <Collapse in={open}>
              <Container fluid className="p-0 mt-5">
                <Row className="p-0 shadow">
                  <Col>
                    <CloseButton onClick={() => setOpen(!open)} />
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
                  <Col className="p-0">
                    <Image
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fluid
                    />
                  </Col>
                  <Col className="p-0">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fluid
                    />
                  </Col>
                  <Col className="p-0">
                    <Image
                      src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fluid
                    />
                  </Col>
                </Row>
              </Container>
            </Collapse>

            {/*  <Collapse in={open}>
              <Container fluid className="p-0">
                <Row className="p-0">
                  <Col>
                    <CloseButton onClick={() => setOpen(!open)} />
                    <dl className="row">
                      <dt className="col-12">
                        <span className="text-danger lead">Porject Name 2</span>
                      </dt>
                      <dt className="col-4">CLIENT</dt>
                      <dd className="col-8">Abc Company</dd>
                      <dt className="col-4">CATEGORY</dt>
                      <dd className="col-8">Branding</dd>
                      <dt className="col-4">DURATION</dt>
                      <dd className="col-8">2 weeks</dd>
                    </dl>
                  </Col>
                  <Col>
                    <Image
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fluid
                    />
                  </Col>
                  <Col>
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fluid
                    />
                  </Col>
                  <Col>
                    <Image
                      src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fluid
                    />
                  </Col>
                </Row>
              </Container>
            </Collapse>

            <Collapse in={open}>
              <Container fluid>
                <Row>
                  <Col>
                    <CloseButton onClick={() => setOpen(!open)} />
                    <dl className="row">
                      <dt className="col-12">
                        <span className="text-danger lead">Porject Name 3</span>
                      </dt>
                      <dt className="col-4">CLIENT</dt>
                      <dd className="col-8">Abc Company</dd>
                      <dt className="col-4">CATEGORY</dt>
                      <dd className="col-8">Branding</dd>
                      <dt className="col-4">DURATION</dt>
                      <dd className="col-8">2 weeks</dd>
                    </dl>
                  </Col>
                  <Col>
                    <Image
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fluid
                    />
                  </Col>
                  <Col>
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fluid
                    />
                  </Col>
                  <Col>
                    <Image
                      src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fluid
                    />
                  </Col>
                </Row>
              </Container>
            </Collapse>

            <Collapse in={open}>
              <Container fluid>
                <Row>
                  <Col>
                    <CloseButton onClick={() => setOpen(!open)} />
                    <dl className="row">
                      <dt className="col-12">
                        <span className="text-danger lead">Porject Name 4</span>
                      </dt>
                      <dt className="col-4">CLIENT</dt>
                      <dd className="col-8">Abc Company</dd>
                      <dt className="col-4">CATEGORY</dt>
                      <dd className="col-8">Branding</dd>
                      <dt className="col-4">DURATION</dt>
                      <dd className="col-8">2 weeks</dd>
                    </dl>
                  </Col>
                  <Col>
                    <Image
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fluid
                    />
                  </Col>
                  <Col>
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fluid
                    />
                  </Col>
                  <Col>
                    <Image
                      src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      fluid
                    />
                  </Col>
                </Row>
              </Container>
            </Collapse> */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
{
  /* <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div> */
}
