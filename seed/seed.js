const PouchDB = require('pouchdb');
const readUsers = require('../utils/readusers.js');

function seed (dbname) {
  const oldDB = new PouchDB(dbname);
  let newDB;
  return oldDB.destroy()
    .then(() => readUsers('./seed/users.json'))
    .then(userData => {
      newDB = new PouchDB(dbname);
      const data = userData.users.map(u => {
        u._id = u.username;
        return u;
      });
      return newDB.bulkDocs(data);
    }).then(result => console.log(result))
    .catch(err => console.log(err))
    .then(() => newDB.close());
}

module.exports = seed;
