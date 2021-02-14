navAside = document.getElementById("navAside");
scrollBtn = document.getElementById("topScrollBtn");

window.onscroll = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navAside.style.top = "0px";
        scrollBtn.style.display = "block";
    }else{
        navAside.style.top = "60px";
        scrollBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}