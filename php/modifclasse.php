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
    $sql = "UPDATE classe SET nom='".$_POST['classe']."' WHERE id_classe=".$_GET['id'];
    if ($conn->query($sql) === TRUE) {
        echo "Classe modifier";
    } else {
        echo "Erreur de modification: " . $conn->error;
    }

    $conn->close();
    ?>