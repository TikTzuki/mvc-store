export default async function Home() {
    return (
        <main>
            <div className="banner mt-10 lg:-mt-4 flex items-center justify-center">
                <div className="swiper swiper-js">
                    <div
                        className="swiper-wrapper h-64 lg:h-96 w-full lg:w-5/6 relative"
                        id="swiperSlide"
                    ></div>

                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10">
                <div className="swiper categories_swiper">
                    <div className="swiper-wrapper relative gap-4" id="titlecategories"></div>

                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
            <section className="w-full min-h-auto px-8 lg:px-0 lg:w-5/6 mx-auto mt-16 flex gap-8">
                <aside className="sticky top-0 hidden lg:flex flex-col lg:w-1/4 max-h-screen">
                    <div className="aside_section overflow-y-auto">
                        <div className="categories w-full rounded-xl p-4 bg-white border shadow-lg">
                            <h1 className="text-xl font-semibold mb-4">CATEGORY</h1>
                            <form className="hidden lg:block" name="product-filter">
                                <h3 className="sr-only">Categories</h3>
                            </form>
                        </div>
                    </div>
                </aside>

                {/*<div id="productsCatalog" className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">*/}
                {/*    <h2 className="sr-only">Products</h2>*/}
                {/*    <div*/}

                {/*        className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">*/}
                {/*        <a className="group" href="#" th:each="product : ${productPage.iterator()}">*/}
                {/*            <img className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"*/}
                {/*                 th:alt="${product.getName()}"*/}
                {/*                 th:src="${product.getImage()}"/>*/}
                {/*            <h3 className="mt-4 text-sm text-gray-700" th:text="${product.getName()}"></h3>*/}
                {/*            <p className="mt-1 text-lg font-medium text-gray-900" th:text="${product.getPrice()} + 'đ'">*/}
                {/*            </p>*/}
                {/*        </a>*/}
                {/*    </div>*/}

                {/*    <div*/}
                {/*        className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">*/}
                {/*        <div>*/}
                {/*            <p className="text-sm text-gray-700">*/}
                {/*                Showing*/}
                {/*                <span className="font-medium" th:text="${productPage.getNumber()*productPage.getSize()}"></span>*/}
                {/*                to*/}
                {/*                <span className="font-medium" th:text="${productPage.getNumber()*productPage.getSize()  + productPage.getSize()}"></span>*/}
                {/*                of*/}
                {/*                <span className="font-medium" th:text="${productPage.getTotalElements()}"></span>*/}
                {/*                results*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">*/}
                {/*                <a*/}
                {/*                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"*/}
                {/*                    th:href="'?page='+${productPage.getNumber()-1} + '#productsCatalog'"*/}
                {/*                    th:if="${productPage.getNumber() > 0}">*/}
                {/*                    <span className="sr-only">Previous</span>*/}
                {/*                    <svg aria-hidden="true" className="size-5" data-slot="icon" fill="currentColor" viewBox="0 0 20 20">*/}
                {/*                        <path clip-rule="evenodd"*/}
                {/*                              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"*/}
                {/*                              fill-rule="evenodd"/>*/}
                {/*                    </svg>*/}
                {/*                </a>*/}
                {/*                <th:block th:each="pageNum : ${prevPages}">*/}
                {/*                    <a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"*/}
                {/*                       th:href="'?page='+${pageNum}+'#productsCatalog'"*/}
                {/*                       th:text="${pageNum}"></a>*/}
                {/*                </th:block>*/}

                {/*                <a className="relative z-10 inline-flex items-center bg-rose-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"*/}
                {/*                   th:text="${productPage.getNumber()}"></a>*/}

                {/*                <th:block th:each="pageNum : ${nextPages}">*/}
                {/*                    <a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"*/}
                {/*                       th:href="'?page='+${pageNum}+'#productsCatalog'"*/}
                {/*                       th:text="${pageNum}"></a>*/}
                {/*                </th:block>*/}

                {/*                <a className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"*/}
                {/*                   th:href="'?page='+${productPage.nextPageable().getPageNumber() + '#productsCatalog'}"*/}
                {/*                   th:if="${productPage.hasNext()}">*/}
                {/*                    <span className="sr-only">Next</span>*/}
                {/*                    <svg aria-hidden="true" className="size-5" data-slot="icon" fill="currentColor" viewBox="0 0 20 20">*/}
                {/*                        <path clip-rule="evenodd"*/}
                {/*                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"*/}
                {/*                              fill-rule="evenodd"/>*/}
                {/*                    </svg>*/}
                {/*                </a>*/}
                {/*            </nav>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </section>

            <div className="mt-10 w-full px-8 lg:px-0 lg:w-5/6 mx-auto flex flex-wrap lg:flex-nowrap flex-col lg:flex-row gap-8 mb-20">
            </div>

            <div className="w-full mx-auto flex my-10">
                <div className="swiper blog_swiper">
                    <div className="swiper-wrapper" id="blog_swiper"></div>

                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        </main>
    );
}
