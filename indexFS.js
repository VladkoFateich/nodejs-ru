// модуль fs для работы с файлами
const fs = require('fs/promises');

fs.readFile('test.txt', 'utf-8')
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// const dataToWrire = 'And you HELLO user'; //вариант с колбаком, асинхронный
// fs.writeFile('./test.txt', dataToWrire, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// Вариант с промисом
const dataToWrire = 'And you HELLO user this PROMISE';
fs.writeFile('./test.txt', dataToWrire)
  .then(() => console.log('done'))
  .catch((err) => console.log(err));

//удалить с промисом
fs.unlink('./test2.txt')
  .then(() => console.log('file deleted'))
  .catch((err) => console.log(err));
console.log('HELLO');
