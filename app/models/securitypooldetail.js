'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SecurityPoolDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SecurityPoolDetail.init({
    secPoolId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    secId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'SecurityPoolDetail',
  });
  return SecurityPoolDetail;
};