// arrays

// variables
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const pageList = document.querySelector(".pages");
const pages = document.querySelectorAll(".page");

// functions
function loadHeader()
{
 document.querySelector(".header").innerHTML = ` <div class="logo">
   <h1 class="logo__title">Essential Aesthetics</h1>
   <p class="logo__subtitle">By Essential Care Medical</p>
  </div>
  <nav class="nav">
   <button class="nav__btn"><i class="fas fa-bars nav__enter"></i></button>
   <ul class="pages hidden">
    <li class="page"><a href="#" class="page__link active">Home</a></li>
    <li class="page"><a href="#" class="page__link">About</a></li>
    <li class="page"><a href="#" class="page__link">Services</a></li>
    <li class="page"><a href="#" class="page__link">Products</a></li>
    <li class="page"><a href="#" class="page__link">Specials</a></li>
    <li class="page"><a href="#" class="page__link">Patient Resources</a></li>
   </ul>
  </nav>`
}

function loadFooter()
{
 document.querySelector(".footer").innerHTML = `<div class="foot-tab">
   <h4 class="foot-tab__title">Visit Us</h4>
   <ul class="foot-tab__list">
    <li class="foot-tab__item">9972 Garden Grove Blvd</li>
    <li class="foot-tab__item">Garden Grove, CA, 92843</li>
    <li class="foot-tab__item">Mon to Fri: 9am - 5pm</li> 
    <li class="foot-tab__item">Sat: 10am - 3pm</li> 
   </ul>
  </div>
  <div class="foot-tab">
   <h4 class="foot-tab__title">Contact</h4>
   <ul class="foot-tab__list">
    <li class="foot-tab__item">213-569-1293</li>
    <li class="foot-tab__item">essentialaesthetics@gmail.com</li>
   </ul>
  </div>
  <div class="foot-tab">
   <h4 class="foot-tab__title">Quick Links</h4>
   <ul class="foot-tab__list">
    <li class="foot-tab__item"><a href="#" class="foot-tab__link">Home</a></li> 
    <li class="foot-tab__item"><a href="#" class="foot-tab__link">About</a></li> 
    <li class="foot-tab__item"><a href="#" class="foot-tab__link">Services</a></li> 
    <li class="foot-tab__item"><a href="#" class="foot-tab__link">Products</a></li> 
    <li class="foot-tab__item"><a href="#" class="foot-tab__link">Specials</a></li> 
    <li class="foot-tab__item"><a href="#" class="foot-tab__link">Patient Resources</a></li> 
   </ul>
  </div>
  <ul class="social">
   <a href="#" class="social__link"><i class="fab fa-facebook-f social__icon"></i></a>
   <a href="#" class="social__link"><i class="fab fa-yelp social__icon"></i></a>
   <a href="#" class="social__link"><i class="fab fa-instagram social__icons"></i></a>
  </ul>
  <div class="copyright">
   <p class="copyright__company">Essential Aesthetics</p>
   <p class="copyright__info">&copy; 2021 Essential Care Medical</p>
  </div>`
}

function toggleNav() 
{
 const navBtn = document.querySelector(".nav__btn");
 const nav = document.querySelector(".nav");
 navBtn.addEventListener("click", function() 
 {
  if (nav.classList.contains("toggleNav")) 
  {
   navBtn.innerHTML = `<i class="fas fa-bars nav__enter"></i>`;
   hideNav();
  }
  else 
  {
   navBtn.innerHTML = `<i class="fas fa-times nav__exit" style="color: var(--lt)"></i>`;
   showNav();
  }
 })
}

function hideNav() 
{
 const nav = document.querySelector(".nav");
 const logo = document.querySelector(".logo");
 const pageList = document.querySelector(".pages");
 nav.classList.remove("toggleNav");
 nav.classList.remove("nav-invert");
 pageList.classList.add("hidden");
 logo.classList.remove("hidden");
}

function showNav()
{
  const nav = document.querySelector(".nav");
  const logo = document.querySelector(".logo");
  const pageList = document.querySelector(".pages");
  nav.classList.add("toggleNav");
  nav.classList.add("nav-invert");
  pageList.classList.remove("hidden");
  logo.classList.add("hidden");
}

function activeNav() 
{
 const pages = document.querySelectorAll(".page");
 pages.forEach(function(page) 
 {
  page.addEventListener("click", function(e)
  {
   pages.forEach(function(page)
   {
    page.classList.remove("active");
   })
   page.classList.add("active");
   hideNav();
  })
 })
}

// event listeners
window.addEventListener("DOMContentLoaded", function() 
{
 loadHeader();
 loadFooter();
 toggleNav();
 activeNav();
})