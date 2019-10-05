(function ( exports, require, module, __filename, __dirname) {
const EventEmitter = require('events');

 var url = 'http://mylogger.io/log';

 class Logger extends EventEmitter {
     log(message){
        console.log(message);
   
        // Raise an Event
       this.emit('messagedLogged' , { id:1 , url:'http://'});
    }
 }

 

 module.exports =  Logger;

});