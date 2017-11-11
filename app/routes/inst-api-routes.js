// Requiring our models
var Inst = require("../models/insts");

module.exports = function(app) {

    // app.get("/insts", function(req, res) {
    //     // Handlebars requires an object to be sent to the handlebars file.
    //     // NEED TO GRAB THE DONATION HISTORY AS AN OBJECT AND SEND TO DONOR.HBR
    //     Inst.findAll({})
    //         .then(function(insts) {
    //             console.log('insts', insts);
    //             res.render('inst', {insts: insts});
    //         });
    // });

    app.get("/insts/:name", function(req, res) {
        Inst.findOne({
            where: {
                name: req.params.name
            }
        }).then(function(anInst) {
            res.render("inst", { inst: anInst })
        })
    });

    app.put("/insts/:name", function(req, res) {
        Inst.update({
            name: req.body.name,
            street_address: req.body.street_address,
            zip_code: req.body.zip_code,
            phone: req.body.phone,
            email: req.body.email,
            hours: req.body.hours,
            need_blood_type: req.body.need_blood_type,
            need_amount: req.body.need_amount,
            need_description: req.body.need_description
        }, {
            where: {
                name: req.params.name
            }
        }).then(function(update) {
            // error catch??
            res.end("");
            console.log("Your update is complete")
        });
    });  
}