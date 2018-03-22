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
   return queryInterface.bulkInsert('Routines', routines, {});
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

var routines = [
  {
      "id": 1,
      "user_id": 1,
      "weekday": 0, // Monday
      "name": "Rinta + hauis + olkapäät",      
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208"
  },
  {
    "id": 2,       
    "user_id": 1,
    "weekday": 2, // Tuesday
    "name": "Etureidet + pakarat + pohkeet + vatsat",      
    "updatedAt": "2018-03-22T10:41:38.988208", 
    "createdAt": "2018-03-22T10:41:38.988208"
  },
  {
    "id": 3,     
    "user_id": 1,  
    "weekday": 4, // Thursday
    "name": "Ojentajat + olkapäät + rinta",      
    "updatedAt": "2018-03-22T10:41:38.988208", 
    "createdAt": "2018-03-22T10:41:38.988208"
  },
  {
    "id": 4,     
    "user_id": 1,  
    "weekday": 5, // Friday
    "name": "Selkä + takareidet + pakarat + hauis + pohkeet",      
    "updatedAt": "2018-03-22T10:41:38.988208", 
    "createdAt": "2018-03-22T10:41:38.988208"
  }
]