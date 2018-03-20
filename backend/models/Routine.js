'use strict'

module.exports = function (sequelize, DataTypes) {
  var Routine = sequelize.define('Routine', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return Routine
}