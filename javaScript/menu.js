const ul = document.querySelector("header nav ul");
const menu = document.querySelector("#menu i");

menu.addEventListener("click" , () =>{
    (menu.classList.contains("ri-menu-line")) ? 
    menu.classList.replace("ri-menu-line" , "ri-close-line") :  menu.classList.replace("ri-close-line" , "ri-menu-line");
    ul.classList.toggle("show")
})