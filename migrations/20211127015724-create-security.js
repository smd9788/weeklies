'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Securities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lastPrice: {
        defaultValue: 1.00,
        type: Sequelize.DECIMAL
      },
      priceDate: {
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      securityName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ticker: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addColumn(
      'Security', // name of Source model
      'secPoolId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'SecurityPool', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Securities');
  }
};