// functions
function loadHeader()
{
 document.querySelector(".header").innerHTML = ` <div class="logo">
   <a href="index.html" class="logo__link"><h1 class="logo__title">Essential Aesthetics</h1></a>
   <a href="index.html" class="logo__link"><p class="logo__subtitle">By Essential Care Medical</p></a>
  </div>
  <nav class="nav">
   <button class="nav__btn"><i class="fas fa-bars nav__enter"></i></button>
   <ul class="pages hidden">
    <li class="page"><a href="index.html" class="page__link">Home</a></li>
    <li class="page"><a href="about.html" class="page__link">About</a></li>
    <li class="page"><a href="services.html" class="page__link">Services</a></li>
    <li class="page"><a href="products.html" class="page__link">Products</a></li>
    <li class="page"><a href="specials.html" class="page__link">Specials</a></li>
    <li class="page"><a href="patient.html" class="page__link">Patient Resources</a></li>
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
    <li class="foot-tab__item"><a href="index.html" class="foot-tab__link">Home</a></li> 
    <li class="foot-tab__item"><a href="about.html" class="foot-tab__link">About</a></li> 
    <li class="foot-tab__item"><a href="services.html" class="foot-tab__link">Services</a></li> 
    <li class="foot-tab__item"><a href="products.html" class="foot-tab__link">Products</a></li> 
    <li class="foot-tab__item"><a href="specials.html" class="foot-tab__link">Specials</a></li> 
    <li class="foot-tab__item"><a href="patient.html" class="foot-tab__link">Patient Resources</a></li> 
   </ul>
  </div>
  <ul class="social">
   <a href="https://www.facebook.com/" target="_blank" class="social__link"><i class="fab fa-facebook-f social__icon"></i></a>
   <a href="https://www.yelp.com/" target="_blank" class="social__link"><i class="fab fa-yelp social__icon"></i></a>
   <a href="https://www.instagram.com/" target=_blank" class="social__link"><i class="fab fa-instagram social__icons"></i></a>
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
 const logo = document.querySelector(".logo");
 const pageList = document.querySelector(".pages");
 navBtn.addEventListener("click", function() 
 {
  if (nav.classList.contains("toggleNav")) 
  {
   navBtn.innerHTML = `<i class="fas fa-bars nav__enter"></i>`;
   hideNav(nav, logo, pageList);
  }
  else 
  {
   navBtn.innerHTML = `<i class="fas fa-times nav__exit" style="color: var(--lt)"></i>`;
   showNav(nav, logo, pageList);
  }
 })
}

function hideNav(nav, logo, pageList) 
{
 nav.classList.remove("toggleNav");
 nav.classList.remove("nav-invert");
 pageList.classList.add("hidden");
 logo.classList.remove("hidden");
}

function showNav(nav, logo, pageList)
{
  nav.classList.add("toggleNav");
  nav.classList.add("nav-invert");
  pageList.classList.remove("hidden");
  logo.classList.add("hidden");
}

// event listeners
window.addEventListener("DOMContentLoaded", function() 
{
 loadHeader();
 loadFooter();
 toggleNav();

})