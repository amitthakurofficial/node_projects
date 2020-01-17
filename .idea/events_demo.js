const EventEmitter=require('events');
const emitter=new EventEmitter();

//handlling event
emitter.on('message logged',function () {
    console.log("event happened");
});

//creating event name
//emitting event
emitter.emit('message logged');


//handlling event
emitter.on('logging you in...',(args) => {
    console.log("event is being handelled" +args);
});

//raising another event
emitter.emit("logging you in...",{id: 1, name: "amit"});