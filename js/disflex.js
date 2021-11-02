// array of options and properties
const container = 
[
 // items
 [
  {
   class: "i-option__title",
   title: "add item",
  },
  {
   class: "i-option__value",
   title: "remove item",
  },
  {
   class: "i-option__value",
   title: "randomize height",
  },
  {
   class: "i-option__value",
   title: "equalize height",
  },
 ],
 // flex-direction array
 [
  {
    code: "flex-direction: ",
    class: "c-properties__title",
    style: "flexDirection",
    title: "flex-direction",
  },
  {
    code: "row;",
    class: "c-properties__value",
    style: "flexDirection",
    title: "row",
  },
  {
    code: "row-reverse;",
    class: "c-properties__value",
    style: "flexDirection",
    title: "row-reverse",
  },
  {
    code: "column;",
    class: "c-properties__value",
    style: "flexDirection",
    title: "column",
  },
  {
    code: "column-reverse;",
    class: "c-properties__value",
    style: "flexDirection",
    title: "column-reverse",
  },
 ],
 // flex-wrap array
 [
  {
    code: "flex-wrap: ",
    class: "c-properties__title",
    style: "flexWrap",
    title: "flex-wrap",
  },
  {
    code: "nowrap;",
    class: "c-properties__value",
    style: "flexWrap",
    title: "nowrap",
  },
  {
    code: "wrap;",
    class: "c-properties__value",
    style: "flexWrap",
    title: "wrap",
  },
  {
    code: "wrap-reverse;",
    class: "c-properties__value",
    style: "flexWrap",
    title: "wrap-reverse",
  },
 ],
 // justify-content array
 [
  {
    code: "justify-content: ",
    class: "c-properties__title",
    style: "justifyContent",
    title: "justify-content",
  },
  {
    code: "flex-start;",
    class: "c-properties__value",
    style: "justifyContent",
    title: "flex-start",
  },
  {
    code: "flex-end;",
    class: "c-properties__value",
    style: "justifyContent",
    title: "flex-end",
  },
  {
    code: "center;",
    class: "c-properties__value",
    style: "justifyContent",
    title: "center",
  },
  {
    code: "space-between;",
    class: "c-properties__value",
    style: "justifyContent",
    title: "space-between",
  },
  {
    code: "space-around;",
    class: "c-properties__value",
    style: "justifyContent",
    title: "space-around",
  },
 ],
 // align-items array
 [
  {
    code: "align-items: ",
    class: "c-properties__title",
    style: "alignItems",
    title: "align-items",
  },
  {
    code: "flex-start;",
    class: "c-properties__value",
    style: "alignItems",
    title: "flex-start",
  },
  {
    code: "flex-end;",
    class: "c-properties__value",
    style: "alignItems",
    title: "flex-end",
  },
  {
    code: "center;",
    class: "c-properties__value",
    style: "alignItems",
    style: "alignItems",
    title: "center",
  },
  {
    code: "baseline;",
    class: "c-properties__value",
    style: "alignItems",
    title: "baseline",
  },
  {
    code: "stretch;",
    class: "c-properties__value",
    style: "alignItems",
    title: "stretch",
  },
 ],
 // align-content array
 [
  {
    code: "align-content: ",
    class: "c-properties__title",
    style: "alignContent",
    title: "align-content",
  },
  {
    code: "flex-start;",
    class: "c-properties__value",
    style: "alignContent",
    title: "flex-start",
  },
  {
    code: "flex-end;",
    class: "c-properties__value",
    style: "alignContent",
    title: "flex-end",
  },
  {
    code: "center;",
    class: "c-properties__value",
    style: "alignContent",
    title: "center",
  },
  {
    code: "space-between;",
    class: "c-properties__value",
    style: "alignContent",
    title: "space-between",
  },
  {
    code: "space-around;",
    class: "c-properties__value",
    style: "alignContent",
    title: "space-around",
  },
  {
    code: "stretch;",
    class: "c-properties__value",
    style: "alignContent",
    title: "stretch",
  },
 ],
]

// global variables
const code = document.querySelector(".code");
const cProperties = document.querySelectorAll(".c-properties");

// functions
function loadData()
{
 loadCodeHTML();
 loadUiHTML();
}

function loadCodeHTML()
{
 code.innerHTML = `<p class="code__element"></p>
    <div class="code__container">
      <p class="code__display"></p>
      <p class="code__statement--0"><span class="code__property--0"></span><span class="code__value--0"></span></p>
      <p class="code__statement--1"><span class="code__property--1"></span><span class="code__value--1"></span></p>
      <p class="code__statement--2"><span class="code__property--2"></span><span class="code__value--2"></span></p>
      <p class="code__statement--3"><span class="code__property--3"></span><span class="code__value--3"></span></p>
      <p class="code__statement--4"><span class="code__property--4"></span><span class="code__value--4"></span></p>
    </div>
    <p class="code__close"></p>`
} 

function loadUiHTML()
{
 for (let i = 1; i < cProperties.length; i++)
 {
  generateContent(cProperties[i], i);
 }
}

function generateContent(property, index)
{
 let values = container[index].map(function(value)
 {
  return `<li class="${value.class}">${value.title}</li>`
 })
 property.innerHTML = values.join("");
}


// event listeners
window.addEventListener("DOMContentLoaded", function()
{
 loadData();
})