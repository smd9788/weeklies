'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    static associate(models) {
      // define association here
    }
  };
  UserRole.init({
    user: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    role: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'UserRole',
  });
  return UserRole;
};