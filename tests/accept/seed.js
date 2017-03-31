/* eslint-env mocha */
const PouchDB = require('pouchdb');
const seed = require('../../seed/seed.js');

describe('Util function', function () {
  it('readUsers should parse the seed list', function (done) {
    seed('./test-seed-db', (err, res) => {
      if (err) {
        return done(err);
      }
      const db = new PouchDB('./test-seed-db');
      db.allDocs((err, res) => {
        if (err) {
          return done(err);
        }
        if (res.total_rows !== 100) {
          return done(Error('User db should have 100 users'));
        }
        done();
      });
    });
  });
});
