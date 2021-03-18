import React from "react";
import { Image, Card, Button } from "react-bootstrap";

function BookCard(props) {
  const loadAuthors = (props) => {
    if (props.book.authors) {
      return <Card.Text>by {props.book.authors}</Card.Text>;
    }
  };
  return (
    <Card
      key={props.book._id}
      style={{ margin: "20px", background: "#C4DFE6" }}
    >
      <Card.Header style={{ background: "#07575B", color: "white" }}>
        {props.book.categories}
        <Button
          variant="outline-info"
          style={{ background: "#66A5AD", float: "right" }}
        >
          Save Book
        </Button>
        <Button
          href={props.book.link}
          variant="outline-info"
          style={{
            background: "#66A5AD",
            float: "right",
            margin: "0px 20px 0px 0px",
          }}
        >
          Find More
        </Button>
      </Card.Header>
      <Card.Body>
        <Image
          src={props.book.image}
          style={{ margin: "0px 20px 0px 0px", float: "left" }}
        />

        <Card.Title>{props.book.title}</Card.Title>
        {loadAuthors(props)}
        <Card.Text>{props.book.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
