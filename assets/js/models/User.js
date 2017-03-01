/*global $ */
 function User (options) {
        this.id= options.id;     
        this.email= options.email;
        this.password= options.password;
        this.name= options.name;
        this.age= options.age;
        this.gender= options.gender;
    }
    User.prototype.createAccount= function (formData) {
    // var that = this;
    return $.ajax ({
        url: "https://gabriela-szgabryela.c9users.io/blog/api/users/createaccount",
        type: "POST",
        data: formData, 
        processData: false,
        contentType: false,
        success: function (resp) {
        
           console.log("Registration complete. Enter to your account.");
        
        },
        error: function (xhr, status, error) {
            alert ("Create account error!");
        }
    });
}; 

User.prototype.login= function () {
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
        
        },
       
        error: function (xhr, status, error) {
            alert ("Login error!");
        }
    });
    
   
};
