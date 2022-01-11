// objects
const cards = [
 {
  title: "Services",
  body: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit, repellendus aperiam quas totam alias velit voluptate est sed ratione architecto.",
  btnText: "View All",
  btnLink: "services.html",
 },
 {
  title: "Products",
  body: "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae similique, repellat veritatis corrupti a cupiditate mollitia deleniti ad culpa minus?",
  btnText: "View All",
  btnLink: "products.html",
 },
 {
  title: "Specials",
  body: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fugit animi voluptates assumenda repellat odit! Et obcaecati consequuntur veritatis reprehenderit.",
  btnText: "Learn More",
  btnLink: "specials.html",
 },
]

const bannerObject = 
{
 title: "Now Taking Appointments",
 body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur laboriosam amet labore impedit quis.", 
 btnText: "Book Appointment",
 btnLink: "services.html",
};

const showcaseObject =
{
 title: "Welcome In",
 src: "../images/home-showcase.png",
};

// variables
const main = document.querySelector(".main");
const banner = document.querySelector(".banner");
const showcase = document.querySelector(".showcase");

// functions
function updateActive()
{
 const pages = document.querySelectorAll(".page__link");
 pages.forEach(function(page) 
 {
  if (page.innerHTML === "Home")
  {
   page.classList.add("active");
  }
  else 
  {
   page.classList.remove("active");
  }
 })
}

function loadHtml()
{
 loadBanner();
 loadShowcase();
 loadCards();
}

function loadBanner()
{
 banner.innerHTML = `<h3 class="banner__title">${bannerObject.title}</h3>
 <p class="banner__body">${bannerObject.body}</p>
 <button class="banner__btn bg--hover">
  <a href="${bannerObject.btnLink}" class="banner__link">${bannerObject.btnText}</a>
 </button>`
}

function loadShowcase()
{
 showcase.innerHTML = `<h1 class="showcase__title">${showcaseObject.title}</h1>`;
 showcase.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${showcaseObject.src}")`;
}

function loadCards()
{
 cardsList = cards.map(function(card)
 {
  return `<div class="card">
  <h3 class="card__title">${card.title}</h3>
  <p class="card__body">${card.body}</p>
  <button class="card-btn bg--hover">
   <a href="${card.btnLink}" class="card-btn__link">${card.btnText}</a>
  </button>
 </div>`
 })
 main.insertAdjacentHTML(`beforeend`, cardsList.join(""));
}

// event listeners
window.addEventListener("DOMContentLoaded", function() 
{
 updateActive();
 loadHtml();
})
