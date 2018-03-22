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
    return queryInterface.bulkInsert('Exercises', exercises, {});
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

var exercises = [
  {
      "id": 1,
      "routine_id": 1,
      "move_id": 645, 
      "sets": 4,
      "repetitions": 6,
      "weight": 65,
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208"
  },  
  {
    "id": 2,
    "routine_id": 1,
    "move_id": 14, 
    "sets": 2,
    "repetitions": 8,
    "weight": 50,
    "updatedAt": "2018-03-22T10:41:38.988208", 
    "createdAt": "2018-03-22T10:41:38.988208"
  },
  {
    "id": 3,
    "routine_id": 1,
    "move_id": 3, 
    "sets": 3,
    "repetitions": 10,
    "weight": 50,
    "updatedAt": "2018-03-22T10:41:38.988208", 
    "createdAt": "2018-03-22T10:41:38.988208"
  },
  {
    "id": 4,
    "routine_id": 1,
    "move_id": 147, 
    "sets": 3,
    "repetitions": 8,    
    "updatedAt": "2018-03-22T10:41:38.988208", 
    "createdAt": "2018-03-22T10:41:38.988208"
  },
  {
    "id": 5,
    "routine_id": 1,
    "move_id": 1063, 
    "sets": 2,
    "repetitions": 8,    
    "weight": 35,
    "updatedAt": "2018-03-22T10:41:38.988208", 
    "createdAt": "2018-03-22T10:41:38.988208"
  },
  {
    "id": 6,
    "routine_id": 1,
    "move_id": 1041, 
    "sets": 2,
    "repetitions": 12,
    "weight": 45,
    "updatedAt": "2018-03-22T10:41:38.988208", 
    "createdAt": "2018-03-22T10:41:38.988208"
  },
  {
    "id": 7,
    "routine_id": 1,
    "move_id": 756, 
    "sets": 3,
    "repetitions": 10,
    "weight": 10,
    "updatedAt": "2018-03-22T10:41:38.988208", 
    "createdAt": "2018-03-22T10:41:38.988208"
  }  
]