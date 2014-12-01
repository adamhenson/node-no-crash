var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var start = require('./start');

if (cluster.isMaster) {

  console.log('start cluster with %s workers', numCPUs);

  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
  
} else {
  
  start();

}