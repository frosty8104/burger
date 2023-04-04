/* onst burger = document.querySelector(".burger");
const menu = document.querySelector("ul");
burger.addEventListener("click", mobileMenu);
function mobileMenu() {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
}
const link = document.querySelectorAll("a");
link.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    burger.classList.remove("active");
    menu.classList.remove("active");
} */

/* function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
} */

const burger = document.querySelector(".burger");
const links = document.querySelector(".links");

burger.addEventListener('click', () => {
    links.classList.toggle('active')
})
