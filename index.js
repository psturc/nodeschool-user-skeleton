const readUsers = require('./utils/readusers.js');

function serveUsers (config) {
  readUsers(config.file, (err, users) => {
    if (err) {
      console.log(err);
      return;
    }
    const http = require('http');
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(users.users));
    });
    server.listen(config.port, config.hostname, () => {
      console.log(`Server running at http://${config.hostname}:${config.port}`);
    });
  });
}

serveUsers({file: './seed/users.json', port: 8008, hostname: '127.0.0.1'});
