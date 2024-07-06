import fs from 'fs';
import path from 'path';

const sourceDir = './files';
const destinationDir = './copied-files';

if (!fs.existsSync(sourceDir)) {
  console.warn(`Source dir ${sourceDir} doesnt exist!`);
  console.log('Exiting...');
  process.exit(0);
}

if (fs.existsSync(destinationDir)) {
  fs.rmdirSync(destinationDir);
  console.log('Destination dir removed');
}
fs.mkdirSync(destinationDir);

fs.readdir(sourceDir, (err, fileNames) => {
  if (err) {
    console.log('ERROR');
    process.exit(1);
  }
  //   console.log(fileName);
  fileNames.forEach((fileName, index) => {
    // Путь к файлу из которго копируем
    const sourceFilePath = path.join(sourceDir, fileName);
    // Путь к файлу в который копируем
    const destinationFilePath = path.join(
      destinationDir,
      `${index + 1}. ${fileName}`
    );
    const readFileStream = fs.createReadStream(sourceFilePath);
    const writeFileStream = fs.createWriteStream(destinationFilePath);

    readFileStream.pipe(writeFileStream);
    writeFileStream.on('finish', () => {
      console.log(`File ${fileName} was copied`);
    });
  });
});
//existsSync синхронно проверяет наличие директории
// rmdirSync синхронно удаляет директории
// mkdirSync синхронно создает директорию
// path.join() Соединяет последовательность сегментов пути с использованием специфического для платформы разделителя в качестве разделителя.Нормализует полученный путь и возвращает его.
