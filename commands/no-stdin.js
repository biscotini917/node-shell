'use strict';
const fs = require('fs');

function pwd (args, done) {
  done(process.cwd());
}

function date (args, done) {
  done(Date());
}

function ls (args, done) {
  fs.readdir('.', function (err, filenames) {
    if (err) throw err;
    done(filenames.join('\n'));
  });
}

function echo (args, done) {
  const output = args
  .split(' ')
  .map(function (arg) {
    return (arg[0] === '$') ? process.env[arg.slice(1)] : arg;
  })
  .join(' ');
  done(output);
}

module.exports = {
  pwd: pwd,
  date: date,
  ls: ls,
  echo: echo
};
