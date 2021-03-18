import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Jumbotron, Button } from "react-bootstrap";

function Home() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {}, []);

  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
}

export default Home;
