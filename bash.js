process.stdout.write('prompt > ');
const commands = require('./commands');

process.stdin.on('data', function (data) {
  const userCommand = data.toString().trim();

  if (typeof commands[userCommand] === 'function') {
    commands[userCommand]();
  } else if (userCommand.slice(0, 4) === 'echo') {
    commands.echo(userCommand.slice(5));
  } else {
    process.stdout.write("that function does not exist");
    process.stdout.write('\nprompt > ');
  }
});
