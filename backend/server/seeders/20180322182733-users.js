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
      "first_name": "Tuomas", 
      "last_name": "Tirronen", 
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208"
  }
]