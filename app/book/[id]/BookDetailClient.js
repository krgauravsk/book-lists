"use client";
import styles from "./bookDetailClient.module.css";

export default function BookDetailClient({ book }) {
  return (
    <div className={styles.bookDetailClientContainer}>
      <div className={styles.bookDetailClientTitle}>{book.bookTitle}</div>
      <img
        className={styles.bookDetailImg}
        src={book.bookImage}
        alt={book.bookTitle}
        width="150"
        height="200"
      />
      <div className={styles.bookDetailText}>
        <div>Author:</div> {book.bookAuthor}
      </div>
      <div className={styles.bookDetailText}>
        <div>Description:</div> {book.bookDescription}
      </div>
      <div className={styles.bookDetailText}>
        <div>Publisher:</div> {book.bookPublisher}
      </div>
      <div className={styles.bookDetailText}>
        <div>ISBN:</div> {book.bookIsbn}
      </div>
      <a
        className={styles.bookDetailTextLink}
        href={book.amazonBookUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy on Amazon
      </a>
    </div>
  );
}
