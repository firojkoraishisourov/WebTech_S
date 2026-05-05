<?php
header("Content-Type: application/json");

// Create student data (associative array)
$students = array(
    array(
        "name" => "Sourov",
        "id" => "23-53516-3",
        "department" => "CSE",
        "cgpa" => 3.84
    ),
    array(
        "name" => "Rahim",
        "id" => "20-54321-1",
        "department" => "EEE",
        "cgpa" => 3.45
    ),
    array(
        "name" => "Karim",
        "id" => "20-67890-1",
        "department" => "BBA",
        "cgpa" => 3.20
    )
);

// Convert PHP array → JSON
echo json_encode($students);
?>