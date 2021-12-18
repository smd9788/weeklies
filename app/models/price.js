'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Security, {
        foreignKey: 'secID',
        as: 'security'
      })
    }
  };
  Price.init({
    secId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    priceDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL
    }
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};