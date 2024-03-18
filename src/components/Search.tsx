import React, { useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";

const Search: React.FC<{ onSearch: (searchValue: string) => void }> = ({
  onSearch,
}): JSX.Element => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSearch = (event: any) => {
    const { value } = event.target;
    console.log(value);
    setSearchInput(value);
    onSearch(value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputGroup style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Form.Control
            type="text"
            placeholder="Search Movie"
            value={searchInput}
            onChange={handleSearch}
          />
        </InputGroup>
      </Form>
    </Container>
  );
};

export default Search;
