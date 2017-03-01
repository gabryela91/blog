//functie constructor
/* global $*/
function Article(options){
    this.id=options.id;
    this.title=options.title;
    this.content=options.content;
    this.file=options.file;
    this.created_at=options.created_at;
    
}


//adaugare metode pe functia constructor
  //ajax request to send article here
    

Article.prototype.add= function (formData) {
     return $.ajax({
            url: "https://gabriela-szgabryela.c9users.io/blog/api/articles/add",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            success:function() {
                // console.log("Succes! Your operation is complete.");
            },
            error:function(xhr, status, error){
               alert ("Error! Invalid request");
            }
     });
};

Article.prototype.editArticle= function () {
     var that = this;
     var dataToSend = {
       title: this.title,
       content: this.content,
       id: this.id,
       created_at: this.created_at
   };
    return $.ajax ({
         url: "https://gabriela-szgabryela.c9users.io/blog/api/articles/edit",
         type: "PUT",
         data: JSON.stringify(dataToSend),
         success: function (resp) {
            //   var articleToEdit = new Article (resp);
            //   that.models= [];
            //   that.models.push(articleToEdit);
          },
          error: function (xhr, status, error) {
                // alert ("Something went wrong!");
                console.log("Unable to edit this article: " + status);
         }
    
    });
};
    
