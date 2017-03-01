/* global $, Contact */

$(document).ready(onHtmlLoaded);
function onHtmlLoaded() {
    var sendMessage = $('#contact-message');
    sendMessage.on("click", function (ev){
        ev.preventDefault();
        
    var emailContact= $("input[name='email']").val();
    var messageContact = $('#content').val();
    var contactMessage= new Contact ({
        email: emailContact,
        content: messageContact
    });
      var contactMessageXhr = contactMessage.add();
    });
}