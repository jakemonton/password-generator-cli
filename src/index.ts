#! /usr/bin/env node 
import { generatePassword } from './generator';
import { Command } from 'commander';
import chalk from 'chalk';
import clipboardy from 'clipboardy';

const log = console.log;

const program = new Command();

// Set version and description.
program
  .version('1.0.0')
  .description('Password Generator CLI')

// Set options.
program
  .option('-l, --length <number>', 'Length of the password', '8')
  .option('-nn, --no-numbers', 'Exclude numbers in password')
  .option('-ns, --no-symbols', 'Exclude symbols in password')
  .option('-s, --save <filename>', 'Save password to file')
  .parse();

const { 
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
  save
} = program.opts();

const options: PasswordOptions = {
  length,
  uppercase,
  lowercase,
  hasNumbers: numbers,
  hasSymbols: symbols,
  save
};

const generatedPassword: string = generatePassword(options);

// Copy to clipboard.
clipboardy.writeSync(generatedPassword);

log(chalk.blue.bold('Generated Password: ' + chalk.yellow.underline.bold(generatedPassword)));
log(chalk.green.bold('Password copied to clipboard.'));
