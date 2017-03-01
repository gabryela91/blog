/* global $ */
/* global Articles */
/* global Article */
$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    var btnAdd= $('#add-article');
     btnAdd.on("click", function(){
     window.location.href= "https://gabriela-szgabryela.c9users.io/blog/assets/templates/addArticle.html";        
            });
    
    var articlesContainer = $("#js-objects");
    var paginationContainer= $('#pagination');
    var articles= new Articles();
    var articlesShow= articles.getAll();
       articlesShow.done(function(){
         listArticles();
          
        for(var i=1; i <= articles.nrPage; i++) {
            var btnPage = $('<button data-value='+ i +'>' + '</button>'); 
            var numberPage= i;
            btnPage.html(numberPage);
            paginationContainer.append(btnPage);
            btnPage.addClass("css-buttons");
            
            btnPage.on("click", function(){
             var page= $(this).data("value");
             articles.getAll("", page).done(listArticles);
            });
            
        }
           
        
        var searchBtn= $('#search-btn');
        searchBtn.on("click",function(ev){
         ev.preventDefault();
         var searchValue = $("input[name='search']").val();
         articles.getAll(searchValue,"").done(listArticles) ;
                
            });
        
    });
    
    
          function listArticles () {
          articlesContainer.html('');
          for (var i=0; i<articles.models.length; i++) {
           var containerBox= $("<div></div>").addClass("container-box");
           
           var articleBox = $("<div></div>").addClass("article-box");
           
           containerBox.append(articleBox);
           
           var textContainer= $("<div article-id=" +articles.models[i].id+ ">" + "</div>").addClass("articleText");
           var dateCreate= $("<p>" + articles.models[i].created_at + "</p>").addClass("home-header");
           var imageContainer = $("<img>").addClass("articleImage");
           textContainer.addClass("preview");
        
            imageContainer.attr("src", "../../uploads/" + articles.models[i].file);
            var title= $("<p>"+articles.models[i].title+"</p>").addClass("home-title");
            var content= $("<p>"+articles.models[i].content+ "</p>").addClass("post ");
            textContainer.append(dateCreate, title, content);
            articleBox.append(imageContainer, textContainer);
            articlesContainer.append(articleBox);
            var editBtn = $("<button id=" + articles.models[i].id +">"+ "</button>").html("Edit").addClass("edit");
            articleBox.append(editBtn);
            editBtn.on("click", function(){
            var idArticle= $(this).attr("id");
        window.location.href = "https://gabriela-szgabryela.c9users.io/blog/assets/templates/edit.html?id=" + idArticle;        
            });
            
            
            var deleteBtn = $("<button id=" + articles.models[i].id +">"+ "</button>").html("Delete");
            articleBox.append(deleteBtn);
            deleteBtn.on("click", function(){
                // ev.preventDefault();
            var idArticle= $(this).attr("id");
            articles.deleteArticle(idArticle).done(function(){
              window.location.reload();  
            });
             
            });
            
           textContainer.on("click", thisArticle);
       }  
      
         
        
        function thisArticle(){
        
        var articleId= $(this).attr("article-id");
        var selectedArticle= window.location.href = "https://gabriela-szgabryela.c9users.io/blog/assets/templates/publicArticles.html?id="+articleId;
          
      }
      
        

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

            

}

