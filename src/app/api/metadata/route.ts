import {NextRequest, NextResponse} from "next/server";
import {getMetadata} from "@/lib/db";

export async function GET(req: NextRequest) {

    return getMetadata()
        .then(result => {
            return NextResponse.json(result);
        });
}