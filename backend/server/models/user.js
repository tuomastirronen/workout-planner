'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Routine, {
      foreignKey: 'user_id',
      as: 'routines',
    });
  };
  return User;
};