'use strict';
module.exports = (sequelize, DataTypes) => {
  var Muscle = sequelize.define('Muscle', {
    name: DataTypes.STRING
  }, {});
  Muscle.associate = function(models) {
    Muscle.hasMany(models.Move, {
      foreignKey: 'muscle_id',
      as: 'moves',
    });
  };
  return Muscle;
};