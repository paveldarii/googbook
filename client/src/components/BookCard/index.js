import React, { useState } from "react";
import { Image, Card, Button } from "react-bootstrap";
import API from "../../utils/API";

function BookCard(props) {
  const [saveStatus, setSaveStatus] = useState("Save Book");
  const [deleteStatus, setDeleteStatus] = useState("Delete Book");
  const loadAuthors = (props) => {
    if (props.book.authors || props.authors) {
      return <Card.Text>by {props.book.authors || props.authors}</Card.Text>;
    }
  };
  function saveBook(bookData) {
    API.saveBook(bookData)
      .then((res) => {
        setSaveStatus("Saved");
      })
      .catch((err) => console.log(err));
  }
  function deleteBook(_id) {
    API.deleteSavedBook(_id)
      .then((res) => {
        setDeleteStatus("Deleted");
        props.loadBooks();
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
            {deleteStatus}
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
            {saveStatus}
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
          target="_blank"
          variant="outline-info"
          style={{
            background: "#66A5AD",
            float: "right",
            margin: "0px 20px 0px 0px",
          }}
        >
          Learn More
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
