$(function () {
    $(window).scroll(function () {

        // 오른쪽 info 이미지
        for(var i = 0; i < 6; i++) {
            var $img_box = $(".info_box_img" + i);
            var $info_menu_box = $(".info_nav_box");
            var $info_menu_on = $(".info_ul > li").eq(i);

            

            if($(this).scrollTop() <= $img_box.offset().top - 699) {
                $img_box.css({
                    "width" : "800px"
                });

                $info_menu_on.removeClass("on");
            }

            if($(this).scrollTop() > $img_box.offset().top -700) {
                $img_box.css({
                    "width" : "58vw"
                });
                
                $info_menu_on.addClass("on");

            }   
            if(($(this).scrollTop() > $img_box.offset().top + 300)) {
                $img_box.css({
                    "width" : "800px"
                });

                $info_menu_on.removeClass("on");
            }




            // 왼쪽 menu
            if($(this).scrollTop() > $info_menu_box.offset().top -478) {
                $info_menu_box.css({
                    "position" : "sticky",
                    "top": "150px"
                });
            }
            if($(this).scrollTop() <= $info_menu_box.offset().top -577) {
                $info_menu_box.css({
                    "position" : "absolute"
                });
            }


        }
        
    });
});