// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var path      = require('path');
var Sequelize = require("sequelize");
// var configs   = require('./config.json').production;
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + './config.json')[env];
// console.log(configs);

// Creates mySQL connection using Sequelize
if (config.use_env_variable) {
	var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
	var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// var sequelize = new Sequelize(config.database, config.username, config.password, {
//   host: config.host,
//   dialect: config.dialect,
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

// Exports the connection for other files to use
module.exports = sequelize;