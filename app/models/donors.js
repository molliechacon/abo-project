// DONORS MODEL - COMPLETE/UPDATE ONCE DB IS FINALIZED




// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection");

// Creates a "Donor" model that matches up with DB
var Donor = sequelize.define("donor", {
  donor_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nick_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  street_address: {
    type: Sequelize.STRING
  },
  zip_code: {
    type: Sequelize.STRING
  }, 
  blood_type: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
Donor.sync();

// Makes the Donor Model available for other files (will also create a table)
module.exports = Donor;