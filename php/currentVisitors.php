<?php
session_start();

// Track visitors
if (!isset($_SESSION['visited'])) {
    $_SESSION['visited'] = true;

    // Increment the visitor count
    $file = '../visitor_count.txt';
    $currentCount = 1;
    if (file_exists($file)) {
        $currentCount = file_get_contents($file);
        $currentCount++;
    }
    file_put_contents($file, $currentCount);
}

// Retrieve the current visitor count
$file = '../visitor_count.txt';
$currentCount = 0;
if (file_exists($file)) {
    $currentCount = file_get_contents($file);
}
echo $currentCount;
?>
