const PouchDB = require('pouchdb');
const readUsers = require('../utils/readusers.js');

function seed (dbname, cb) {
  const oldDB = new PouchDB(dbname);
  let newDB;

  readUsers('./seed/users.json', (err, userData) => {
    if (err) {
      cb(err);
    }
    oldDB.destroy()
      .then(() => {
        newDB = new PouchDB(dbname);
        const data = userData.users.map(u => {
          u._id = u.username;
          return u;
        });
        return newDB.bulkDocs(data);
      }).then(function (result) {
        console.log(result);
        newDB.close(cb);
      }).catch(function (err) {
        console.log(err);
        newDB.close(cb);
      });
  });
}

module.exports = seed;
