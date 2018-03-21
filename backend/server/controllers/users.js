const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};