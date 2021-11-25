// objects
const pdfsObject = [
 {
  link: "#",
  title: "Medical Records",
 },
 {
  link: "#",
  title: "Questionnaire",
 },
 {
  link: "#",
  title: "Forms",
 },
 {
  link: "#",
  title: "Acknowledgment of Rights",
 },
 {
  link: "#",
  title: "Aftercare",
 },
]

const faqsObject = [
 {
  answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis hic cum nihil fugit nobis libero.",
  question: "Lorem ipsum dolor sit?",
 },
 {
  answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis hic cum nihil fugit nobis libero.",
  question: "Lorem ipsum dolor sit?",
 },
 {
  answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis hic cum nihil fugit nobis libero.",
  question: "Lorem ipsum dolor sit?",
 },
 {
  answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis hic cum nihil fugit nobis libero.",
  question: "Lorem ipsum dolor sit?",
 },
 {
  answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis hic cum nihil fugit nobis libero.",
  question: "Lorem ipsum dolor sit?",
 },
]

// variables
const resources = document.querySelector(".resources");
const pdfs = document.querySelector(".pdfs");
const faqs = document.querySelector(".faqs");

// functions
function updateActive()
{
 const pages = document.querySelectorAll(".page__link");
 pages.forEach(function(page) 
 {
  if (page.innerHTML === "Patient Resources")
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
 resources.insertAdjacentHTML(`afterbegin`, `<h1 class="resources__title">Patient Resources</h1>`);
 loadPdfs();
 loadFaqs();
}

function loadPdfs()
{
 let pdfsList = pdfsObject.map(function(pdf)
 {
  return `<li class="pdf">
          <a href="${pdf.link}" class="pdf__link">${pdf.title}</a>
        </li>`
 })
 pdfs.insertAdjacentHTML(`beforeend`, pdfsList.join(""));
}

function loadFaqs()
{
 let faqsList = faqsObject.map(function(faq)
 {
  return `<li class="faq">
        <h4 class="faq__question">${faq.question}</h4>
        <i class="faq__icon fas fa-plus"></i>
        <div class="faq__body">
          <p class="faq__inner">${faq.answer}</p>
        </li>`
 })
 faqs.insertAdjacentHTML(`beforeend`, faqsList.join(""));
}

// event listener
window.addEventListener("DOMContentLoaded", function() 
{
 updateActive();
 loadHtml();
})