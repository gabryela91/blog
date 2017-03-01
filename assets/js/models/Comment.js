/*global $ */
/*global Comment */
function Comment (options) {
    this.id=options.id;
    this.article_id=options.article_id;
    this.user_id=options.user_id;
    this.user_name=options.user_name;
    this.content= options.content;
    this.creation_date= options.creation_date;
    
}

Comment.prototype.addComment = function(){
    // var that= this;
    var dataComment = {
       article_id: this.article_id,
       user_name: this.user_name,
       content: this.content,
       creation_date: this.creation_date
   }
   return $.ajax({
            url:"https://gabriela-szgabryela.c9users.io/blog/api/comments/add",
            type:"POST",
            data:dataComment,
            success:function(resp){
                console.log("Succes - comment added");
            },
          error:function(xhr,status,error){
                alert("Unable to post your comment "+status);
            }
        });
};