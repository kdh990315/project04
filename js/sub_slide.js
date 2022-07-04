document.addEventListener('DOMContentLoaded', function() {
    var slide = document.getElementsByClassName("slide"),
        prev = document.getElementById("prev"),
        next = document.getElementById("next"),
        slideCount = slide.length,
        Count = 0;
    // 다음버튼 할일
    function nextF(idx) {
        slide[idx].classList.add("dh");
        slide[idx-1].classList.remove("dh");
        if (idx == slideCount - 1) {
            next.classList.remove("btn_on");
        }
        if (idx > 0) {
            prev.classList.add("btn_on");
        }
    }
    // 다음버튼
    next.addEventListener("click", function (ev) {
        ev.preventDefault();
        if (Count < slideCount - 1) {
            nextF(++Count);
        }
    })
    // 이전버튼 할일
    function prevF(idx) {
        slide[idx].classList.add("dh");
        slide[idx+1].classList.remove("dh");
        if (idx == 0) {
            prev.classList.remove("btn_on");
        }
        if (idx < slideCount -1) {
            next.classList.add("btn_on");
        }

    }
    // 이전버튼
    prev.addEventListener("click", function (ev) {
        ev.preventDefault();
        if(Count > 0) {
            prevF(--Count);
        }
    })

});