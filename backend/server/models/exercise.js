'use strict';
module.exports = (sequelize, DataTypes) => {
  var Exercise = sequelize.define('Exercise', {
    move_id: DataTypes.INTEGER,
    routine_id: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    repetitions: DataTypes.INTEGER,
    weight: DataTypes.DOUBLE
  }, {});
  Exercise.associate = function(models) {
    Exercise.belongsTo(models.Move, {
      foreignKey: 'move_id',
      onDelete: 'CASCADE',
    });
    Exercise.belongsTo(models.Routine, {
      foreignKey: 'routine_id',
      onDelete: 'CASCADE',
    });
  };
  return Exercise;
};