const User = require('../models').User;
const Routine = require('../models').Routine;

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
  async login(req, res) {
    try {    
      const user = await User.findOne({ 
        where: { 
          email: req.body.username
        }
      })

      if (!(user && user.authenticate(req.body.password))) {
        return res.status(401).send({ error: 'Invalid username or password' })
      }
  
      const userForToken = {
        username: user.email,
        id: user.id
      }
  
      const token = jwt.sign(userForToken, process.env.SECRET)
  
      res.status(200).send({ token, user })
    } catch(err) {
      console.log(err)
      res.status(400).send({ error: err})
    }
  },

  list(req, res) {
    return User
      .findAll({
        include: [{
          model: Routine,
          as: 'routines',
        }],
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error))
  },

  retrieve(req, res) {
    return User
      .findById(req.params.user_id, {
        include: [{
          model: Routine,
          as: 'routines',
        }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          })
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },

  create(req, res) {
    return User
      .create({
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        password_confirmation: req.body.password_confirmation
      })
      .then(user => res.status(201).send(user))
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      });
  },

  update(req, res) {
    return User
      .findById(req.params.user_id, {
        include: [{
          model: Routine,
          as: 'routines',
        }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).send(user))  // Send back the updated user.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return User
      .findById(req.params.user_id)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};