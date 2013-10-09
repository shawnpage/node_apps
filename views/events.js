var events = require('events');
var eventEmitter = new events.EventEmitter();

function mainLoop() {
    console.log('Starting application');
    eventEmitter.emit('Application Start');

    console.log('Running Application');
    eventEmitter.emit('ApplicationRun');

    console.log('Stopping Application');
    eventEmitter.emit('ApplicationStop');
}

function onApplicationStart() {
    console.log('Handling Application Start Event');
}

function onApplicationStart() {
    console.log('Handling Application Run Event');
}

function onApplicationStart() {
    console.log('Handling Application Stop Event');
}

eventEmitter.on('ApplicationStart', onApplicationStart);

eventEmitter.on('ApplicationRun',   onApplicationRun);

eventEmitter.on('ApplicationStop',  onApplicationStop);
