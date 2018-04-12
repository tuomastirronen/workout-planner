const bcrypt = require('bcrypt')
'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User',{
    email: { type: DataTypes.STRING, allowNull: false, unique: true },    
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: DataTypes.STRING,
    password_digest: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password_confirmation: {
      type: DataTypes.VIRTUAL
    }
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Routine, {
      foreignKey: 'user_id',
      as: 'routines',
    });
  };
  
  // Hide password
  User.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());
  
    delete values.password;
    delete values.password_confirmation;
    delete values.password_digest;
    return values;
  }
  
  User.beforeCreate(async function(user, options) {
    if (user.password != user.password_confirmation) {
      throw new Error("Password confirmation doesn't match Password");
    }
    if (user.password)
      user.set('password_digest', await bcrypt.hash(user.password, 10))
  })

  User.beforeUpdate(async function(user, options) {
    if (user.password != user.password_confirmation) {
      throw new Error("Password confirmation doesn't match Password");
    }
    if (user.password)
      user.set('password_digest', await bcrypt.hash(user.password, 10))
  })

  User.prototype.authenticate = function(value) {    
    if (bcrypt.compareSync(value, this.password_digest))
      return this;
    else
      return false;
  };

  return User;
};