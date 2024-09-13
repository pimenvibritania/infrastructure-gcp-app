// config/config.js
require('dotenv').config(); // Load .env variables

module.exports = {
  development: {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    port: process.env.port,
    dialect: process.env.DB_DIALECT || 'postgres',
  },
  test: {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database_TEST || 'test_db',
    host: process.env.host,
    port: process.env.port,
    dialect: process.env.DB_DIALECT || 'postgres',
  },
  production: {
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    port: process.env.port,
    dialect: process.env.DB_DIALECT || 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // For self-signed certificates
      }
    }
  }
};
