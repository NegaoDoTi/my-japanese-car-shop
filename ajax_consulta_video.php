<?php
    $caminho = dir("videos/");
    while($video = $caminho->read()){
        if($video == "." or $video == ".."){
            continue;
        }
        $arquivos[] = "videos/".$video;
    }
    $sorteo = array_rand($arquivos, 1);
    echo json_encode($arquivos[$sorteo]);
?>