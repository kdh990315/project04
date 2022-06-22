$(function () {

    var i = 0;

    function slide() {
        i++;
        if (i > $(".main_slide li:last").index()) {
            i = 0;
        }
        $(".main_slide li").eq(i).stop().fadeIn(2000);
        $(".main_slide li").eq(i-1).stop().fadeOut(2000);

    }
    setInterval(slide, 3000);
});