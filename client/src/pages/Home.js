import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Jumbotron, Button } from "react-bootstrap";

function Home() {
  const [books, setBooks] = useState({});
  const structureBook = (bookData) => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
    };
  };
  useEffect(() => {
    if (localStorage.getItem("searchQuery")) {
      loadBooks();
    }
  }, []);
  function loadBooks() {
    API.getBooks(localStorage.getItem("searchQuery"))
      .then((res) => {
        console.log(res.data.items.map((bookData) => structureBook(bookData)));
        setBooks(res.data.items.map((bookData) => structureBook(bookData)));
      })
      .catch((err) => console.log(err));
  }

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
