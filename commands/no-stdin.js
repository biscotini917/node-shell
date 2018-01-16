'use strict';
const fs = require('fs');
const chalk = require('chalk');
const prompt = chalk.blue('\nprompt > ');

function pwd (args) {
  process.stdout.write(process.cwd());
  process.stdout.write(prompt);
}

function date (args) {
  process.stdout.write(Date());
  process.stdout.write(prompt);
}

function ls (args) {
  fs.readdir('.', function (err, filenames) {
    if (err) throw err;
    process.stdout.write(filenames.join('\n'));
    process.stdout.write(prompt);
  });
}

function echo (args) {
  const output = args
  .split(' ')
  .map(function (arg) {
    return (arg[0] === '$') ? process.env[arg.slice(1)] : arg;
  })
  .join(' ');
  process.stdout.write(output);
  process.stdout.write(prompt);
}

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo
};
