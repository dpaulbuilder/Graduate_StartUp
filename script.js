var mToggle = document.getElementById("menu-toggle")
var menu = document.getElementById("menu")

const active =() =>{
    menu.classList.toggle("active")
}

mToggle.addEventListener("click", active)
