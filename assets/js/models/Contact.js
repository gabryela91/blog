/*global $, Contact */
function Contact (options) {
    this.id= options.id;
    this.email= options.email;
    this.content= options.content;
    
}
Contact.prototype.add = function() {
    var contactData= {
        email: this.email,
        content: this.content
    };
     return $.ajax({
            url:"https://gabriela-szgabryela.c9users.io/blog/api/contact/add",
            type:"POST",
            data:contactData,
            success:function(resp){
               console.log("Your message was successfully sent");
            },
          error:function(xhr,status,error){
                alert("Unable to sent your message"+status);
            }
        });
};