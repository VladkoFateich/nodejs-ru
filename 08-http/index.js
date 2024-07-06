const http = require('http');
const {
  getHTML,
  getComments,
  getText,
  handleNotFound,
  postComment,
  getHome,
} = require('./handlers');

const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    return getHome(req, res);
  }
  console.log(req);
  if (req.method === 'GET' && req.url === '/html') {
    return getHTML(req, res);
    // return res.end(
    //   '<h1>Greetings from the HTTP server!!!</h1><ul><li>item 1</li><li>item 2</li></ul>'
    // );
  }
  if (req.method === 'GET' && req.url === '/text') {
    return getText(req, res);
  }
  if (req.method === 'GET' && req.url === '/comments') {
    return getComments(req, res);
  }
  if (req.method === 'POST' && req.url === '/comments') {
    return postComment(req, res);
  }
  handleNotFound(req, res);
});
server.listen(PORT, () => {
  console.log(`SERVER WAS LAUNCHED ON PORT ${PORT}!!!`);
});
