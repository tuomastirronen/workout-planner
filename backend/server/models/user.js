'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});

  // Hide password
  User.prototype.toJSON =  function () {
    var values = Object.assign({}, this.get());
  
    delete values.password;
    return values;
  }

  User.associate = function(models) {
    User.hasMany(models.Routine, {
      foreignKey: 'user_id',
      as: 'routines',
    });
  };
  return User;
};