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
            res.end("");
            console.log("Your update is complete")
        });
    });
}
