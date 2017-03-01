<?php
require "app/models/UsersModel.php";

//session_start();
class Login {
    private $usersModel;
    function __construct() {
    $this->usersModel = new UsersModel();
    }
    
     function createAccount() {
         if (isset($_POST["email"])) {
            $errors= array();
            $email= $_POST["email"];
            $passwd= $_POST["password"];
            $name= $_POST["name"];
            $age= $_POST["age"];
            $gender= $_POST["gender"];
            
            if (empty($email) || !filter_var($email,FILTER_VALIDATE_EMAIL)) {
                $errors["email"]= "Email invalid";
            }
            
            if (empty($passwd)|| strlen($passwd)<6) {
                $errors["password"]= "Password invalid";
            }
            if (empty($name)) {
                $errors["name"]= "Invalid Name";
            }
            if (empty($age) || strlen($age)>5) {
                $errors["age"]= "Invalid age";
            }
            
            if (empty($gender)|| strlen($gender)>1) {
                $errors["$gender"]= "Invalid gender";
            }
            //       function hashPassword($passwd) {
            //           $salt="$123$crypt";
            //      return crypt($passwd,$salt);
            //  } 
            // var_dump($errors);
             if (empty($errors)) {
        $salt= "$1$gabriela$";
        $password = crypt($passwd, $salt);
        
        $_POST["password"]= $password;
        
        return $this->usersModel->addUser($_POST);
        
    
}
            else {
                  return $errors;
            }
    }
}   
    // function hashPassword($passwd) {
    //         $salt="$123$crypt";
    //         return crypt($passwd,$salt);
    //         } 
             
    function loginUser() {
        $email=$_POST["email"];
        $passwd=$_POST["password"];
        
        if (isset($email)){ 
            $errors=array();
            if (empty($email) || empty($passwd)) {
                $errors['errors'] = "Required credentials";
            }
       }
        if (isset($email) && isset($passwd)) {
         $salt= "$1$gabriela$";
        $password = crypt($passwd, $salt);
        
        $_POST["password"]= $password;
        
        // check user from db
        if ($_POST['email'] === "admin@gmail.com" ) {
                    if ($passwd === "admin123") { // UNSECURE
                $salt= "$1$gabriela$";
                
                $adminCriptedPassword= crypt ($passwd, $salt);
              
                       
                    if ($admin !== FALSE) {
                        $_SESSION['adminIsLogged'] = TRUE;
                        $_SESSION['email']= $email;
                       
                         return "Welcome to admin page!";
                    }
                }
        }
            
                else {
                       return $errors= "Invalid credentials";
                }
                   
            }
    }
    

 function logout() {
       
        unset($_SESSION["adminIsLogged"]);
        unset($_SESSION["email"]);
       
        // if (ini_get("session.use_cookies")) {
        //     $params = session_get_cookie_params();
        //     setcookie(session_name(), '', time() - 42000,
        //     $params["path"], $params["domain"],
        //     $params["secure"], $params["httponly"]);
        // }
        session_destroy();
         
        return ["success"=>TRUE];
    }
    

    
   function checkAdminSession() {
        if (isset($_SESSION["adminIsLogged"]) && ($_SESSION["adminIsLogged"] == TRUE)) {
            return ["adminIsLogged"=>TRUE, "email" => $_SESSION["email"]];  
        } 
        else {
            http_response_code(401);  
            return ["error"=>"UNAUTHORIZED"];
        }
    }
    
}

?>

