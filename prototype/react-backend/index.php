<?php

$serverName="localhost";
$username="react_php";
$password="";
$databaseName="react_php";
$conn = mysqli_connect($serverName,$username,$password,$databaseName);
$recText = $_POST['text'];
$query ="INSER INTO react_php (texts) VALUES ('$recText')";



if (mysqli_query($conn,$query)){
    echo "data has been inserted successfully";
}
else {
echo "error alala ";
}
