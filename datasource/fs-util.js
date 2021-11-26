import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const saveBooks = (data, filename) => {
  try {
    let p = path.resolve('./', filename);
    writeFileSync('./data.json', JSON.stringify(data));
    //if we get to here then write was successful
  } catch (err) {
    console.error(err.message);
  }
};
const loadBooks = async (filename) => {
  let p = path.resolve('./' + filename);
  try {
    let jsonString = readFileSync('./data.json', 'utf8');
    let obj = await JSON.parse(jsonString);
    return obj;
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

export { loadBooks, saveBooks };
