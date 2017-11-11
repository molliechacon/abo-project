function createDonorObj() {

  let dataObj = {};

  if ($("#input-nickname").val()) {
    dataObj.nick_name = $("#input-nickname").val().trim();
  } else {
    dataObj.nick_name = $("#current-name").text();
  };

  if ($("#input-email").val()) {
    dataObj.email = $("#input-email").val().trim();
  } else {
    dataObj.email = $("#current-email").text();
  };

  if ($("#input-address").val()) {
    dataObj.street_address = $("#input-address").val().trim();
  } else {
    dataObj.street_address = $("#current-address").text();
  };

  if ($("#input-zip").val()) {
    dataObj.zip_code = $("#input-zip").val().trim();
  } else {
    dataObj.zip_code = $("#current-zip").text();
  };

  if ($("#input-type").val()) {
    dataObj.blood_type = $("#input-type").val().trim();
  } else {
    dataObj.blood_type = $("#current-type").text();
  };

  if ($("#input-phone").val()) {
    dataObj.phone = $("#input-phone").val().trim();
  } else {
    dataObj.phone = $("#current-phone").text();
  };

  if ($("input[name=inlineRadioOptions1]:checked").val()) {
    dataObj.accept_email = $("input[name=inlineRadioOptions1]:checked").val();
  } else {
    dataObj.accept_email = $("#current-accept-email").text();
  };

  if ($("input[name=inlineRadioOptions2]:checked").val()) {
    dataObj.accept_sms = $("input[name=inlineRadioOptions2]:checked").val();
  } else {
    dataObj.accept_sms = $("#current-accept-sms").text();
  };

  if ($("#input-donation-date").val()) {
    dataObj.donation_date = $("#input-donation-date").val().trim();
  } else {
    dataObj.donation_date = $("#current-donation-date").text();
  };

  if ($("#input-donation-location").val()) {
    dataObj.institution_name = $("#input-donation-location").val().trim();
  } else {
    dataObj.institution_name = $("#current-donation-location").text();
  };

  return dataObj;
}


$("#submit-donation-log").click(function (event) {
  event.preventDefault();

  donorUpdate(createDonorObj(), function () {
    $("#donation-log-confirm").html("<br>" + "Your donation was successfully logged! Please close this window.");

    $("#input-donation-date").val("");
    $("#input-donation-location").val("");
  });
});

$("#submit-donor-profile").click(function (event) {
  event.preventDefault();

  donorUpdate(createDonorObj(), function () {
    $("#donor-profile-update-confirm").html("<br>" + "Your profile was successfully updated! Please close this window.");

    $("#input-nickname").val("");
    $("#input-email").val("");
    $("#input-address").val("");
    $("#input-zip").val("");
    $("#input-type").val("");
    $("#input-phone").val("");
    $("input[name=inlineRadioOptions1]:checked").val("");
    $("input[name=inlineRadioOptions2]:checked").val("");
  });
});

// $("#find-donation-center").click(function(event) {

// });

$("#close-donation-modal").on("click", function (event) {
  $("#donation-log-confirm").text("");
});

$("#close-profile-modal").on("click", function (event) {
  $("#donor-profile-update-confirm").text("");
});

function donorUpdate(dataObj, cb) {
  // console.log(dataObj);
  $.ajax({
    method: "PUT",
    url: "/donors/" + $("#nick-name").text(),
    data: dataObj
  }).done(function (result) {
    console.log("Successful update");
  }).fail(function (err) {
    console.log(err);
  }).always(function (result) {
    console.log(".always is working");
    cb();
  });
}