import {MongoClient} from "mongodb";

const METADATA = "metadata";

export function getCollection(collectionName: string) {
    const client = new MongoClient(process.env.MONGODB_URI || "", {});
    return client.db().collection(collectionName);
}

export async function getMetadata() {
    const collection = getCollection(METADATA);
    return collection.findOne();
}