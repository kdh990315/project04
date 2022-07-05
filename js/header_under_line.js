document.addEventListener("DOMContentLoaded", function () {
    if(window.location.pathname == '/project04/') {
        document.getElementById("index").style.borderBottom = "1px solid #111"
    } else if (window.location.pathname == '/project04/sub1.html/') {
        document.getElementById("sub1").style.borderBottom = "1px solid #111"
    }
})