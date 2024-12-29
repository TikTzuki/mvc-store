import Link from "next/link";
import {range} from "@/lib/array";

export interface PageResponse<T> {
    content: T[];
    number: number;
    size: number;
    totalElements: number;
}

export default function Paginate<T>(p: PageResponse<T>) {
    const prevPages = range(Math.max(0, p.number - 3), Math.max(0, p.number));

    return <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        {/*<div>*/}
        {/*    <p className="text-sm text-gray-700">*/}
        {/*        Showing*/}
        {/*        <span className="font-medium">*/}
        {/*            {p.number * p.size}*/}
        {/*        </span>*/}
        {/*        to*/}
        {/*        <span className="font-medium">*/}
        {/*            {p.number * p.size + p.size}*/}
        {/*        </span>*/}
        {/*        of*/}
        {/*        <span className="font-medium">*/}
        {/*            {p.totalElements}*/}
        {/*        </span>*/}
        {/*        results*/}
        {/*    </p>*/}
        {/*</div>*/}
        <div>
            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                {/*{p.number > 0 && <Link*/}
                {/*    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"*/}
                {/*    href={'?page=' + (p.number - 1) + '#productsCatalog'}*/}
                {/*>*/}
                {/*    <span className="sr-only">Previous</span>*/}
                {/*    <svg aria-hidden="true" className="size-5" data-slot="icon" fill="currentColor" viewBox="0 0 20 20">*/}
                {/*        <path clip-rule="evenodd"*/}
                {/*              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"*/}
                {/*              fill-rule="evenodd"/>*/}
                {/*    </svg>*/}
                {/*</Link>}*/}
                {/*{prevPages.map(pageNum => <Link*/}
                {/*    key={pageNum}*/}
                {/*    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"*/}
                {/*    href={'?page=' + pageNum + '#productsCatalog'}>*/}
                {/*    {pageNum}*/}
                {/*</Link>)}*/}

                {/*<a className="relative z-10 inline-flex items-center bg-rose-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"*/}
                {/*   th:text="${productPage.getNumber()}"></a>*/}

                {/*<th:block th:each="pageNum : ${nextPages}">*/}
                {/*    <a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"*/}
                {/*       th:href="'?page='+${pageNum}+'#productsCatalog'"*/}
                {/*       th:text="${pageNum}"></a>*/}
                {/*</th:block>*/}

                {/*<Link className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"*/}
                {/*   href="'?page='+${productPage.nextPageable().getPageNumber() + '#productsCatalog'}"*/}
                {/*   th:if="${productPage.hasNext()}">*/}
                {/*    <span className="sr-only">Next</span>*/}
                {/*    <svg aria-hidden="true" className="size-5" data-slot="icon" fill="currentColor" viewBox="0 0 20 20">*/}
                {/*        <path clip-rule="evenodd"*/}
                {/*              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"*/}
                {/*              fill-rule="evenodd"/>*/}
                {/*    </svg>*/}
                {/*</Link>*/}
            </nav>
        </div>
    </div>
}
