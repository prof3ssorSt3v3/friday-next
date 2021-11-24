/**
 * Version one just using the array in memory
 */
// import nc from 'next-connect';
// import books from '../../../datasource/data';
// import cors from 'cors';

// const getBook = (id) => books.find((n) => n.id === id);

// const handler = nc()
//   .use(cors())
//   .get((req, res) => {
//     const book = getBook(req.query.id);

//     if (!book) {
//       res.status(404);
//       res.end();
//       return;
//     }

//     res.json({ book: book });
//   })
//   .patch((req, res) => {
//     const book = getBook(req.query.id);
//     // req.query contains all the querystring and path parts
//     // that follow after /api/books/56?cheese=cheddar
//     // req.query.id = 56
//     // req.query.cheese = cheddar

//     if (!book) {
//       res.status(404);
//       res.end();
//       return;
//     }

//     const i = books.findIndex((n) => n.id === req.query.id);
//     const updated = { ...books, ...req.body };

//     books[i] = updated;
//     res.json({ book: updated });
//   })
//   .delete((req, res) => {
//     const book = getBook(req.query.id);

//     if (!book) {
//       res.status(404);
//       res.end();
//       return;
//     }
//     const i = books.findIndex((n) => n.id === req.query.id);

//     books.splice(i, 1);

//     res.json({ book: req.query.id });
//   });

/**
 * Version TWO
 * using NodeJS to read and write from the file
 */

import nc from 'next-connect';
import cors from 'cors';
import { loadBooks, saveBooks } from '../../../datasource/fs-util';

//the global array to hold all the books in memory
let books = [];
books = loadBooks('data.json');
//loadBooks method will parse the JSON

const getBook = (id) => books.find((n) => n.id === id);

const handler = nc()
  .use(cors())
  .get((req, res) => {
    console.log('return one item that matches the id');
    if (books.length === 0) {
      books = loadBooks('data.json');
      //loadBooks method will parse the JSON
      //load the books if first time calling
    }
    const book = getBook(req.query.id);
    //find book in books variable
    if (!book) {
      res.status(404);
      res.end();
      return;
    }

    res.json({ book: book });
  })
  .patch((req, res) => {
    console.log('update the item that matches the id');
    const book = getBook(req.query.id);
    // req.query contains all the querystring and path parts
    // that follow after /api/books/56?cheese=cheddar
    // req.query.id = 56
    // req.query.cheese = cheddar

    if (!book) {
      res.status(404);
      res.end();
      return;
    }

    const i = books.findIndex((n) => n.id === req.query.id);
    const updated = { ...books, ...req.body };

    books[i] = updated;
    //now put the updated array back into the file
    saveBooks(books, 'data.json');
    //the saveBooks function will stringify the array
    //return the updated book
    res.json({ book: updated });
  })
  .delete((req, res) => {
    console.log('delete the item that matches the id');
    const book = getBook(req.query.id);

    if (!book) {
      res.status(404);
      res.end();
      return;
    }
    const i = books.findIndex((n) => n.id === req.query.id);

    books.splice(i, 1);
    //now put the updated array back into the file
    saveBooks(books, 'data.json');
    //return the id of the deleted book
    res.json({ book: req.query.id });
  });

export default handler;
