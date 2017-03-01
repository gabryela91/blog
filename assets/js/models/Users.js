/*global $ */
/*global User, Users */
function Users () {
   
    this.models=[];
}
Users.prototype.login= function () {
    var dataLogin= {
        email: this.email,
        password: this.password
    }
 var that = this;
    return $.ajax ({
        url: "https://gabriela-szgabryela.c9users.io/blog/api/users/login",
        type: "POST",
        data: dataLogin,
        // data: {
        //     email: mail,
        //     password: pass,
        // },
       
        success: function (resp) {
        //     var selectedUser = new User (resp);
        //   that.models= [];
        //   that.models.push(selectedUser);
         
        },
       
        error: function (xhr, status, error) {
            alert ("Login error!");
        }
    });
    
   
};



