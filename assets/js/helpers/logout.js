/*global $*/

function Users() {
    this.models=[];
};
  Users.prototype.logout= function(){
    
    // var that = this;
    return $.ajax ({
        url: "https://gabriela-szgabryela.c9users.io/blog/api/users/logout",
        type: "GET",
        success: function (resp) {
           
        },
       
        error: function (xhr, status, error) {
            alert ("Error! Something went wrong! Try again");
        }
    });
    
};


$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    var user = new Users();
     var logoutBtn = $('#logout-btn').addClass("logout-css");
    logoutBtn.on("click", function(ev){
      ev.preventDefault();
      var userLogoutXhr= user.logout();
      userLogoutXhr.done(function(){
        //   logoutBtn.removeClass("show");
          logoutBtn.addClass("hide");
          
  window.location.href = "https://gabriela-szgabryela.c9users.io/blog/assets/templates/home.html";
      
      });
   
  
    });  
}
