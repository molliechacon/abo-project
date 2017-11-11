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

    app.get("/donors/:nick_name", function(req, res) {
        Donor.findOne({
            where: {
                nick_name: req.params.nick_name
            }
        }).then(function(aDonor) {
                res.render("donor", { donor: aDonor })
            })
    });    


    app.put("/donors/:nick_name", function(req, res) {
        Donor.update({
            nick_name: req.body.nick_name,
            email: req.body.email,
            accept_email: req.body.accept_email,
            street_address: req.body.street_address,
            zip_code: req.body.zip_code,
            blood_type: req.body.blood_type,
            phone: req.body.phone,
            accept_sms: req.body.accept_sms,
            donation_date: req.body.donation_date,
            institution_name: req.body.institution_name
        }, {
            where: {
                nick_name: req.params.nick_name
            }
        }).then(function(update) {
            // error catch??
            res.end(update);
            console.log("Your donation was logged!")
        });
    });
}
