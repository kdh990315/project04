document.addEventListener("DOMContentLoaded", function () {
    var open_btn = document.getElementById("toggle"),
        box = document.getElementById("toggle_nav_box"),
        close_btn = document.getElementById("close_toggle");

    open_btn.addEventListener("click", function () {
        box.style.right = "0px";
    });
    close_btn.addEventListener("click", function () {
        box.style.right = "-300px"
    })
});