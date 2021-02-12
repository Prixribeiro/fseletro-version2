<?php 

require_once "../bd/Actions/db_connect.php";

$result = query("SELECT * FROM produto");
$produtos = [];

while ($row = mysqli_fetch_assoc($result)){
    $produtos[]=$row;
}

header("Access-Control-Allow-Origin:*");
echo json_encode($produtos);
?>