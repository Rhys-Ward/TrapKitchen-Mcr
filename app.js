// ! nav burgerbar
const navSlide = () => {
  const burger = document.querySelector(".burger");

  const nav = document.querySelector(".nav-socials");
  const navSocials = document.querySelectorAll(".nav-socials li");

  burger.addEventListener("click", () => {
    // toggle nav slider

    nav.classList.toggle("nav-active");
    // burger animation
    burger.classList.toggle("toggle");
    // animate links
    navSocials.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
        console.log(index / 7, "link index");
      }
    });
  });
};

// !all functions called within app
const app = () => {
  navSlide();
};
app();
