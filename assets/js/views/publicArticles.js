 /* global $, Comment, Comments, Articles */ 
  $(document).ready(onHtmlLoaded);
function onHtmlLoaded() {
    var articleId = getUrlParam("id");
    var newComment = $('#add-comment');
    newComment.on("click", function (ev) {
        ev.preventDefault();
        var articleComment = new Comment({
            content: $("#content").val(),
            article_id: articleId ,
        });
        articleComment.addComment().done(function(){
            window.location.reload();
        });
    });
    
    
}   

  function getUrlParam(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results==null){
                return null;
            }
            else{
                return results[1] || 0;
            }
    
    }