import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

const timeoutListenerFn = (sec) => {
  console.log(`timeout event!!! ${sec} seconds`);
};

myEmitter.on('timeout', timeoutListenerFn);

setTimeout(() => {
  myEmitter.emit('timeout', 1);
}, 1000);
setTimeout(() => {
  myEmitter.emit('timeout', 3);
}, 3000);

myEmitter.once('singleEvent', () => {
  console.log('Single Event occurred');
});

setTimeout(() => {
  myEmitter.emit('singleEvent');
}, 1500);
setTimeout(() => {
  myEmitter.emit('singleEvent');
}, 7000);

setTimeout(() => myEmitter.off('timeout', timeoutListenerFn), 3000);
setTimeout(() => {
  myEmitter.emit('timeout', 4);
}, 4000);
