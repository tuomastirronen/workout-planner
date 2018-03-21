const Routine = require('../models').Routine;

module.exports = {
  create(req, res) {
    return Routine
      .create({
        user_id: req.params.user_id,
        weekday: req.body.weekday,
        name: req.body.name
      })
      .then(routine => res.status(201).send(routine))
      .catch(error => res.status(400).send(error));
  },
};