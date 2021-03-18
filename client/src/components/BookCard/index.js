import React from "react";
import { Image, Card, Button } from "react-bootstrap";

function BookCard(props) {
  return (
    <Card
      key={props.book._id}
      style={{ margin: "20px", background: "#C4DFE6" }}
    >
      <Card.Header style={{ background: "#07575B", color: "white" }}>
        {props.book.title}
        <Button style={{ background: "#66A5AD", float: "right" }}>
          Save Book
        </Button>
      </Card.Header>
      <Card.Body>
        <Image
          src={props.book.image}
          style={{ margin: "0px 20px 0px 20px", float: "left" }}
        />

        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button style={{ background: "#66A5AD" }}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
