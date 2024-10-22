import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContactsFromFile = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
};

export const writeContactsToFile = async (contacts) => {
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
};
