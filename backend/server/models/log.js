'use strict';
module.exports = (sequelize, DataTypes) => {
  var Log = sequelize.define('Log', {
    exercise_id: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    repetitions: DataTypes.INTEGER,
    weight: DataTypes.DOUBLE
  }, {});
  Log.associate = function(models) {
    Log.belongsTo(models.Exercise, {
      foreignKey: 'exercise_id',
      onDelete: 'CASCADE',
    });
  };
  return Log;
};