import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const saveBooks = (data, filename) => {
  try {
    writeFileSync(
      path.resolve('./datasource/', filename),
      JSON.stringify(data)
    );
    //if we get to here then write was successful
  } catch (err) {
    console.error(err.message);
  }
};
const loadBooks = (filename) => {
  let p = path.resolve('./datasource/' + filename);
  console.log('Read data from p');
  try {
    return JSON.parse(readFileSync(p, 'utf8'));
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

export { loadBooks, saveBooks };
