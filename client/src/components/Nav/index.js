import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Navigation() {
  const [query, setQuery] = useState("");
  return (
    <Navbar style={{ background: "#003B46" }} variant="dark">
      <Navbar.Brand href="/home">GoogBook</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/saved">Saved</Nav.Link>
        <Nav.Link href="/categories">Categories</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          href="/"
          onClick={() => localStorage.setItem("searchQuery", query)}
          variant="outline-info"
        >
          Search Book
        </Button>
      </Form>
    </Navbar>
  );
}

export default Navigation;
