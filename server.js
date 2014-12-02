var forever = require('forever-monitor');

var child = new (forever.Monitor)('start.js', {
  max: 100,
  silent: false,
  args: []
});

child.on('exit', function () {
  console.log('exited after 100 restarts');
});

child.start();