const Exercise = require('../models').Exercise;

module.exports = {
  retrieve(req, res) {
    return Exercise
      .findById(req.params.exercise_id)
      .then(exercise => {
      if (!exercise) {
          return res.status(404).send({
          message: 'Exercise Not Found',
          });
      }
      return res.status(200).send(exercise);
      })
    .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Exercise
      .findAll({
        where: {
          routine_id: req.params.routine_id          
        },
      })
      .then(muscles => res.status(200).send(muscles))
      .catch(error => res.status(400).send(error));
  },
  create(req, res) {
    return Exercise
      .create({
        routine_id: req.params.routine_id,
        move_id: req.body.move_id,
        sets: req.body.sets,
        repetitions: req.body.repetitions,
        weight: req.body.weight
      })
      .then(exercise => res.status(201).send(exercise))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Exercise
      .find({
          where: {
            id: req.params.exercise_id,
            routine_id: req.params.routine_id,
          },
        })
      .then(exercise => {
        if (!exercise) {
          return res.status(404).send({
            message: 'Exercise Not Found',
          });
        }
  
        return exercise
          .update(req.body, { fields: Object.keys(req.body) })
          .then(updatedExercise => res.status(200).send(updatedExercise))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  
  destroy(req, res) {
    return Exercise
      .find({
          where: {
            id: req.params.exercise_id,
            routine_id: req.params.routine_id,
          },
        })
      .then(exercise => {
        if (!exercise) {
          return res.status(404).send({
            message: 'Exercise Not Found',
          });
        }
  
        return exercise
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};