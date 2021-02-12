<?php 
function query($sql){
    $servername = 'localhost';
    $username = 'root' ;
    $password = 'root' ;
    $database = 'fullstackeletro';
     
    //criando a conexão
    $conn = mysqli_connect ($servername, $username, $password, $database);
    $resultado = mysqli_query($conn, $sql);
    mysqli_close($conn);
    return $resultado;
}

//Para fazer inserts, deletes 
function nonquery($sql){
    $servername = 'localhost';
    $username = 'root' ;
    $password = 'root' ;
    $database = 'fullstackeletro';
     
    //criando a conexão
    $conn = mysqli_connect ($servername, $username, $password, $database);
    $resultado = mysqli_query($conn, $sql);
    mysqli_close($conn);
    
}

?>