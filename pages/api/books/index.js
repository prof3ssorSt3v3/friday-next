// /api/notes end point
/**
 * original version using local array
 */
// import books from '../../../datasource/data';
// import nc from 'next-connect';
// const handler = nc()
//   .get((req, res) => {
//     //returns all notes
//     res.json({ books: books });
//   })
//   .post((req, res) => {
//     //adds a new note
//     const id = Date.now();
//     const book = { ...req.body, id };
//     books.push(book);
//     res.json({ book: book });
//   });

/**
 * new version that reads and writes to file using NodeJS
 */
import nc from 'next-connect';
import cors from 'cors';
import { loadBooks, saveBooks } from '../../../datasource/fs-util';

//variable that will be in sync with file contents
let books = [];

const handler = nc()
  .use(cors())
  .get((req, res) => {
    console.log('returns all notes from a JSON file');
    books = loadBooks('data.json');
    res.json({ books: books });
  })
  .post((req, res) => {
    console.log('adds a new note, assume it has not be loaded yet');
    if (books.length === 0) {
      books = loadBooks('data.json');
    }
    const id = Math.random()
      .toString(16)
      .substr(2, 10)
      .concat('-', Date.now().toString());
    const book = { ...req.body, id };
    books.push(book);
    //now put the updated array back into the file
    saveBooks(books, 'data.json');
    //return the newly added book
    res.json({ book: book });
  });

export default handler;
