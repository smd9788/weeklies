require('dotenv').config();

const { DB_USERNAME, DB_HOST, DB_NAME_DEV, DB_NAME_UAT, DB_NAME_PROD, DB_PASSWORD, DB_PORT } = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME_DEV,
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME_UAT,
    "host": DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME_PROD,
    "host": DB_HOST,
    "dialect": "postgres"
  }
};

