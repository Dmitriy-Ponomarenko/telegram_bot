import { readContactsFromFile } from '../utils/fileOperations.js';

export const countContacts = async () => {
  const existingContacts = await readContactsFromFile();
  const total = existingContacts.length;
  return total;
};

console.log(await countContacts());
