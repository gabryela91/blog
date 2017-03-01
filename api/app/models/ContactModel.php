<?php
require_once "DB.php";

class ContactModel extends DB {
    function getAll($search = "", $start = 0, $limit = 10) {
    $sql = 'select * from contact';
    $data = array();
        
        if ($search !== "") {
            $data = ['%' . $search . '%'];
            $sql .= ' where id = ?' ;
            }
          $sql .= ' limit ' .$start . ',' .$limit;
   return $this->selectAll($sql, $data);
 }
     function selectContactMessage($item) {
        $data= [$item['id']];
        $sql = 'select * from contact where id = ?';
        return $this->getItem($sql, $data);
    }
  function addContactMessage($item) {
        $data= [
                 $item['email'],
                 $item['content']];
                    
                    
     $sql = 'insert into contact (email, content) values (?, ?)';
     return $this->insertItem($sql, $data);
     
    }
 
}

?>