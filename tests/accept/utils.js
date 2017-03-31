/* eslint-env mocha */

const readUsers = require('../../utils/readusers.js');

describe('Util function', function () {
  it('readUsers should parse the seed list', function () {
    return readUsers('./seed/users.json')
      .then(res => {
        if (res.users.length !== 100) {
          return Promise.reject(Error('User json should have 100 users'));
        }
      });
  });
});
