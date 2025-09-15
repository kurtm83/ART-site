<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$imageDir = './images/carousel/';
$allowedExtensions = array('jpg', 'jpeg', 'png', 'gif', 'webp');
$images = array();

if (is_dir($imageDir)) {
    $files = scandir($imageDir);
    
    foreach ($files as $file) {
        if ($file != '.' && $file != '..') {
            $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
            if (in_array($extension, $allowedExtensions)) {
                $images[] = $file;
            }
        }
    }
    
    // Sort images naturally (image1.png, image2.png, etc.)
    natsort($images);
    $images = array_values($images);
}

echo json_encode($images);
?>