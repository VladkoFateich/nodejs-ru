//
const fs = require('fs');
const dns = require('dns');
const { clearInterval } = require('timers');

function info(text) {
  console.log(text, performance.now().toFixed(2));
}
info('Program START');
//Timeouts
setTimeout(() => info('Timeout 1'), 10);
setTimeout(() => {
  process.nextTick(() => info('Next tick TWO'));
  info('Timeout 2');
}, 10000);
//Interval
let intervalCount = 1;
const intervalId = setInterval(() => {
  info(`interval ${intervalCount++}`);
  if (intervalCount === 3) clearInterval(intervalId);
}, 50);
//Close events
fs.writeFile('./test.txt', 'Hello Node.js', () => info('File written'));
//Promises
Promise.resolve().then(() => info('Promise ONE')); // выполняется немедленно после тика(если он есть) как только выполнится
//Next tick
process.nextTick(() => info('Next tick ONE')); //Выполняется немедленно, сл этап в рамках цикла событий, проверка на каждом этапе
//I|O Events
dns.lookup('localhost', (err, address, family) => {
  info('DNS 1 localhost', address);
  Promise.resolve().then(() => info('Promise TWO'));
});
//setImmediate (Check) вызывается на сл итерации цикла событий
setImmediate(() => info('Immediate ONE'));
console.log(info('Program STOP'));
