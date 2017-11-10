// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection");

// Creates a "Donation" model that matches up with DB
var Need = sequelize.define("inst_need", {
  inst_need_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  blood_type: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.STRING
  }
//   need to include fk_inst_id here???
}, {
  timestamps: false
});

// Syncs with DB
Need.sync();

// Makes the Donation Model available for other files (will also create a table)
module.exports = Need;