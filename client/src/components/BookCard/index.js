import React from "react";
import { Image, Card, Button } from "react-bootstrap";
import API from "../../utils/API";

function BookCard(props) {
  const loadAuthors = (props) => {
    if (props.book.authors || props.authors) {
      return <Card.Text>by {props.book.authors || props.authors}</Card.Text>;
    }
  };
  function saveBook(bookData) {
    API.saveBook(bookData)
      .then((res) => {
        alert("saved");
      })
      .catch((err) => console.log(err));
  }
  function deleteBook(_id) {
    API.deleteSavedBook(_id)

      .then((res) => {
        alert("deleted");
      })
      .catch((err) => console.log(err));
  }
  function displayLastButton(props) {
    switch (props.headerButton) {
      case "delete": {
        return (
          <Button
            onClick={() => {
              console.log(props.book._id);
              deleteBook(props.book._id);
            }}
            variant="outline-info"
            style={{ background: "#66A5AD", float: "right" }}
          >
            Delete Book
          </Button>
        );
      }
      case "save": {
        return (
          <Button
            onClick={() => {
              console.log(props.book);
              saveBook(props.book);
            }}
            variant="outline-info"
            style={{ background: "#66A5AD", float: "right" }}
          >
            Save Book
          </Button>
        );
      }
    }
  }
  return (
    <Card
      key={props.book.googleId}
      style={{ margin: "20px", background: "#C4DFE6" }}
    >
      <Card.Header style={{ background: "#07575B", color: "white" }}>
        {props.book.categories}
        {displayLastButton(props)}
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
