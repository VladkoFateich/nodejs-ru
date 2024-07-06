// const safer = require('safer-buffer');
// const express = require('express');
// console.log(safer);
// console.log(express);

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello from EXPRESS!!!');
});

app.listen(3000);
