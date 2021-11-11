/** @jsxImportSource theme-ui */

import Link from 'next/link';

export default function Books({ books }) {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1 sx={{ py: 2, px: 4 }}>My Books</h1>

      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          py: 2,
          px: 4,
        }}
      >
        {books.map((book) => (
          <div key={book.id} sx={{ width: '33%', p: 2 }}>
            <Link key={book.id} href="/books/[id]" as={`/books/${book.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{book.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
