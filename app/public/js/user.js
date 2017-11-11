$("#login-button-submit").click(function (event) {
  event.preventDefault();
  $.ajax({
    method: "POST",
    url: "/",
    data: { nick_name: $("#login-input-nick-name").val().trim() }
  })
  .done(function (result) {
    console.log("Login Successful");
    return;
  // }).fail(function (err) {
  //   console.log(err);
  // }).always(function (result) {
  //   console.log("always is working");
  //   $("#login-input-nick-name").val("");
  //   $("#login-input-password").val("");
  });
});