"use strict";

// when navbar scrolling
const navbar = document.querySelector("#navbar");
let last_known_scroll_position = 0;
let ticking = false;

// scroll event listener
window.addEventListener("scroll", () => {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      navbarActive(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});

// callback functions
function navbarActive(positionY) {
  navbar.classList.add("navbar--dark");
  if (positionY == 0) {
    navbar.classList.remove("navbar--dark");
  }
}

// navbar menu click
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  scrollIntoView(event);
});

// home contact btn click
const home = document.querySelector(".home__contact");
home.addEventListener("click", (event) => {
  scrollIntoView(event);
});

// callback functions
function scrollIntoView(event) {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// Works Filter
const workCategories = document.querySelector(".work__categories");
const projects = document.querySelectorAll(".work__project");

workCategories.addEventListener("click", (event) => {
  const target = event.target;
  const filter = target.dataset.filter;
  if (filter == null) {
    return;
  }
  // filter button selected & remove
  const active = document.querySelector(
    ".category__btn.category__btn--selected"
  );
  active.classList.remove("category__btn--selected");
  target.classList.add("category__btn--selected");

  // projects get and filtering
  projects.forEach((project) => {
    let dataType = project.dataset.type;
    if (dataType === filter || filter === "all") {
      project.classList.remove("work__project--hidden");
    } else {
      project.classList.add("work__project--hidden");
    }
  });
});
