<?php

require("db/db.php");   
ini_set('display_errors', 1);               // Setup file
error_reporting(E_ALL);
$userName = $_POST['user']; 
$pass = $_POST['password']; 

        if($_POST['username'] != "" || $_POST['password'] != ""){
            $username = $_POST['username'];
            $password = $_POST['password'];
            $sql = "SELECT * FROM `user` WHERE `username`=? AND `password`=? ";
            $query = $conn->prepare($sql);
            $query->execute(array($username,$password));
            $row = $query->rowCount();
            $fetch = $query->fetch();
            if($row > 0) {
            $success = true;
              $msg = utf8_encode('käyttäjä löyty');

        } else {
		
                $success = false;
                $msg = utf8_encode('Käyttäjää ei ole.');
        }

        }
    


?>
