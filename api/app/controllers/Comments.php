<?php
require "app/models/CommentsModel.php";

class Comments {
    private $commentsModel;
    function __construct() {
    $this->commentsModel = new CommentsModel();
    }
    function getAll() {
        
        return $this->commentsModel->getAll();
        
    }
    function selectComment(){
        if (isset($_GET['id'])) {
         return $this->commentsModel->selectComment($_GET['id']);
        }
    //   return $this->commentsModel->selectComment($_POST);
    }
    function addComment() {
    
    //   $commentAdd= $this->commentsModel->addComment($_POST);
       return $this->commentsModel->addComment($_POST);
    //   print_r(commentAdd);
    }
    
    function deleteComment() {
        // checkAdminSession();
    
        global $DELETE; 
        return $this->commentsModel->deleteComment($DELETE);
        
    }
}
?>