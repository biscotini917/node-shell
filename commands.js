module.exports = {
  pwd: function(dir) {
    var pwd = `Current directory: ${process.cwd()}`; // remove the newline
    process.stdout.write(pwd);
    process.stdout.write('\nprompt > ');
  },

  date: function(currentDate) {
    const date = `The Date is ${new Date(Date.now())}`;
    process.stdout.write(date)
    process.stdout.write('\nprompt > ')
  },

  ls: function(location) {
    var fs = require('fs');
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
  },

  echo: function(str) {
    process.stdout.write(str);
    process.stdout.write('\nprompt > ');
  }
}

