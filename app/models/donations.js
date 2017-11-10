// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection");

// Creates a "Donation" model that matches up with DB
var Donation = sequelize.define("donation", {
  donation_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  donation_date: {
    type: Sequelize.DATE
  },
  institution_name: {
    type: Sequelize.STRING
  }
//   need to include fk_donor_id here???
}, {
  timestamps: false
});

// Syncs with DB
Donation.sync();

// Makes the Donation Model available for other files (will also create a table)
module.exports = Donation;