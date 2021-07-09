#! /usr/bin/env node 
import { generatePassword } from './generator';
import { Command } from 'commander';
import chalk from 'chalk';
import clipboardy from 'clipboardy';
import { SYMBOLS, AMBIGUOUS_SYMBOLS } from './utils/constants';

const { log } = console;

// Instantiate commander.
const program = new Command();

// Set version and description.
program
  .version('1.0.0')
  .description('Password Generator CLI tool')

// Set options.
program
  .option('-l, --length <number>', 'Length of the password', '8')
  .option('-nn, --no-numbers', 'Exclude numbers')
  .option('-ns, --no-symbols', `Exclude symbols (e.g. ${SYMBOLS})`)
  .option('-as, --ambiguous-symbols', `Include ambiguous symbols. (e.g. ${AMBIGUOUS_SYMBOLS})`, false)
  .option('-up, --uppercase', 'All characters in uppercase', false)
  .option('-up, --lowercase', 'All characters in lowercase', false)
  .option('-s, --save <filename>', 'Save password to file')
  .parse();

const { 
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
  ambiguousSymbols,
  save
} = program.opts();

const options: PasswordOptions = {
  length,
  uppercase,
  lowercase,
  hasNumbers: numbers,
  hasSymbols: symbols,
  ambiguousSymbols,
  save
};

// Generate a new password.
const generatedPassword: string = generatePassword(options);

// Copy to clipboard.
clipboardy.writeSync(generatedPassword);

// Log info.
log(chalk.blue.bold('\nGenerated Password: ' + chalk.yellow.underline.bold(generatedPassword)) + '\n');
log(chalk.green.bold('Password copied to clipboard.\n'));
