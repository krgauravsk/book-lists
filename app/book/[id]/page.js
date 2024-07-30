import BookDetailClient from "./BookDetailClient";

async function fetchBook(id) {
  const res = await fetch('https://all-books-api.p.rapidapi.com/getBooks', {
    headers: {
      'x-rapidapi-host': 'all-books-api.p.rapidapi.com',
      'x-rapidapi-key': '70670a49bbmsh4e70c844cb6f03bp1260d2jsn62ad639f932c'
    }
  });
  const data = await res.json();

  return data.find((book) => book.bookIsbn === id);
}

export default async function BookDetailPage({ params }) {
  const { id } = params;
  const book = await fetchBook(id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return <BookDetailClient book={book} />;
}
