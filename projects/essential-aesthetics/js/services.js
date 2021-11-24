// objects
const showcaseObject =
{
 icon: "fas fa-angle-down",
 src: "../images/services-showcase.jpg",
 title: "Services",
};

const servicesList =
[
 {
  title: "Laser Hair Removal",
  body: "Lorem ips  icing elit. Quo sequi non totam eveniet recusandae dignissimos sint provident impedit veniam similique.",
  btnLink: "#",
  btnText: "Learn More",
 },
 {
  title: "Botox",
  body: "Lorem ips  icing elit. Quo sequi non totam eveniet recusandae dignissimos sint provident impedit veniam similique.",
  btnLink: "#",
  btnText: "Learn More",
 },
 {
  title: "Acne Scar Removal",
  body: "Lorem ips  icing elit. Quo sequi non totam eveniet recusandae dignissimos sint provident impedit veniam similique.",
  btnLink: "#",
  btnText: "Learn More",
 },
 {
  title: "Facial Volume Loss",
  body: "Lorem ips  icing elit. Quo sequi non totam eveniet recusandae dignissimos sint provident impedit veniam similique.",
  btnLink: "#",
  btnText: "Learn More",
 },
 {
  title: "Hand Rejuvenation",
  body: "Lorem ips  icing elit. Quo sequi non totam eveniet recusandae dignissimos sint provident impedit veniam similique.",
  btnLink: "#",
  btnText: "Learn More",
 },
]

// variables
const showcase = document.querySelector(".showcase");
const services = document.querySelector(".services");

// functions
function updateActive()
{
 const pages = document.querySelectorAll(".page__link");
 pages.forEach(function(page) 
 {
  if (page.innerHTML === "Services")
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
 loadShowcase();
 loadServices();
}

function loadShowcase()
{
  showcase.innerHTML = `<h2 class="showcase__title">${showcaseObject.title}</h2>
                       <button class="showcase__btn">
                        <i class="showcase__icon ${showcaseObject.icon}"></i>
                       </button>`
  showcase.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${showcaseObject.src}")`;
}

function loadServices()
{
 let serviceItems = servicesList.map(function(service)
 {
  return `<li class="service">
         <div class="service__inner">
           <h3 class="service__title">${service.title}</h3>
           <p class="service__body">${service.body}</p>
           <button class="service__btn">
             <a href="${service.btnLink}" class="service__link">${service.btnText}</a>
           </button>
         </div>
      </li>`
 })
  services.insertAdjacentHTML(`beforeend`, serviceItems.join(""));
}

// event listeners
window.addEventListener("DOMContentLoaded", function() 
{
 updateActive();
 loadHtml();
})