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
const SIMULATOR__COUNT = 5;
const SIMULATOR__HEIGHT = 2;
const values = filterByProperty(container, "class", "c-properties__value");
const items = filterByProperty(container, "class", "i-options__value");
let userClickedValues = ["", "", "", "", ""];

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
 code.innerHTML = `<p class="code__element">.container {</p>
    <div class="code__container">
      <p class="code__display">display: flex;</p>
      <p class="code__statement--0 code__statement"><span class="code__property--0"></span><span class="code__value--0"></span></p>
      <p class="code__statement--1 code__statement"><span class="code__property--1"></span><span class="code__value--1"></span></p>
      <p class="code__statement--2 code__statement"><span class="code__property--2"></span><span class="code__value--2"></span></p>
      <p class="code__statement--3 code__statement"><span class="code__property--3"></span><span class="code__value--3"></span></p>
      <p class="code__statement--4 code__statement"><span class="code__property--4"></span><span class="code__value--4"></span></p>
    </div>
    <p class="code__close">}</p>`
} 

function loadUiHTML()
{
  loadUiProperties();
  loadUiOptions();
}

function loadUiProperties()
{
 for (let titleIndex = 0; titleIndex < cProperties.length; titleIndex++)
 {
  generateUiList(cProperties[titleIndex], titleIndex+1);
  let properties = cProperties[titleIndex].children;
  for (let valueIndex = 1; valueIndex < properties.length; valueIndex++)
  {
    loadPropertyEventListener(properties[valueIndex], "mouseenter", titleIndex);
    loadPropertyEventListener(properties[valueIndex], "mouseleave", titleIndex);
    loadPropertyEventListener(properties[valueIndex], "click", titleIndex);
  }
 }
}

function loadUiOptions()
{
  generateUiList(iOptions, 0);
  let options = iOptions.children;
  for (let optionIndex = 1; optionIndex < options.length; optionIndex++)
  {
    loadItemEventListener(options[optionIndex], "mouseenter", optionIndex);
    loadItemEventListener(options[optionIndex], "mouseleave", optionIndex);
    loadItemEventListener(options[optionIndex], "click", optionIndex);
  }
}

function generateUiList(list, index)
{
 let values = container[index].map(function(value)
 {
  return `<li class="${value.class}" data-class="${value.style}"">${value.title}</li>`
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

function loadPropertyEventListener(property, event, propertyIndex)
{
  property.addEventListener(event, function(e)
  {
    postCode(e.currentTarget, event, propertyIndex);
  })
}

function loadItemEventListener(option, event, optionIndex)
{
  option.addEventListener(event, function(e)
  {
    loadItemEventController(e.currentTarget, event, optionIndex);
  })
}

function loadItemEventController(option, eventName, optionIndex)
{
  switch(eventName)
  {
    case "mouseenter":
      addClass(option, "hover");
      break;
    case "mouseleave":
      removeClass(option, "hover");
      break;
    case "click":
      updateItem(option.innerHTML);
      break;
  }
}

function postCode(element, eventName, propertyIndex)
{
  let property = document.querySelector(`.code__property--${propertyIndex}`);
  let value = document.querySelector(`.code__value--${propertyIndex}`);
  switch(eventName)
  {
    case "mouseenter":
      property.innerHTML = container[propertyIndex+1][0].code;
      value.innerHTML = values[getValuesIndex(element)].code;
      updateElementStyle(simulator, container[propertyIndex+1][0].style, values[getValuesIndex(element)].title);
      if (userClickedValues[propertyIndex] != values[getValuesIndex(element)].title)
      {
        element.classList.add("hover");
      }
      break;
    case "mouseleave":
      if (userClickedValues[propertyIndex] === "")
      {
        property.innerHTML = "";
        value.innerHTML = "";
        updateElementStyle(simulator, container[propertyIndex+1][0].style, "initial");
        element.classList.remove("hover");
      }
      else
      {
        property.innerHTML = container[propertyIndex+1][0].code;
        value.innerHTML = `${userClickedValues[propertyIndex]};`;
        updateElementStyle(simulator, container[propertyIndex+1][0].style, userClickedValues[getValuesIndex(element)]);
        if (userClickedValues[propertyIndex] != values[getValuesIndex(element)].title)
        {
          element.classList.remove("hover");
        }
      }
      break;
    case "click":
      if (userClickedValues[propertyIndex] != values[getValuesIndex(element)].title)
      {
        property.innerHTML = container[propertyIndex+1][0].code;
        value.innerHTML = values[getValuesIndex(element)].code;
        userClickedValues[propertyIndex] =  values[getValuesIndex(element)].title;
        updateElementStyle(simulator, container[propertyIndex+1][0].style, userClickedValues[getValuesIndex(element)]);
        element.classList.remove("hover");
        let activeElements = document.querySelectorAll(".active");
        activeElements.forEach(function(active)
        {
          if (active.dataset.class === element.dataset.class)
          {
            active.classList.remove("active");
          }
        })
        element.classList.add("active");
      }
      else 
      {
        property.innerHTML = "";
        value.innerHTML = "";
        userClickedValues[propertyIndex] = "";
        updateElementStyle(simulator, container[propertyIndex+1][0].style, "initial");
        element.classList.remove("active");
      }
      break;
  }
}

function getValuesIndex(element)
{
 for (let propertyIndex = 0; propertyIndex < values.length; propertyIndex++)
 {
  if ((element.dataset.class === values[propertyIndex].style) && (element.innerHTML === values[propertyIndex].title))
  {
    return(propertyIndex);
  }
 }
}

function updateItem(option)
{
  let divs = document.querySelectorAll(`.simulator__div`);
  let numberOfDivs = divs.length;
  let heightPercentage = 10;
  let randomHeightPercentage = ((getRandNum(4)+1)*heightPercentage);
  let divToDelete = document.querySelector(`.simulator__div--${numberOfDivs}`);
  switch(option)
  {
    case "add":
      simulator.insertAdjacentHTML(`beforeend`, `<div class="simulator__div simulator__div--${numberOfDivs+1}" style="height:${randomHeightPercentage}%;">${numberOfDivs+1}</div>`);
      break;
    case "remove":
      divToDelete.remove();
      break;
    case "randomize":
      simulator.innerHTML = "";
      loadSimulatorDivs(simulator, numberOfDivs);
      break;
    case "equalize":
      simulator.innerHTML = "";
      loadSimulatorDivs(simulator, numberOfDivs, SIMULATOR__HEIGHT);
      break;
  }
}

function updateElementStyle(element, property, value)
{
  element.style[property] = value;
}

function addClass(element, className)
{
  element.classList.add(className);
}

function removeClass(element, className)
{
  element.classList.remove(className);
}

// event listeners
window.addEventListener("DOMContentLoaded", function()
{
 loadData();
})