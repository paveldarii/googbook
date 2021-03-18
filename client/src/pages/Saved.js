import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import API from "../utils/API";
import BookCard from "../components/BookCard";
function Saved() {
  const [books, setBooks] = useState({});

  useEffect(() => {
    loadBooks();
  }, []);
  function loadBooks() {
    API.getSavedBooks()
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Hero title="Saved Books" />
      {books.length ? (
        <div>
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

export default Saved;
