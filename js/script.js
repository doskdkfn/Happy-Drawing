$(document).ready(function () {
    var idx=0;
    setInterval(function () {
        $('#slide > a'). eq(idx).fadeOut(400);
        idx==2?idx=0:idx++;
        $('#slide > a').eq(idx).fadeIn(800);
    }, 3000);
});