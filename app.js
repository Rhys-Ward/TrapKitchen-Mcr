// menu
let mainsTitle = document.getElementById("mains");
let sidesTitle = document.getElementById("sides");
let drinksTitle = document.getElementById("drinks");
// scroll bck to top
let sidesTop = document.getElementById("sides-top");
let eachMain = document.querySelectorAll("#mains-container p");
let mainHeading = document.querySelectorAll("#mains-container h5");
let mainsContainer = document.getElementById("mains-container");
let menuSection = document.querySelectorAll(".menu-fadeUp ");
//////////////////////////////////////////
// ! nav burgerbar
const navSlide = () => {
  const burger = document.querySelector(".burger");

  const nav = document.querySelector(".nav-links");
  const navSocials = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", (e) => {
    console.log("yey");

    // toggle nav slider
    nav.classList.toggle("nav-active");
    // burger animation
    burger.classList.toggle("toggle");
    // animate links
    navSocials.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = " ";
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

  // mainsTitle.classList.add("mains-active");
};
// !Menu

// ! menu observer
const options = {
  root: null, // itis the view port
  threshold: 0.2, // between 0-1, 0 being once it hits the page, and 1 being when all the page is in the viewport
  rootMargin: "-0px 0px -30px 0px", // set in px or % only
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      console.log(entry.target, "i am entry target");
      entry.target.classList.add("appear");
      mainsTitle.classList.add("mains-active");

      // stops observing
      appearOnScroll.unobserve(entry.target);
    }
  });
},
options);
// each menu section - fadeup class
menuSection.forEach((item) => {
  appearOnScroll.observe(item);
});

// mains-active
// ! sides onClick
sidesTitle.addEventListener("click", function (e) {
  mainsTitle.classList.remove("mains-active");
  sidesTitle.classList.remove("mains-active");

  let sideHeading = document.querySelectorAll("#side-container h5");
  let eachSide = document.querySelectorAll("#side-container p");

  /////////////////////////

  sideHeading.forEach((item, index) => {
    {
      if (item.style.animation) {
        item.style.animation = `fadeUp 500ms ease-in forwards ${
          index / 25 + 0.3
        }s`;
      } else {
        item.style.animation = `fadeUp 500ms ease-in forwards ${
          index / 25 + 0.2
        }s`;
        console.log(index / 7, "side item index");
      }
    }
  });
  eachSide.forEach((item, index) => {
    {
      if (item.style.animation) {
        item.style.animation = `fadeUp 500ms ease-in forwards ${
          index / 25 + 0.3
        }s`;
      } else {
        item.style.animation = `fadeUp 500ms ease-in forwards ${
          index / 25 + 0.3
        }s`;
        console.log(index / 7, "side item index");
      }
    }
  });
});
// ! drinks Onclick
drinks.addEventListener("click", function (e) {
  mainsTitle.classList.remove("mains-active");

  let eachDrink = document.querySelectorAll("#drinks-container p");

  eachDrink.forEach((item, index) => {
    {
      if (item.style.animation) {
        item.style.animation = `fadeUp 500ms ease-in forwards ${
          index / 25 + 0.3
        }s`;
      } else {
        item.style.animation = `fadeUp 500ms ease-in forwards ${
          index / 25 + 0.2
        }s`;
        console.log(index / 7, "side item index");
      }
    }
  });
});
// ! mains onClick
mainsTitle.addEventListener("click", function (e) {
  mainHeading.forEach((item, index) => {
    {
      if (item.style.animation) {
        item.style.animation = `fadeUp 500ms ease-in forwards ${
          index / 25 + 0.3
        }s`;
      } else {
        item.style.animation = `fadeUp 500ms ease-in forwards ${
          index / 25 + 0.2
        }s`;
        console.log(index / 7, "side item index");
      }
    }
  });
  eachMain.forEach((item, index) => {
    {
      if (item.style.animation) {
        item.style.animation = `fadeUp 500ms ease-in forwards ${
          index / 25 + 0.3
        }s`;
      } else {
        item.style.animation = `fadeUp 500ms ease-in forwards ${
          index / 25 + 0.3
        }s`;
        console.log(index / 7, "side item index");
      }
    }
  });
});

// back to top
sidesTop.addEventListener("click", function (e) {
  sidesTitle.classList.add("mains-active");
});

function replace(hide, hideOne, show) {
  document.getElementById(hide).style.display = "none";
  document.getElementById(hideOne).style.display = "none";
  document.getElementById(show).style.display = "flex";
}
arrow = document.getElementById("arrow");
console.log(arrow.getTotalLength(), "i am arrow");

///////////////////////////////////////////////////////

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
// !onscroll
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
    // !mains
    // mainsTitle.classList.add("mains-active");
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

//! Scroll animation javascript
const contactWrapper = document.getElementById("contact-container");
const faders = document.querySelectorAll(".fade-left");
const contactFaders = document.querySelector(".fade-up");
const mapFader = document.querySelector(".map-container");
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -30px 0px",
};
const appearOnScroll1 = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
      // entry.target.classList.remove("appear");
    } else {
      entry.target.classList.add("appear");
      contactFaders.classList.add("appear1");
      mapFader.classList.add("appear1");
      console.log("hit");

      // appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

appearOnScroll1.observe(contactFaders);
faders.forEach((fader) => {
  appearOnScroll1.observe(fader);
});

//! Disable Scroll Function

const scrollCancel = () => {
  const functionDisable = () => {
    topScroll = window.pageYOffset || document.documentElement.scrollTop;
    leftScroll = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
      window.scrollTo(leftScroll, topScroll);
    };
  };
  functionDisable();

  const functionEnable = () => {
    window.onscroll = function () {};
  };
  setTimeout(function enableFunction() {
    window.onscroll = function () {};
  }, 4000);
};

// ! CONCEPT PAGE
function splitScroll() {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: "30%",
    triggerElement: ".concept-logo-container, about-pages",
    triggerHook: 0.5,
  })

    .setPin(".concept-logo-container, about-pages")
    .addIndicators()
    .addTo(controller);
}
// !all functions called within app
const app = () => {
  navSlide();
  // scrollCancel();
  splitScroll();
};
app();
