// objects
missionObject =
{
 title: "Our Mission",
 location: "Established 2020, Garden Grove, CA",
 src: "../images/about-mission.jpg",
 statement: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis vel deserunt? Consequuntur quisquam reiciendis doloremque vero nihil inventore vel necessitatibus, omnis possimus asperiores harum placeat quis. Cum, sequi quas.",
}

members = [
 {
  education: "M.D.",
  email: "nalanguyen@essentialaesthetics.com",
  name: "Nala Nguyen",
  src: "../images/about-member-01.jpg",
  summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis perferendis architecto repudiandae! Necessitatibus ad maxime asperiores accusantium minus unde dicta ut reiciendis, voluptate quidem.",
 },
 {
  education: "M.D.",
  email: "simbanguyen@essentialaesthetics.com",
  name: "Simba Nguyen",
  src: "../images/about-member-02.jpg",
  summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos enim non error ab, tempora esse doloribus quam ullam itaque ipsum earum sapiente fugiat iusto nostrum numquam qui.",
 },
]

// variables
const mission = document.querySelector(".mission");
const team = document.querySelector(".team");

// functions
function updateActive()
{
 const pages = document.querySelectorAll(".page__link");
 pages.forEach(function(page) 
 {
  if (page.innerHTML === "About")
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
 loadMission();
 loadTeam();
}

function loadMission()
{
 mission.innerHTML = `<img src="${missionObject.src}" class="mission__img"/>
 <h1 class="mission__title">${missionObject.title}</h1>
 <p class="mission__subtitle">${missionObject.location}</p>
 <p class="mission__body">${missionObject.statement}</p>`
}

function loadTeam()
{
 membersList = members.map(function(member)
 {
  return `<div class="member">
   <img src="${member.src}" class="member__img" />
   <h3 class="member__title">${member.name}, ${member.education}</h3>
   <p class="member__body">${member.summary}</p>
   <p class="member__contact">${member.email}</p>
  </div>
`
 })
 team.insertAdjacentHTML(`beforeend`, membersList.join(""));
}

// event listeners
window.addEventListener("DOMContentLoaded", function() 
{
 updateActive();
 loadHtml();
})
