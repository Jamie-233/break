// 开启子进程 守护进程
const { spawn } = require('child_process');
const { exit } = require('process');
const path = require('path');
const fs = require('fs');

let child = spawn('node', [path.join(__dirname, 'task.js'), options.rule])


let child = spawn('node', ['index.js'], {detached: true});
const log_file = path.join(__dirname, 'log.txt');
fs.open(log_file, 'a+', function name(err, fd) {
  fs.write(fd, child.pid + '\n', ()=>{});
  exit();
})
