import {BolgSwiper, swiperData, TitleCategories} from "./dummy.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const PLUS_ICON = `<svg className="size-5 hidden" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"/>
</svg>`
const SUBTRACT_ICON = `<svg className="size-5 hidden" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
    <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd"/>
</svg>`

const newspaper = "newspaper";
const newspaperOverlay = "newspaperOverlay";
const openNavbarButton = "openNavbarButton";
const overlayNavbar = "overlayNavbar";
const sidebarNavbar = "sidebarNavbar";
const categoriesBtn = "categoriesBtn";
const sidebarCategories = "sidebarCategories";
const closeButtons = document.querySelectorAll(".closeButton");
const swiperr = document.querySelector(".swiper");
const categories_swiper = document.querySelector(".categories_swiper");
const blog_swiper = document.querySelector(".blog_swiper");
const details = document.querySelectorAll("details");


//! open mobile navbar
bindOpenButton(openNavbarButton, [sidebarNavbar, overlayNavbar]);

// !open categories sidebar
bindOpenButton(categoriesBtn, [sidebarCategories, overlayNavbar]);

// click then close
closeButtons.forEach((item) => {
    bindCloseButton(item.id, [sidebarNavbar, sidebarCategories, overlayNavbar, newspaper]);
});

bindCloseButton(overlayNavbar, [sidebarNavbar, sidebarCategories, overlayNavbar, newspaper]);

//! close summary tag when another is open
// Add the onclick listeners.
details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.removeAttribute("open");
            }
        });
    });
});

// ! newspaper
// window.addEventListener('load', () => {
//     setTimeout(() => {
//         newspaper.classList.add("show")
//     }, 2000);
// })

function bindOpenButton(buttonId, showElementIds) {
    const button = document.getElementById(buttonId);
    if (button != null)
        button.addEventListener("click", () => {
            showElementIds.forEach(elementId => {
                const element = document.getElementById(elementId);
                if (element != null)
                    element.classList.add("show")
            })
        });
}

function bindCloseButton(buttonId, showElementIds) {
    const button = document.getElementById(buttonId);
    if (button != null)
        button.addEventListener("click", () => {
            showElementIds.forEach(elementId => {
                const element = document.getElementById(elementId);
                if (element != null)
                    element.classList.remove("show")
            })
        });
}

// const desktopNavBar = document.getElementById("desktopNavbarUL");
// if (desktopNavBar != null) {
//     desktopNavBar.innerHTML = MenuItems.map(menuItem => {
//         return `<li class="nav_items relative">
//                      <a href="#">${menuItem.title}</a>
//                      <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
//                 </li>
//                 `
//     })
// }

//! swiper data
const swiperSlide = document.getElementById("swiperSlide");
if (swiperSlide != null) {
    swiperSlide.innerHTML = swiperData.map(
        (item) =>
            `
            <div
  class="swiper-slide cursor-pointer w-full h-full rounded-xl flex items-center"
  data-swiper-autoplay="2000"
  style="background-image: url('${item.avatar}')"
>
  <div
    class="w-3/4 md:w-1/2 lg:ml-10 p-6 bg-gray-300/50 lg:bg-transparent rounded-xl flex flex-col justify-start items-start gap-2 ml-4"
  >
    <h3 class="text-red-500 text-lg font-semibold lg:font-bold lg:text-xl">
      ${item.title}
    </h3>
    <h1 class="text-gray-800 text-2xl lg:text-4xl font-extrabold">
      ${item.info}
    </h1>
    <h4 class="text-gray-500 lg:text-xl lg:mb-4">
      ${item.price}
    </h4>
    <button
      class="font-semibold px-3 py-2 text-xs text-white bg-red-400 rounded-xl"
      type="button"
    >
      ${item.button}
    </button>
  </div>
</div>
  `).join("");
}


//! title categories swiper data

const titleCategories = document.getElementById("titlecategories");
if (titleCategories != null) {
    titleCategories.innerHTML = TitleCategories.map((item) =>
        `
  <div
  class="categories_slide_swiper cursor-pointer rounded-xl swiper-slide h-full flex items-start justify-between border shadow-xl p-4"
  data-swiper-autoplay="1000"
>
<div
class="w-12 h-12 border-2 bg-gray-400/20 rounded-lg flex items-center justify-center"
 >
 <img class="w-8 h-8" src="${item.icon}" title="productPic">
</div>
<div class="mr-auto ml-2">  
  <h3 class="font-semibold md:font-bold text-xs md:text-sm text-gray-700 mb-1">${item.title}</h3>
  <button type="button" class="border-0 text-xs md:text-sm font-semibold text-red-400">Show All</button>
</div>

<span class="text-gray-400 text-xs">${item.count}</span>
        
</div>
  `).join("");

}
const blogSwiper = document.getElementById("blog_swiper");
if (blogSwiper != null) {
    blogSwiper.innerHTML = BolgSwiper.map((item) => (
        `
  <div class="swiper-slide">
  <div
   class="rounded-lg w-full h-40"
   style="background-image: url('${item.pic}')">
  </div>
  <div class="mt-4 flex flex-col items-start justify-start gap-2">
  <h3 class="text-red-400">${item.title}</h3>
  <h2 class="font-semibold text-sm lg:text-lg hover:text-red-500 cursor-pointer">${item.info}</h2>
  <h4 class="text-gray-500 text-xs lg:text-sm">${item.date}</h4>
  </div>
  </div>
  `)).join("");
}

//! new Products
// document.getElementById("newProducts").innerHTML = NewProducts.map(
//     (item) =>
//         `
//     <div
//     class="product_pic cursor-pointer overflow-hidden flex flex-col gap-2 p-4 w-full h-92 border shadow-md bg-white rounded-lg relative"
//   >
//     <div
//       class="z-10 tax absolute top-2 left-2 bg-green-600 text-white text-sm font-bold border rounded-md"
//     >
//     ${item.present}
//     </div>
//     <div
//       class="productOptions hidden flex-col gap-2 absolute right-2 top-2 text-xl font-semibold z-10"
//     >
//       <div
//         class="w-8 h-8 bg-white rounded-lg rounded-lg shadow-md border flex items-center justify-center cursor-pointer text-gray-700 hover:text-white hover:bg-gray-700"
//       >
//         <ion-icon name="heart-outline"></ion-icon>
//       </div>
//       <div
//         class="w-8 h-8 bg-white rounded-lg rounded-lg shadow-md border flex items-center justify-center cursor-pointer text-gray-700 hover:text-white hover:bg-gray-700"
//       >
//         <ion-icon name="eye-outline"></ion-icon>
//       </div>
//       <div
//         class="w-8 h-8 bg-white rounded-lg rounded-lg shadow-md border flex items-center justify-center cursor-pointer text-gray-700 hover:text-white hover:bg-gray-700"
//       >
//         <ion-icon name="repeat-outline"></ion-icon>
//       </div>
//       <div
//         class="w-8 h-8 bg-white rounded-lg rounded-lg shadow-md border flex items-center justify-center cursor-pointer text-gray-700 hover:text-white hover:bg-gray-700"
//       >
//         <ion-icon name="bag-add-outline"></ion-icon>
//       </div>
//     </div>
//     <div
//       class="w-full h-1/2 mb-2"
//       style="
//         background-image: url('${item.productPic}');
//       "
//     >
//       <img
//         class="product_hover_pic w-full h-full"
//         src="${item.productHover}"
//         alt=""
//       />
//     </div>
//
//     <h3 class="text-red-500">${item.productName}</h3>
//     <h5>${item.productInfo}</h5>
//
//     <div class="stars text-yellow-500">
//       <ion-icon name="star"></ion-icon>
//       <ion-icon name="star"></ion-icon>
//       <ion-icon name="star"></ion-icon>
//       <ion-icon name="star"></ion-icon>
//       <ion-icon name="star-half-outline"></ion-icon>
//     </div>
//     <div
//       class="flex items-center justify-start gap-4 font-semibold text-sm"
//     >
//       <strong>${item.taxPrice}</strong>
//       <s class="text-gray-500">${item.productPrice}</s>
//     </div>
//   </div>
//     `
// ).join("");
//


const swiper = new Swiper(swiperr, {
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
});


const categoriesSwiper = new Swiper(categories_swiper, {
    grabCursor: true,
    slidesPerView: 4,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 4
        }
    },
    autoplay: {
        delay: 2000,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
});

const blogswiper = new Swiper(blog_swiper, {
    grabCursor: true,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        400: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        460: {
            slidesPerView: 2
        },
        // when window width is >= 640px
        800: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
});


//! reverse timer

let future_time = new Date("2024-01-01 23:59:59").getTime();

// let x = setInterval(function () {
//     let now_time = new Date().getTime();
//
//     let newTime = future_time - now_time;
//
//     let days = Math.floor(newTime / (1000 * 60 * 60 * 24));
//     let hours = Math.floor(
//         (newTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     let minutes = Math.floor((newTime % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((newTime % (1000 * 60)) / 1000);
//
//     document.getElementById("days").innerHTML = days + "<span class='text-gray-600'>Days</span>";
//     document.getElementById("hour").innerHTML = hours + "<span class='text-gray-600'>Hours</span>";
//     document.getElementById("minute").innerHTML = minutes + "<span class='text-gray-600'>Min</span>";
//     document.getElementById("second").innerHTML = seconds + "<span class='text-gray-600'>Sec</span>";
//
//     if (newTime < 0) {
//         clearInterval(x);
//         document.getElementById("reverseTimer").innerHTML = "FiniSh";
//     }
// }, 1000);
