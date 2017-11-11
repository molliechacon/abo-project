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

    return dataObj;
}

$("#update-current-need").click(function(event) {
    
});

$("#request-donations").click(function(event) {
    
});