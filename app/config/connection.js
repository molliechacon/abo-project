

// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var configs = require('./config.json').development;
// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(configs.database, configs.username, configs.password, {
  host: configs.host,
  dialect: configs.dialect,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;