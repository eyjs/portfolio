'use strict';

// documnet elementes
const navbar = document.querySelector('#navbar');
const home = document.querySelector('#about');
const about = document.querySelector('#about');
const skills = document.querySelector('#works');
const works = document.querySelector('#career');
const desc = document.querySelector('#desc');

// variables
let last_known_scroll_position = 0;
let ticking = false;

// functions
function navbarActive(positionY) {
  navbar.classList.add('navbar--dark');
  if (positionY == 0) {
    navbar.classList.remove('navbar--dark');
  } 
}

// event listeners
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
