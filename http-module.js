// отправляет запросы или запускает сервер

const http = require('http');

// const server = http.createServer((req, res) => {
//запрос и ответ, оба объекты
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/thml'); //read
//   res.write('<h1>Hello from the Node.js</h1>');
//   res.end();
// });
// server.listen(3000);

const url = 'http://jsonplaceholder.typicode.com/todos/1';
http.get(url, (res) => {
  let responseBody = '';

  res.on('data', (chunk) => {
    responseBody += chunk;
  });
  res.on('end', () => {
    console.log(responseBody);
  });
});
