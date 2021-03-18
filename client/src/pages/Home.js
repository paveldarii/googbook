import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Jumbotron, Button, List } from "react-bootstrap";
import BookCard from "../components/BookCard";
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
    <div>
      {books.length ? (
        <div>
          <Jumbotron
            style={{
              backgroundImage:
                "url('https://content.fortune.com/wp-content/uploads/2016/06/171152625.jpg')",
              color: "white",
            }}
          >
            <h1
              style={{
                background: "grey",
                display: "inline",
                border: "rounded",
              }}
            >
              Searched Books
            </h1>
          </Jumbotron>
          {books.map((book) => (
            <BookCard book={book} />
          ))}
        </div>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default Home;
