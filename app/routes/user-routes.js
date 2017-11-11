// app/routes/user-routes.js
require("./donor-api-routes");
module.exports = function (app) {

  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  // app.get('/', function (req, res) {
  //   res.render('index.handlebars'); // load the index.handlebars file
  // });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  // app.get('/login', function (req, res) {
  //   // render the page and pass in any flash data if it exists
  //   res.render('login.handlebars', {
  //     message: req.flash('loginMessage')
  //   });
  // });
  let users = [
    { nick_name: 'Mollie', type: 'Donor' },
    { nick_name: 'Partha', type: 'Donor' },
    { nick_name: 'Sam', type: 'Donor' },
    { nick_name: 'SwedishAdmin', type: 'Inst', inst_name: 'Swedish' },
    { nick_name: 'NationalJewishAdmin', type: 'Inst', inst_name: 'NationalJewish' },
    { nick_name: 'PorterAdmin', type: 'Inst', inst_name: 'Porter' }
  ];

  // process the login form
  // app.post('/login', do all our passport stuff here);
  // process the signup form
  app.post('/login', function(req, res){
    console.log("Reached Login Route");
    res.redirect('/donors/Partha');
  });

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  // app.get('/signup', function (req, res) {
  //   // render the page and pass in any flash data if it exists
  //   res.render('signup.handlebars', {
  //     message: req.flash('signupMessage')
  //   });
  // });

  // process the signup form
  // app.post('/signup', passport.authenticate('local-signup', {
  //   successRedirect : '/profile', // redirect to the secure profile section
  //   failureRedirect : '/signup', // redirect back to the signup page if there is an error
  //   failureFlash : true // allow flash messages
  // }));

  // =====================================
  // PROFILE SECTION =====================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  // app.get('/profile', isLoggedIn, function (req, res) {
  //   res.render('profile.handlebars', {
  //     user: req.user // get the user out of session and pass to template
  //   });
  // });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function (req, res) {
    // req.logout();
    res.redirect('/');
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on 
  // if (req.isAuthenticated()) return next();
  if (true) return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}