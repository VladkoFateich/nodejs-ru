// вариант с промисами
const fs = require('fs/promises');

fs.writeFile('./renamed-first.txt', 'First file text')
  .then(() => console.log('File first.txt was written'))
  .then(() => fs.appendFile('./renamed-first.txt', '\nOne more line'))
  .then(() => console.log('Append text to the first.txt file'))
  .then(() => console.log('Append text to the first.txt file'))
  .then(() => fs.rename('./renamed-first.txt', './secondRenamed-first.txt'))
  .then(() => console.log('File was renamed'))
  .catch((err) => console.log());
