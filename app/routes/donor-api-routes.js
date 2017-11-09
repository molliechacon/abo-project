// NEEDS UPDATING!!!

// UI ENDPOINTS???
    //      /                                --> login page
    //      /donor/:donor_id                 --> donation history
    //      /donor/:donor_id/profile         --> display profile info
    //      /inst/:inst_id                   --> current need and received this mo
    //      /inst/:inst_id/profile           --> display profile info


// API ENDPOINTS???
    //      /api/donors             --> POST add a new donor profile 

    //      /api/donors/:donor_id   --> GET donation history
    //                              --> PUT update profile info
    //                              --> PUT log a donation (or combine with above)
    //                              --> DELETE account (move to inactive or mark as inactive)

    //      /api/inst               --> POST add a new inst profile

    //      /api/inst/:inst_id      --> GET current need
    //                              --> PUT update current need
    //                              --> GET received this month (two gets on the same endpt??)
    //                              --> PUT update inst info
    //                              --> DELETE account??


                              



// Requiring our models
var Donor = require("../models/donors");

module.exports = function(app) {
    app.get("/donors", function(req, res) {
        // Handlebars requires an object to be sent to the handlebars file.
        // NEED TO GRAB THE DONATION HISTORY AS AN OBJECT AND SEND TO DONOR.HBR
        Donor.findAll({})
            .then(function(donors) {
                console.log('donors', donors);
                res.render('donor', {donors: donors});
            });
    });

    


    // app.get("/api/donors", function(req, res) {
    //     // Handlebars requires an object to be sent to the handlebars file.
    //     // NEED TO GRAB THE DONATION HISTORY AS AN OBJECT AND SEND TO DONOR.HBR
    //     res.json(???????????????);
    // });

    // app.post("/api/donors", function(req, res) {
    //     // CODE FOR POSTING A NEW DONATION GOES HERE
    //     res.render("donor", ???????????????);
    // });
    
    // app.put("/api/donors/:donor_id", function(req, res) {
    //     // CODE FOR UPDATING USER PROFILE GOES HERE
    
    //     res.render("donor"????, ????????????????);
    // });

    // app.delete("/api/donors/:id", function(req, res) {
    //     // CODE FOR DELETING USER PROFILE GOES HERE
        
    //     res.render("donor"????, ????????????????);
    // });
}