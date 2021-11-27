// objects
const bannerObject = 
{
 title: "Specials",
};

const specialsList = [
 {
  details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi debitis beatae mollitia hic minima magnam iste maiores error ducimus dicta!",
  discount: "20%",
  title: "Botox",
 },
 {
  details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sed dolores eius quos odit reprehenderit consequatur itaque voluptatibus laudantium est?",
  discount: "30%",
  title: "Zo Products",
 },
 {
  details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores iure cumque distinctio accusamus ipsa fuga sapiente ad, alias dolor.",
  discount: "10%",
  title: "Laser Hair Removal",
 },
]

// variables
const banner = document.querySelector(".banner");
const specials = document.querySelector(".specials");

// functions
function updateActive()
{
 const pages = document.querySelectorAll(".page__link");
 pages.forEach(function(page) 
 {
  if (page.innerHTML === "Specials")
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
 loadSpecials();
}

function loadBanner()
{
 banner.innerHTML = `<h2 class="banner__title">Specials</h2>`;
}

function loadSpecials()
{
 let specialsItems = specialsList.map(function(special)
 {
  return `<li class="special">
        <h3 class="special__title">${special.title}</h3>
        <p class="special__subtitle">${special.discount}</p>
        <p class="special__body">${special.details}</p>
        <div class="special__column"></div>
      </li>`
 })
 specials.insertAdjacentHTML(`beforeend`, specialsItems.join(""));
}

// event listener
window.addEventListener("DOMContentLoaded", function() 
{
 updateActive();
 loadHtml();
})