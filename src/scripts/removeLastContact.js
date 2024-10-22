import {
    readContactsFromFile,
    writeContactsToFile,
  } from '../utils/fileOperations.js';

  export const removeLastContact = async () => {
    const existingContacts = await readContactsFromFile();
    if (existingContacts.length !== 0) {
      existingContacts.pop();
    }
    await writeContactsToFile(existingContacts);
  };

  removeLastContact();
