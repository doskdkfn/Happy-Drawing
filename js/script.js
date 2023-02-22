$(document).ready(function () {

 /************ main-slide ***********/

    var idx=0;
    setInterval(function () {
        $('#slide > a'). eq(idx).fadeOut(400);
        idx==2?idx=0:idx++;
        $('#slide > a').eq(idx).fadeIn(800);
    }, 3000);

 /*********** gallery-photo **********/

    $('.thumb_item').click(function () {
        $('#photo-back,#big,.photo-close').fadeIn();
    });

    $('.xmark').click(function () {
        $('#photo-back,#big').hide();
    });

});