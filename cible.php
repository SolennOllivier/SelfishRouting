<?php
   $photos=array();
    $compteur_photos=$_POST['nmbre_photos'];
    $cpt1=1;
    for ($cpt = 1; $cpt <= $compteur_photos; $cpt++){
        $tmp_file_photo = $_FILES['photo_'.$cpt]['tmp_name'];
        if(is_uploaded_file($tmp_file_photo)){
            $infosphoto = pathinfo($_FILES['photo_'.$cpt]['name']);
            $extension_upload_photo = $infosphoto['extension'];
            $extensions_autorisees_photo = array('jpg','JPG','gif','png','bmp','jpeg','JPEG');  
            $name_photo = "photo_".$cpt1.".".$extension_upload_photo;
            $name_photo = str_replace(' ', '', $name_photo);
            $cpt1++;
            if (in_array($extension_upload_photo, $extensions_autorisees_photo))
            {
                if( !move_uploaded_file($tmp_file_photo, $content_dir . $name_photo) )
                {
                    exit("Impossible de copier la photo " . $cpt);
                    $erreur+=1;
                }
                else{
                    array_push($photos, $name_photo);
                }
            }
            else {
                exit('La photo '.$cpt.' ne respecte pas les extensions autorisées');
                $erreur+=1;
            }
        }
    }
    /*if(empty($photos)){
        array_push($photos,'default.png');
    }*/
    
?>