function createInstObj () {

    let dataObj = {};

    if ($("#inst-name").val()) {
        dataObj.name = $("#inst-name").val().trim();
    } else {
        dataObj.name = $("#current-inst-name").text();
    };

    if ($("#inst-address").val()) {
        dataObj.street_address = $("#inst-address").val().trim();
    } else {
        dataObj.street_address = $("#current-inst-address").text();
    };

    if ($("#inst-zip").val()) {
        dataObj.zip_code = $("#inst-zip").val().trim();
    } else {
        dataObj.zip_code = $("#current-inst-zip").text();
    };

    if ($("#inst-phone").val()) {
        dataObj.phone = $("#inst-phone").val().trim();
    } else {
        dataObj.phone = $("#current-inst-phone").text();
    };

    if ($("#inst-email").val()) {
        dataObj.email = $("#inst-email").val().trim();
    } else {
        dataObj.email = $("#current-email").text();
    };

    if ($("#inst-hours").val()) {
        dataObj.hours = $("#inst-hours").val().trim();
    } else {
        dataObj.hours = $("#current-hours").text();
    };

    if ($("#inst-need-type").val()) {
        dataObj.need_blood_type = $("#inst-need-type").val().trim();
    } else {
        dataObj.need_blood_type = $("#current-need-type").text();
    };

    if ($("#inst-need-amount").val()) {
        dataObj.need_amount = $("#inst-need-amount").val().trim();
    } else {
        dataObj.need_amount = $("#current-need-amount").text();
    };

    if ($("#inst-need-desc").val()) {
        dataObj.need_description = $("#inst-need-desc").val().trim();
    } else {
        dataObj.need_description = $("#current-need-desc").text();
    };

    return dataObj;
}

$("#submit-need-update").click(function(event) {
    event.preventDefault();

    instUpdate(createInstObj(), function() {
        $("#inst-need-update-confirm").html("<br>" + "Your needs have been updated! Please close this window.");
        
        $("#inst-need-type").val("");
        $("#inst-need-amount").val("");
        $("#inst-need-desc").val("");
    });
});

$("#submit-inst-profile").click(function(event) {
    event.preventDefault();

    instUpdate(createInstObj(), function() {
        $("#inst-profile-update-confirm").html("<br>" + "Your profile was successfully updated! Please close this window."); 
        
        $("#inst-name").val("");
        $("#inst-address").val("");
        $("#inst-zip").val("");
        $("#inst-phone").val("");
        $("#inst-email").val("");
        $("#inst-hours").val("");
    });
});

// $("#request-donations").click(function(event) {
    
// });




function instUpdate(dataObj, cb) {
    console.log(dataObj);
        $.ajax({
            method: "PUT",
            url: "/insts/" + $("#current-inst-name").text(),
            data: dataObj
        }).done(function(result) {
            // err?
            console.log("Successful update");
        }).fail(function(err) {
            console.log(err);
        }).always(function(result) {
            console.log(".always is working");
            cb();
        });
}