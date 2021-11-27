'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SecurityPoolDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      'SecurityPoolDetails', // name of Source model
      'SecPoolId', // name of the key we're adding  
      {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'SecurityPools', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
    await queryInterface.addColumn(
      'SecurityPoolDetails', // name of Source model
      'SecId', // name of the key we're adding  
      {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Securities', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SecurityPoolDetails');
  }
};