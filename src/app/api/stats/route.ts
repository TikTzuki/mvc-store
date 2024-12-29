import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    return NextResponse.json({
        google: process.env.GOOGLE_CLIENT_SECRET,
        nextauth_url: process.env.NEXTAUTH_URL
    })
}
