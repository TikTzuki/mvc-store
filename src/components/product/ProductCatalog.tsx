import {getProduct} from "@/lib/db";
import Paginate from "@/components/Paginate";
import {FindProductRequest} from "@/types/product";
import {ServerProps} from "@/types/server_utils";

export default async function ProductCatalog(props: ServerProps) {
    const searchParams = await props.searchParams;
    // const findProductRequest: FindProductRequest = {
    //     page: parseInt(searchParams['page'] as string) || 0,
    //     size: 20,
    //     search: searchParams['search'] as string || '',
    //     filter: '',
    //     sort: []
    // }
    const productPage = await getProduct({});

    return <div id="productsCatalog" className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        {/*<div*/}
        {/*    className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">*/}
        {/*    <Link className="group" href="/(store)/product">*/}
        {/*        <img className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"*/}
        {/*             th:alt="${product.getName()}"*/}
        {/*             th:src="${product.getImage()}"/>*/}
        {/*        <h3 className="mt-4 text-sm text-gray-700" th:text="${product.getName()}"></h3>*/}
        {/*        <p className="mt-1 text-lg font-medium text-gray-900" th:text="${product.getPrice()} + 'đ'">*/}
        {/*        </p>*/}
        {/*    </Link>*/}
        {/*</div>*/}
        <Paginate {...productPage}/>
    </div>
}