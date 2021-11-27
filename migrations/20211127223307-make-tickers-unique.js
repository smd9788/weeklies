'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint(
      'Securities',
      {
        fields: ['ticker'],
        type: 'unique',
        name: 'security_unique_ticker'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      'Securities', 'security_unique_ticker'
    );
  }
};
