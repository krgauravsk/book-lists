"use client";

import Link from "next/link";
import styles from "./bookCard.module.css";

export default function BookCard({ book }) {
  return (
    <div className={`${styles.bookCardContainer} ${styles.zoom}`}>
      <Link href={`/book/${book.bookIsbn}`}>
        <div>
          <img
            src={book.bookImage}
            alt={book.bookTitle}
            width="150"
            height="200"
            className={styles.bookCardImg}
          />
          <h2 className={styles.bookCardTitle}>{book.bookTitle}</h2>
          <p className={styles.bookCardAuthor}>{book.bookAuthor}</p>
        </div>
      </Link>
    </div>
  );
}
