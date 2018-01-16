'use strict';

const fs = require('fs');
const chalk = require('chalk');
const prompt = chalk.blue('\nprompt > ');

function cat (filenames) {
  filenames = filenames.split(' ');
  const texts = [];
  var count = 0;
  filenames.forEach(function (filename, i) {
    fs.readFile(filename, { encoding: 'utf8' }, function (err, text) {
      if (err) throw err;
      texts[i] = text;
      count++;
      if (count === filenames.length) {
        process.stdout.write(texts.join(''));
        process.stdout.write(prompt);
      }
    });
  });
}

function head (args) {
  fs.readFile(filename, { encoding: 'utf8' }, function (err, text) {
    if (err) throw err;
    process.stdout.write(text.split('\n').slice(0, 5).join('\n'));
    process.stdout.write(prompt);
  });
}

function tail (args) {
  fs.readFile(filename, { encoding: 'utf8' }, function (err, text) {
    if (err) throw err;
    process.stdout.write(text.split('\n').slice(-5).join('\n'));
    process.stdout.write(prompt);
  });
}

module.exports = {
  cat: cat,
  head: head,
  tail: tail
}
