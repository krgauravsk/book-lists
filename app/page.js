"use client";

import { useState, useEffect } from "react";
// import { Button } from 'antd';
import apiEndPoints from "./apiEndPoints";
import BookCard from "./components/BookCard";
import styles from './page.module.css';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const url = `${apiEndPoints.getBooks}`;
      const res = await fetch(url, {
        headers: {
          "x-rapidapi-host": "all-books-api.p.rapidapi.com",
          "x-rapidapi-key":
            "70670a49bbmsh4e70c844cb6f03bp1260d2jsn62ad639f932c",
        },
      });
      const data = await res.json();
      const booksData = data.map((book) => ({
        bookTitle: book.bookTitle,
        bookImage: book.bookImage,
        bookDescription: book.bookDescription,
        bookAuthor: book.bookAuthor,
        bookPublisher: book.bookPublisher,
        amazonBookUrl: book.amazonBookUrl,
        bookIsbn: book.bookIsbn,
        bookRank: book.bookRank,
      }));
      setBooks(booksData);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <div className={styles.headerBooksTitle}>Book Lists
        {/* <Button type="primary">Search</Button> */}
      </div>
      <div className={styles.booksBoxContainer}>
        {books?.map((book) => (
          <div className={styles.booksLists} key={book.bookIsbn}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}
