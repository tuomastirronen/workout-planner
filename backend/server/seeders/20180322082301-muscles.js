'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
  
      return queryInterface.bulkInsert('Muscles', muscles, {});
    
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

var muscles = [
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 1, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Chest"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 2, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Forearms"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 3, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Lats"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 4, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Middle Back"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 5, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Lower Back"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 6, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Neck"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 7, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Quadriceps"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 8, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Hamstrings"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 9, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Calves"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 10, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Triceps"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 11, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Traps"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 12, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Shoulders"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 13, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Abdominals"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 14, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Glutes"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 15, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Biceps"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 17, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Adductors"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "id": 18, 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "name": "Abductors"
  }
]