// variables
const nav = document.querySelector(".nav");
const navIcon = document.querySelector(".nav-icon");
const social = document.querySelector(".social");
const category = document.querySelector(".category");
const categories = document.querySelectorAll(".category__btn");

// functions
function toggleNav() {
 navIcon.addEventListener("click", function() {
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
 })
}

function activeNav() {
 categories.forEach(function(category){
  category.addEventListener("click", function(){
   categories.forEach(function(category){
    category.classList.remove("active");
   })
   category.classList.add("active");
  })
 })
}

// event listeners

window.addEventListener("DOMContentLoaded", function() {
 toggleNav();
 activeNav();
})