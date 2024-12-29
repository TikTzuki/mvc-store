import {getMetadata} from "@/lib/db";
import {MenuItem} from "@/types/metadata";

export default async function Header() {
    const MenuItems: MenuItem[] = await getMetadata()
        .then(result => {
            return result?.MenuItems
        });

    return (
        <header className="header w-full">
            <div
                className="top-header w-screen flex flex-col items-center justify-between border-b"
            >
                {/*<div className="flex w-full items-center justify-between p-4 md:px-20 border-b">*/}
                {/*    <div className="icons hidden lg:flex items-center gap-2">*/}
                {/*        <a*/}
                {/*            className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all"*/}
                {/*            href="#"*/}
                {/*        >*/}
                {/*            <ion-icon name="logo-instagram"></ion-icon>*/}
                {/*        </a>*/}
                {/*        <a*/}
                {/*            className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all"*/}
                {/*            href="#"*/}
                {/*        >*/}
                {/*            <ion-icon name="logo-linkedin"></ion-icon>*/}
                {/*        </a>*/}
                {/*        <a className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all"*/}
                {/*           href="#">*/}
                {/*            <ion-icon name="logo-github"></ion-icon>*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*    <h3 className="text-gray-400 font-semibold text-xs">*/}
                {/*        Sơn Lâm Wedding*/}
                {/*    </h3>*/}
                {/*    <div className="select hidden md:flex">*/}
                {/*        <select className="mr-2 p-1 px-2 text-sm font-semibold" id="language">*/}
                {/*            <option th:text="#{lang.vi}" value="en"></option>*/}
                {/*            <option th:text="#{lang.eng}" value="vi"></option>*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*  <div className="gap-4 flex flex-col sm:flex-row w-full items-center justify-between p-6 md:px-24">*/}
                {/*      <h1 className="font-semibold text-4xl text-gray-600">Sơn Lâm Wedding</h1>*/}
                {/*      <form className="relative w-full sm:w-3/5">*/}
                {/*          <input*/}
                {/*              className="w-full h-full p-2 border rounded-xl"*/}
                {/*              id="search"*/}
                {/*              th:placeholder="#{search.placeholder}"*/}
                {/*              type="text"*/}
                {/*          />*/}
                {/*          <label className="absolute right-2 top-2" for="search">*/}
                {/*              <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>*/}
                {/*          </label>*/}
                {/*      </form>*/}
                {/*      <div className="icons hidden mr-2 text-3xl md:flex gap-8 text-gray-600">*/}
                {/*          <div className="relative">*/}
                {/*              <ion-icon name="person-outline"></ion-icon>*/}
                {/*          </div>*/}
                {/*          <div className="relative">*/}
                {/*<span*/}
                {/*    className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full"*/}
                {/*>0</span*/}
                {/*>*/}
                {/*              <ion-icon name="heart-outline"></ion-icon>*/}
                {/*          </div>*/}
                {/*          <div className="relative">*/}
                {/*<span*/}
                {/*    className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full"*/}
                {/*>0</span*/}
                {/*>*/}
                {/*              <ion-icon name="bag-handle-outline"></ion-icon>*/}
                {/*          </div>*/}
                {/*      </div>*/}
                {/*  </div>*/}
            </div>

            <div className="desktopNavbar">
                <nav className="my-4 hidden lg:flex justify-center">
                    <ul className="desktopNavbarUl flex justify-center items-center gap-12 font-sm font-bold text-gray-600" id="desktopNavbarUL">
                        {
                            MenuItems.map((item, i) => {
                                return <li key={i} className="nav_items relative parent_nav_item">
                                    <a href={item.href}>{item.title}</a>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
                                    {
                                        item.subItems != null
                                            ? <ul className="hoveredItems w-52 absolute top-10 hidden flex-col items-start justify-start gap-2 p-4 rounded-xl shadow-lg border font-normal bg-white">
                                                {
                                                    item.subItems.map((subItem, j) => {
                                                        return <li key={j}>
                                                            <a href={subItem.href}>${subItem.title}</a>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                            : ""
                                    }
                                </li>
                            })
                        }
                    </ul>
                </nav>
            </div>

            {/*<div className="mobileNavbar">*/}
            {/*    <div className="z-10 bg-white w-96 lg:hidden flex justify-around items-center p-4 border rounded-t-xl fixed bottom-0 left-1/2 -translate-x-1/2 text-lg"*/}
            {/*         style="box-shadow: 0 0 0.3rem lightgray">*/}
            {/*        <button id="openNavbarButton" type="button">*/}
            {/*            <ion-icon name="menu-outline"></ion-icon>*/}
            {/*        </button>*/}

            {/*        <button className="relative" type="button">*/}
            {/*<span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">*/}
            {/*  0*/}
            {/*</span>*/}
            {/*            <ion-icon name="bag-handle-outline"></ion-icon>*/}
            {/*        </button>*/}

            {/*        <button type="button">*/}
            {/*            <ion-icon name="home-outline"></ion-icon>*/}
            {/*        </button>*/}

            {/*        <button className="relative" type="button">*/}
            {/*<span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">*/}
            {/*  0*/}
            {/*</span>*/}
            {/*            <ion-icon name="heart-outline"></ion-icon>*/}
            {/*        </button>*/}

            {/*        <button id="categoriesBtn" type="button">*/}
            {/*            <ion-icon name="grid-outline"></ion-icon>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*    <!--* overlay -->*/}
            {/*    <div*/}
            {/*        className="hidden fixed top-0 left-0 w-screen h-screen bg-gray-500/30 z-10"*/}
            {/*        id="overlayNavbar"*/}
            {/*    ></div>*/}

            {/*    <!--! sidebarNavbar -->*/}
            {/*    <div*/}
            {/*        className="fixed top-0 w-72 h-screen bg-white p-4 shadow-lg hidden flex-col justify-start gap-4 text-lg font-semibold overflow-auto z-20"*/}
            {/*        id="sidebarNavbar"*/}
            {/*    >*/}
            {/*        <div className="flex justify-between border-b-2 py-4">*/}
            {/*            <h3 className="text-red-400">Menu</h3>*/}
            {/*            <button className="closeButton hover:text-red-500">*/}
            {/*                <ion-icon name="close-circle-outline"></ion-icon>*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*        <div className="mobile_navbar_item border-b pb-3 text-gray-600">Home</div>*/}
            {/*        <div className="mobile_navbar_item border-b pb-3 text-gray-600">*/}
            {/*            <details>*/}
            {/*                <a href="#">Shirt</a>*/}
            {/*                <a href="#">Shorts & Jeans</a>*/}
            {/*                <a href="#">Safety Shoes</a>*/}
            {/*                <a href="#">Wallet</a>*/}
            {/*                <summary>Men's</summary>*/}
            {/*            </details>*/}
            {/*        </div>*/}
            {/*        <div className="mobile_navbar_item border-b pb-3 text-gray-600">*/}
            {/*            <details>*/}
            {/*                <a href="#">Dress & Frock</a>*/}
            {/*                <a href="#">Earrings</a>*/}
            {/*                <a href="#">Necklace</a>*/}
            {/*                <a href="#">Makeup Kit</a>*/}
            {/*                <summary>Women's</summary>*/}
            {/*            </details>*/}
            {/*        </div>*/}
            {/*        <div className="mobile_navbar_item border-b pb-3 text-gray-600">*/}
            {/*            <details>*/}
            {/*                <a href="#">Earrings</a>*/}
            {/*                <a href="#">Couple Rings</a>*/}
            {/*                <a href="#">Necklace</a>*/}
            {/*                <a href="#">Bracelets</a>*/}
            {/*                <summary>Jewelry</summary>*/}
            {/*            </details>*/}
            {/*        </div>*/}
            {/*        <div className="mobile_navbar_item border-b pb-3 text-gray-600">*/}
            {/*            <details>*/}
            {/*                <a href="#">Clothes Perfume</a>*/}
            {/*                <a href="#">Deodorant</a>*/}
            {/*                <a href="#">Flower Fragrance</a>*/}
            {/*                <a href="#">Air Freshener</a>*/}
            {/*                <summary>Perfume</summary>*/}
            {/*            </details>*/}
            {/*        </div>*/}
            {/*        <div className="mobile_navbar_item border-b pb-3 text-gray-600">*/}
            {/*            <a href="#">Blog</a>*/}
            {/*        </div>*/}
            {/*        <div className="mobile_navbar_item border-b pb-3 text-gray-600">*/}
            {/*            <a href="#">Hot Offers</a>*/}
            {/*        </div>*/}

            {/*        <div className="mobile_navbar_item border-b pb-3 text-gray-600">*/}
            {/*            <details>*/}
            {/*                <div className="border rounded-xl shadow-xl flex flex-col items-start">*/}
            {/*                    <a className="border-b w-full pb-2" href="#" th:text="#{lang.vi}"></a>*/}
            {/*                    <a className="border-b w-full pb-2" href="#" th:text="#{lang.eng}"></a>*/}
            {/*                </div>*/}
            {/*                <summary>Language</summary>*/}
            {/*            </details>*/}
            {/*        </div>*/}
            {/*        <!--            <div className="mobile_navbar_item border-b pb-3 text-gray-600">-->*/}
            {/*        <!--                <details>-->*/}
            {/*        <!--                    <div className="border rounded-xl shadow-xl flex flex-col items-start">-->*/}
            {/*        <!--                        <a className="border-b w-full pb-2" href="#">USD $</a>-->*/}
            {/*        <!--                        <a className="border-b w-full pb-2" href="#">EUR €</a>-->*/}
            {/*        <!--                    </div>-->*/}
            {/*        <!--                    <summary>Currency</summary>-->*/}
            {/*        <!--                </details>-->*/}
            {/*        <!--            </div>-->*/}

            {/*        <div className="icons flex items-center justify-center gap-4">*/}
            {/*            <a className="text-gray-900 bg-gray-300/50 p-2 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center"*/}
            {/*               href="#">*/}
            {/*                <ion-icon name="logo-instagram"></ion-icon>*/}
            {/*            </a>*/}
            {/*            <a className="text-gray-900 bg-gray-300/50 p-2 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center"*/}
            {/*               href="#">*/}
            {/*                <ion-icon name="logo-linkedin"></ion-icon>*/}
            {/*            </a>*/}
            {/*            <a className="text-gray-900 bg-gray-300/50 p-2 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center"*/}
            {/*               href="#">*/}
            {/*                <ion-icon name="logo-github"></ion-icon>*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <!--todo sidebarCategories -->*/}
            {/*    <div*/}
            {/*        className="fixed hidden top-0 w-80 h-screen bg-white p-6 shadow-lg flex-col justify-start gap-4 font-semibold overflow-auto z-20"*/}
            {/*        id="sidebarCategories"*/}
            {/*    >*/}
            {/*        <div className="categories w-full h-auto">*/}
            {/*            <div className="w-full flex items-center justify-between">*/}
            {/*                <h1 className="text-lg font-semibold mb-4">CATEGORY</h1>*/}
            {/*                <button className="closeButton text-xl hover:text-red-500">*/}
            {/*                    <ion-icon name="close-circle-outline"></ion-icon>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*            <form name="product-filter">*/}
            {/*                <h3 className="sr-only">Categories</h3>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </header>
    )
}