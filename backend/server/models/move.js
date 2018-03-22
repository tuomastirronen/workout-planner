'use strict';
module.exports = (sequelize, DataTypes) => {
  var Move = sequelize.define('Move', {
    muscle_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Move.associate = function(models) {
    Move.belongsTo(models.Muscle, {
      foreignKey: 'muscle_id',
      onDelete: 'CASCADE',
    });
  };
  return Move;
};