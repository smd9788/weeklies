const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SecurityPool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Security, { through: 'SecurityPoolDetail' });
    }
  };
  SecurityPool.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'SecurityPool',
  });
  return SecurityPool;
};