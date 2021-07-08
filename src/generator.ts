import fs from 'fs';
import path from 'path';
import os from 'os';
import { ALPHABET, NUMBERS, SYMBOLS } from './utils/constants';
import chalk from 'chalk';

export const generatePassword = (options: PasswordOptions) => {
  let chars = ALPHABET;
  let password = '';

  options.hasNumbers ? (chars += NUMBERS) : '';
  options.hasSymbols ? (chars += SYMBOLS) : ''; 

  // generate new password.
  for (let i = 0; i < options.length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Check if password needs to be saved in a file.
  if (options.save) {
    savePassword(password, options.save);
  }

  return password;
}

const savePassword = (password: string, filename: string) => {
  fs.open(path.join(__dirname, '../', filename), 'a', 666, (e, id) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.green.bold(`Password save to ${filename}`));
      });
    });
  });
}