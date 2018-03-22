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

   return queryInterface.bulkInsert('Moves', moves, {});

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

var moves = [
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1, 
      "muscle_id": 1, 
      "name": "Dumbbell Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 2, 
      "muscle_id": 1, 
      "name": "Pushups"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 3, 
      "muscle_id": 1, 
      "name": "Dumbbell Flyes"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 4, 
      "muscle_id": 1, 
      "name": "Incline Dumbbell Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 5, 
      "muscle_id": 1, 
      "name": "Low Cable Crossover"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 6, 
      "muscle_id": 1, 
      "name": "Decline Dumbbell Flyes"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 7, 
      "muscle_id": 1, 
      "name": "Dips - Chest Version"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 8, 
      "muscle_id": 1, 
      "name": "Barbell Bench Press - Medium Grip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 9, 
      "muscle_id": 1, 
      "name": "Bodyweight Flyes"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 10, 
      "muscle_id": 1, 
      "name": "Incline Cable Flye"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 11, 
      "muscle_id": 1, 
      "name": "Wide-Grip Decline Barbell Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 12, 
      "muscle_id": 1, 
      "name": "Incline Dumbbell Press Reverse-Grip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 13, 
      "muscle_id": 1, 
      "name": "Wide-Grip Barbell Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 14, 
      "muscle_id": 1, 
      "name": "Decline Barbell Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 15, 
      "muscle_id": 1, 
      "name": "Incline Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 16, 
      "muscle_id": 1, 
      "name": "Incline Dumbbell Flyes"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 17, 
      "muscle_id": 1, 
      "name": "Cable Crossover"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 18, 
      "muscle_id": 1, 
      "name": "Neck Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 19, 
      "muscle_id": 1, 
      "name": "Drop Push"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 20, 
      "muscle_id": 1, 
      "name": "Barbell Incline Bench Press Medium-Grip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 21, 
      "muscle_id": 1, 
      "name": "Incline Push-Up Medium"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 22, 
      "muscle_id": 1, 
      "name": "Incline Cable Chest Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 23, 
      "muscle_id": 1, 
      "name": "Cable Chest Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 24, 
      "muscle_id": 1, 
      "name": "Dumbbell Bench Press with Neutral Grip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 25, 
      "muscle_id": 1, 
      "name": "Leverage Incline Chest Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 26, 
      "muscle_id": 1, 
      "name": "Single-Arm Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 27, 
      "muscle_id": 1, 
      "name": "Single-Arm Cable Crossover"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 28, 
      "muscle_id": 1, 
      "name": "Decline Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 29, 
      "muscle_id": 1, 
      "name": "Hammer Grip Incline DB Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 30, 
      "muscle_id": 1, 
      "name": "Pushups (Close and Wide Hand Positions)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 31, 
      "muscle_id": 1, 
      "name": "Push-Ups With Feet Elevated"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 32, 
      "muscle_id": 1, 
      "name": "Push-Ups With Feet On An Exercise Ball"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 33, 
      "muscle_id": 1, 
      "name": "Decline Dumbbell Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 34, 
      "muscle_id": 1, 
      "name": "Butterfly"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 35, 
      "muscle_id": 1, 
      "name": "One Arm Dumbbell Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 36, 
      "muscle_id": 1, 
      "name": "Leverage Chest Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 37, 
      "muscle_id": 1, 
      "name": "Incline Push-Up Wide"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 38, 
      "muscle_id": 1, 
      "name": "Straight-Arm Dumbbell Pullover"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 39, 
      "muscle_id": 1, 
      "name": "Isometric Wipers"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 40, 
      "muscle_id": 1, 
      "name": "Incline Dumbbell Bench With Palms Facing In"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 41, 
      "muscle_id": 1, 
      "name": "Clock Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 42, 
      "muscle_id": 1, 
      "name": "Decline Smith Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 43, 
      "muscle_id": 1, 
      "name": "Cable Iron Cross"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 44, 
      "muscle_id": 1, 
      "name": "Incline Dumbbell Flyes - With A Twist"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 45, 
      "muscle_id": 1, 
      "name": "Leverage Decline Chest Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 46, 
      "muscle_id": 1, 
      "name": "Push-Up Wide"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 47, 
      "muscle_id": 1, 
      "name": "Smith Machine Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 48, 
      "muscle_id": 1, 
      "name": "Cross Over - With Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 49, 
      "muscle_id": 1, 
      "name": "Front Raise And Pullover"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 50, 
      "muscle_id": 1, 
      "name": "Chest Push (multiple response)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 51, 
      "muscle_id": 1, 
      "name": "Incline Push-Up Depth Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 52, 
      "muscle_id": 1, 
      "name": "Bent-Arm Dumbbell Pullover"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 53, 
      "muscle_id": 1, 
      "name": "Standing Cable Chest Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 54, 
      "muscle_id": 1, 
      "name": "Machine Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 55, 
      "muscle_id": 1, 
      "name": "Smith Machine Incline Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 56, 
      "muscle_id": 1, 
      "name": "Plyo Kettlebell Pushups"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 57, 
      "muscle_id": 1, 
      "name": "Close-Hands Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 58, 
      "muscle_id": 1, 
      "name": "Around The Worlds"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 59, 
      "muscle_id": 1, 
      "name": "Tiger-Bend Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 60, 
      "muscle_id": 1, 
      "name": "Barbell Bench Press-Wide Grip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 61, 
      "muscle_id": 1, 
      "name": "Plyo Push-up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 62, 
      "muscle_id": 1, 
      "name": "Suspended Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 63, 
      "muscle_id": 1, 
      "name": "Flat Bench Cable Flyes"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 64, 
      "muscle_id": 1, 
      "name": "Wide-Grip Decline Barbell Pullover"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 65, 
      "muscle_id": 1, 
      "name": "Smith Machine Decline Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 66, 
      "muscle_id": 1, 
      "name": "Isometric Chest Squeezes"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 67, 
      "muscle_id": 1, 
      "name": "Push Up to Side Plank"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 68, 
      "muscle_id": 1, 
      "name": "Barbell Guillotine Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 69, 
      "muscle_id": 1, 
      "name": "Side To Side Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 70, 
      "muscle_id": 1, 
      "name": "One-Arm Flat Bench Dumbbell Flye"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 71, 
      "muscle_id": 1, 
      "name": "Extended Range One-Arm Kettlebell Floor Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 72, 
      "muscle_id": 1, 
      "name": "Alternating Floor Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 73, 
      "muscle_id": 1, 
      "name": "Forward Drag with Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 74, 
      "muscle_id": 1, 
      "name": "Medicine Ball Chest Pass"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 75, 
      "muscle_id": 1, 
      "name": "Dynamic Chest Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 76, 
      "muscle_id": 1, 
      "name": "Chain Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 77, 
      "muscle_id": 1, 
      "name": "Bench Press - With Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 78, 
      "muscle_id": 1, 
      "name": "Behind Head Chest Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 79, 
      "muscle_id": 1, 
      "name": "Elbows Back"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 80, 
      "muscle_id": 1, 
      "name": "Chest Stretch on Stability Ball"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 81, 
      "muscle_id": 1, 
      "name": "Chest And Front Of Shoulder Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 82, 
      "muscle_id": 1, 
      "name": "One-Arm Kettlebell Floor Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 83, 
      "muscle_id": 1, 
      "name": "Leg-Over Floor Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 84, 
      "muscle_id": 1, 
      "name": "Chest Push (single response)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 85, 
      "muscle_id": 1, 
      "name": "Incline Push-Up Reverse Grip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 86, 
      "muscle_id": 1, 
      "name": "Suspended Chest Fly"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 87, 
      "muscle_id": 1, 
      "name": "Staggered Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 88, 
      "muscle_id": 1, 
      "name": "Medicine-Ball Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 89, 
      "muscle_id": 1, 
      "name": "Suspended Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 90, 
      "muscle_id": 1, 
      "name": "Diamond Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 91, 
      "muscle_id": 1, 
      "name": "Typewriter Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 92, 
      "muscle_id": 1, 
      "name": "Clapping Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 93, 
      "muscle_id": 1, 
      "name": "Triple Clap Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 94, 
      "muscle_id": 1, 
      "name": "Weighted Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 95, 
      "muscle_id": 1, 
      "name": "One-Arm Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 96, 
      "muscle_id": 1, 
      "name": "Bar Throw And Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 97, 
      "muscle_id": 1, 
      "name": "Decline Explosive Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 98, 
      "muscle_id": 1, 
      "name": "Chest Push from 3 point stance"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 99, 
      "muscle_id": 1, 
      "name": "Chest Push with Run Release"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 100, 
      "muscle_id": 1, 
      "name": "Heavy Bag Thrust"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 101, 
      "muscle_id": 1, 
      "name": "Bench Press With Short Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 102, 
      "muscle_id": 1, 
      "name": "Bosu Ball Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 103, 
      "muscle_id": 1, 
      "name": "Hand Release Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 104, 
      "muscle_id": 1, 
      "name": "Svend Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 105, 
      "muscle_id": 1, 
      "name": "Wide-Hands Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 106, 
      "muscle_id": 1, 
      "name": "Dive Bomber Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 107, 
      "muscle_id": 1, 
      "name": "Weighted Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 108, 
      "muscle_id": 1, 
      "name": "Bar Push-Up Smith Machine"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 109, 
      "muscle_id": 1, 
      "name": "Burpee To Medicine Ball Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 110, 
      "muscle_id": 1, 
      "name": "Superman Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 111, 
      "muscle_id": 1, 
      "name": "Feet-Elevated TRX Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 112, 
      "muscle_id": 2, 
      "name": "Rickshaw Carry"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 113, 
      "muscle_id": 2, 
      "name": "Wrist Rotations with Straight Bar"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 114, 
      "muscle_id": 2, 
      "name": "Palms-Down Wrist Curl Over A Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 115, 
      "muscle_id": 2, 
      "name": "Palms-Up Barbell Wrist Curl Over A Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 116, 
      "muscle_id": 2, 
      "name": "Farmer's Walk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 117, 
      "muscle_id": 2, 
      "name": "Standing Palms-Up Barbell Behind The Back Wrist Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 118, 
      "muscle_id": 2, 
      "name": "Finger Curls"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 119, 
      "muscle_id": 2, 
      "name": "Seated Two-Arm Palms-Up Low-Pulley Wrist Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 120, 
      "muscle_id": 2, 
      "name": "Wrist Roller"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 121, 
      "muscle_id": 2, 
      "name": "Seated One-Arm Dumbbell Palms-Up Wrist Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 122, 
      "muscle_id": 2, 
      "name": "Seated Palms-Down Barbell Wrist Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 123, 
      "muscle_id": 2, 
      "name": "Dumbbell Lying Supination"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 124, 
      "muscle_id": 2, 
      "name": "Dumbbell Lying Pronation"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 125, 
      "muscle_id": 2, 
      "name": "Seated Palm-Up Barbell Wrist Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 126, 
      "muscle_id": 2, 
      "name": "Palms-Up Dumbbell Wrist Curl Over A Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 127, 
      "muscle_id": 2, 
      "name": "Standing Olympic Plate Hand Squeeze"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 128, 
      "muscle_id": 2, 
      "name": "Seated Dumbbell Palms-Down Wrist Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 129, 
      "muscle_id": 2, 
      "name": "Palms-Down Dumbbell Wrist Curl Over A Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 130, 
      "muscle_id": 2, 
      "name": "Plate Pinch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 131, 
      "muscle_id": 2, 
      "name": "Seated One-Arm Dumbbell Palms-Down Wrist Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 132, 
      "muscle_id": 2, 
      "name": "Bottoms-Up Clean From The Hang Position"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 133, 
      "muscle_id": 2, 
      "name": "Cable Wrist Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 134, 
      "muscle_id": 2, 
      "name": "Seated Dumbbell Palms-Up Wrist Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 135, 
      "muscle_id": 2, 
      "name": "Partner Farmer's Walk Competition"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 136, 
      "muscle_id": 2, 
      "name": "Kneeling Forearm Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 137, 
      "muscle_id": 2, 
      "name": "Wrist Circles"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 138, 
      "muscle_id": 2, 
      "name": "Partner Suitcase Carry Competition"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 139, 
      "muscle_id": 2, 
      "name": "Suitcase Dumbbell Carry"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 140, 
      "muscle_id": 3, 
      "name": "Weighted Pull Ups"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 141, 
      "muscle_id": 3, 
      "name": "Pullups"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 142, 
      "muscle_id": 3, 
      "name": "Chin-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 143, 
      "muscle_id": 3, 
      "name": "Rocky Pull-Ups/Pulldowns"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 144, 
      "muscle_id": 3, 
      "name": "V-Bar Pulldown"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 145, 
      "muscle_id": 3, 
      "name": "Muscle Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 146, 
      "muscle_id": 3, 
      "name": "Shotgun Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 147, 
      "muscle_id": 3, 
      "name": "Wide-Grip Pull-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 148, 
      "muscle_id": 3, 
      "name": "Close-Grip Front Lat Pulldown"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 149, 
      "muscle_id": 3, 
      "name": "V-Bar Pullup"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 150, 
      "muscle_id": 3, 
      "name": "Wide-Grip Rear Pull-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 151, 
      "muscle_id": 3, 
      "name": "Rope Straight-Arm Pulldown"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 152, 
      "muscle_id": 3, 
      "name": "Rope Climb"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 153, 
      "muscle_id": 3, 
      "name": "Wide-Grip Lat Pulldown"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 154, 
      "muscle_id": 3, 
      "name": "Underhand Cable Pulldowns"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 155, 
      "muscle_id": 3, 
      "name": "Gironda Sternum Chins"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 156, 
      "muscle_id": 3, 
      "name": "Side To Side Chins"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 157, 
      "muscle_id": 3, 
      "name": "Leverage Iso Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 158, 
      "muscle_id": 3, 
      "name": "Straight-Arm Pulldown"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 159, 
      "muscle_id": 3, 
      "name": "Elevated Cable Rows"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 160, 
      "muscle_id": 3, 
      "name": "Kneeling Single-Arm High Pulley Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 161, 
      "muscle_id": 3, 
      "name": "Neutral-Grip Pull Ups"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 162, 
      "muscle_id": 3, 
      "name": "Machine-Assisted Pull-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 163, 
      "muscle_id": 3, 
      "name": "Full Range-Of-Motion Lat Pulldown"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 164, 
      "muscle_id": 3, 
      "name": "Bent-Arm Barbell Pullover"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 165, 
      "muscle_id": 3, 
      "name": "Overhead Slam"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 166, 
      "muscle_id": 3, 
      "name": "Kneeling High Pulley Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 167, 
      "muscle_id": 3, 
      "name": "Band Assisted Pull-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 168, 
      "muscle_id": 3, 
      "name": "One Arm Lat Pulldown"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 169, 
      "muscle_id": 3, 
      "name": "Cable Incline Pushdown"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 170, 
      "muscle_id": 3, 
      "name": "Kipping Muscle Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 171, 
      "muscle_id": 3, 
      "name": "Wide-Grip Pulldown Behind The Neck"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 172, 
      "muscle_id": 3, 
      "name": "London Bridges"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 173, 
      "muscle_id": 3, 
      "name": "One Arm Against Wall"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 174, 
      "muscle_id": 3, 
      "name": "Catch and Overhead Throw"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 175, 
      "muscle_id": 3, 
      "name": "Dynamic Back Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 176, 
      "muscle_id": 3, 
      "name": "Latissimus Dorsi-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 177, 
      "muscle_id": 3, 
      "name": "One Handed Hang"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 178, 
      "muscle_id": 3, 
      "name": "Chair Lower Back Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 179, 
      "muscle_id": 3, 
      "name": "Overhead Lat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 180, 
      "muscle_id": 3, 
      "name": "Side-Lying Floor Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 181, 
      "muscle_id": 3, 
      "name": "Rockers (Pullover To Press) Straight Bar"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 182, 
      "muscle_id": 3, 
      "name": "Assisted Chin-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 183, 
      "muscle_id": 3, 
      "name": "Around The World Pull-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 184, 
      "muscle_id": 3, 
      "name": "Burpee Pull-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 185, 
      "muscle_id": 3, 
      "name": "Negative Pull-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 186, 
      "muscle_id": 3, 
      "name": "L-Sit Chin-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 187, 
      "muscle_id": 4, 
      "name": "T-Bar Row with Handle"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 188, 
      "muscle_id": 4, 
      "name": "Reverse Grip Bent-Over Rows"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 189, 
      "muscle_id": 4, 
      "name": "One-Arm Long Bar Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 190, 
      "muscle_id": 4, 
      "name": "One-Arm Dumbbell Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 191, 
      "muscle_id": 4, 
      "name": "Bent Over One-Arm Long Bar Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 192, 
      "muscle_id": 4, 
      "name": "T-Bar Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 193, 
      "muscle_id": 4, 
      "name": "Bent Over Two-Arm Long Bar Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 194, 
      "muscle_id": 4, 
      "name": "Dumbbell Incline Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 195, 
      "muscle_id": 4, 
      "name": "Bodyweight Mid Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 196, 
      "muscle_id": 4, 
      "name": "Bent Over Two-Dumbbell Row With Palms In"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 197, 
      "muscle_id": 4, 
      "name": "Seated Cable Rows"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 198, 
      "muscle_id": 4, 
      "name": "Bent Over Barbell Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 199, 
      "muscle_id": 4, 
      "name": "Alternating Renegade Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 200, 
      "muscle_id": 4, 
      "name": "Seated One-arm Cable Pulley Rows"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 201, 
      "muscle_id": 4, 
      "name": "Man Maker"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 202, 
      "muscle_id": 4, 
      "name": "Bent Over Two-Dumbbell Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 203, 
      "muscle_id": 4, 
      "name": "Middle Back Shrug"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 204, 
      "muscle_id": 4, 
      "name": "Yates Row Reverse Grip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 205, 
      "muscle_id": 4, 
      "name": "Mixed Grip Chin"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 206, 
      "muscle_id": 4, 
      "name": "One-Arm Kettlebell Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 207, 
      "muscle_id": 4, 
      "name": "Inverted Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 208, 
      "muscle_id": 4, 
      "name": "Pendlay Rown"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 209, 
      "muscle_id": 4, 
      "name": "Smith Machine Bent Over Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 210, 
      "muscle_id": 4, 
      "name": "Alternating Kettlebell Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 211, 
      "muscle_id": 4, 
      "name": "Lying T-Bar Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 212, 
      "muscle_id": 4, 
      "name": "Leverage High Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 213, 
      "muscle_id": 4, 
      "name": "Incline Bench Pull"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 214, 
      "muscle_id": 4, 
      "name": "Suspended Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 215, 
      "muscle_id": 4, 
      "name": "Two-Arm Kettlebell Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 216, 
      "muscle_id": 4, 
      "name": "Straight Bar Bench Mid Rows"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 217, 
      "muscle_id": 4, 
      "name": "Inverted Row with Straps"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 218, 
      "muscle_id": 4, 
      "name": "One Arm Chin-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 219, 
      "muscle_id": 4, 
      "name": "Lying Cambered Barbell Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 220, 
      "muscle_id": 4, 
      "name": "Rhomboids-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 221, 
      "muscle_id": 4, 
      "name": "Spinal Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 222, 
      "muscle_id": 4, 
      "name": "Upper Back Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 223, 
      "muscle_id": 4, 
      "name": "Middle Back Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 224, 
      "muscle_id": 4, 
      "name": "Partner Facing Side Plank With Band Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 225, 
      "muscle_id": 4, 
      "name": "Partner Facing Feet-Elevated Side Plank With Band Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 226, 
      "muscle_id": 4, 
      "name": "Single-Arm Landmine Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 227, 
      "muscle_id": 4, 
      "name": "Barbell Deadlift Bent Row Complex"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 228, 
      "muscle_id": 4, 
      "name": "Sled Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 229, 
      "muscle_id": 4, 
      "name": "Plate Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 230, 
      "muscle_id": 4, 
      "name": "Partner Facing Plank With Band Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 231, 
      "muscle_id": 4, 
      "name": "Yates Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 232, 
      "muscle_id": 5, 
      "name": "Atlas Stones"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 233, 
      "muscle_id": 5, 
      "name": "Deficit Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 234, 
      "muscle_id": 5, 
      "name": "Axle Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 235, 
      "muscle_id": 5, 
      "name": "Hyperextensions (Back Extensions)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 236, 
      "muscle_id": 5, 
      "name": "Hyperextensions With No Hyperextension Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 237, 
      "muscle_id": 5, 
      "name": "Deadlift with Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 238, 
      "muscle_id": 5, 
      "name": "Deadlift with Chains"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 239, 
      "muscle_id": 5, 
      "name": "Rack Pull with Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 240, 
      "muscle_id": 5, 
      "name": "Rack Pulls"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 241, 
      "muscle_id": 5, 
      "name": "Superman"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 242, 
      "muscle_id": 5, 
      "name": "Weighted Ball Hyperextension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 243, 
      "muscle_id": 5, 
      "name": "Seated Back Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 244, 
      "muscle_id": 5, 
      "name": "Stiff Leg Barbell Good Morning"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 245, 
      "muscle_id": 5, 
      "name": "Seated Good Mornings"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 246, 
      "muscle_id": 5, 
      "name": "Atlas Stone Trainer"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 247, 
      "muscle_id": 5, 
      "name": "Hug A Ball"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 248, 
      "muscle_id": 5, 
      "name": "Dancer's Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 249, 
      "muscle_id": 5, 
      "name": "Child's Pose"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 250, 
      "muscle_id": 5, 
      "name": "Pelvic Tilt Into Bridge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 251, 
      "muscle_id": 5, 
      "name": "Cat Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 252, 
      "muscle_id": 5, 
      "name": "Lower Back-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 253, 
      "muscle_id": 5, 
      "name": "Hug Knees To Chest"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 254, 
      "muscle_id": 5, 
      "name": "Crossover Reverse Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 255, 
      "muscle_id": 5, 
      "name": "Standing Pelvic Tilt"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 256, 
      "muscle_id": 5, 
      "name": "Pyramid"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 257, 
      "muscle_id": 5, 
      "name": "Keg Load"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 258, 
      "muscle_id": 5, 
      "name": "Reverse Band Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 259, 
      "muscle_id": 5, 
      "name": "Partner Supermans With Alternating High-Five"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 260, 
      "muscle_id": 5, 
      "name": "Partner Flat-Bench Back Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 261, 
      "muscle_id": 5, 
      "name": "Partner Flat-Bench Back Extension With Hold"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 262, 
      "muscle_id": 6, 
      "name": "Lying Face Down Plate Neck Resistance"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 263, 
      "muscle_id": 6, 
      "name": "Lying Face Up Plate Neck Resistance"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 264, 
      "muscle_id": 6, 
      "name": "Seated Head Harness Neck Resistance"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 265, 
      "muscle_id": 6, 
      "name": "Isometric Neck Exercise - Sides"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 266, 
      "muscle_id": 6, 
      "name": "Isometric Neck Exercise - Front And Back"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 267, 
      "muscle_id": 6, 
      "name": "Neck Bridge Prone"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 268, 
      "muscle_id": 6, 
      "name": "Side Neck Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 269, 
      "muscle_id": 6, 
      "name": "Chin To Chest Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 270, 
      "muscle_id": 6, 
      "name": "Neck-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 271, 
      "muscle_id": 7, 
      "name": "Single-Leg Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 272, 
      "muscle_id": 7, 
      "name": "Clean from Blocks"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 273, 
      "muscle_id": 7, 
      "name": "Barbell Full Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 274, 
      "muscle_id": 7, 
      "name": "Tire Flip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 275, 
      "muscle_id": 7, 
      "name": "Snatch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 276, 
      "muscle_id": 7, 
      "name": "Hang Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 277, 
      "muscle_id": 7, 
      "name": "Box Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 278, 
      "muscle_id": 7, 
      "name": "Reverse Band Box Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 279, 
      "muscle_id": 7, 
      "name": "Front Squats With Two Kettlebells"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 280, 
      "muscle_id": 7, 
      "name": "Single Leg Push-off"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 281, 
      "muscle_id": 7, 
      "name": "Rope Jumping"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 282, 
      "muscle_id": 7, 
      "name": "Barbell Walking Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 283, 
      "muscle_id": 7, 
      "name": "Olympic Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 284, 
      "muscle_id": 7, 
      "name": "Kettlebell Pistol Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 285, 
      "muscle_id": 7, 
      "name": "Step Mill"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 286, 
      "muscle_id": 7, 
      "name": "Narrow Stance Squats"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 287, 
      "muscle_id": 7, 
      "name": "Bear Crawl Sled Drags"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 288, 
      "muscle_id": 7, 
      "name": "Bodyweight Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 289, 
      "muscle_id": 7, 
      "name": "Box Squat with Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 290, 
      "muscle_id": 7, 
      "name": "Squat with Chains"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 291, 
      "muscle_id": 7, 
      "name": "Weighted Jump Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 292, 
      "muscle_id": 7, 
      "name": "Single-Leg High Box Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 293, 
      "muscle_id": 7, 
      "name": "Front Barbell Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 294, 
      "muscle_id": 7, 
      "name": "Bicycling"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 295, 
      "muscle_id": 7, 
      "name": "Rowing, Stationary"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 296, 
      "muscle_id": 7, 
      "name": "Barbell Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 297, 
      "muscle_id": 7, 
      "name": "Dumbbell Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 298, 
      "muscle_id": 7, 
      "name": "Side to Side Box Shuffle"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 299, 
      "muscle_id": 7, 
      "name": "Dumbbell Goblet Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 300, 
      "muscle_id": 7, 
      "name": "Dumbbell Lunges"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 301, 
      "muscle_id": 7, 
      "name": "Leg Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 302, 
      "muscle_id": 7, 
      "name": "Narrow Stance Hack Squats"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 303, 
      "muscle_id": 7, 
      "name": "Narrow Stance Leg Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 304, 
      "muscle_id": 7, 
      "name": "Elliptical Trainer"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 305, 
      "muscle_id": 7, 
      "name": "Stairmaster"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 306, 
      "muscle_id": 7, 
      "name": "Double Leg Butt Kick"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 307, 
      "muscle_id": 7, 
      "name": "Standing Long Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 308, 
      "muscle_id": 7, 
      "name": "Burpee"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 309, 
      "muscle_id": 7, 
      "name": "Barbell Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 310, 
      "muscle_id": 7, 
      "name": "Mountain Climbers"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 311, 
      "muscle_id": 7, 
      "name": "Bodyweight Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 312, 
      "muscle_id": 7, 
      "name": "Trap Bar Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 313, 
      "muscle_id": 7, 
      "name": "Chair Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 314, 
      "muscle_id": 7, 
      "name": "Machine Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 315, 
      "muscle_id": 7, 
      "name": "Dumbbell Rear Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 316, 
      "muscle_id": 7, 
      "name": "Goblet Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 317, 
      "muscle_id": 7, 
      "name": "Trail Running/Walking"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 318, 
      "muscle_id": 7, 
      "name": "Barbell Step Ups"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 319, 
      "muscle_id": 7, 
      "name": "Smith Machine Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 320, 
      "muscle_id": 7, 
      "name": "Split Squat with Dumbbells"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 321, 
      "muscle_id": 7, 
      "name": "One Leg Barbell Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 322, 
      "muscle_id": 7, 
      "name": "Scissors Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 323, 
      "muscle_id": 7, 
      "name": "Leg Extensions"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 324, 
      "muscle_id": 7, 
      "name": "Barbell Hack Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 325, 
      "muscle_id": 7, 
      "name": "Hang Clean - Below the Knees"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 326, 
      "muscle_id": 7, 
      "name": "Jumping Jacks"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 327, 
      "muscle_id": 7, 
      "name": "Hack Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 328, 
      "muscle_id": 7, 
      "name": "Freehand Jump Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 329, 
      "muscle_id": 7, 
      "name": "Weighted Sissy Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 330, 
      "muscle_id": 7, 
      "name": "Skating"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 331, 
      "muscle_id": 7, 
      "name": "Jog In Place"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 332, 
      "muscle_id": 7, 
      "name": "Running, Treadmill"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 333, 
      "muscle_id": 7, 
      "name": "Plie Dumbbell Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 334, 
      "muscle_id": 7, 
      "name": "Split Jerk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 335, 
      "muscle_id": 7, 
      "name": "Dumbbell Seated Box Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 336, 
      "muscle_id": 7, 
      "name": "Barbell Thruster"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 337, 
      "muscle_id": 7, 
      "name": "Bicycling, Stationary"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 338, 
      "muscle_id": 7, 
      "name": "Jogging-Treadmill"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 339, 
      "muscle_id": 7, 
      "name": "Bodyweight Reverse Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 340, 
      "muscle_id": 7, 
      "name": "Cable Hip Adduction"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 341, 
      "muscle_id": 7, 
      "name": "Recumbent Bike"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 342, 
      "muscle_id": 7, 
      "name": "Walking, Treadmill"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 343, 
      "muscle_id": 7, 
      "name": "Butt Kicks"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 344, 
      "muscle_id": 7, 
      "name": "Wide-Stance Barbell Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 345, 
      "muscle_id": 7, 
      "name": "Alien Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 346, 
      "muscle_id": 7, 
      "name": "Dumbbell Step Ups"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 347, 
      "muscle_id": 7, 
      "name": "Power Jerk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 348, 
      "muscle_id": 7, 
      "name": "Zercher Squats"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 349, 
      "muscle_id": 7, 
      "name": "Lying Machine Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 350, 
      "muscle_id": 7, 
      "name": "Jefferson Squats"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 351, 
      "muscle_id": 7, 
      "name": "Jerk Dip Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 352, 
      "muscle_id": 7, 
      "name": "Yoke Walk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 353, 
      "muscle_id": 7, 
      "name": "Rocket Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 354, 
      "muscle_id": 7, 
      "name": "Smith Machine Leg Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 355, 
      "muscle_id": 7, 
      "name": "Bodyweight Walking Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 356, 
      "muscle_id": 7, 
      "name": "Wall Ball Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 357, 
      "muscle_id": 7, 
      "name": "Depth Jump Leap"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 358, 
      "muscle_id": 7, 
      "name": "Overhead Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 359, 
      "muscle_id": 7, 
      "name": "Single-Leg Leg Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 360, 
      "muscle_id": 7, 
      "name": "Pistol Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 361, 
      "muscle_id": 7, 
      "name": "Barbell Side Split Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 362, 
      "muscle_id": 7, 
      "name": "Side Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 363, 
      "muscle_id": 7, 
      "name": "Walking High Knees"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 364, 
      "muscle_id": 7, 
      "name": "Speed Squats"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 365, 
      "muscle_id": 7, 
      "name": "Smith Single-Leg Split Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 366, 
      "muscle_id": 7, 
      "name": "Seated Leg Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 367, 
      "muscle_id": 7, 
      "name": "Kettlebell Curtsy Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 368, 
      "muscle_id": 7, 
      "name": "Frankenstein Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 369, 
      "muscle_id": 7, 
      "name": "Single Leg Butt Kick"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 370, 
      "muscle_id": 7, 
      "name": "Cable Deadlifts"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 371, 
      "muscle_id": 7, 
      "name": "Jump Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 372, 
      "muscle_id": 7, 
      "name": "One-Arm Side Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 373, 
      "muscle_id": 7, 
      "name": "Split Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 374, 
      "muscle_id": 7, 
      "name": "Bench Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 375, 
      "muscle_id": 7, 
      "name": "Barbell Squat To A Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 376, 
      "muscle_id": 7, 
      "name": "Dumbbell Walking Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 377, 
      "muscle_id": 7, 
      "name": "Front Cone Hops (or hurdle hops)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 378, 
      "muscle_id": 7, 
      "name": "Weighted Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 379, 
      "muscle_id": 7, 
      "name": "Clean Pull"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 380, 
      "muscle_id": 7, 
      "name": "Dumbbell Squat To A Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 381, 
      "muscle_id": 7, 
      "name": "90-Degree Jump Squat Twist"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 382, 
      "muscle_id": 7, 
      "name": "One-Arm Overhead Kettlebell Squats"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 383, 
      "muscle_id": 7, 
      "name": "Smith Machine Pistol Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 384, 
      "muscle_id": 7, 
      "name": "Bench Sprint"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 385, 
      "muscle_id": 7, 
      "name": "Wide-Stance Leg Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 386, 
      "muscle_id": 7, 
      "name": "Backward Drag"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 387, 
      "muscle_id": 7, 
      "name": "Alternate Leg Diagonal Bound"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 388, 
      "muscle_id": 7, 
      "name": "Sled Push"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 389, 
      "muscle_id": 7, 
      "name": "Squat with Plate Movers"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 390, 
      "muscle_id": 7, 
      "name": "Suspended Split Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 391, 
      "muscle_id": 7, 
      "name": "Intermediate Hip Flexor and Quad Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 392, 
      "muscle_id": 7, 
      "name": "Sit Squats"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 393, 
      "muscle_id": 7, 
      "name": "Squats - With Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 394, 
      "muscle_id": 7, 
      "name": "Fast Skipping"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 395, 
      "muscle_id": 7, 
      "name": "Kneeling Hip Flexor"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 396, 
      "muscle_id": 7, 
      "name": "Quadriceps-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 397, 
      "muscle_id": 7, 
      "name": "Front Barbell Squat To A Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 398, 
      "muscle_id": 7, 
      "name": "Iron Crosses (stretch)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 399, 
      "muscle_id": 7, 
      "name": "All Fours Quad Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 400, 
      "muscle_id": 7, 
      "name": "Quad Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 401, 
      "muscle_id": 7, 
      "name": "One Half Locust"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 402, 
      "muscle_id": 7, 
      "name": "Standing Hip Flexors"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 403, 
      "muscle_id": 7, 
      "name": "Looking At Ceiling"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 404, 
      "muscle_id": 7, 
      "name": "Frog Hops"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 405, 
      "muscle_id": 7, 
      "name": "Rear Leg Raises"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 406, 
      "muscle_id": 7, 
      "name": "On Your Side Quad Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 407, 
      "muscle_id": 7, 
      "name": "On-Your-Back Quad Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 408, 
      "muscle_id": 7, 
      "name": "Standing Elevated Quad Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 409, 
      "muscle_id": 7, 
      "name": "Box Squat with Chains"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 410, 
      "muscle_id": 7, 
      "name": "Car Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 411, 
      "muscle_id": 7, 
      "name": "Squat with Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 412, 
      "muscle_id": 7, 
      "name": "Sandbag Load"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 413, 
      "muscle_id": 7, 
      "name": "Sled Drag - Harness"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 414, 
      "muscle_id": 7, 
      "name": "Squat Jerk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 415, 
      "muscle_id": 7, 
      "name": "Snatch from Blocks"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 416, 
      "muscle_id": 7, 
      "name": "Split Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 417, 
      "muscle_id": 7, 
      "name": "Reverse Band Power Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 418, 
      "muscle_id": 7, 
      "name": "Side Hop-Sprint"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 419, 
      "muscle_id": 7, 
      "name": "Single-Leg Hop Progression"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 420, 
      "muscle_id": 7, 
      "name": "Stride Jump Crossover"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 421, 
      "muscle_id": 7, 
      "name": "Hip Flexion with Band"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 422, 
      "muscle_id": 7, 
      "name": "Side Standing Long Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 423, 
      "muscle_id": 7, 
      "name": "Single-Cone Sprint Drill"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 424, 
      "muscle_id": 7, 
      "name": "Linear Depth Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 425, 
      "muscle_id": 7, 
      "name": "Elevated Back Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 426, 
      "muscle_id": 7, 
      "name": "Lunge Sprint"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 427, 
      "muscle_id": 7, 
      "name": "Single Arm Overhead Kettlebell Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 428, 
      "muscle_id": 7, 
      "name": "Slow Jog"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 429, 
      "muscle_id": 7, 
      "name": "Defensive Slide"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 430, 
      "muscle_id": 7, 
      "name": "Square Hop"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 431, 
      "muscle_id": 7, 
      "name": "Lateral Speed Step"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 432, 
      "muscle_id": 7, 
      "name": "Dumbbell Overhead Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 433, 
      "muscle_id": 7, 
      "name": "Single-Arm Dumbbell Overhead Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 434, 
      "muscle_id": 7, 
      "name": "Single-Leg Box Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 435, 
      "muscle_id": 7, 
      "name": "Burpee Over Barbell"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 436, 
      "muscle_id": 7, 
      "name": "Kettlebell Sumo Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 437, 
      "muscle_id": 7, 
      "name": "Barbell Reverse Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 438, 
      "muscle_id": 7, 
      "name": "Close-Stance Dumbbell Front Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 439, 
      "muscle_id": 7, 
      "name": "Double Under"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 440, 
      "muscle_id": 7, 
      "name": "Jumping Jack"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 441, 
      "muscle_id": 7, 
      "name": "Sprawl Frog Kick"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 442, 
      "muscle_id": 7, 
      "name": "Kettlebell Side Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 443, 
      "muscle_id": 7, 
      "name": "Kettlebell Thruster Progression"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 444, 
      "muscle_id": 7, 
      "name": "Running Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 445, 
      "muscle_id": 7, 
      "name": "Southpaw Sprawl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 446, 
      "muscle_id": 7, 
      "name": "Lunge Heel Kick"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 447, 
      "muscle_id": 7, 
      "name": "Gorilla Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 448, 
      "muscle_id": 7, 
      "name": "Burppe Box Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 449, 
      "muscle_id": 7, 
      "name": "Dumbbell Squat Snatch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 450, 
      "muscle_id": 7, 
      "name": "Thigh Killa"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 451, 
      "muscle_id": 7, 
      "name": "Lying Prone Quadriceps"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 452, 
      "muscle_id": 7, 
      "name": "Conan's Wheel"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 453, 
      "muscle_id": 7, 
      "name": "Heaving Snatch Balance"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 454, 
      "muscle_id": 7, 
      "name": "Snatch Balance"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 455, 
      "muscle_id": 7, 
      "name": "Rickshaw Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 456, 
      "muscle_id": 7, 
      "name": "Power Snatch from Blocks"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 457, 
      "muscle_id": 7, 
      "name": "Quick Leap"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 458, 
      "muscle_id": 7, 
      "name": "Single-Leg Lateral Hop"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 459, 
      "muscle_id": 7, 
      "name": "Single-Leg Stride Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 460, 
      "muscle_id": 7, 
      "name": "Star Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 461, 
      "muscle_id": 7, 
      "name": "Leverage Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 462, 
      "muscle_id": 7, 
      "name": "Speed Box Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 463, 
      "muscle_id": 7, 
      "name": "Feet Jack"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 464, 
      "muscle_id": 7, 
      "name": "Fast Kick With Arm Circles"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 465, 
      "muscle_id": 7, 
      "name": "Football Up-Down"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 466, 
      "muscle_id": 7, 
      "name": "Jump Lunge To Feet Jack"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 467, 
      "muscle_id": 7, 
      "name": "Vertical Mountain Climber"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 468, 
      "muscle_id": 7, 
      "name": "Slide Jump Shot"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 469, 
      "muscle_id": 7, 
      "name": "High Knee Jog"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 470, 
      "muscle_id": 7, 
      "name": "Front-To-Back Squat With Belt"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 471, 
      "muscle_id": 7, 
      "name": "Bosu Ball Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 472, 
      "muscle_id": 7, 
      "name": "Forward Band Walk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 473, 
      "muscle_id": 7, 
      "name": "Barbell Squat To A Box"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 474, 
      "muscle_id": 7, 
      "name": "Ice Skater"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 475, 
      "muscle_id": 7, 
      "name": "Split Squat With Kettlebells"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 476, 
      "muscle_id": 7, 
      "name": "Walking Lunge With Overhead Weight"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 477, 
      "muscle_id": 7, 
      "name": "Front Squat Push Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 478, 
      "muscle_id": 7, 
      "name": "Front Squat (Bodybuilder)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 479, 
      "muscle_id": 7, 
      "name": "Front Squat (Clean Grip)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 480, 
      "muscle_id": 7, 
      "name": "Single-Leg Squat To Box"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 481, 
      "muscle_id": 7, 
      "name": "Single-Leg Skater Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 482, 
      "muscle_id": 7, 
      "name": "Wall Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 483, 
      "muscle_id": 7, 
      "name": "Pop Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 484, 
      "muscle_id": 7, 
      "name": "Trap Bar Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 485, 
      "muscle_id": 7, 
      "name": "Dumbbell Lunge and Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 486, 
      "muscle_id": 7, 
      "name": "Dumbbell Jump Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 487, 
      "muscle_id": 7, 
      "name": "Lateral Hop Holding Dumbbells"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 488, 
      "muscle_id": 7, 
      "name": "Dumbbell Front Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 489, 
      "muscle_id": 7, 
      "name": "Lateral Hop 4 Times To Sprint"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 490, 
      "muscle_id": 7, 
      "name": "Wide-Stance Jump Squat To Close-Stance"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 491, 
      "muscle_id": 7, 
      "name": "Barbell Front-To-Back Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 492, 
      "muscle_id": 7, 
      "name": "Dumbbell Pistol Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 493, 
      "muscle_id": 7, 
      "name": "Dumbbell Alternating Lunge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 494, 
      "muscle_id": 7, 
      "name": "Side Lunge Touching Heel"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 495, 
      "muscle_id": 7, 
      "name": "Jumping Knee Up Down"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 496, 
      "muscle_id": 7, 
      "name": "Burpee Tuck Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 497, 
      "muscle_id": 7, 
      "name": "Wall Sprawl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 498, 
      "muscle_id": 7, 
      "name": "Medicine Ball Ninja"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 499, 
      "muscle_id": 7, 
      "name": "Kettlebell Fire Feet"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 500, 
      "muscle_id": 7, 
      "name": "Reverse Burpee"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 501, 
      "muscle_id": 7, 
      "name": "Kettlebell Squat Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 502, 
      "muscle_id": 7, 
      "name": "Burpee Box Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 503, 
      "muscle_id": 8, 
      "name": "Romanian Deadlift With Dumbbells"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 504, 
      "muscle_id": 8, 
      "name": "Clean Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 505, 
      "muscle_id": 8, 
      "name": "Barbell Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 506, 
      "muscle_id": 8, 
      "name": "Sumo Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 507, 
      "muscle_id": 8, 
      "name": "Power Snatch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 508, 
      "muscle_id": 8, 
      "name": "Romanian Deadlift from Deficit"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 509, 
      "muscle_id": 8, 
      "name": "Power Clean from Blocks"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 510, 
      "muscle_id": 8, 
      "name": "Floor Glute-Ham Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 511, 
      "muscle_id": 8, 
      "name": "Natural Glute Ham Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 512, 
      "muscle_id": 8, 
      "name": "Lying Leg Curls"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 513, 
      "muscle_id": 8, 
      "name": "Snatch Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 514, 
      "muscle_id": 8, 
      "name": "Ball Leg Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 515, 
      "muscle_id": 8, 
      "name": "Stiff-Legged Dumbbell Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 516, 
      "muscle_id": 8, 
      "name": "Power Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 517, 
      "muscle_id": 8, 
      "name": "Hang Snatch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 518, 
      "muscle_id": 8, 
      "name": "Lunge Pass Through"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 519, 
      "muscle_id": 8, 
      "name": "One-Arm Kettlebell Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 520, 
      "muscle_id": 8, 
      "name": "Kettlebell One-Legged Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 521, 
      "muscle_id": 8, 
      "name": "Front Box Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 522, 
      "muscle_id": 8, 
      "name": "Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 523, 
      "muscle_id": 8, 
      "name": "Good Morning"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 524, 
      "muscle_id": 8, 
      "name": "Wide Stance Stiff Legs"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 525, 
      "muscle_id": 8, 
      "name": "Front Leg Raises"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 526, 
      "muscle_id": 8, 
      "name": "Glute Ham Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 527, 
      "muscle_id": 8, 
      "name": "Band Good Morning (Pull Through)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 528, 
      "muscle_id": 8, 
      "name": "Linear Acceleration Wall Drill"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 529, 
      "muscle_id": 8, 
      "name": "Stiff-Legged Barbell Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 530, 
      "muscle_id": 8, 
      "name": "Dumbbell Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 531, 
      "muscle_id": 8, 
      "name": "Single Leg Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 532, 
      "muscle_id": 8, 
      "name": "Box Jump (Multiple Response)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 533, 
      "muscle_id": 8, 
      "name": "Knee Tuck Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 534, 
      "muscle_id": 8, 
      "name": "Romanian Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 535, 
      "muscle_id": 8, 
      "name": "Romanian Deadlift with Kettlebell"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 536, 
      "muscle_id": 8, 
      "name": "Reverse Hyperextension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 537, 
      "muscle_id": 8, 
      "name": "Seated Leg Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 538, 
      "muscle_id": 8, 
      "name": "Band Good Morning"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 539, 
      "muscle_id": 8, 
      "name": "Leg-Up Hamstring Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 540, 
      "muscle_id": 8, 
      "name": "Sumo Deadlift with Chains"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 541, 
      "muscle_id": 8, 
      "name": "Vertical Swing"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 542, 
      "muscle_id": 8, 
      "name": "Inchworm"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 543, 
      "muscle_id": 8, 
      "name": "Standing Leg Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 544, 
      "muscle_id": 8, 
      "name": "One-Arm Kettlebell Swings"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 545, 
      "muscle_id": 8, 
      "name": "Prowler Sprint"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 546, 
      "muscle_id": 8, 
      "name": "Moving Claw Series"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 547, 
      "muscle_id": 8, 
      "name": "Smith Machine Stiff-Legged Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 548, 
      "muscle_id": 8, 
      "name": "Standing Toe Touches"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 549, 
      "muscle_id": 8, 
      "name": "Intermediate Groin Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 550, 
      "muscle_id": 8, 
      "name": "Standing Hamstring and Calf Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 551, 
      "muscle_id": 8, 
      "name": "Lying Hamstring"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 552, 
      "muscle_id": 8, 
      "name": "Hamstring Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 553, 
      "muscle_id": 8, 
      "name": "Smith Machine Hang Power Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 554, 
      "muscle_id": 8, 
      "name": "Hamstring-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 555, 
      "muscle_id": 8, 
      "name": "Upper Back-Leg Grab"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 556, 
      "muscle_id": 8, 
      "name": "Kettlebell Dead Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 557, 
      "muscle_id": 8, 
      "name": "Seated Hamstring"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 558, 
      "muscle_id": 8, 
      "name": "Seated Floor Hamstring Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 559, 
      "muscle_id": 8, 
      "name": "90/90 Hamstring"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 560, 
      "muscle_id": 8, 
      "name": "Alternating Hang Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 561, 
      "muscle_id": 8, 
      "name": "World's Greatest Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 562, 
      "muscle_id": 8, 
      "name": "The Straddle"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 563, 
      "muscle_id": 8, 
      "name": "Split Squats"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 564, 
      "muscle_id": 8, 
      "name": "Runner's Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 565, 
      "muscle_id": 8, 
      "name": "Chair Leg Extended Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 566, 
      "muscle_id": 8, 
      "name": "Kettlebell Hang Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 567, 
      "muscle_id": 8, 
      "name": "Double Kettlebell Alternating Hang Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 568, 
      "muscle_id": 8, 
      "name": "Seated Hamstring and Calf Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 569, 
      "muscle_id": 8, 
      "name": "Good Morning off Pins"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 570, 
      "muscle_id": 8, 
      "name": "Hang Snatch - Below Knees"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 571, 
      "muscle_id": 8, 
      "name": "Muscle Snatch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 572, 
      "muscle_id": 8, 
      "name": "Sumo Deadlift with Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 573, 
      "muscle_id": 8, 
      "name": "Reverse Band Sumo Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 574, 
      "muscle_id": 8, 
      "name": "Hurdle Hops"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 575, 
      "muscle_id": 8, 
      "name": "Linear 3-Part Start Technique"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 576, 
      "muscle_id": 8, 
      "name": "Seated Band Hamstring Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 577, 
      "muscle_id": 8, 
      "name": "Stiff-Legged Deadlift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 578, 
      "muscle_id": 8, 
      "name": "Suspended Leg Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 579, 
      "muscle_id": 8, 
      "name": "Open Palm Kettlebell Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 580, 
      "muscle_id": 8, 
      "name": "One-Arm Open Palm Kettlebell Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 581, 
      "muscle_id": 8, 
      "name": "Hanging Bar Good Morning"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 582, 
      "muscle_id": 8, 
      "name": "Power Stairs"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 583, 
      "muscle_id": 8, 
      "name": "Snatch Pull"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 584, 
      "muscle_id": 8, 
      "name": "Split Snatch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 585, 
      "muscle_id": 8, 
      "name": "Box Skip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 586, 
      "muscle_id": 8, 
      "name": "Platform Hamstring Slides"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 587, 
      "muscle_id": 8, 
      "name": "Prone Manual Hamstring"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 588, 
      "muscle_id": 8, 
      "name": "Alternating Leg Swing"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 589, 
      "muscle_id": 8, 
      "name": "Single-Leg Balance"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 590, 
      "muscle_id": 8, 
      "name": "High Kick"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 591, 
      "muscle_id": 8, 
      "name": "Knee To Chest"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 592, 
      "muscle_id": 8, 
      "name": "Hip Stretch With Twist"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 593, 
      "muscle_id": 9, 
      "name": "Smith Machine Calf Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 594, 
      "muscle_id": 9, 
      "name": "Standing Calf Raises"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 595, 
      "muscle_id": 9, 
      "name": "Standing Dumbbell Calf Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 596, 
      "muscle_id": 9, 
      "name": "Seated Calf Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 597, 
      "muscle_id": 9, 
      "name": "Rocking Standing Calf Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 598, 
      "muscle_id": 9, 
      "name": "Calf Press On The Leg Press Machine"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 599, 
      "muscle_id": 9, 
      "name": "Calf Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 600, 
      "muscle_id": 9, 
      "name": "Standing Barbell Calf Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 601, 
      "muscle_id": 9, 
      "name": "Barbell Seated Calf Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 602, 
      "muscle_id": 9, 
      "name": "Balance Board"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 603, 
      "muscle_id": 9, 
      "name": "Donkey Calf Raises"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 604, 
      "muscle_id": 9, 
      "name": "Smith Machine Reverse Calf Raises"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 605, 
      "muscle_id": 9, 
      "name": "Dumbbell Seated One-Leg Calf Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 606, 
      "muscle_id": 9, 
      "name": "Ankle Circles"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 607, 
      "muscle_id": 9, 
      "name": "Peroneals-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 608, 
      "muscle_id": 9, 
      "name": "Knee Circles"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 609, 
      "muscle_id": 9, 
      "name": "Calves-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 610, 
      "muscle_id": 9, 
      "name": "Standing Gastrocnemius Calf Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 611, 
      "muscle_id": 9, 
      "name": "Calf Stretch Hands Against Wall"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 612, 
      "muscle_id": 9, 
      "name": "Anterior Tibialis-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 613, 
      "muscle_id": 9, 
      "name": "Calf Stretch Elbows Against Wall"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 614, 
      "muscle_id": 9, 
      "name": "Calf Raises - With Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 615, 
      "muscle_id": 9, 
      "name": "Calf Raise On A Dumbbell"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 616, 
      "muscle_id": 9, 
      "name": "Standing Soleus And Achilles Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 617, 
      "muscle_id": 9, 
      "name": "Seated Calf Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 618, 
      "muscle_id": 9, 
      "name": "Peroneals Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 619, 
      "muscle_id": 9, 
      "name": "Foot-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 620, 
      "muscle_id": 9, 
      "name": "Posterior Tibialis Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 621, 
      "muscle_id": 10, 
      "name": "Dips - Triceps Version"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 622, 
      "muscle_id": 10, 
      "name": "Decline EZ Bar Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 623, 
      "muscle_id": 10, 
      "name": "Dumbbell Floor Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 624, 
      "muscle_id": 10, 
      "name": "Close-Grip Barbell Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 625, 
      "muscle_id": 10, 
      "name": "Triceps Pushdown - V-Bar Attachment"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 626, 
      "muscle_id": 10, 
      "name": "Weighted Bench Dip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 627, 
      "muscle_id": 10, 
      "name": "Kneeling Cable Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 628, 
      "muscle_id": 10, 
      "name": "Reverse Grip Triceps Pushdown"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 629, 
      "muscle_id": 10, 
      "name": "Standing Dumbbell Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 630, 
      "muscle_id": 10, 
      "name": "Push-Ups - Close Triceps Position"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 631, 
      "muscle_id": 10, 
      "name": "EZ-Bar Skullcrusher"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 632, 
      "muscle_id": 10, 
      "name": "Triceps Pushdown - Rope Attachment"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 633, 
      "muscle_id": 10, 
      "name": "Cable One Arm Tricep Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 634, 
      "muscle_id": 10, 
      "name": "Decline Close-Grip Bench To Skull Crusher"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 635, 
      "muscle_id": 10, 
      "name": "Seated Triceps Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 636, 
      "muscle_id": 10, 
      "name": "Incline Barbell Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 637, 
      "muscle_id": 10, 
      "name": "Close-Grip EZ-Bar Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 638, 
      "muscle_id": 10, 
      "name": "Dip Machine"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 639, 
      "muscle_id": 10, 
      "name": "Tricep Dumbbell Kickback"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 640, 
      "muscle_id": 10, 
      "name": "Standing Bent-Over Two-Arm Dumbbell Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 641, 
      "muscle_id": 10, 
      "name": "Ring Dips"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 642, 
      "muscle_id": 10, 
      "name": "Parallel Bar Dip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 643, 
      "muscle_id": 10, 
      "name": "Bench Dips"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 644, 
      "muscle_id": 10, 
      "name": "Lying Close-Grip Barbell Triceps Extension Behind The Head"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 645, 
      "muscle_id": 10, 
      "name": "Bench Press - Powerlifting"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 646, 
      "muscle_id": 10, 
      "name": "Cable Lying Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 647, 
      "muscle_id": 10, 
      "name": "Standing Overhead Barbell Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 648, 
      "muscle_id": 10, 
      "name": "Triceps Overhead Extension with Rope"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 649, 
      "muscle_id": 10, 
      "name": "JM Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 650, 
      "muscle_id": 10, 
      "name": "Triceps Pushdown"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 651, 
      "muscle_id": 10, 
      "name": "Decline Dumbbell Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 652, 
      "muscle_id": 10, 
      "name": "Dumbbell One-Arm Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 653, 
      "muscle_id": 10, 
      "name": "Lying Dumbbell Tricep Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 654, 
      "muscle_id": 10, 
      "name": "Band Skull Crusher"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 655, 
      "muscle_id": 10, 
      "name": "One Arm Pronated Dumbbell Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 656, 
      "muscle_id": 10, 
      "name": "One Arm Supinated Dumbbell Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 657, 
      "muscle_id": 10, 
      "name": "Reverse Triceps Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 658, 
      "muscle_id": 10, 
      "name": "Chain Handle Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 659, 
      "muscle_id": 10, 
      "name": "Standing One-Arm Dumbbell Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 660, 
      "muscle_id": 10, 
      "name": "Floor Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 661, 
      "muscle_id": 10, 
      "name": "Bench Press with Chains"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 662, 
      "muscle_id": 10, 
      "name": "Cobra Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 663, 
      "muscle_id": 10, 
      "name": "Body Tricep Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 664, 
      "muscle_id": 10, 
      "name": "Low Cable Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 665, 
      "muscle_id": 10, 
      "name": "Seated Bent-Over Two-Arm Dumbbell Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 666, 
      "muscle_id": 10, 
      "name": "Supine Chest Throw"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 667, 
      "muscle_id": 10, 
      "name": "Cable Rope Overhead Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 668, 
      "muscle_id": 10, 
      "name": "Tate Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 669, 
      "muscle_id": 10, 
      "name": "Close-Grip Dumbbell Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 670, 
      "muscle_id": 10, 
      "name": "Lying Triceps Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 671, 
      "muscle_id": 10, 
      "name": "Lying Close-Grip Barbell Triceps Press To Chin"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 672, 
      "muscle_id": 10, 
      "name": "Standing Low-Pulley One-Arm Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 673, 
      "muscle_id": 10, 
      "name": "Body-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 674, 
      "muscle_id": 10, 
      "name": "Smith Machine Close-Grip Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 675, 
      "muscle_id": 10, 
      "name": "Standing Bent-Over One-Arm Dumbbell Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 676, 
      "muscle_id": 10, 
      "name": "Board Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 677, 
      "muscle_id": 10, 
      "name": "Seated Bent-Over One-Arm Dumbbell Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 678, 
      "muscle_id": 10, 
      "name": "Machine Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 679, 
      "muscle_id": 10, 
      "name": "Incline Push-Up Close-Grip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 680, 
      "muscle_id": 10, 
      "name": "One Arm Floor Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 681, 
      "muscle_id": 10, 
      "name": "Close-Grip Push-Up off of a Dumbbell"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 682, 
      "muscle_id": 10, 
      "name": "Cable Incline Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 683, 
      "muscle_id": 10, 
      "name": "Pin Presses"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 684, 
      "muscle_id": 10, 
      "name": "Standing Towel Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 685, 
      "muscle_id": 10, 
      "name": "Dumbbell Tricep Extension -Pronated Grip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 686, 
      "muscle_id": 10, 
      "name": "Tricep Side Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 687, 
      "muscle_id": 10, 
      "name": "Triceps Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 688, 
      "muscle_id": 10, 
      "name": "Overhead Triceps"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 689, 
      "muscle_id": 10, 
      "name": "Floor Press with Chains"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 690, 
      "muscle_id": 10, 
      "name": "Speed Band Overhead Triceps"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 691, 
      "muscle_id": 10, 
      "name": "Sled Overhead Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 692, 
      "muscle_id": 10, 
      "name": "JM Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 693, 
      "muscle_id": 10, 
      "name": "JM Press With Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 694, 
      "muscle_id": 10, 
      "name": "Triceps Plank Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 695, 
      "muscle_id": 10, 
      "name": "V-Sit Dumbbell Triceps Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 696, 
      "muscle_id": 10, 
      "name": "Reverse Band Bench Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 697, 
      "muscle_id": 10, 
      "name": "Suspended Triceps Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 698, 
      "muscle_id": 10, 
      "name": "Body Triceps Press Using Flat Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 699, 
      "muscle_id": 10, 
      "name": "Russian Bar Dip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 700, 
      "muscle_id": 11, 
      "name": "Smith Machine Shrug"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 701, 
      "muscle_id": 11, 
      "name": "Leverage Shrug"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 702, 
      "muscle_id": 11, 
      "name": "Standing Dumbbell Upright Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 703, 
      "muscle_id": 11, 
      "name": "Kettlebell Sumo High Pull"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 704, 
      "muscle_id": 11, 
      "name": "Dumbbell Shrug"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 705, 
      "muscle_id": 11, 
      "name": "Calf-Machine Shoulder Shrug"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 706, 
      "muscle_id": 11, 
      "name": "Barbell Shrug"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 707, 
      "muscle_id": 11, 
      "name": "Barbell Shrug Behind The Back"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 708, 
      "muscle_id": 11, 
      "name": "Upright Cable Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 709, 
      "muscle_id": 11, 
      "name": "Cable Shrugs"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 710, 
      "muscle_id": 11, 
      "name": "Upright Row - With Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 711, 
      "muscle_id": 11, 
      "name": "Smith Machine Behind the Back Shrug"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 712, 
      "muscle_id": 11, 
      "name": "Smith Machine Upright Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 713, 
      "muscle_id": 11, 
      "name": "Clean Shrug"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 714, 
      "muscle_id": 11, 
      "name": "Scapular Pull-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 715, 
      "muscle_id": 11, 
      "name": "Snatch Shrug"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 716, 
      "muscle_id": 12, 
      "name": "Single-Arm Linear Jammer"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 717, 
      "muscle_id": 12, 
      "name": "Side Laterals to Front Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 718, 
      "muscle_id": 12, 
      "name": "Standing Palm-In One-Arm Dumbbell Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 719, 
      "muscle_id": 12, 
      "name": "Clean and Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 720, 
      "muscle_id": 12, 
      "name": "Push Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 721, 
      "muscle_id": 12, 
      "name": "Clean and Jerk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 722, 
      "muscle_id": 12, 
      "name": "Standing Palms-In Dumbbell Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 723, 
      "muscle_id": 12, 
      "name": "Standing Military Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 724, 
      "muscle_id": 12, 
      "name": "One-Arm Kettlebell Push Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 725, 
      "muscle_id": 12, 
      "name": "Seated Barbell Military Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 726, 
      "muscle_id": 12, 
      "name": "One-Arm Side Laterals"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 727, 
      "muscle_id": 12, 
      "name": "Power Partials"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 728, 
      "muscle_id": 12, 
      "name": "Seated Dumbbell Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 729, 
      "muscle_id": 12, 
      "name": "Standing Dumbbell Straight-Arm Front Delt Raise Above Head"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 730, 
      "muscle_id": 12, 
      "name": "Reverse Flyes"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 731, 
      "muscle_id": 12, 
      "name": "Standing Dumbbell Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 732, 
      "muscle_id": 12, 
      "name": "Dumbbell Lying One-Arm Rear Lateral Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 733, 
      "muscle_id": 12, 
      "name": "Front Dumbbell Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 734, 
      "muscle_id": 12, 
      "name": "Alternating Deltoid Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 735, 
      "muscle_id": 12, 
      "name": "Dumbbell Shoulder Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 736, 
      "muscle_id": 12, 
      "name": "Single Dumbbell Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 737, 
      "muscle_id": 12, 
      "name": "Car Drivers"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 738, 
      "muscle_id": 12, 
      "name": "Standing Alternating Dumbbell Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 739, 
      "muscle_id": 12, 
      "name": "Snatch-Grip Behind-The-Neck Overhead Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 740, 
      "muscle_id": 12, 
      "name": "Smith Machine Overhead Shoulder Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 741, 
      "muscle_id": 12, 
      "name": "Arnold Dumbbell Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 742, 
      "muscle_id": 12, 
      "name": "Leverage Shoulder Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 743, 
      "muscle_id": 12, 
      "name": "Front Plate Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 744, 
      "muscle_id": 12, 
      "name": "Dumbbell One-Arm Shoulder Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 745, 
      "muscle_id": 12, 
      "name": "Front Two-Dumbbell Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 746, 
      "muscle_id": 12, 
      "name": "Front Cable Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 747, 
      "muscle_id": 12, 
      "name": "Handstand Push-Ups"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 748, 
      "muscle_id": 12, 
      "name": "External Rotation with Cable"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 749, 
      "muscle_id": 12, 
      "name": "Front Incline Dumbbell Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 750, 
      "muscle_id": 12, 
      "name": "Barbell Shoulder Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 751, 
      "muscle_id": 12, 
      "name": "Two-Arm Kettlebell Military Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 752, 
      "muscle_id": 12, 
      "name": "Standing Bradford Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 753, 
      "muscle_id": 12, 
      "name": "Dumbbell Rear Delt Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 754, 
      "muscle_id": 12, 
      "name": "Kettlebell Turkish Get-Up (Squat style)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 755, 
      "muscle_id": 12, 
      "name": "Cable Internal Rotation"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 756, 
      "muscle_id": 12, 
      "name": "Side Lateral Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 757, 
      "muscle_id": 12, 
      "name": "Alternating Kettlebell Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 758, 
      "muscle_id": 12, 
      "name": "One-Arm Kettlebell Snatch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 759, 
      "muscle_id": 12, 
      "name": "Kettlebell Thruster"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 760, 
      "muscle_id": 12, 
      "name": "Battling Ropes"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 761, 
      "muscle_id": 12, 
      "name": "Bent Over Low-Pulley Side Lateral"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 762, 
      "muscle_id": 12, 
      "name": "Low Pulley Row To Neck"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 763, 
      "muscle_id": 12, 
      "name": "External Rotation"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 764, 
      "muscle_id": 12, 
      "name": "Barbell Rear Delt Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 765, 
      "muscle_id": 12, 
      "name": "Seated Cable Shoulder Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 766, 
      "muscle_id": 12, 
      "name": "One-Arm Incline Lateral Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 767, 
      "muscle_id": 12, 
      "name": "Cable Rope Rear-Delt Rows"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 768, 
      "muscle_id": 12, 
      "name": "Dumbbell Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 769, 
      "muscle_id": 12, 
      "name": "Face Pull"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 770, 
      "muscle_id": 12, 
      "name": "Seated Bent-Over Rear Delt Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 771, 
      "muscle_id": 12, 
      "name": "Side Wrist Pull"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 772, 
      "muscle_id": 12, 
      "name": "One-Arm Kettlebell Clean and Jerk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 773, 
      "muscle_id": 12, 
      "name": "Standing Low-Pulley Deltoid Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 774, 
      "muscle_id": 12, 
      "name": "Upright Barbell Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 775, 
      "muscle_id": 12, 
      "name": "Seated Side Lateral Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 776, 
      "muscle_id": 12, 
      "name": "Iron Cross"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 777, 
      "muscle_id": 12, 
      "name": "Dumbbell Lying Rear Lateral Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 778, 
      "muscle_id": 12, 
      "name": "Internal Rotation with Band"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 779, 
      "muscle_id": 12, 
      "name": "Straight Raises on Incline Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 780, 
      "muscle_id": 12, 
      "name": "Bent Over Dumbbell Rear Delt Raise With Head On Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 781, 
      "muscle_id": 12, 
      "name": "Lying Rear Delt Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 782, 
      "muscle_id": 12, 
      "name": "Band Pull Apart"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 783, 
      "muscle_id": 12, 
      "name": "Bradford/Rocky Presses"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 784, 
      "muscle_id": 12, 
      "name": "Kettlebell Turkish Get-Up (Lunge style)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 785, 
      "muscle_id": 12, 
      "name": "Cable Rear Delt Fly"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 786, 
      "muscle_id": 12, 
      "name": "Reverse Machine Flyes"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 787, 
      "muscle_id": 12, 
      "name": "Anti-Gravity Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 788, 
      "muscle_id": 12, 
      "name": "Back Flyes - With Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 789, 
      "muscle_id": 12, 
      "name": "Cable Shoulder Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 790, 
      "muscle_id": 12, 
      "name": "Machine Shoulder (Military) Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 791, 
      "muscle_id": 12, 
      "name": "Cuban Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 792, 
      "muscle_id": 12, 
      "name": "Reverse Flyes With External Rotation"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 793, 
      "muscle_id": 12, 
      "name": "Alternating Cable Shoulder Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 794, 
      "muscle_id": 12, 
      "name": "Lying One-Arm Lateral Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 795, 
      "muscle_id": 12, 
      "name": "Lateral Raise - With Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 796, 
      "muscle_id": 12, 
      "name": "Standing Barbell Press Behind Neck"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 797, 
      "muscle_id": 12, 
      "name": "Kettlebell Pirate Ships"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 798, 
      "muscle_id": 12, 
      "name": "See-Saw Press (Alternating Side Press)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 799, 
      "muscle_id": 12, 
      "name": "Dumbbell One-Arm Upright Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 800, 
      "muscle_id": 12, 
      "name": "Dumbbell Scaption"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 801, 
      "muscle_id": 12, 
      "name": "Circus Bell"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 802, 
      "muscle_id": 12, 
      "name": "Shoulder Press - With Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 803, 
      "muscle_id": 12, 
      "name": "Two-Arm Kettlebell Clean"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 804, 
      "muscle_id": 12, 
      "name": "Double Kettlebell Push Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 805, 
      "muscle_id": 12, 
      "name": "Dumbbell Incline Shoulder Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 806, 
      "muscle_id": 12, 
      "name": "Barbell Front Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 807, 
      "muscle_id": 12, 
      "name": "Smith Machine One-Arm Upright Row"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 808, 
      "muscle_id": 12, 
      "name": "Machine Lateral Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 809, 
      "muscle_id": 12, 
      "name": "Standing Front Barbell Raise Over Head"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 810, 
      "muscle_id": 12, 
      "name": "Kettlebell Seated Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 811, 
      "muscle_id": 12, 
      "name": "Double Kettlebell Jerk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 812, 
      "muscle_id": 12, 
      "name": "Backward Medicine Ball Throw"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 813, 
      "muscle_id": 12, 
      "name": "Kettlebell Arnold Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 814, 
      "muscle_id": 12, 
      "name": "Landmine Linear Jammer"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 815, 
      "muscle_id": 12, 
      "name": "Upward Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 816, 
      "muscle_id": 12, 
      "name": "Shoulder Circles"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 817, 
      "muscle_id": 12, 
      "name": "Cable Seated Lateral Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 818, 
      "muscle_id": 12, 
      "name": "Barbell Incline Shoulder Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 819, 
      "muscle_id": 12, 
      "name": "Push Press - Behind the Neck"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 820, 
      "muscle_id": 12, 
      "name": "Crucifix"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 821, 
      "muscle_id": 12, 
      "name": "Shoulder Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 822, 
      "muscle_id": 12, 
      "name": "Round The World Shoulder Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 823, 
      "muscle_id": 12, 
      "name": "Elbow Circles"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 824, 
      "muscle_id": 12, 
      "name": "Arm Circles"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 825, 
      "muscle_id": 12, 
      "name": "Seated Front Deltoid"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 826, 
      "muscle_id": 12, 
      "name": "Shoulder Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 827, 
      "muscle_id": 12, 
      "name": "Chair Upper Body Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 828, 
      "muscle_id": 12, 
      "name": "Kneeling Arm Drill"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 829, 
      "muscle_id": 12, 
      "name": "Medicine Ball Scoop Throw"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 830, 
      "muscle_id": 12, 
      "name": "Smith Incline Shoulder Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 831, 
      "muscle_id": 12, 
      "name": "One-Arm Kettlebell Jerk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 832, 
      "muscle_id": 12, 
      "name": "One-Arm Kettlebell Military Press To The Side"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 833, 
      "muscle_id": 12, 
      "name": "One-Arm Kettlebell Para Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 834, 
      "muscle_id": 12, 
      "name": "Two-Arm Kettlebell Jerk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 835, 
      "muscle_id": 12, 
      "name": "One-Arm Kettlebell Split Jerk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 836, 
      "muscle_id": 12, 
      "name": "Jerk Balance"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 837, 
      "muscle_id": 12, 
      "name": "Log Lift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 838, 
      "muscle_id": 12, 
      "name": "Return Push from Stance"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 839, 
      "muscle_id": 12, 
      "name": "Standing Two-Arm Overhead Throw"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 840, 
      "muscle_id": 12, 
      "name": "External Rotation with Band"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 841, 
      "muscle_id": 12, 
      "name": "Punches"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 842, 
      "muscle_id": 12, 
      "name": "Dumbbell Squat To Shoulder Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 843, 
      "muscle_id": 12, 
      "name": "Hand Stand Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 844, 
      "muscle_id": 12, 
      "name": "Front Dumbbell Raise Using Towel"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 845, 
      "muscle_id": 12, 
      "name": "Plate Shoulder Circle Big To Small Rotation"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 846, 
      "muscle_id": 12, 
      "name": "Bear Crawl Fire Feet"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 847, 
      "muscle_id": 12, 
      "name": "Wall Shoulder Tap"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 848, 
      "muscle_id": 12, 
      "name": "Bear Crawl Shoulder Tap"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 849, 
      "muscle_id": 12, 
      "name": "Double Kettlebell Snatch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 850, 
      "muscle_id": 12, 
      "name": "One-Arm Kettlebell Split Snatch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 851, 
      "muscle_id": 12, 
      "name": "Kettlebell Seesaw Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 852, 
      "muscle_id": 12, 
      "name": "Rack Delivery"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 853, 
      "muscle_id": 12, 
      "name": "Sled Overhead Backward Walk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 854, 
      "muscle_id": 12, 
      "name": "Sled Reverse Flye"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 855, 
      "muscle_id": 12, 
      "name": "Axle Clean And Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 856, 
      "muscle_id": 12, 
      "name": "Suspended Back Fly"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 857, 
      "muscle_id": 12, 
      "name": "Tall Muscle Snatch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 858, 
      "muscle_id": 12, 
      "name": "Half-kneeling Dumbbell Shoulder Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 859, 
      "muscle_id": 12, 
      "name": "Wall Walk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 860, 
      "muscle_id": 12, 
      "name": "Dumbbell Clean And Jerk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 861, 
      "muscle_id": 13, 
      "name": "One-Arm Medicine Ball Slam"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 862, 
      "muscle_id": 13, 
      "name": "Landmine 180's"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 863, 
      "muscle_id": 13, 
      "name": "Suspended Fallout"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 864, 
      "muscle_id": 13, 
      "name": "Plank"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 865, 
      "muscle_id": 13, 
      "name": "Standing Cable Lift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 866, 
      "muscle_id": 13, 
      "name": "Bottoms Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 867, 
      "muscle_id": 13, 
      "name": "Spell Caster"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 868, 
      "muscle_id": 13, 
      "name": "Dumbbell V-Sit Cross Jab"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 869, 
      "muscle_id": 13, 
      "name": "Decline Reverse Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 870, 
      "muscle_id": 13, 
      "name": "Spider Crawl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 871, 
      "muscle_id": 13, 
      "name": "Cross-Body Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 872, 
      "muscle_id": 13, 
      "name": "One-Arm High-Pulley Cable Side Bends"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 873, 
      "muscle_id": 13, 
      "name": "Elbow to Knee"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 874, 
      "muscle_id": 13, 
      "name": "Cocoons"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 875, 
      "muscle_id": 13, 
      "name": "Plate Twist"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 876, 
      "muscle_id": 13, 
      "name": "Gorilla Chin/Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 877, 
      "muscle_id": 13, 
      "name": "Decline Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 878, 
      "muscle_id": 13, 
      "name": "Hanging Pike"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 879, 
      "muscle_id": 13, 
      "name": "Hanging Oblique Knee Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 880, 
      "muscle_id": 13, 
      "name": "Weighted Suitcase Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 881, 
      "muscle_id": 13, 
      "name": "Oblique Cable Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 882, 
      "muscle_id": 13, 
      "name": "Exercise Ball Pull-In"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 883, 
      "muscle_id": 13, 
      "name": "Cable Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 884, 
      "muscle_id": 13, 
      "name": "Barbell Ab Rollout"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 885, 
      "muscle_id": 13, 
      "name": "Hanging Leg Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 886, 
      "muscle_id": 13, 
      "name": "Kneeling Cable Crunch With Alternating Oblique Twists"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 887, 
      "muscle_id": 13, 
      "name": "Ab Roller"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 888, 
      "muscle_id": 13, 
      "name": "Barbell Ab Rollout - On Knees"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 889, 
      "muscle_id": 13, 
      "name": "Weighted Crunches"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 890, 
      "muscle_id": 13, 
      "name": "Reverse Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 891, 
      "muscle_id": 13, 
      "name": "Air Bike"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 892, 
      "muscle_id": 13, 
      "name": "3/4 Sit-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 893, 
      "muscle_id": 13, 
      "name": "Otis-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 894, 
      "muscle_id": 13, 
      "name": "Crunches"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 895, 
      "muscle_id": 13, 
      "name": "Dumbbell Side Bend"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 896, 
      "muscle_id": 13, 
      "name": "Rope Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 897, 
      "muscle_id": 13, 
      "name": "Standing Rope Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 898, 
      "muscle_id": 13, 
      "name": "Dead Bug"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 899, 
      "muscle_id": 13, 
      "name": "Crunch - Hands Overhead"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 900, 
      "muscle_id": 13, 
      "name": "Knee/Hip Raise On Parallel Bars"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 901, 
      "muscle_id": 13, 
      "name": "Sledgehammer Swings"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 902, 
      "muscle_id": 13, 
      "name": "Jackknife Sit-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 903, 
      "muscle_id": 13, 
      "name": "Decline Oblique Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 904, 
      "muscle_id": 13, 
      "name": "Stomach Vacuum"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 905, 
      "muscle_id": 13, 
      "name": "Press Sit-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 906, 
      "muscle_id": 13, 
      "name": "Bosu Ball Cable Crunch With Side Bends"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 907, 
      "muscle_id": 13, 
      "name": "Tuck Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 908, 
      "muscle_id": 13, 
      "name": "Pallof Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 909, 
      "muscle_id": 13, 
      "name": "Flat Bench Lying Leg Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 910, 
      "muscle_id": 13, 
      "name": "Seated Flat Bench Leg Pull-In"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 911, 
      "muscle_id": 13, 
      "name": "Exercise Ball Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 912, 
      "muscle_id": 13, 
      "name": "Russian Twist"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 913, 
      "muscle_id": 13, 
      "name": "Oblique Crunches"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 914, 
      "muscle_id": 13, 
      "name": "Advanced Kettlebell Windmill"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 915, 
      "muscle_id": 13, 
      "name": "Barbell Rollout from Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 916, 
      "muscle_id": 13, 
      "name": "Butt-Ups"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 917, 
      "muscle_id": 13, 
      "name": "Cable Reverse Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 918, 
      "muscle_id": 13, 
      "name": "Standing Cable Wood Chop"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 919, 
      "muscle_id": 13, 
      "name": "Bent-Knee Hip Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 920, 
      "muscle_id": 13, 
      "name": "Cable Russian Twists"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 921, 
      "muscle_id": 13, 
      "name": "Ab Crunch Machine"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 922, 
      "muscle_id": 13, 
      "name": "Weighted Sit-Ups - With Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 923, 
      "muscle_id": 13, 
      "name": "Wind Sprints"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 924, 
      "muscle_id": 13, 
      "name": "Smith Machine Hip Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 925, 
      "muscle_id": 13, 
      "name": "Alternate Heel Touchers"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 926, 
      "muscle_id": 13, 
      "name": "Pallof Press With Rotation"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 927, 
      "muscle_id": 13, 
      "name": "Suspended Reverse Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 928, 
      "muscle_id": 13, 
      "name": "Flat Bench Leg Pull-In"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 929, 
      "muscle_id": 13, 
      "name": "Cable Seated Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 930, 
      "muscle_id": 13, 
      "name": "Frog Sit-Ups"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 931, 
      "muscle_id": 13, 
      "name": "Kettlebell Windmill"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 932, 
      "muscle_id": 13, 
      "name": "Kettlebell Figure 8"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 933, 
      "muscle_id": 13, 
      "name": "Sit-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 934, 
      "muscle_id": 13, 
      "name": "Side Bridge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 935, 
      "muscle_id": 13, 
      "name": "Leg Pull-In"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 936, 
      "muscle_id": 13, 
      "name": "Oblique Crunches - On The Floor"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 937, 
      "muscle_id": 13, 
      "name": "Janda Sit-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 938, 
      "muscle_id": 13, 
      "name": "Crunch - Legs On Exercise Ball"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 939, 
      "muscle_id": 13, 
      "name": "Side Jackknife"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 940, 
      "muscle_id": 13, 
      "name": "Kettlebell Pass Between The Legs"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 941, 
      "muscle_id": 13, 
      "name": "Seated Leg Tucks"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 942, 
      "muscle_id": 13, 
      "name": "Scissor Kick"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 943, 
      "muscle_id": 13, 
      "name": "Barbell Side Bend"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 944, 
      "muscle_id": 13, 
      "name": "Toe Touchers"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 945, 
      "muscle_id": 13, 
      "name": "Lower Back Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 946, 
      "muscle_id": 13, 
      "name": "Weighted Ball Side Bend"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 947, 
      "muscle_id": 13, 
      "name": "Bent Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 948, 
      "muscle_id": 13, 
      "name": "Supine Two-Arm Overhead Throw"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 949, 
      "muscle_id": 13, 
      "name": "Torso Rotation"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 950, 
      "muscle_id": 13, 
      "name": "Cable Judo Flip"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 951, 
      "muscle_id": 13, 
      "name": "Seated Barbell Twist"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 952, 
      "muscle_id": 13, 
      "name": "Seated Overhead Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 953, 
      "muscle_id": 13, 
      "name": "Overhead Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 954, 
      "muscle_id": 13, 
      "name": "Standing Lateral Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 955, 
      "muscle_id": 13, 
      "name": "Double Kettlebell Windmill"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 956, 
      "muscle_id": 13, 
      "name": "Suitcase Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 957, 
      "muscle_id": 13, 
      "name": "Seated Scissor Kick"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 958, 
      "muscle_id": 13, 
      "name": "Cross Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 959, 
      "muscle_id": 13, 
      "name": "Straight-Legged Hip Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 960, 
      "muscle_id": 13, 
      "name": "Partner Facing Planks With Alternating High-Five"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 961, 
      "muscle_id": 13, 
      "name": "Partner 3-Touch Motion Russian Twist"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 962, 
      "muscle_id": 13, 
      "name": "Partner Side-To-Side Russian Twist & Pass"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 963, 
      "muscle_id": 13, 
      "name": "Partner Hanging Knee Raise With Throw Down"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 964, 
      "muscle_id": 13, 
      "name": "Partner Hanging Knee Raise With Manual Resistance"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 965, 
      "muscle_id": 13, 
      "name": "Medicine Ball Rotational Throw"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 966, 
      "muscle_id": 13, 
      "name": "Suspended Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 967, 
      "muscle_id": 13, 
      "name": "Bosu Ball Crunch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 968, 
      "muscle_id": 13, 
      "name": "Stability Ball Pike With Knee Tuck"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 969, 
      "muscle_id": 13, 
      "name": "Shoulder Tap"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 970, 
      "muscle_id": 13, 
      "name": "Kettlebell 3-Point Extension"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 971, 
      "muscle_id": 13, 
      "name": "Breakdancer"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 972, 
      "muscle_id": 13, 
      "name": "Medicine Ball Full Twist"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 973, 
      "muscle_id": 13, 
      "name": "Supine One-Arm Overhead Throw"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 974, 
      "muscle_id": 13, 
      "name": "Partner Target Sit-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 975, 
      "muscle_id": 13, 
      "name": "Partner Lying Leg Raise With Throw Down"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 976, 
      "muscle_id": 13, 
      "name": "Partner Sit-Up With High-Five"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 977, 
      "muscle_id": 13, 
      "name": "Partner Lying Leg Raise With Lateral Throw Down"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 978, 
      "muscle_id": 13, 
      "name": "Waiter's Carry"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 979, 
      "muscle_id": 13, 
      "name": "Skin The Cat To Push-Up"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 980, 
      "muscle_id": 13, 
      "name": "V-Sit Lying Down Ball Throw And Catch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 981, 
      "muscle_id": 13, 
      "name": "Wall Mountain Climber"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 982, 
      "muscle_id": 13, 
      "name": "Full Moon"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 983, 
      "muscle_id": 13, 
      "name": "Crab Toe Touch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 984, 
      "muscle_id": 14, 
      "name": "Barbell Glute Bridge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 985, 
      "muscle_id": 14, 
      "name": "Barbell Hip Thrust"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 986, 
      "muscle_id": 14, 
      "name": "One-Legged Cable Kickback"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 987, 
      "muscle_id": 14, 
      "name": "Butt Lift (Bridge)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 988, 
      "muscle_id": 14, 
      "name": "Single Leg Glute Bridge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 989, 
      "muscle_id": 14, 
      "name": "Step-up with Knee Raise"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 990, 
      "muscle_id": 14, 
      "name": "Kneeling Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 991, 
      "muscle_id": 14, 
      "name": "Glute Kickback"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 992, 
      "muscle_id": 14, 
      "name": "Flutter Kicks"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 993, 
      "muscle_id": 14, 
      "name": "Physioball Hip Bridge"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 994, 
      "muscle_id": 14, 
      "name": "Kneeling Jump Squat"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 995, 
      "muscle_id": 14, 
      "name": "Pull Through"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 996, 
      "muscle_id": 14, 
      "name": "Hip Extension with Bands"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 997, 
      "muscle_id": 14, 
      "name": "Piriformis-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 998, 
      "muscle_id": 14, 
      "name": "Leg Lift"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 999, 
      "muscle_id": 14, 
      "name": "Hip Lift with Band"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1000, 
      "muscle_id": 14, 
      "name": "Ankle On The Knee"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1001, 
      "muscle_id": 14, 
      "name": "Downward Facing Balance"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1002, 
      "muscle_id": 14, 
      "name": "Knee Across The Body"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1003, 
      "muscle_id": 14, 
      "name": "Seated Glute"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1004, 
      "muscle_id": 14, 
      "name": "Lying Glute"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1005, 
      "muscle_id": 14, 
      "name": "One Knee To Chest"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1006, 
      "muscle_id": 14, 
      "name": "Glute Bridge Hamstring Walkout"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1007, 
      "muscle_id": 14, 
      "name": "Neck Bridge Supine"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1008, 
      "muscle_id": 14, 
      "name": "Seated Glute Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1009, 
      "muscle_id": 14, 
      "name": "Suspended Hip Thrust"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1010, 
      "muscle_id": 15, 
      "name": "Incline Hammer Curls"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1011, 
      "muscle_id": 15, 
      "name": "Wide-Grip Standing Barbell Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1012, 
      "muscle_id": 15, 
      "name": "Spider Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1013, 
      "muscle_id": 15, 
      "name": "EZ-Bar Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1014, 
      "muscle_id": 15, 
      "name": "Hammer Curls"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1015, 
      "muscle_id": 15, 
      "name": "Zottman Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1016, 
      "muscle_id": 15, 
      "name": "Biceps Curl To Shoulder Press"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1017, 
      "muscle_id": 15, 
      "name": "Concentration Curls"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1018, 
      "muscle_id": 15, 
      "name": "Barbell Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1019, 
      "muscle_id": 15, 
      "name": "Overhead Cable Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1020, 
      "muscle_id": 15, 
      "name": "Flexor Incline Dumbbell Curls"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1021, 
      "muscle_id": 15, 
      "name": "Machine Bicep Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1022, 
      "muscle_id": 15, 
      "name": "Dumbbell Bicep Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1023, 
      "muscle_id": 15, 
      "name": "Cross Body Hammer Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1024, 
      "muscle_id": 15, 
      "name": "Close-Grip EZ Bar Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1025, 
      "muscle_id": 15, 
      "name": "Barbell Curls Lying Against An Incline"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1026, 
      "muscle_id": 15, 
      "name": "Reverse Barbell Preacher Curls"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1027, 
      "muscle_id": 15, 
      "name": "Preacher Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1028, 
      "muscle_id": 15, 
      "name": "Standing One-Arm Cable Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1029, 
      "muscle_id": 15, 
      "name": "Seated Close-Grip Concentration Barbell Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1030, 
      "muscle_id": 15, 
      "name": "Alternate Incline Dumbbell Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1031, 
      "muscle_id": 15, 
      "name": "Dumbbell Alternate Bicep Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1032, 
      "muscle_id": 15, 
      "name": "One Arm Dumbbell Preacher Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1033, 
      "muscle_id": 15, 
      "name": "Reverse Cable Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1034, 
      "muscle_id": 15, 
      "name": "Standing Concentration Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1035, 
      "muscle_id": 15, 
      "name": "Incline Dumbbell Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1036, 
      "muscle_id": 15, 
      "name": "Close-Grip Standing Barbell Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1037, 
      "muscle_id": 15, 
      "name": "Preacher Hammer Dumbbell Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1038, 
      "muscle_id": 15, 
      "name": "Alternate Hammer Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1039, 
      "muscle_id": 15, 
      "name": "Seated Dumbbell Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1040, 
      "muscle_id": 15, 
      "name": "Standing One-Arm Dumbbell Curl Over Incline Bench"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1041, 
      "muscle_id": 15, 
      "name": "Standing Biceps Cable Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1042, 
      "muscle_id": 15, 
      "name": "Drag Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1043, 
      "muscle_id": 15, 
      "name": "Machine Preacher Curls"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1044, 
      "muscle_id": 15, 
      "name": "Lying Supine Dumbbell Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1045, 
      "muscle_id": 15, 
      "name": "Two-Arm Dumbbell Preacher Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1046, 
      "muscle_id": 15, 
      "name": "Lying Cable Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1047, 
      "muscle_id": 15, 
      "name": "Cable Hammer Curls - Rope Attachment"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1048, 
      "muscle_id": 15, 
      "name": "Reverse Barbell Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1049, 
      "muscle_id": 15, 
      "name": "Standing Dumbbell Reverse Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1050, 
      "muscle_id": 15, 
      "name": "Incline Inner Biceps Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1051, 
      "muscle_id": 15, 
      "name": "High Cable Curls"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1052, 
      "muscle_id": 15, 
      "name": "Close-Grip EZ-Bar Curl with Band"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1053, 
      "muscle_id": 15, 
      "name": "One-Arm Plank Dumbbell Biceps Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1054, 
      "muscle_id": 15, 
      "name": "Dumbbell Prone Incline Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1055, 
      "muscle_id": 15, 
      "name": "Zottman Preacher Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1056, 
      "muscle_id": 15, 
      "name": "Cable Preacher Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1057, 
      "muscle_id": 15, 
      "name": "Standing Inner-Biceps Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1058, 
      "muscle_id": 15, 
      "name": "Seated Dumbbell Inner Biceps Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1059, 
      "muscle_id": 15, 
      "name": "Reverse Plate Curls"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1060, 
      "muscle_id": 15, 
      "name": "Lying Close-Grip Bar Curl On High Pulley"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1061, 
      "muscle_id": 15, 
      "name": "Standing Biceps Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1062, 
      "muscle_id": 15, 
      "name": "Lying High Bench Barbell Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1063, 
      "muscle_id": 15, 
      "name": "Seated Biceps"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1064, 
      "muscle_id": 15, 
      "name": "Brachialis-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1065, 
      "muscle_id": 15, 
      "name": "Suspended Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1066, 
      "muscle_id": 15, 
      "name": "Seated Straight-Bar Curl Superset"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1067, 
      "muscle_id": 15, 
      "name": "Hammer Plate Curl"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1068, 
      "muscle_id": 17, 
      "name": "Thigh Adductor"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1069, 
      "muscle_id": 17, 
      "name": "Groiners"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1070, 
      "muscle_id": 17, 
      "name": "Band Hip Adductions"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1071, 
      "muscle_id": 17, 
      "name": "Side Leg Raises"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1072, 
      "muscle_id": 17, 
      "name": "Lateral Bound"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1073, 
      "muscle_id": 17, 
      "name": "Groin and Back Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1074, 
      "muscle_id": 17, 
      "name": "Adductor"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1075, 
      "muscle_id": 17, 
      "name": "Side Lying Groin Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1076, 
      "muscle_id": 17, 
      "name": "Adductor/Groin"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1077, 
      "muscle_id": 17, 
      "name": "Lying Bent Leg Groin"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1078, 
      "muscle_id": 17, 
      "name": "Carioca Quick Step"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1079, 
      "muscle_id": 17, 
      "name": "Lateral Box Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1080, 
      "muscle_id": 17, 
      "name": "Lateral Cone Hops"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1081, 
      "muscle_id": 17, 
      "name": "Thigh Adductor"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1082, 
      "muscle_id": 17, 
      "name": "Groiners"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1083, 
      "muscle_id": 17, 
      "name": "Band Hip Adductions"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1084, 
      "muscle_id": 17, 
      "name": "Side Leg Raises"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1085, 
      "muscle_id": 17, 
      "name": "Lateral Bound"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1086, 
      "muscle_id": 17, 
      "name": "Groin and Back Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1087, 
      "muscle_id": 17, 
      "name": "Adductor"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1088, 
      "muscle_id": 17, 
      "name": "Side Lying Groin Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1089, 
      "muscle_id": 17, 
      "name": "Adductor/Groin"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1090, 
      "muscle_id": 17, 
      "name": "Lying Bent Leg Groin"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1091, 
      "muscle_id": 17, 
      "name": "Carioca Quick Step"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1092, 
      "muscle_id": 17, 
      "name": "Lateral Box Jump"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1093, 
      "muscle_id": 17, 
      "name": "Lateral Cone Hops"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1094, 
      "muscle_id": 18, 
      "name": "Hip Circles (prone)"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1095, 
      "muscle_id": 18, 
      "name": "Standing Hip Circles"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1096, 
      "muscle_id": 18, 
      "name": "Clam"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1097, 
      "muscle_id": 18, 
      "name": "Thigh Abductor"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1098, 
      "muscle_id": 18, 
      "name": "Iliotibial Tract-SMR"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1099, 
      "muscle_id": 18, 
      "name": "Windmills"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1100, 
      "muscle_id": 18, 
      "name": "Fire Hydrant"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1101, 
      "muscle_id": 18, 
      "name": "Monster Walk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1102, 
      "muscle_id": 18, 
      "name": "IT Band and Glute Stretch"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1103, 
      "muscle_id": 18, 
      "name": "Lying Crossover"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1104, 
      "muscle_id": 18, 
      "name": "Lateral Band Walk"
  }, 
  {
      "updatedAt": "2018-03-22T10:41:38.988208", 
      "createdAt": "2018-03-22T10:41:38.988208", 
      "id": 1105, 
      "muscle_id": 18, 
      "name": "Hip Circle"
  }
]