// /api/notes end point
import nc from 'next-connect';
import books from '../../../datasource/data';

const handler = nc()
  .get((req, res) => {
    //returns all notes
    res.json({ books: books });
  })
  .post((req, res) => {
    //adds a new note
    const id = Date.now();
    const book = { ...req.body, id };
    notes.push(book);
    res.json({ book: book });
  });

export default handler;
