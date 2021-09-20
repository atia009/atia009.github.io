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
  id: 1,
  desc:"Oil, Canvas",
  src: "images/art-01.jpg",
 },
 {
  id: 2,
  desc:"Pastel, Paper",
  src: "images/art-02.jpg",
 },
 {
  id: 3,
  desc:"Graphite, Paper",
  src: "images/art-03.jpg",
 },
 {
  id: 4,
  desc:"Graphite, Paper",
  src: "images/art-04.jpg",
 },
]

// variables
const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav__btn");
const social = document.querySelector(".social");
const category = document.querySelector(".category");
const categories = document.querySelectorAll(".category__btn");
const main = document.querySelector(".main");
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
  activeNav();
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
}   

// projects page loader
function loadProjects() 
{
 // dynamically load projects from projectsArray
 const projects = projectsArray.map(function(project){
  return `<div class="project">
   <a href="${project.link}" class="project__link"><img src="${project.src}" alt="thumbnail of ${project.title}" class="project__img"></a>
   <a href="${project.link}" class="project__link"><h2 class="project__title">${project.title}</h2></a>
  </div>`
 })
 
 // Add title and create projects container in main
 main.innerHTML = 
 `<h1 class="main__title">Projects</h1>
 <section class="projects">Hello</section`;

 // add projects to projectsContainer in main
 const projectsContainer = document.querySelector(".projects");
 projectsContainer.innerHTML = projects.join("");
 
} // end loadProjects

// art page loader
function loadArt() 
{
 // dynamically load projects from projectsArray
 const arts = artsArray.map(function(art){
  return `<div class="art">
   <button class="art__btn"><img src="${art.src}" alt="thumbnail of artwork ${art.id}" class="art-container__img"></a>
   <h2 class="art__desc">${art.desc}</h2>
  </div>`
 })
 
 // Add title of page to beginning of array
 arts.unshift(`<h1 class="main__title">Art</h1>`);

 // add projects to page
 main.innerHTML = arts.join("");
} // end loadArt

// event listeners
window.addEventListener("DOMContentLoaded", function() {
 loadHome();
 toggleNav();
})