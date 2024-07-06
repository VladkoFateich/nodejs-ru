import stream, { Transform } from 'stream';
import fs from 'fs';

//трансформация текста в потоке в верхний регистр
const upperCaseStream = new Transform({
  transform: function (chunk, encoding, cb) {
    const upperCased = chunk.toString().toUpperCase();
    // console.log(upperCased)
    cb(null, upperCased);
  },
});
// process.stdin.pipe(upperCaseStream).pipe(process.stdout);

//развернуть строку
const reversStream = new Transform({
  transform(chunk, encoding, cb) {
    const arrOfChars = chunk.toString().split('');
    const lastChar = arrOfChars.pop();
    const reversed = arrOfChars.reverse().concat(lastChar).join('');
    cb(null, reversed);
  },
});

process.stdin.pipe(upperCaseStream).pipe(reversStream).pipe(process.stdout);

//stdin возвращает поток который подключается к вводу в терминале
//stdout возвращает поток подключенный к выводу в терминале
//pipe это канал, который связывает поток для чтения и поток для записи и позволяет сразу считать из потока чтения в поток записи
//stderr то стандартный поток ошибок, который используется для вывода сообщений об ошибках

// console.log(process);

//записываю игформацию из терминала в файл
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// process.stdin.pipe(process.stdout);
// process.stdin.pipe(process.stderr);
