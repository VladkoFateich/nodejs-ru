const express = require('express');

const app = express();
const firstHandler = (req, res, next) => {
  console.log('First handler');
  next();
};
//юез 3го параметра (next) secondHandler не сработает
const secondHandler = (req, res) => {
  console.log('Second handler');

  res.send('RESPONSE FROM EXPRESS');
};

app.get('/', firstHandler, secondHandler);

app.listen(3333, () => {
  console.log('Server was started on port 3333');
});
