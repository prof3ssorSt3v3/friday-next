/** @jsxImportSource theme-ui */

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Note() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    let url = `/api/books/${id}`;
    console.log(`Fetching /api/books/${id}`);
    if (id) {
      fetch(url, { method: 'GET' })
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        .then((results) => {
          setBook(results.book);
        })
        .catch((err) => {
          console.warn(err.message);
          let fake = {
            id,
            title: 'No such Book Exists',
            author: err.message,
          };
          setBook(fake);
        });
    }
  }, [id]);

  return (
    <div sx={{ variant: 'containers.page' }}>
      {book && (
        <div sx={{ py: 2, px: 4, fontSize: 5 }}>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <h3>{book.id}</h3>
        </div>
      )}
      <p sx={{ px: 4 }}>
        <Link href="/books">
          <a>Back to List</a>
        </Link>
      </p>
    </div>
  );
}
