<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "projet_edacy";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Pas de connexion: " . $conn->connect_error);
    } 
    if (isset($_GET['id']) )
   {
    
        $sql = "DELETE FROM classe WHERE id_classe=".$_GET['id'];
        if ($conn->query($sql) === TRUE) {
            echo "Classe supprimer";
        } else {
            echo "Erreur de suppression: " . $conn->error;
        }
    }else{
    echo('pas de donnée reçus');
    }
    $conn->close();
?>