const usersController = require('../controllers').users;
const routinesController = require('../controllers').routines;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Users API!',
  }));

  // User

  // List all users
  app.get('/api/users', usersController.list);

  // Retrieve user
  app.get('/api/users/:user_id', usersController.retrieve);

  // Create user
  app.post('/api/users', usersController.create);

  // Update user
  app.put('/api/users/:user_id', usersController.update);

  // Delete user
  app.delete('/api/users/:user_id', usersController.destroy);

  
  // Routine

  // Create routine
  app.post('/api/users/:user_id/routines', routinesController.create);

  // Update routine
  app.put('/api/users/:user_id/routines/:routine_id', routinesController.update);

  // Delete routine
  app.delete('/api/todos/:todoId/items/:todoItemId', routinesController.destroy);

};