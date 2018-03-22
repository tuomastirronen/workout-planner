const Muscle = require('../models').Muscle;
const Move = require('../models').Move;

module.exports = {
  list(req, res) {
    return Muscle
      .findAll({
        include: [{
          model: Move,
          as: 'moves',
        }],
      })
      .then(muscles => res.status(200).send(muscles))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Muscle
      .findById(req.params.muscle_id, {
        include: [{
            model: Move,
            as: 'moves',
        }],
        })
        .then(muscle => {
        if (!muscle) {
            return res.status(404).send({
            message: 'Muscle Not Found',
            });
        }
        return res.status(200).send(muscle);
        })
      .catch(error => res.status(400).send(error));
  },
};