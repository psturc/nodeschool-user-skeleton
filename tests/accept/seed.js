/* eslint-env mocha */
const PouchDB = require('pouchdb');
const seed = require('../../seed/seed.js');

describe('Util function', function () {
  it('readUsers should parse the seed list', function () {
    return seed('./test-seed-db')
      .then(() => new PouchDB('./test-seed-db').allDocs())
      .then(res => {
        if (res.total_rows !== 100) {
          return Promise.reject(Error('User json should have 100 users'));
        }
      });
  });
});
