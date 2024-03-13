import React from "react";
import { Container, Form, InputGroup } from "react-bootstrap";

function Search() {
  return (
    <Container>
    <InputGroup style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <Form.Control
        placeholder="Search Movie"
      />
    </InputGroup>
    </Container>
  );
}

export default Search;
