// для работы с путями и папками
const path = require('path');

const filePath =
  'C:\\Users\\user\\Documents\\Fateev\\Frontend\\Tech-Wizard\\Node';
const textFilePath =
  'C:\\Users\\user\\Documents\\Fateev\\Frontend\\Tech-Wizard\\Node\\test.txt';
const movie =
  '.C:\\Users\\user\\Videos\\Новый текстовый документ.txt – Блокнот 2024-06-24 19-50-08.mp4';
const direct = './node/subfolder';

console.log(path.isAbsolute(filePath));
console.log(path.isAbsolute(textFilePath));
console.log(path.isAbsolute(movie));

console.log(path.basename(filePath));
console.log(path.basename(movie)); //mp4
console.log(path.basename(direct)); //subfolder

console.log(path.dirname(filePath)); //Tech-Wizard
console.log(path.dirname(direct)); //node

console.log(path.resolve(movie));

console.log(path.extname(textFilePath)); //.txt
console.log(path.extname(filePath)); //пустая стока
console.log(path.extname(movie)); //mp4

console.log(path.parse(filePath)); //объект
// {
//   root: 'C:\\',
//   dir: 'C:\\Users\\user\\Documents\\Fateev\\Frontend\\Tech-Wizard',
//   base: 'Node',
//   ext: '',
//   name: 'Node'
// }

const parseFl = path.parse(filePath);
console.log(filePath);
console.log(path.join(parseFl.dir, `renamed-${parseFl.name}.mjs`));
