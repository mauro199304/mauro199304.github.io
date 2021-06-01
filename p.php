<?php
$n=0;
while(true){
	$n++;
$ok = file_get_contents('https://mauro199304.github.io/');

$i = json_decode($ok, true)['AppRever'];

if($i=="yes"){
	echo "iniciando Reversa!!\n";
}else{
	"$n segundo";
}
sleep(1);
}

