import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) =>{
  console.log( 'PUT to the jate database')
const jateDb = await openDB('jate', 1);
const jt = jateDb.transaction ('jate', 'readwrite');
const store = jt.objectStore('jate');
const request = store.put({ id: 1, value: content });
const result = await request;
console.log('new data saved to the jate database', result.value);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the jate database');
  const jateDb = await openDB('jate', 1);
  const jt = jateDb.transaction('jate', 'readonly');
  const store = jt.objectStore('jate');
  const request = storage.get(1);
  const result = await request;
  result
    ? console.log('data recovered from the jate database', result.value)
    : console.log('data not found in the jate database');
}

initdb();
