const { rejects } = require('assert');

setTimeout(() => {
  console.log('Timeout'), 0;
});

function fib(n) {
  return new Promise((resolve, reject) => {
    if (n === 0 || n === 1) {
      return resolve(n); //return что бы решение не шло дальше
    }
    setImmediate(() => {
      Promise.all([fib(n - 1)], [fib(n - 2)]).then(
        (
          [fib1, fib2] //возвращает массив значений от всех промисов, которые были ему переданы
        ) => resolve(fib1 + fib2)
      );
    });
  });
}
fib(10).then((res) => console.log(res));
