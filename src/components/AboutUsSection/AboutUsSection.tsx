import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutUsSection.css";

const AboutUsSection = (): JSX.Element => {
  return (
    <section className="generic">
      <Container>
        <h2 className="display-5 text-danger mb-4">WHO WE ARE?</h2>
        <Row className="mb-3">
          <Col sm="12" md="8" className="bg-light p-0">
            <div className="d-flex h-100 flex-column justify-content-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                ratione pariatur provident quas quidem dignissimos ducimus
                voluptate odio deserunt! Doloremque necessitatibus odit saepe
                corporis quisquam tempore asperiores nemo hic possimus dolor,
                culpa beatae magni animi tenetur ut excepturi dicta ullam totam
                reiciendis quae nihil ea voluptas. Sequi fuga voluptatum
                explicabo!
              </p>
            </div>
          </Col>
          <Col sm="12" md="4" className="p-0">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdmllJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
            />
          </Col>
        </Row>

        <Row>
          <Col sm="12" md="8" className="bg-light p-0">
            <div className="d-flex h-100 flex-column justify-content-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                ratione pariatur provident quas quidem dignissimos ducimus
                voluptate odio deserunt! Doloremque necessitatibus odit saepe
                corporis quisquam tempore asperiores nemo hic possimus dolor,
                culpa beatae magni animi tenetur ut excepturi dicta ullam totam
                reiciendis quae nihil ea voluptas. Sequi fuga voluptatum
                explicabo!
              </p>
            </div>
          </Col>
          <Col sm="12" md="4" className="order-first p-0">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWUlMjBjb21wYW55fGVufDB8fDB8fHww"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
