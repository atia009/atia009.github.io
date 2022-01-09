// objects
const bannerObject = 
{
 title: "Products",
};

const brandsObject = [
 {
  src: "../images/products-01.jpg",
  title: "Elta MD Skincare",
  desc: "EltaMD offers a line of superior sun protection formulas, designed with maximum efficacy in mind. Their broad-spectrum formulas are designed for a variety of skin types. Specially formulated with zinc oxide, EltaMD provides long-lasting UVA and UVB protection with SPF ratings from 30 to 50. EltaMD believes that proper sun protection is essential for every individual, which is why they make their products incredibly easy to use, with light, creamy, non-comedogenic, moisturizing lotions and creams. EltaMD protects, nourishes and beautifies the skin with each application, allowing it to glow with youthful vibrancy.",
 },
 {
  src: "../images/products-02.jpg",
  title: "Epionce",
  desc: "Founded on 20 years of knowledge and experience, Epionce provides cosmeceutical, non-prescription, dermatological-based products. With over 12 independent clinical studies conducted on their products, results show the products may help prevent signs of aging as well as treat common skin conditions. Backed by scientific research, Epionce products feature unique therapeutic and patent-pending formulations. Powerful ingredients work to strengthen the skin's natural defenses while repairing and restoring damaged areas. Their results-driven line specifically works to help delay and reverse aging and targets conditions such as acne, dermatitis, eczema and psoriasis.",
 },
 {
    src: "../images/products-03.jpg",
  title: "Zo Skin Health",
  desc: "ZO® provides comprehensive solutions for creating and maintaining healthy skin for anyone regardless of age, ethnicity, unique skin condition or skin type. From correcting sun damage + pigmentation to preventing + protecting against future damage, ZO® has your skin health covered.",
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
         <div class="brand__content" style="background-image: url(${brand.src})">
          <a href="product.html" class="brand__link">
            <span class="brand__overlay"> </span>
            <p class="brand__desc hide">${brand.desc}</p>
          </a>
        </div>
      </li>`
 })
 brands.insertAdjacentHTML(`beforeend`, brandsItems.join(""));
 updateBrand();
}

function updateBrand()
{
 const brandList = document.querySelectorAll(".brand");
 const overlayList = document.querySelectorAll(".brand__overlay");
 const descList = document.querySelectorAll(".brand__desc");
 for (let count = 0; count < brandList.length; count++)
 {
  brandList[count].addEventListener("click", function(brand){
   storeBrand(brandsObject[count].title, count);
  })
  brandList[count].addEventListener("mouseenter", function(brand){
   overlayList[count].classList.add("transparent");
   descList[count].classList.remove("hide");
  })
  brandList[count].addEventListener("mouseleave", function(brand){
   overlayList[count].classList.remove("transparent");
   descList[count].classList.add("hide");
  })
 }
}

function storeBrand(brandName, brandIndex)
{
 sessionStorage.setItem("brandName", brandName);
 sessionStorage.setItem("brandIndex", brandIndex);
}

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

