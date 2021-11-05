// array of options and properties
const container = 
[
 // items
 [
  {
   class: "i-options__title",
   title: "items",
  },
  {
   class: "i-options__value",
   title: "add",
  },
  {
   class: "i-options__value",
   title: "remove",
  },
  {
   class: "i-options__value",
   title: "randomize",
  },
  {
   class: "i-options__value",
   title: "equalize",
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
const simulator = document.querySelector(".simulator");
const cProperties = document.querySelectorAll(".c-properties");
const iOptions = document.querySelector(".i-options");
const SIMULATOR__COUNT = 6;
// const properties = 
// const values = filterByProperty(container, "class", "c-properties__value");
// const items = filterByProperty(container, "class", "i-options__value")

// functions
function filterByProperty(array, property, value)
{
  let filteredArray = [];
  for (let i = 0; i < array.length; i++)
  {
    let tempArray = array[i];
    tempArray.forEach(function(object)
    {
     if (object[property] == value)
     {
       filteredArray.push(object);
     }
    })
  }
  return filteredArray;
}

function loadData() 
{
 loadSimulatorDivs(simulator, SIMULATOR__COUNT);
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
  loadUiProperties();
  loadUiOptions();
}

// not working, need to check something with cProperties and values
function loadUiProperties()
{
 for (let titleIndex = 0; titleIndex < cProperties.length; titleIndex++)
 {
  generateUiList(cProperties[titleIndex], titleIndex+1);
  let properties = cProperties[titleIndex].children;
  for (let valueIndex = 1; valueIndex < properties.length; valueIndex++)
  {
    loadPropertyEventListener(properties[valueIndex], "mouseenter");
    loadPropertyEventListener(properties[valueIndex], "mouseleave");
    loadPropertyEventListener(properties[valueIndex], "click");
  }
 }
}

function loadUiOptions()
{
  generateUiList(iOptions, 0);
}

function generateUiList(list, index)
{
 let values = container[index].map(function(value)
 {
  return `<li class="${value.class}">${value.title}</li>`
 })
 list.innerHTML = values.join("");
}

function getRandNum(maxNumber)
{ 
  return Math.ceil(Math.random()*maxNumber);
}

function loadSimulatorDivs(element, divCount, height = 0)
{   
  for (let i = 1; i <= divCount; i++)
  {
    let heightPercentage = 10;
    let randomNumber = getRandNum(4)+1;
    if (height != 0)
    {
      randomNumber = height;
    } 
    let randomHeightPercentage = (randomNumber*heightPercentage);
    element.innerHTML = `${element.innerHTML}<div class="simulator__div simulator__div--${i}" style="height:${randomHeightPercentage}%;">${i}</div>`;
  }
}

function loadPropertyEventListener(property, event)
{
  property.addEventListener(event, function(e)
  {
    postCode(e.currentTarget, event);
  })
}

function postInitialCode()
{
  document.querySelector(".code__element").innerHTML = ".container {";
  document.querySelector(".code__display").innerHTML = "display: flex;";
  document.querySelector(".code__close").innerHTML = "}";
}


function postCode(element, eventName)
{
  // let properties = cProperties[i].children;
  let property = document.querySelector(".code")
  postInitialCode();
  switch(eventName)
  {
    case "mouseenter":
      getPropertyTitle(element);
      break;
    case "mouseleave":
      console.log("left");
      break;
    case "click":
      console.log("clicked");
      break;
  }
}

// function loadPropertyEnter()
// {

// }

// get indexes 
function getPropertyIndex(element)
{
  console.log(element.innerHTML);
}

function getTitleIndex()
{

}

// function loadPropertyExit()
// {
// }


// function loadPropertyClick()
// {

// }

// function loadItemEventListener(item, event, eventTarget)
// event listeners
window.addEventListener("DOMContentLoaded", function()
{
 loadData();
})