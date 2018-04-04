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
        $nom=$_POST['name'];
        $prenom=$_POST['lastname'];
        $classe=$_POST['classe'];
        $day=date('Y-m-d H:i:s');
       // ($nom, $prenom, $classe,$day)
        $sql = "INSERT INTO eleve (nom, prenom, nom_classe,day) VALUES ('$nom', '$prenom', '$classe','$day')";
        
       
        
        if ($conn->query($sql) === TRUE) {
            echo "Merci.Un nouvel elève inscrit";
        } else {
            echo "Erreur: " . $sql . "<br>" . $conn->error;
        }
    }else{
        echo('donnée pas rempli');
      //  echo json_encode(array('status' =>'success', 'msg' =>'modifié'));
    }


    $conn->close();
    ?>