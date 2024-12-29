import {WithId} from "mongodb";

export interface FindProductRequest {
    search: string;
    filter: string;
    page: number;
    size: number;
    sort: string[] // sort=field,order
}

export interface ProductSummaryDto extends WithId<Document> {
    id: number;
    name: string;
    price: string;
    image: string;
}