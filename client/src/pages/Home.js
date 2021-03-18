import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Jumbotron, Button } from "react-bootstrap";

function Home() {
  return (
    <Jumbotron>
      <h1>Searched</h1>
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
