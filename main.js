let btn = document.getElementById("btn")
let btn2 = document.querySelector(".btn2")
let title = document.querySelector(".title")
let nav1 = document.getElementById("nav1")
let nav2 = document.getElementById("nav2")
let icon = document.getElementById("icon")

if (matchMedia) {
    const media = window.matchMedia("(max-width: 767px)");
    media.addListener(widthChange);
    widthChange(media)
}

function widthChange(media) {
    if (media.matches) {
        icon.onclick = function () {
            nav1.classList.toggle("show")
            nav2.classList.toggle("show")
        }
}
}
window.onscroll = function () {
    if (scrollY >= 500) {
        btn.style.display = "block"
        
    }else{
        btn.style.display = "none"
    }
}

btn.onclick = function () {
    scroll({
        top:0,
        behavior:"smooth"
    })
    
}
btn.style.cursor = "pointer"
