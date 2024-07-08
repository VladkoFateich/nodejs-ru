// const http = require('http');
const express = require('express');

const app = express();

// const server = http.createServer(app);
//     (req, res) => {
//   res.end('Response from the server');
// }
app.get('/', (req, res) => {
  res.send('Response from the Express');
});
app.listen(5000, () => {
  console.log('Server was starter on port 5000');
});

// server.listen(5000, () => {
//   console.log('Server was starter on port 5000');
// });
