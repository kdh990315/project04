var btn = document.getElementById("back_to_top"),
    doc = document.documentElement, // 문서 전체
    scrollPos = 0; // 스크롤 양

window.addEventListener("scroll", function () {
    scrollPos = doc.scrollTop;
    btn.className = (scrollPos > 1150) ? "visible" : "" ;
});

btn.addEventListener("click", function (e) {
    e.preventDefault();
    var up = setInterval(function () {
        if(scrollPos != 0) {
            window.scrollBy(0, -55);
        } else {
            clearInterval(up);
        }
    }, 15);
});