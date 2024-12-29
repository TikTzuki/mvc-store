import {NextRequest, NextResponse} from "next/server";
import {getProduct} from "@/lib/db";

export async function GET(req: NextRequest) {
    const {searchParams} = req.nextUrl;
    const params = Object.fromEntries(searchParams.entries());
    // const sort = params.sort
    //     .reduce<Dict>((acc, s) => {
    //         const [field, order] = s.split(',');
    //         acc[field] = order;
    //         return acc;
    //     }, {});
    const productPage = await getProduct(params);
    return NextResponse.json(productPage);
}