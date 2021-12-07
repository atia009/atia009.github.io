// objects
const productsList = [
 [
  {
   benefits: `UVA/UVB sun protection. Calms and protects acne-prone skin. Leaves no residue`,
   brand: "Elta MD",
   desc: "Oil-free EltaMD UV Clear helps calm and protect sensitive skin types prone to discoloration and breakouts associated to acne and rosacea. It contains niacinamide (vitamin B3), hyaluronic acid and lactic acid, ingredients that promote the appearance of healthy-looking skin. Very lightweight and silky, it may be worn with makeup or alone. Choose from tinted and untinted formulas for use every day.",
   name: "Dual Action Scrub",
   price: 37,
   size: "1.7 oz",
   src: "../images/brand-01-01.jpg",
  },
  {
   benefits: `UVA/UVB sun protection. Calms and protects acne-prone skin. Leaves no residue`,
   brand: "Elta MD",
   desc: "Oil-free EltaMD UV Clear helps calm and protect sensitive skin types prone to discoloration and breakouts associated to acne and rosacea. It contains niacinamide (vitamin B3), hyaluronic acid and lactic acid, ingredients that promote the appearance of healthy-looking skin. Very lightweight and silky, it may be worn with makeup or alone. Choose from tinted and untinted formulas for use every day.",
   name: "Dual Action Scrub",
   price: 37,
   size: "1.7 oz",
   src: "../images/brand-01-01.jpg",
  },
  {
   benefits: `UVA/UVB sun protection. Calms and protects acne-prone skin. Leaves no residue`,
   brand: "Elta MD",
   desc: "Oil-free EltaMD UV Clear helps calm and protect sensitive skin types prone to discoloration and breakouts associated to acne and rosacea. It contains niacinamide (vitamin B3), hyaluronic acid and lactic acid, ingredients that promote the appearance of healthy-looking skin. Very lightweight and silky, it may be worn with makeup or alone. Choose from tinted and untinted formulas for use every day.",
   name: "Dual Action Scrub",
   price: 37,
   size: "1.7 oz",
   src: "../images/brand-01-01.jpg",
  },
 ],
 [
  {
   benefits: `Removes stubborn dirt, oil and makeup. Clarifies and removes traces of impurities. Ideal as body spray for blemishes`,
   brand: "Epionce",
   desc: "Purifying Toner helps remove traces of dirt, oil and makeup. Botanical ingredients reduce surface shine while helping control factors that can lead to the visible appearance of problem or irritated skin. Set at optimal pH.",
   name: "Purifying Toner",
   price: 30,
   size: "4 fl oz",
   src: "../images/brand-02-01.jpg",
  },
  {
   benefits: `Removes stubborn dirt, oil and makeup. Clarifies and removes traces of impurities. Ideal as body spray for blemishes`,
   brand: "Epionce",
   desc: "Purifying Toner helps remove traces of dirt, oil and makeup. Botanical ingredients reduce surface shine while helping control factors that can lead to the visible appearance of problem or irritated skin. Set at optimal pH.",
   name: "Purifying Toner",
   price: 30,
   size: "4 fl oz",
   src: "../images/brand-02-01.jpg",
  },
  {
   benefits: `Removes stubborn dirt, oil and makeup. Clarifies and removes traces of impurities. Ideal as body spray for blemishes`,
   brand: "Epionce",
   desc: "Purifying Toner helps remove traces of dirt, oil and makeup. Botanical ingredients reduce surface shine while helping control factors that can lead to the visible appearance of problem or irritated skin. Set at optimal pH.",
   name: "Purifying Toner",
   price: 30,
   size: "4 fl oz",
   src: "../images/brand-02-01.jpg",
  },
 ],
 [
  {
   benefits: `Provides both physical and chemical exfoliation benefits. Reduces surface oil. Ideal for use on face + body`,
   brand: "Zo Skin Health",
   desc: "Dual chemical and physical exfoliation gently clears breakouts while leaving skin exceptionally smooth and radiant.",
   name: "Dual Action Scrub",
   price: 80,
   size: "4 oz",
   src: "../images/brand-03-01.jpg",
  },
  {
   benefits: `Provides both physical and chemical exfoliation benefits. Reduces surface oil. Ideal for use on face + body`,
   brand: "Zo Skin Health",
   desc: "Dual chemical and physical exfoliation gently clears breakouts while leaving skin exceptionally smooth and radiant.",
   name: "Dual Action Scrub",
   price: 80,
   size: "4 oz",
   src: "../images/brand-03-01.jpg",
  },
  {
   benefits: `Provides both physical and chemical exfoliation benefits. Reduces surface oil. Ideal for use on face + body`,
   brand: "Zo Skin Health",
   desc: "Dual chemical and physical exfoliation gently clears breakouts while leaving skin exceptionally smooth and radiant.",
   name: "Dual Action Scrub",
   price: 80,
   size: "4 oz",
   src: "../images/brand-03-01.jpg",
  },
 ],
]

// variables
const BRAND = sessionStorage.getItem("brandName");
const BRAND_INDEX = sessionStorage.getItem("brandIndex");
const breadCrumbs = document.querySelector(".breadCrumbs");
const products = document.querySelector(".products");

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

function updateTitle()
{
 const title = document.querySelector(".title");
 title.innerHTML = `${BRAND} | Essential Aesthetics`;
}

function loadHtml()
{
 loadBreadCrumb();
 loadProducts(BRAND_INDEX);
} 

function loadBreadCrumb()
{
 breadCrumbs.innerHTML = `<li class="breadCrumb"><a href="products.html" class="breadCrumb__link">Products</a></li>
 <li class="breadCrumb"><a href="product.html" class="breadCrumb__link">${BRAND}</a></li>`
}

function loadProducts(brand)
{
 let brandItems = productsList[brand].map(function(product)
 {
  return `<li class="product">
        <img src="${product.src}" class="product__img"/>
        <h3 class="product__title">${product.brand} ${product.name}, ${product.size}</h3>
        <p class="product__price">$${product.price}</p>
        <p class="product__desc hide">${product.desc}</p>
        <ul class="benefits hide">${loadBenefits(product.benefits)}</ul>
      </li>` 
 })
 products.insertAdjacentHTML(`beforeend`, brandItems.join(""));
 loadProductsFunctionality();
}

function loadBenefits(benefitsObject)
{
 let benefitsList = benefitsObject.split(".");
 let benefitsItems = benefitsList.map(function(benefit)
 {
  return `<li class="benefits__item">${benefit}</li>`
 })
 return benefitsItems.join("");
}

function loadSelectedProduct()
{

}

function loadProductsFunctionality()
{
 const selectedProducts = document.querySelectorAll(".product");
 for (let count = 0; count < selectedProducts.length; count++)
 {
  selectedProducts[count].addEventListener("click", function(product)
  {
   console.log(product);
  })
 }
}

// event listener
window.addEventListener("DOMContentLoaded", function() 
{
 updateActive();
 updateTitle();
 loadHtml();
})
