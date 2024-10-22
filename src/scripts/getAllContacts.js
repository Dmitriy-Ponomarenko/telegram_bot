import { readContactsFromFile } from '../utils/fileOperations.js';

const getAllContacts = async () => {
  const contacts = await readContactsFromFile();
  return contacts;
};

console.log(await getAllContacts());
