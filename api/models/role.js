const { Sequelize, DataTypes, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {

    static associate(models) {
      this.belongsToMany(models.User, {
        through: 'UserRole',
        foreignKey: 'role',
        otherKey: 'user'
      });
    }
  };
  Role.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};