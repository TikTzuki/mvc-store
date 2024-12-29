import ProductCatalog from "@/components/product/ProductCatalog";
import {ServerProps} from "@/types/server_utils";

export default async function Home(props: ServerProps) {
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
                <ProductCatalog {...props}/>
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
