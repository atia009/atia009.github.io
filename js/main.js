// arrays
const projectsArray = 
[
 {
  title: "Disflex",
  src: "images/disflex.png",
  link: "../projects/disflex.html",
  target: "",
 },
 {
  title: "Essential Aesthetics",
  src: "images/essential-aesthetics.png",
  link: "../projects/essential-aesthetics/pages/index.html",
  target: `target="_blank"`,
 },
 {
  title: "Protagonist",
  src: "images/protagonist.png",
  link: "../projects/protagonist/pages/index.html",
  target: `target="_blank"`,
 },
]
const artsArray =
[
 {
  id: 0,
  desc:"Oil on canvas",
  src: "images/art-01.JPG",
 },
 {
  id: 1,
  desc:"Pastel on paper",
  src: "images/art-02.JPG",
 },
 {
  id: 2,
  desc:"Graphite on paper",
  src: "images/art-03.JPG",
 },
 {
  id: 3,
  desc:"Graphite on paper",
  src: "images/art-04.JPG",
 },
 {
  id: 4,
  desc:"Adobe Illustrator",
  src: "images/art-05.jpg",
 },
 {
  id: 5,
  desc:"Graphite on paper",
  src: "images/art-06.jpg",
 },
]

// variables
const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav__btn");
const social = document.querySelector(".social");
const category = document.querySelector(".category");
const categories = document.querySelectorAll(".category__btn");
const main = document.querySelector("main");
const title = document.querySelector(".header__title");

// functions
// function that toggles nav in mobile 
function toggleNav() 
{
 navBtn.addEventListener("click", function() 
 {
  if (nav.classList.contains("toggleNav")) 
  {
   navBtn.innerHTML = `<i class="fas fa-bars nav__enter"></i>`;
   hideNav();
  }
  else 
  {
   navBtn.innerHTML = `<i class="fas fa-times nav__exit"></i>`;
   showNav();
  }
 })
} // end toggleNav

// function that hides nav in mobile
function hideNav() 
{
 nav.classList.remove("toggleNav");
 nav.classList.remove("nav-invert");
 social.classList.add("hidden");
 category.classList.add("hidden");
} // end hideNav

// function that shows nav in mobile
function showNav()
{
  nav.classList.add("toggleNav");
  nav.classList.add("nav-invert");
  social.classList.remove("hidden");
  category.classList.remove("hidden");
} // end showNav

// function that shows selected category and calls loader function
function activeNav() 
{
 categories.forEach(function(category) 
 {
  category.addEventListener("click", function(e)
  {
   // remove active from all categories
   categories.forEach(function(category)
   {
    category.classList.remove("active");
   })

   // add active to clicked category
   category.classList.add("active");

   // get name of category
   var current = e.currentTarget.dataset.class;
   loadActive(current);

   // hide nav
   hideNav();
  })
 })
} // end activeNav

// loader function that dynamically loads content based on active category
function loadActive(category) 
{
 main.removeAttribute("class");
 switch (category) {
  case "home":
   // reset nav__btn
   navBtn.innerHTML = `<i class="fas fa-bars nav__enter"></i>`;
   loadHome();
   break;
  case "projects":
   // reset nav__btn
   navBtn.innerHTML = `<i class="fas fa-bars nav__enter"></i>`; 
   loadProjects();
   break;
  case "art":
   // reset nav__btn
   navBtn.innerHTML = `<i class="fas fa-bars nav__enter"></i>`; 
   loadArt();
   break;
 }
} // end loadActive

// home page loader
function loadHome() 
{
 // dynamically load home content
 const content = 
 `<h1 class="main__title">Aaron Tia</h1>
  <section class="home">
    <img src="images/profile.jpg" alt="profile picture" class="home__img">
    <div class="info">
      <p class="info__about">Web developer committed to delivering exceptional digital experiences focused on simplicity and purpose.</p>
    </div>
  </section>`;
 main.innerHTML = content;
 main.classList.add("main--home")
}   

// projects page loader
function loadProjects() 
{
 // dynamically load projects from projectsArray
 const projects = projectsArray.map(function(project)
 {
  return `<div class="project">
   <a ${project.target} href="${project.link}" class="project__link"><img src="${project.src}" alt="thumbnail of ${project.title}" class="project__img"></a>
   <a ${project.target} href="${project.link}" class="project__link"><h2 class="project__title">${project.title}</h2></a>
  </div>`
 })
 
 // Add title and create projects container in main
 main.innerHTML = 
 `<h1 class="main__title">Projects</h1>
 <section class="projects"></section`;

 // add projects to projectsContainer in main
 const projectsContainer = document.querySelector(".projects");
 projectsContainer.innerHTML = projects.join("");
 main.classList.add("main--projects")
} // end loadProjects

// art page loader
function loadArt() 
{
 // dynamically load projects from projectsArray
 const arts = artsArray.map(function(art)
 {
  return `<div class="art-container">
    <figure class="art" data-class="${art.id}">
      <img src="${art.src}" alt="thumbnail of artwork ${art.id}" class="art__img">
      <figcaption class="art__desc">${art.desc}</figcaption>
    </figure>
  </div>`
 })
 
 // Add title of page and create arts container in main
 main.innerHTML = 
 `<h1 class="main__title">Art</h1>
 <section class="art"></section>
 <div class="lt-box__bg hide"></div>
 <div class="lt-box hide">
 <div class="details">
 <p class="details__title"><span class="details__curr"></span> of <span class="details__total"></p>
 <button class="details__btn"><i class="fas fa-times details__icon"></i></button>
 </div>
 <div class="img-box">
 <button class="img-box__btn img-box__prev"><i class="fas fa-angle-left img-box__icon"></i></button>
 <button class="img-box__btn img-box__next"><i class="fas fa-angle-right img-box__icon"></i></button>
 <img class="img-box__img">
 </div>
 <p class="lt-box__info"></p>
 </div>`;
 
 
 // add projects to projectsContainer in main
 const artsContainer = document.querySelector(".art");
 artsContainer.innerHTML = arts.join("");
 main.classList.add("main--art")

 // hover functionality
 doArtHover();

 // lightbox functionality
 doLightBox();

} // end loadArt

// function that displays art description on hover
function doArtHover() 
{
 const arts = document.querySelectorAll(".art");
 const desc = document.querySelectorAll(".art__desc");
 const img = document.querySelectorAll(".art__img");

 // add event listener to each artwork for hover in and out
 for(let i = 1; i < arts.length; i++)
 {
   arts[i].addEventListener("mouseenter", function(e)
   {
     let current = e.currentTarget.dataset.class;
     img[current].style.opacity = 0.5;
     desc[current].style.display = "flex";
   });
   arts[i].addEventListener("mouseleave", function(e)
   {
     let current = e.currentTarget.dataset.class;
     img[current].style.opacity = 1;
     desc[current].style.display = "none";
   });
 }
} // end doArtHover

// function that display light box when art image is clicked
function doLightBox()
{
  const arts = document.querySelectorAll(".art");
  const totalArt = document.querySelector(".details__total");
  const ltBox = document.querySelector(".lt-box");
  const ltBoxBg = document.querySelector(".lt-box__bg");
  const exit = document.querySelector(".details__btn");
  const img = document.querySelector(".img-box__img");
  const prev = document.querySelector(".img-box__prev");
  const next = document.querySelector(".img-box__next");

  // calculate and display total art images
  totalArt.innerHTML = arts.length-1;

   for(let i = 1; i < arts.length; i++)
   {
    arts[i].addEventListener("click", function(e) 
    {
      ltBoxBg.classList.remove("hide");
      ltBox.classList.remove("hide");
      document.querySelector("body").classList.add("disable-scrolling");
      let current = e.currentTarget.dataset.class;
      console.log(current);
      changeLtBoxImg(img, artsArray[current].src, current);
    })
   }

   // event listener to exit from light box
   exit.addEventListener("click", function()
   {
     ltBoxBg.classList.add("hide");
     ltBox.classList.add("hide");
     document.querySelector("body").classList.remove("disable-scrolling");
   })

   // event listener for previous image
   prev.addEventListener("click", function()
   {
      let current = img.getAttribute("data-class");
      if (current > 0)
      {
       current--;
       changeLtBoxImg(img, artsArray[current].src, current);
      }
   })

   // event listener for next image
   next.addEventListener("click", function()
   {
      let current = img.getAttribute("data-class");

      // current starts at 0
      if (current < (arts.length-2))
      {
       current++;
       changeLtBoxImg(img, artsArray[current].src, current);
      }
   })
} // end doLightBox

// function that changes image displayed in lightbox
function changeLtBoxImg(img, src, current)
{
  // update details of image number
  const currArt = document.querySelector(".details__curr");
  const details = document.querySelector(".lt-box__info");

  img.setAttribute("src", artsArray[current].src);
  img.setAttribute("data-class", current);
  details.innerHTML = artsArray[current].desc;
  current++;
  currArt.innerHTML = current;
} // end changeLtBoxImg

// event listeners
window.addEventListener("DOMContentLoaded", function() 
{
 loadHome();
 toggleNav();
 activeNav();
})