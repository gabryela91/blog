<?php
require "app/models/ContactModel.php";
class Contact {
    private $contactModel;
    function __construct() {
    $this->contactModel = new ContactModel();
    }
    function getAll() {
        
        return $this->contactModel->getAll();
        
    }
    function selectContactMessage(){
       return $this->contactModel->selectContactMessage($_POST);
    }
    function addContactMessage() {
        
      return $this->contactModel->addContactMessage($_POST);
    }
    
  
}
?>