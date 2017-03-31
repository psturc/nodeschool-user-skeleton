/* eslint-env mocha */

const readUsers = require('../../utils/readusers.js');

describe('Util function', function () {
  it('readUsers should parse the seed list', function (done) {
    readUsers('./seed/users.json', (err, res) => {
      if (err) {
        return done(err);
      }
      if (res.users.length !== 100) {
        return done(Error('User json should have 100 users'));
      }
      done();
    });
  });
});
