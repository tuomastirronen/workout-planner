'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

var users = [
  {      
    "id": 1,       
    "email": "tuomas.tirronen@helsinki.fi",
    "password_digest": "$2a$10$z.O/ZrKNkCU9nq36NC9J2.o4GtfH8TfnP37lZq65wlvmUrbT0Bd8G",
    "first_name": "Tuomas", 
    "last_name": "Tirronen", 
    "updatedAt": "2018-03-22T10:41:38.988208", 
    "createdAt": "2018-03-22T10:41:38.988208"
  },
  {
    "id": 2,
    "email": "joonissi@helsinki.fi",
    "password_digest": "$2a$10$z.O/ZrKNkCU9nq36NC9J2.o4GtfH8TfnP37lZq65wlvmUrbT0Bd8G",
    "first_name": "Joona",
    "last_name": "Nissinen",
    "updatedAt": "2018-03-22T10:41:38.988208",
    "createdAt": "2018-03-22T10:41:38.988208"
  }
]