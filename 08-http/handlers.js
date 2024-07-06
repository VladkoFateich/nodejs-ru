const fs = require('fs');
const qs = require('querystring');
const comments = require('./data');

function getHome(req, res) {
  fs.readFile('./files/comment-form.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-type', 'text/plain');

      res.end('Server ERROR while loading HTML file');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');
      res.end(data);
    }
  });
}
function getHTML(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><body><div>');
  res.write(
    '<h1>Greetings from the HTTP server!!!</h1><ul><li>item 1</li><li>item 2</li></ul>'
  );
  res.write('</div><body></html>');
  res.end();
}

function getText(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plane');
  res.end(
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
  );
}

function getComments(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(comments));
}

function handleNotFound(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>ERROR 404 page not a found</h1>');
}

function postComment(req, res) {
  res.setHeader('Content-Type', 'text/plane');
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const comment = qs.parse(body);
        comment.id = parseInt(comment.id);
        comments.push(comment);
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write('<h1>Comment data was received</h1>');
        res.write('<a href="/">Submit one more comment</a>');
        res.end();
      } catch (err) {
        res.statusCode = 400;
        res.end('Invalid JSON');
      }
    });
  } else if (req.headers['content-type'] === 'application/json') {
    let commentJSON = '';
    req.on('data', (chunk) => (commentJSON += chunk));
    req.on('end', () => {
      try {
        comments.push(JSON.parse(commentJSON));
        res.statusCode = 200;
        res.end('Comment data was received');
      } catch {
        res.statusCode = 400;
        res.end('Invalid JSON');
      }
    });
  } else {
    res.statusCode = 400;
    res.end('Data must be in the JSON format');
  }
}

module.exports = {
  getHTML,
  getText,
  getComments,
  handleNotFound,
  postComment,
  getHome,
};
