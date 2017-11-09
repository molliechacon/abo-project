// NEEDS UPDATING!!!

// UI ENDPOINTS???
    //      /donor              --> donation history
    //      /donor/profile      --> display profile info
    //      /inst               --> current need and received this mo
    //      /inst/profile       --> display profile info


// API ENDPOINTS???
    //      /api/donors             --> GET donation history,
    //                                  POST log a donation
    //      /api/donors/:donor_id   --> PUT update profile info
    //                              --> DELETE account??
    //      /api/inst               --> GET current need
    //                              --> PUT update current need
    //                                  GET received this month (two gets on the same endpt??)
    //      /api/inst/:inst_id      --> PUT update inst info
    //                              --> DELETE account??


    
// Requiring our models
var Inst = require("../models/insts");

module.exports = function(app) {
    app.get("/insts", function(req, res) {
        // Handlebars requires an object to be sent to the handlebars file.
        // NEED TO GRAB THE DONATION HISTORY AS AN OBJECT AND SEND TO DONOR.HBR
        Inst.findAll({})
            .then(function(insts) {
                console.log('insts', insts);
                res.render('inst', {insts: insts});
            });
    });
    

    
}