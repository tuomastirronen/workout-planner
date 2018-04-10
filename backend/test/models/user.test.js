const util = require('../util')
const sequelize = require('sequelize')
const User = require('../../server/models').User
var assert = require('assert');

describe('user', function () {

  it('create user w/o password', function (done) {
    User.create({
      email: 'tuomas.tirronen@helsinki.fi',
      first_name: 'Tuomas',
      last_name: 'Tirronen',      
    }).then( function (user) {      
      done("password cannot be null");
    })
    .catch(error => {      
      done()
    });
  });

  it('create user w/o email', function (done) {
    User.create({      
      first_name: 'Tuomas',
      last_name: 'Tirronen',      
    }).then( function (user) {      
      done("email cannot be null");
    })
    .catch(error => {      
      done()
    });
  });

  it('create valid user', function (done) {

    util.truncateUser();

    User.create({
      email: 'tuomas.tirronen@helsinki.fi',
      first_name: 'Tuomas',
      last_name: 'Tirronen',
      password: "$2a$10$z.O/ZrKNkCU9nq36NC9J2.o4GtfH8TfnP37lZq65wlvmUrbT0Bd8G"
    }).then( function (user) {
      assert.equal(user.email, 'tuomas.tirronen@helsinki.fi');
      assert.equal(user.first_name, 'Tuomas');
      assert.equal(user.last_name, 'Tirronen');      
      done();
    })
    .catch(error => {
      done(error)
    });
  });


});