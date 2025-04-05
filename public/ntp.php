<?php

$time = $_GET['time'];









$data = array(
    "request" => $time,
    "response" => time(),

);







header('Content-type: application/json');
echo json_encode( $data );


