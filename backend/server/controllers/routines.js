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
  update(req, res) {
    return Routine
      .find({
          where: {
            id: req.params.routine_id,
            user_id: req.params.user_id,
          },
        })
      .then(routine => {
        if (!routine) {
          return res.status(404).send({
            message: 'Routine Not Found',
          });
        }
  
        return routine
          .update(req.body, { fields: Object.keys(req.body) })
          .then(updatedRoutine => res.status(200).send(updatedRoutine))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  
  destroy(req, res) {
    return Routine
      .find({
          where: {
            id: req.params.routine_id,
            user_id: req.params.user_id,
          },
        })
      .then(routine => {
        if (!routine) {
          return res.status(404).send({
            message: 'Routine Not Found',
          });
        }
  
        return routine
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};