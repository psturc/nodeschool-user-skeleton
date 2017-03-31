const fs = require('fs');

function readUsers (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      try {
        const users = JSON.parse(data);
        return resolve(users);
      } catch (exc) {
        return reject(exc);
      }
    });
  });
}

module.exports = readUsers;
