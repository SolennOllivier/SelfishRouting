function handleFileSelect(evt) {
    var id = $(this).attr('id');
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
        $('.'+id).html('');
        $('.'+id).css({
            background:'url('+e.target.result+') no-repeat center',
            backgroundSize:'cover',
        });
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

$(document).click(function(){
    $('.files').change(handleFileSelect);
});

/*-----Clic sur add_photograph-----*/
$cpt=2;
$('#add_photograph').click(function(){
    if($cpt<4){
        $("<label class='pic_display' for='"+$cpt+"' title='Select a photograph'><div class='list "+$cpt+"'><i class='fas fa-camera-retro'></i></div></label><input id='"+$cpt+"' class='files' type='file' name='photo_"+$cpt+"'/>").insertBefore(this);
        $('input[name="nmbre_photos"]').attr('value',$cpt);
        $cpt++;
    }
    else{
        $("<label class='pic_display' for='"+$cpt+"' title='Select a photograph'><div class='list "+$cpt+"'><i class='fas fa-camera-retro'></i></div></label><input id='"+$cpt+"' class='files' type='file' name='photo_"+$cpt+"'/>").insertBefore(this);
        $('input[name="nmbre_photos"]').attr('value',$cpt);
        $(this).css('display','none');
    }
});

