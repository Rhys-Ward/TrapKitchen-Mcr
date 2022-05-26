// ! nav burgerbar
const navSlide = () =>{
const burger = document.querySelector(".burger");

const nav = document.querySelector(".nav-links");

burger.addEventListener("click",()=>{
    nav.classList.toggle("nav-active");
})
}

// !all functions called within app
const app = () =>{
    navSlide();

}
app();