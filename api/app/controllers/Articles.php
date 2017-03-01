<?php
require "app/models/ArticlesModel.php";

class Articles {
    
  function __construct(){
      
  $this->articlesModel = new ArticlesModel();   
  
  } 
    
    
    function getAll(){
        $search = (!empty($_GET["search"])) ? ($_GET["search"]) : "";
        $page = (!empty($_GET["page"])) ? $_GET["page"] : 1;
        $ipp = 4;                       
        $start = $page*$ipp-$ipp;
        $count = $this->articlesModel->countArticles($search);
        $nrPages = ceil($count/$ipp);
        $articles =['items'=> $this->articlesModel->selectArticles($search, $start, $ipp),
                     'nrPages' => $nrPages];  
        return $articles;
        
    }
    
    
    function getItem(){
        if (isset($_GET['id'])) {
        return $this->articlesModel->selectArticle($_GET['id']);
        }
    }
    
    
    function addItem(){
       // echo "add";
        // var_dump($_POST);
        // var_dump($_FILES); 
        // exit;
        // GET FILES AND SAVE TO SERVER
        $tmpPath = $_FILES["file"]["tmp_name"];
        $filePath = "../uploads/".$_FILES["file"]["name"];
        move_uploaded_file($tmpPath, $filePath);
        // ADD FILE NAME INTO DB
        $_POST["file"] = $_FILES["file"]["name"];

        return $this->articlesModel->insertArticle($_POST);   
    }
        
      
    
    function editItem(){
        global $PUT;
        return $this->articlesModel->updateArticle($PUT);
        // return $this->articlesModel->updateArticle($_POST);
        
    }
    
    function deleteItem(){
          global $DELETE;
        return $this->articlesModel->deleteArticle($DELETE);
        // return $this->articlesModel->deleteArticle($_POST);
    }

    
    
    
    
}





?>