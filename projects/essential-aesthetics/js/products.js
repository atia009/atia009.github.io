// objects
const bannerObject = 
{
 title: "Products",
};

const brandsObject = [
 {
  src: "../images/products-01.jpg",
  title: "Elta MD Skincare",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem ex suscipit amet nobis quis, laudantium inventore, veritatis iusto fuga tempore accusantium ducimus placeat, magni enim nihil ullam illo quam eum? Voluptas commodi blanditiis ad recusandae repellat laborum enim minus?",
 },
 {
  src: "../images/products-02.jpg",
  title: "Epionce",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem ex suscipit amet nobis quis, laudantium inventore, veritatis iusto fuga tempore accusantium ducimus placeat, magni enim nihil ullam illo quam eum? Voluptas commodi blanditiis ad recusandae repellat laborum enim minus?",
 },
 {
    src: "../images/products-03.jpg",
  title: "Zo Skin Health",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quidem ex suscipit amet nobis quis, laudantium inventore, veritatis iusto fuga tempore accusantium ducimus placeat, magni enim nihil ullam illo quam eum? Voluptas commodi blanditiis ad recusandae repellat laborum enim minus?",
 }
]




// variables
const banner = document.querySelector(".banner");
const brands = document.querySelector(".brands");

// functions
function updateActive()
{
 const pages = document.querySelectorAll(".page__link");
 pages.forEach(function(page) 
 {
  if (page.innerHTML === "Products")
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
 loadBrands();
}

function loadBanner()
{
 banner.innerHTML = `<h2 class="banner__title">${bannerObject.title}</h2>`;
}

function loadBrands()
{
  let brandsItems = brandsObject.map(function(brand)
 {
  return `<li class="brand">
         <h3 class="brand__title">${brand.title}</h3>
         <a href="product.html" class="brand__link">
         <img src="${brand.src}" class="brand__img"/>
         <p class="brand__desc hide">${brand.desc}</p>
        </a>
      </li>`
 })
 brands.insertAdjacentHTML(`beforeend`, brandsItems.join(""));
 updateBrand();
}

function updateBrand()
{
 const brandList = document.querySelectorAll(".brand");
 const imageList = document.querySelectorAll(".brand__img");
 const descList = document.querySelectorAll(".brand__desc");
 for (let count = 0; count < brandList.length; count++)
 {
  brandList[count].addEventListener("click", function(brand){
   storeBrand(brandsObject[count].title);
  })
  brandList[count].addEventListener("mouseenter", function(brand){
   imageList[count].classList.add("transparent");
   descList[count].classList.remove("hide");
  })
  brandList[count].addEventListener("mouseleave", function(brand){
   imageList[count].classList.remove("transparent");
   descList[count].classList.add("hide");
  })
 }
}

function storeBrand(brandName)
{
 sessionStorage.setItem("brandName", brandName);
}

// function updateBrandDisplay(image, desc)
// {
//   if (image.classList.contains(".transparent"))
//   {
//    image.classList.remove("tranparent");
//   }
//   else 
//   {
//    image.classList.add("transparent");
//   }
// }

function updateStyle(element, property, value)
{
 element.style.property = value; 
}

// event listeners
window.addEventListener("DOMContentLoaded", function() 
{
 updateActive();
 loadHtml();
 
})

