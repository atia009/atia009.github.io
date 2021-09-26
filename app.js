// arrays
const projectsArray = 
[
 {
  title: "Project 1",
  src: "images/project-01.png",
  link: "https://github.com/atia009",
 },
 {
  title: "Project 2",
  src: "images/project-01.png",
  link: "https://github.com/atia009",
 },
 {
  title: "Project 3",
  src: "images/project-01.png",
  link: "https://github.com/atia009",
 },
 {
  title: "Project 4",
  src: "images/project-01.png",
  link: "https://github.com/atia009",
 },
]
const artsArray =
[
 {
  id: 0,
  desc:"Oil, Canvas",
  src: "images/art-01.JPG",
 },
 {
  id: 1,
  desc:"Pastel, Paper",
  src: "images/art-02.JPG",
 },
 {
  id: 2,
  desc:"Graphite, Paper",
  src: "images/art-03.JPG",
 },
 {
  id: 3,
  desc:"Graphite, Paper",
  src: "images/art-04.JPG",
 },
 {
  id: 4,
  desc:"Adobe Illustrator",
  src: "images/art-05.jpg",
 },
 {
  id: 5,
  desc:"Graphite, Paper",
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
      <p class="info__education">University Of California, Santa Barbara B.A in Art</p>
      <p class="info__education">Glendale Community College A.S. in Computer Science</p>
      <p class="info__about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, tempora debitis laudantium commodi minus pariatur sint eius libero accusantium tenetur error repellat tempore ipsa atque incidunt provident aspernatur excepturi illo vitae? Accusamus qui vero adipisci iste velit et earum temporibus exercitationem deleniti at ullam error quas dolore ipsum soluta excepturi odio architecto maiores officia debitis laboriosam laborum, provident necessitatibus. Error!</p>
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
   <a href="${project.link}" class="project__link"><img src="${project.src}" alt="thumbnail of ${project.title}" class="project__img"></a>
   <a href="${project.link}" class="project__link"><h2 class="project__title">${project.title}</h2></a>
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
 <section class="art"></section>`
 
 // add projects to projectsContainer in main
 const artsContainer = document.querySelector(".art");
 artsContainer.innerHTML = arts.join("");
 main.classList.add("main--art")

 // hover functionality
 doArtHover();

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

// event listeners
window.addEventListener("DOMContentLoaded", function() 
{
 loadHome();
 toggleNav();
 activeNav();
})