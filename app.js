const Logger = require('./logger');
const logger = new Logger();
const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
const http = require('http');

const server = http.createServer((req, res) => {
    if ( req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if( req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});



server.listen(3000);

console.log("Listening on port 3000");


// Register a Listener
logger.on('messagedLogged', (arg) => {
    console.log("Event Listened", arg);
});


logger.log('message');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files) {
    if(err) console.log('Error', err);
    else console.log('Result', files);
});

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory : ${totalMemory}`);
console.log(`Free Memory : ${freeMemory}`);


var pathObj = path.parse(__filename);
console.log(pathObj);

