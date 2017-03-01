/* global $, Article */
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    var articleForm = $('#create_article');
    articleForm.on("submit", function (ev) {
      ev.preventDefault();
       var titleText = $("input[name='title']").val();
       var contentText = $("input[name='content']").val();
       var articleImgElem = $("input[name='article_img']");
      
       var files = articleImgElem[0].files;
       var articleImg = files[0];
       var formData = new FormData();
       formData.append("title", titleText);
       formData.append("content", contentText);
       formData.append("file", articleImg);
     
       
       
       var article = new Article({
            title:titleText,
            content:contentText,
            image:articleImg,
            
        });
        var articleXhr= article.add(formData);
        articleXhr.done(function(){
    window.location.href= "https://gabriela-szgabryela.c9users.io/blog/assets/templates/admin.html" ;       
        });
   
    });
}