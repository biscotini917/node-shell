const chalk = require('chalk');
const ourCommands = require('./commands')
const prompt = chalk.blue('\nprompt > ');

process.stdout.write(prompt);

process.stdin.on('data', function (data) {
  const tokens = data.toString().trim().split(' ');
  const cmd = tokens[0];
  const args = tokens.slice(1).join(' ');

  if (ourCommands[cmd]) ourCommands[cmd](args);
  else process.stderr.write(chalk.red('command not found: ') + cmd);
});
