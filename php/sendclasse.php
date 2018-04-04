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
    if ($_POST) {
        $classe=$_POST['classe'];
         $day=date('Y-m-d H:i:s');
        $sql = "INSERT INTO classe (nom, day) VALUES ('$classe', '$day')";
       if ($conn->query($sql) === TRUE) {
            echo "Merci.Une nouvelle classe ajoutée";
        } else {
            echo "Erreur: " . $sql . "<br>" . $conn->error;
        }
    }else{
        echo('donnée pas rempli');
    }
    $conn->close();
    ?>