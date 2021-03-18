import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>Saved Books</Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
