const usersController = require('../controllers').users
const routinesController = require('../controllers').routines
const musclesController = require('../controllers').muscles
const movesController = require('../controllers').moves
const exercisesController = require('../controllers').exercises

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Users API!',
  }))

  // Login
  app.post('/api/login', usersController.login)

//   // User

//   // List users
//   app.get('/api/users', usersController.list)

//   // Retrieve user
//   app.get('/api/users/:user_id', usersController.retrieve)

//   // Create user
//   app.post('/api/users', usersController.create)

//   // Update user
//   app.put('/api/users/:user_id', usersController.update)

//   // Delete user
//   app.delete('/api/users/:user_id', usersController.destroy)


//   // Routine

//   // List routines
//   app.get('/api/users/:user_id/routines', routinesController.list)

//   // Retrieve routine
//   app.get('/api/users/:user_id/routines/:routine_id', routinesController.retrieve)

//   // Create routine
//   app.post('/api/users/:user_id/routines', routinesController.create)

//   // Update routine
//   app.put('/api/users/:user_id/routines/:routine_id', routinesController.update)

//   // Delete routine
//   app.delete('/api/users/:user_id/routines/:routine_id', routinesController.destroy)


//   // Muscles

//   // List all muscles
//   app.get('/api/muscles', musclesController.list)

//   // Retrieve muscle
//   app.get('/api/muscles/:muscle_id', musclesController.retrieve)


//   // Exercises

//   // List exercises
//   app.get('/api/users/:user_id/routines/:routine_id/exercises', exercisesController.list)

//   // Retrieve exercise
//   app.get('/api/users/:user_id/routines/:routine_id/exercises/:exercise_id', exercisesController.retrieve)

//   // Create exercise
//   app.post('/api/users/:user_id/routines/:routine_id/exercises', exercisesController.create)

}