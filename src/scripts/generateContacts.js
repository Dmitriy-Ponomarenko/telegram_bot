import { createFakeContact } from '../utils/createFakeContact.js';
import {
  readContactsFromFile,
  writeContactsToFile,
} from '../utils/fileOperations.js';

const generateContacts = async (number) => {
  const existingContacts = await readContactsFromFile();
  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    existingContacts.push(newContact);
  }
  await writeContactsToFile(existingContacts);
};

generateContacts(5);
