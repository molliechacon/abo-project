// INSTITUTIONS MODEL - COMPLETE/UPDATE ONCE DB IS FINALIZED


// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection");

// Creates a "Inst" model that matches up with DB
var Inst = sequelize.define("inst", {
  inst_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
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
  },
  need_blood_type: {
    type: Sequelize.STRING
  },
  need_amount: {
    type: Sequelize.INTEGER
  },
  need_description: {
    type: Sequelize.STRING
  }
  
  // ,
  // request_message: {
  //   type: Sequelize.STRING
  // }
}, {
  timestamps: false
});

// Syncs with DB
Inst.sync();

// Makes the Inst Model available for other files (will also create a table)
module.exports = Inst;






// obsolete models - use for future improvements
// ************************************************************************

          // // Creates a "Need" model that matches up with DB
          // var Need = sequelize.define("inst_need", {
          //   inst_need_id: {
          //     type: Sequelize.INTEGER,
          //     primaryKey: true,
          //     autoIncrement: true
          //   },
          //   blood_type: {
          //     type: Sequelize.STRING
          //   },
          //   amount: {
          //     type: Sequelize.INTEGER
          //   },
          //   description: {
          //     type: Sequelize.STRING
          //   }
          // //   need to include fk_inst_id here???
          // }, {
          //   timestamps: false
          // });

          // // Syncs with DB
          // Need.sync();

          // // Makes the Donation Model available for other files (will also create a table)
          // module.exports = Need;






          // // Creates a "Message" model that matches up with DB
          // var Message = sequelize.define("inst_messages", {
          //   inst_message_id: {
          //     type: Sequelize.INTEGER,
          //     primaryKey: true,
          //     autoIncrement: true
          //   },
          //   message: {
          //     type: Sequelize.STRING
          //   }
          // //   need to include fk_inst_id here???
          // }, {
          //   timestamps: false
          // });

          // // Syncs with DB
          // Message.sync();

          // // Makes the Donation Model available for other files (will also create a table)
          // module.exports = Message;