console.log('Starting app.');

// fs ==> file system
const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello from node.js');

// first is the location of the file and the second is the message that we have to write
