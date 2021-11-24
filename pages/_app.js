/** @jsxImportSource theme-ui */

import { ThemeProvider } from 'theme-ui';
import theme from '../styles/theme';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  console.log(theme);

  //add data here... inside app...
  const [books, setBooks] = useState([]);
  //replacing lines 13 - 27 with our Context Object and useContext hook
  useEffect(() => {
    //get data on initial load
    let url = '/api/books';
    fetch(url, { method: 'GET' })
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        setBooks(data.books);
      })
      .catch(console.error);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component books={books} {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
