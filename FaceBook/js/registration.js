var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})




$.fn.registration = function () {
  // Create the registration form
  $(this).append('<h2>Create an account</h2>')

  var form = '<form id="frm" class"d-flex flex-column flex-warp align-self-center">' +
    '<input type="text" placeholder="user name" id="name" class="form-control "  required> <div id="invalname" class="invalid-feedback" ><div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Invalid Name!</strong> User name must be right with first capital latters contain space ex:Omer Ahmed<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div></div>  <div class="valid-feedback"> Looks good! </div><br>' +
    '<input type="email" placeholder="user email" id="email" class="form-control "   required> <div id="invalemail" class="invalid-feedback"><div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Invalid Email!</strong>Email must be writen with the common type contain @ domain names(.edu,.eg.com) ex:karim700@gmail.com <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div></div>  <div class="valid-feedback"> Looks good! </div><br>' +
    '<input type="password" placeholder="enter password" id="pass" class="form-control "  required> <div id="invalpass" class="invalid-feedback"><div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Invalid Password!</strong>Password must be more than 8 numbers<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div></div> <div class="valid-feedback"> Looks good! </div> <br>' +
    '<input type="password" placeholder="RE-enter password" id="rePass" class="form-control "  required> <div id="invalRepas" class="invalid-feedback"><div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>No Matching!</strong>the entered password dosent match each other<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div></div>  <div class="valid-feedback"> Looks good! </div> <br>' +
    '<div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="chk"> <label class="form-check-label" for="chk">By chicking box, you agree to our Terms, Privacy Policy and Cookies Policy.</label> </div>' +
    '</form>';


  // Append the form to the selected element
  $(this).append(form);

  $(this).append('<button id="submit" class="btn  btn-success" type="submit">Register</button>')

  $(this).append('<button  class=" btn btn-link log" type="button">Alredy have account ?</button>')

  // Bind a submit event to the form
  $('#submit').on("click", function (event) {
    event.preventDefault();

    // Get the form data
    var name = $('#name').val();
    var email = $('#email').val();
    var password = $('#pass').val();
    var Repassword = $('#rePass').val();
    var chk = $('#chk').prop('checked');
    var regExpUserName = /^[A-Z][a-z]{2,} [A-Z][a-z]{2,}$/
    var regUserEmail = /^[a-z]([a-z]|[0-9]|_|\.|\$|#)+@[a-z]+(.com|.eg|.edu)$/
    var regPassword = /^.{8,}$/

    var validName = regExpUserName.test(name)
    var validUserEmail = regUserEmail.test(email)
    var validPassword = regPassword.test(password)
    var validRePassword = regPassword.test(Repassword)
    console.log(name)
    console.log(validName)
    if (validName) {
      $("#name").addClass("is-valid").removeClass("is-invalid");
    } else {
      $("#name").addClass("is-invalid").removeClass("is-valid");
    }
    if (validUserEmail) {
      $("#email").addClass("is-valid").removeClass("is-invalid");
    } else {
      $("#email").addClass("is-invalid").removeClass("is-valid");
    }
    if (validPassword) {
      $("#pass").addClass("is-valid").removeClass("is-invalid");
      console.log(true)
    } else {
      $("#pass").addClass("is-invalid").removeClass("is-valid");
      console.log(false)
    }
    if (Repassword == password && validRePassword) {
      $("#rePass").addClass("is-valid").removeClass("is-invalid");
      console.log(true)
    }
    else {
      $("#rePass").addClass("is-invalid").removeClass("is-valid");
      console.log(false)
    }
    if (chk == true && validName && validUserEmail && validPassword && Repassword == password) {
      $.fn.saveUserData();

      $("#dv2").html("")
      $('#dv2').login();


    }




  });
};

// Bind a click event to the registration button
$(document).on('click', '.regst', function () {
  // Call the registration plugin on the div with id dv2
  $("#dv2").html("")
  $('#dv2').registration();
  $('#dv2').css("border", "2px solid #302b55")
  $('#dv2').addClass('rounded-3')
  $('#dv2').css('background', 'white')
  $('#frm').css("width", "100%")
  $("input").addClass("siz")
  $('#chk').css({ "width": "22px", "height": "22px", "border": "1px solid #0000ff", "margin-right": "2px" })
  $('#submit').addClass("submitbutton")

});


$.fn.login = function () {
  // Create the registration form
  $(this).append('<h2>Log in to Facebook</h2>')

  var form = '<form id="frm" class"d-flex flex-column flex-warp align-self-center">' +
    '<div class="alert alert-danger alert-dismissible fade hidden" id="warn" role="alert"> <strong>Wrrong!</strong> In valid User name or Password You should check in on some of those fields below.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> </div>' +
    '<input type="email" placeholder="user email" id="email" class="form-control "   required><div id="inval" class="invalid-feedback">Please provide a valid zip.</div> <div class="valid-feedback">Looks good!</div><br>' +
    '<input type="password" placeholder="enter password" id="pass" class="form-control "  required><div id="inval" class="invalid-feedback">Please provide a valid zip.</div> <div class="valid-feedback">Looks good!</div> <br>' +
    '<div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="chk"> <label class="form-check-label" for="chk">By chicking box, you agree to our Terms, Privacy Policy and Cookies Policy.</label> </div>' +
    '</form>';


  // Append the form to the selected element
  $(this).append(form);

  $(this).append('<button id="login" class="btn  btn-success" type="submit">Log in</button>')

  $(this).append('<button class="btn btn-link regst" type="button">New in facebook!</button>')

  // check user
  $('#login').on("click", function (event) {
    event.preventDefault();


    var useremail = $('#email').val();
    var password = $('#pass').val();
    if ($.fn.checkLogin(useremail, password)) {
     
      open("../html/home.html")

    } else {
      console.log('Invalid login credentials');
      $('#warn').removeClass('hidden').addClass('show')

    }



  });
}

//i used documment here to make event listeneer target the .log in btn-link
$(document).on('click', '.log', function () {
  // Call the login plugin on the div with id dv2
  $("#dv2").html("")
  $('#dv2').login();
  $('#dv2').css("border", "2px solid #302b55")
  $('#dv2').addClass('rounded-3')
  $('#dv2').css('background', 'white')
  $('#frm').css("width", "100%")
  $("input").addClass("siz")
  $('#chk').css({ "width": "22px", "height": "22px", "border": "1px solid #0000ff", "margin-right": "2px" })
  $('#submit').addClass("submitbutton")
});

//function to store user data in local storage
$.fn.saveUserData = function () {
  // Get the user data from the form
  var name = $('#name').val();
  var email = $('#email').val();
  var password = $('#pass').val();
  var user = {
    name: name,
    email: email,
    password: password
  };


  var users = localStorage.getItem('users');
  if (users) {
    users = JSON.parse(users);
  } else {
    users = [];
  }

  users.push(user);

  localStorage.setItem('users', JSON.stringify(users));
};


//plagin to check user data
$.fn.checkLogin = function (useremail, password) {
  // Get the users array from local storage
  var users = localStorage.getItem('users');
  if (users) {
    users = JSON.parse(users);
  } else {
    return false;
  }
  // var validuser
  // if(users.find(useremail) && users.find(password)){
  //   validuser = true
  // }
  // else{
  //   validuser = false
  //   }
  // Loop through the users array to find a match
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === useremail && users[i].password === password) {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('username', `${users[i].name}`);
      return true;
    }
  }

  return false;
};

// function setLoggedInUserName() {
//   $('#user').text(`${usrName}!`);
//   console.log("set is called")
//   console.log(usrName + " yur set name")
// }