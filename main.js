'use strict';

// when navbar scrolling
const navbar = document.querySelector('#navbar');
let last_known_scroll_position = 0;
let ticking = false;

// callback function
function navbarActive(positionY) {
  navbar.classList.add('navbar--dark');
  if (positionY == 0) {
    navbar.classList.remove('navbar--dark');
  } 
}
// scroll event listener
window.addEventListener('scroll', ()=> {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(()=> {
      navbarActive(last_known_scroll_position);
      ticking = false;
    });
    ticking = true;
  }
});

// navbar menu click
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event)=> {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  console.log(link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior:"smooth"});
  
})