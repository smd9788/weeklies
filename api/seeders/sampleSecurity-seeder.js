'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Securities",
      [
        {
          lastPrice: 157.40,
          priceDate: new Date(),
          securityName: "Apple Inc.",
          ticker: "AAPL",
          industry: "Consumer Electronics",
          sector: "Technology",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lastPrice: 1081.92,
          priceDate: new Date(),
          securityName: "Tesla, Inc.",
          ticker: "TSLA",
          industry: "Consumer Electronics",
          sector: "Consumer Cyclical",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          lastPrice: 3503.00,
          priceDate: new Date(),
          securityName: "Amazon.com Inc.",
          ticker: "AMZN",
          industry: "Internet Retail",
          sector: "Consumer Cyclical",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Securities", null, {});
  }
};
