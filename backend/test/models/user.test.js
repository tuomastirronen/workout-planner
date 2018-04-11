const util = require('../util')
const factory = require('../factories/user')
const sequelize = require('sequelize')
const User = require('../../server/models').User
var assert = require('assert');

describe('user model', function () {

  it('should not create user w/o password', function (done) {
    var user = factory.User()
    user.password = null
    User.create(user).then( function (data) {      
      done(new Error("should not create user without password"))
    })
    .catch(error => {      
      done()
    });    
  });

  it('should not create user w/o email', function (done) {
    var user = factory.User()
    user.email = null
    User.create(user).then( function (data) { 
      done(new Error("should not create user without email"))
    })
    .catch(error => {      
      done();
    });
  });

  it('should create valid user', function (done) {

    util.truncateUser();
    var user = factory.User()
    User.create(user).then( function (data) {
      assert.equal(data.email, user.email);
      assert.equal(data.first_name, user.first_name);
      assert.equal(data.last_name, user.last_name);      
      done();
    })
    .catch(error => {
      done(error)
    });

    util.truncateUser();
    
  });


});