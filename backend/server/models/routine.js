'use strict';
module.exports = (sequelize, DataTypes) => {
  var Routine = sequelize.define('Routine', {
    weekday: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Routine.associate = function(models) {
    Routine.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
    });
    Routine.hasMany(models.Exercise, {
      foreignKey: 'routine_id',
      as: 'exercises',
    });
  };
  return Routine;
};