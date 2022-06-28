// $(function () {
//     $(window).scroll(function () {
//         if($(this).scrollTop() > $(".history_item" + i + "_text_box").offset().top - 800) {
//             $(".history_item" + i + "_text_box").css({
//                 "left" : 0,
//                 "display" : "none"
//             });
//         }
//     });
// });

$(function () {
    for(var i = 1; i < 10; i++) {
        $(".history_item" + i + "_text_box").css({
            "left" : -100,
            "display" : "none"
        });
    //     $(window).scroll(function () {
    //         if($(this).scrollTop() > $(".history_item" + i + "_text_box").offset().top - 800) {
    //             $(".history_item" + i + "_text_box").css({
    //                 "left" : 0,
    //                 "display" : "block"
    //             })
    //         }
    //     })
    }

    $(window).scroll(function () {
        if($(this).scrollTop() > $(".history_item1_text_box").offset().top - 0) {
            $(".history_item1_text_box").css({
                "left" : 0,
                "display" : "block"
            })
        }
    })
    // $(window).scroll(function () {
    //     for(var i = 1; i < 10; i++) {
    //         if($(this).scrollTop() > $(".history_item" + i + "_text_box").offset().top - 800) {
    //             $(".history_item" + i + "_text_box").css({
    //                 // "left" : 0,
    //                 "display" : "block"
    //             });
    //         }
    //     }
    // });
});