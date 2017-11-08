// INSTITUTIONS MODEL - COMPLETE/UPDATE ONCE DB IS FINALIZED


// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection");

// Creates a "Inst" model that matches up with DB
var Inst = sequelize.define("inst", {
  name: {
    type: Sequelize.STRING
  },
  street_address: {
    type: Sequelize.STRING
  },
  zip_code: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  }, 
  email: {
    type: Sequelize.STRING
  },
  hours: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
Inst.sync();

// Makes the Inst Model available for other files (will also create a table)
module.exports = Inst;