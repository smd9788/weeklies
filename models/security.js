import { Sequelize, DataTypes, Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Security extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.SecurityPool, { through: 'SecurityPoolDetail' });
      this.hasMany(models.Security, { as: 'securities' })
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
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Security',
    tableName: 'Securities'
  });
  return Security;
};