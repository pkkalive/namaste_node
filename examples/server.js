import http from 'node:http';

const server = http.createServer((req, res) => {
  if (req.url === '/getSecret') {
    console.log('Server is calling getSecret');
    res.end('<p>There is no secret!</p>\n');
    return;
  }
  console.log('Server is calling');
  res.end('<p>Hello, World!</p>\n');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
