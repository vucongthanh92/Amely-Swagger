'use strict';

const fs = require('fs');
const exec = require('child_process').exec;
var watch = require('node-watch');

var program = {
  host: '127.0.0.1',
  port: 8000,
  bundle: null
}
var swaggerFileValue = './build/swagger.json';
var targetDirValue = './build';

require('swagger-ui-watcher').start(
    swaggerFileValue,
    targetDirValue,
    program.port,
    program.host,
    program.bundle
);

watch('./src', { recursive :true }, (eventType, filename) => {
  exec('yarn tojson', function(error, stdout, stderr) {
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
    if (error !== null) {
      console.log('exec error: ', error);
    }
  });
});
