import { createFakeContact } from '../utils/createFakeContact.js';
import {
  readContactsFromFile,
  writeContactsToFile,
} from '../utils/fileOperations.js';

const addOneContact = async () => {
  const existingContacts = await readContactsFromFile();
  const newContact = createFakeContact();
  existingContacts.push(newContact);
  await writeContactsToFile(existingContacts);
};

addOneContact();
