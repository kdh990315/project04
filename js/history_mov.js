
$(function () {
    $(window).scroll(function () {
        for(var i = 1; i < 10; i++) {
            if($(this).scrollTop() > $(".history_item"+ i + "_text_box").offset().top - 800) {
                $(".history_item"+ i + "_text_box").css({
                    "opacity" : "1",
                    "transform" : "translateX(0px)"
                });
            }
        }
        for(var i = 1; i < 8; i++) {
            if($(this).scrollTop() > $(".history_img" + i).offset().top - 700) {
                $(".history_img" + i).css({
                    "opacity" : "1",
                    "transform" : "translateX(0px)"
                });
            }
        }

        if($(this).scrollTop() > $(".history_long_img").offset().top - 700) {
            $(".history_long_img").css({
                "opacity" : "1",
                "transform" : "translateY(0px)"
            });
        }

        if($(this).scrollTop() > $(".world_map > h1").offset().top - 800) {
            $(".world_map > h1").css({
                "opacity" : "1",
                "top" : "15%"
            });
        }

        if($(this).scrollTop() > $(".world_map > p").offset().top - 800) {
            $(".world_map > p").css({
                "opacity" : "1",
                "top" : "25%"
            });
        }

    
    });
});