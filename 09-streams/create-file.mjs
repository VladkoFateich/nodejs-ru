import fs from 'fs';
import path from 'path';

// console.log(process.argv);
//node createFile.mjs file.txt 1000 (terminal)

//как корректно запускать программу: node createFile.mjs <filename> <linesQty>
if (!process.argv[2] || !process.argv[3]) {
  console.log('Filename and lines qty must be supplied as arguments');
  process.exit(0);
}
console.log('Continue...');

const fileName = process.argv[2];
const linesQty = parseInt(process.argv[3]);
//проверяю что linesQty число
if (isNaN(linesQty)) {
  console.log('Lines qty must be a number');
  process.exit(0);
}
//поток для записи
const writeStream = fs.createWriteStream(path.join('./files/', fileName));

for (let i = 1; i <= linesQty; i++) {
  writeStream.write(
    `This is a line number ${i} in the automatically generated file\n`
  );
}
writeStream.end(() => {
  console.log(
    `Automatically generated file ${fileName} with ${linesQty} lines was created`
  );
});
