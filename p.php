<?php
$n=0;
while(true){
	$n++;
$ok = file_get_contents('https://mauro199304.github.io/');

$i = json_decode($ok, true)['AppRever'];
//echo $i;

if($i=="no"){
	echo "iniciando Reversa!!\n";
	exit;
}else{
	echo "$n\n";
}
sleep(1);
}

