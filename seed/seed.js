const PouchDB = require('pouchdb');
const readUsers = require('../utils/readusers.js');

async function seed (dbname) {
  const oldDB = new PouchDB(dbname);
  let newDB;
  await oldDB.destroy();
  const userData = await readUsers('./seed/users.json');
  newDB = new PouchDB(dbname);
  const data = userData.users.map(u => {
    u._id = u.username;
    return u;
  });
  const result = await newDB.bulkDocs(data);
  await newDB.close();
  return result;
}

module.exports = seed;
