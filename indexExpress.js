const express = require('express');

const PORT = 3200;
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>HELLO from express</h1>');
});
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
