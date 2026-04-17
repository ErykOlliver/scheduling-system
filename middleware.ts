import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req })

    if (!token) {
        return NextResponse.redirect(new URL("/authenticator", req.url))
    }

    if (req.nextUrl.pathname.startsWith("/dashboard")) {
        if (token.admin_level !== "ADMIN") {
            return NextResponse.redirect(new URL("/", req.url))
        }
    }

    return NextResponse.next()

}