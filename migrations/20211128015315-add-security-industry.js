'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Securities',
      'industry', 
      {
        type: Sequelize.STRING
      }
    );
    await queryInterface.addColumn(
      'Securities',
      'sector', 
      {
        type: Sequelize.STRING
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Securities', 'industry');
    await queryInterface.removeColumn('Securities', 'sector');
  }
};
