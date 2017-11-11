var users = [
  { nick_name: 'Mollie', type: 'Donor' },
  { nick_name: 'Partha', type: 'Donor' },
  { nick_name: 'Sam', type: 'Donor' },
  { nick_name: 'SwedishAdmin', type: 'Inst', inst_name: 'Swedish' },
  { nick_name: 'NationalJewishAdmin', type: 'Inst', inst_name: 'NationalJewish' },
  { nick_name: 'PorterAdmin', type: 'Inst', inst_name: 'Porter' }
];

$("#login-button-submit").click(function(event) {
  event.preventDefault();
  let userName = $('#login-input-nick-name').val().trim();
  if (!userName) return;
  var thisUser;
  for (var i = 0; i < users.length; i++) {
    if (users[i].nick_name === userName) {
      thisUser = users[i];
    }
  }
  console.log(thisUser.inst_name);
  if (thisUser.type === 'Donor') {
    window.location.assign(`/donors/${userName}`);
  } else if (thisUser.type === 'Inst') {
    window.location.assign(`/insts/${thisUser.inst_name}`);    
  }
});