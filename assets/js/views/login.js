/* global $ */
/* global User, Users */
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    // var user = new Users();
    var loginBtn = $("#login-btn");
    loginBtn.on("click", function(ev){
        ev.preventDefault();
      var userEmail= $("#email").val();
      var userPassword= $("#password").val();
      
      var userLogin = new User ({
          email: userEmail,
          password: userPassword
      });
      var userXhr = userLogin.login();
      userXhr.done(function() {
       
        window.location.href= "https://gabriela-szgabryela.c9users.io/blog/assets/templates/admin.html";   
      });   
    });
           
}