<?php

$ok = file_get_contents('https://mauro199304.github.io/');

echo json_decode($ok, true)['ok']['rever'];
