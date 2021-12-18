const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Security extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.SecurityPool, { through: 'SecurityPoolDetail' });
    }
  };
  Security.init({
    lastPrice: {
      defaultValue: 1.00,
      type: DataTypes.DECIMAL
    },
    priceDate: {
      defaultValue: new Date(),
      type: DataTypes.DATE
    },
    securityName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    ticker: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    industry: {
      type: DataTypes.STRING
    },
    sector: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Security',
    tableName: 'Securities'
  });
  return Security;
};