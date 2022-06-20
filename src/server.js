import http from 'http';

const server = http.createServer((req, res) => {
  res.end('hello from server');
}).listen(4001);
console.log('server is running');

export default server;
