document.addEventListener("DOMContentLoaded", function () {
    var address = this.location.href,
        li = document.getElementsByClassName("ad"),
        index_result = address.indexOf("index"),
        sub1_result = address.indexOf("sub1"),
        sub2_result = address.indexOf("sub2");


    function address_start () {
        if(index_result >= 0) {
            li[0].classList.add("adok");
            li[1].classList.remove("adok");
            li[2].classList.remove("adok");
            li[3].classList.add("adok");
            li[4].classList.remove("adok");
            li[5].classList.remove("adok");
        } else if(sub1_result >= 0) {
            li[0].classList.remove("adok");
            li[1].classList.add("adok");
            li[2].classList.remove("adok");
            li[3].classList.remove("adok");
            li[4].classList.add("adok");
            li[5].classList.remove("adok");
        } else if(sub2_result >= 0) {
            li[0].classList.remove("adok");
            li[1].classList.remove("adok");
            li[2].classList.add("adok");
            li[3].classList.remove("adok");
            li[4].classList.remove("adok");
            li[5].classList.add("adok");
        }
    }

    address_start();
});