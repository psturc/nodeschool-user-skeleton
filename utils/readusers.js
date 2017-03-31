const fs = require('fs');

function readUsers (file, cb) {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        return cb(err);
      }
      try {
        const users = JSON.parse(data);
        return cb(null, users);
      } catch (exc) {
        return cb(exc);
      }
    });
}

module.exports = readUsers;
