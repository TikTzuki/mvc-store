import {MongoClient} from "mongodb";
import {FindProductRequest, ProductSummaryDto} from "@/types/product";
import {PageResponse} from "@/components/Paginate";

const METADATA = "metadata";

export function getCollection(collectionName: string) {
    const client = new MongoClient(process.env.MONGODB_URI || "", {});
    return client.db().collection(collectionName);
}

export async function getMetadata() {
    const collection = getCollection(METADATA);
    return collection.findOne();
}

const defaultParams: FindProductRequest = {
    search: '',
    filter: '',
    page: 0,
    size: 20,
    sort: [],
}

export async function getProduct(params: FindProductRequest): Promise<PageResponse<ProductSummaryDto>> {
    params = {...defaultParams, ...params};
    const coll = getCollection('products');
    const items = await coll.find()
        .filter({})
        .skip(params.page * params.size)
        .limit(params.size)
        .sort({
            updatedDate: 'desc',
        })
        .toArray() as ProductSummaryDto[];
    return {
        content: items,
        total: 1,
        totalPages: 1,
    }
}