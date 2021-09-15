// variables
const nav = document.querySelector(".nav");
const navIcon = document.querySelector(".nav-icon");
const social = document.querySelector(".social");
const category = document.querySelector(".category");

// functions
function toggleNav() {
 if (nav.classList.contains("toggleNav")) {
  nav.classList.remove("toggleNav");
  nav.classList.remove("nav-invert");
  social.classList.add("hidden");
  category.classList.add("hidden");
 }
 else {
  nav.classList.add("toggleNav");
  nav.classList.add("nav-invert");
  social.classList.remove("hidden");
  category.classList.remove("hidden");
 }
}

// event listeners
navIcon.addEventListener("click", function() {
 toggleNav();
})