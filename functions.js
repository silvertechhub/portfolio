const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const brandName = document.querySelector(".brand-name");


const showMenu = () => {
    if (menu.classList.contains("active")){
        menu.classList.remove("active");
        toggle.querySelector("div").innerHTML= "<div class='toggle'></div>"
    }else{
        menu.classList.add("active");
        toggle.querySelector("div").innerHTML = "<div class='fas fa-times'></div>"
    }
}

toggle.addEventListener("click", showMenu, false)