$(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() > 0) {
            $("header").addClass('sticky');

        } else {
            $('header').removeClass('sticky');
        }
    });

    
});

