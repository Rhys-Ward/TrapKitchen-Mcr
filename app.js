let mains = document.getElementById("mains");
let sides = document.getElementById("sides");
let drinks = document.getElementById("drinks");
let sidesTop = document.getElementById("sides-top");

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

  mains.classList.add("mains-active");
};
// !Menu
// mains-active
sides.addEventListener("click", function (e) {
  mains.classList.remove("mains-active");
});
drinks.addEventListener("click", function (e) {
  mains.classList.remove("mains-active");
  sides.classList.remove("mains-active");
});
mains.addEventListener("click", function (e) {
  mains.classList.remove("mains-active");
  sides.classList.remove("mains-active");
});
sidesTop.addEventListener("click", function (e) {
  sides.classList.add("mains-active");
});

function replace(hide, hideOne, show) {
  document.getElementById(hide).style.display = "none";
  document.getElementById(hideOne).style.display = "none";
  document.getElementById(show).style.display = "flex";
}
arrow = document.getElementById("arrow");
console.log(arrow.getTotalLength(), "i am arrow");
// ! video
document.querySelector("video").playbackRate = 0.7;

// ! VidLine Animation
// ! stroke-dasharray line
// topLineP = document.getElementById("topline");
// console.log(topLineP.getTotalLength());
// bottomLineP = document.getElementById("bottomline");
// console.log(bottomLineP.getTotalLength());
// !trap svg
// T
tLine = document.getElementById("T");
console.log(tLine.getTotalLength(), "i am T line");
// R
rLine = document.getElementById("R");
console.log(rLine.getTotalLength(), "i am r line");
midRLine = document.getElementById("R-Mid");
console.log(midRLine.getTotalLength(), "i am mid r line");
// A
aLine = document.getElementById("A");
console.log(aLine.getTotalLength(), "i am a line");
midALine = document.getElementById("A-Mid");
console.log(midALine.getTotalLength(), "i am mid a line");
// P
pLine = document.getElementById("P");
console.log(pLine.getTotalLength(), "i am p line");
midPLine = document.getElementById("P-Mid");
console.log(midPLine.getTotalLength(), "i am mid p line");

// !trap active

window.onscroll = () => {
  if (window.scrollY > `${window.innerHeight}`) {
    tLine.classList.add("trap-active");
    rLine.classList.add("trap-active");
    midRLine.classList.add("trap-active");
    aLine.classList.add("trap-active");
    midALine.classList.add("trap-active");
    pLine.classList.add("trap-active");
    midPLine.classList.add("trap-active");
    arrow.classList.add("arrow-active");
  } else {
    tLine.classList.remove("trap-active");
    rLine.classList.remove("trap-active");
    midRLine.classList.remove("trap-active");
    aLine.classList.remove("trap-active");
    midALine.classList.remove("trap-active");
    pLine.classList.remove("trap-active");
    midPLine.classList.remove("trap-active");
    arrow.classList.remove("arrow-active");
  }
};
// !clock svg
clock = document.getElementById("clock");
console.log(clock.getTotalLength(), "i am clock");
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

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 53.48291522587735, lng: -2.208750210446786 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("googlemaps"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

// !all functions called within app
const app = () => {
  navSlide();
};
app();
