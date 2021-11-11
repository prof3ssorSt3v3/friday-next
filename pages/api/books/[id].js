import nc from 'next-connect';
import books from '../../../datasource/data';

const getBook = (id) => books.find((n) => n.id === id);

const handler = nc()
  .get((req, res) => {
    const book = getBook(req.query.id);

    if (!book) {
      res.status(404);
      res.end();
      return;
    }

    res.json({ book: book });
  })
  .patch((req, res) => {
    const book = getBook(req.query.id);
    // req.query contains all the querystring and path parts
    // that follow after /api/notes

    if (!book) {
      res.status(404);
      res.end();
      return;
    }

    const i = books.findIndex((n) => n.id === req.query.id);
    const updated = { ...books, ...req.body };

    books[i] = updated;
    res.json({ book: updated });
  })
  .delete((req, res) => {
    const book = getBook(req.query.id);

    if (!book) {
      res.status(404);
      res.end();
      return;
    }
    const i = books.findIndex((n) => n.id === req.query.id);

    books.splice(i, 1);

    res.json({ book: req.query.id });
  });

export default handler;
