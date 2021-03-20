import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Navigation() {
  const [query, setQuery] = useState("");
  const style = {
    outside: {
      color: "#F96167",
    },
    inside: {
      color: "#FCE77D",
    },
  };
  return (
    <Navbar style={{ background: "#003B46" }} variant="dark">
      <Navbar.Brand href="/home">
        <span style={style.outside}>G</span>
        <span style={style.inside}>oo</span>
        <span style={style.outside}>gB</span>
        <span style={style.inside}>oo</span>
        <span style={style.outside}>k</span>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/saved">Saved</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="search book"
          className="mr-sm-2"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          href="/"
          onClick={() => localStorage.setItem("searchQuery", query)}
          variant="outline-info"
          style={{ background: "#66A5AD" }}
        >
          Search
        </Button>
      </Form>
    </Navbar>
  );
}

export default Navigation;
