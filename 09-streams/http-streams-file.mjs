import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const filePath = './files/index.html';
    //читаю с помощью потока (частями)
    const readStream = fs.createReadStream(filePath);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //отправляю ответ клиенту
    readStream.pipe(res);
  }
  //без потока
  if (req.url === '/no-stream' && req.method === 'GET') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('ERROR READING FILE ON SERVER');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  }
});
server.listen(3000, () => {
  console.log('Server is listener at port 3000');
});
