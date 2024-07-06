import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('myEvent', () => {
  console.log('First event listener');
});
myEmitter.on('myEvent', () => {
  console.log('Second event listener');
});

setTimeout(() => myEmitter.emit('myEvent'), 2000);

console.log(myEmitter.getMaxListeners()); // мах количесвто слушателей default 10
myEmitter.setMaxListeners(25); // изменил максимальное число на 25

console.log(myEmitter.eventNames()); // список зареганых событий
