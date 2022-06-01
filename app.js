// ! nav burgerbar
const navSlide = () => {
  const burger = document.querySelector(".burger");

  const nav = document.querySelector(".nav-links");
  const navSocials = document.querySelectorAll(".nav-links li");

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

// !get day and opening hours
window.onload = function () {
  let day = new Date().getDay();
  let days = [
    "Open - 15:00 - 21:00",
    "Open - 15:00 - 22:00",
    "Closed",
    "Open- 15:00 - 22:00",
    "Open- 15:00 - 22:00",
    "Open- 15:00 - 22:00",
    "Open- 15:00 - 22:00",
  ];

  document.getElementById("day").innerHTML = days[day];
};

//!Menu

function replace(hide, hideOne, show) {
  document.getElementById(hide).style.display = "none";
  document.getElementById(hideOne).style.display = "none";
  document.getElementById(show).style.display = "flex";
}

// ! video
document.querySelector("video").playbackRate = 0.7;

// ! VidLine Animation
// ! stroke-dasharray line
topLineP = document.getElementById("topline");
console.log(topLineP.getTotalLength());
bottomLineP = document.getElementById("bottomline");
console.log(bottomLineP.getTotalLength());

// let path = document.querySelectorAll(" svg path");
// i = 0;
// path.forEach(function (item, index) {
//   i++;
//   const pathLength = item.getTotalLength();

//   item.setAttribute("stroke-dasharray", pathLength / 2);
//   item.setAttribute("stroke-dashoffset", pathLength / 2);
//   item.innerHTML =
//     "<animate  attributeName = 'stroke-dashoffset' begin = '5s' dur='5s' to='0'fill='freeze'/>";

//   console.log(index, pathLength, item.innerHTML);
// });
// !all functions called within app
const app = () => {
  navSlide();
};
app();
