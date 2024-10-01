import { NextRequest, NextResponse } from "next/server";

// const protectedRoutes = ['/contact'];
const protectedRoutes = ['/add-color','/view-color'];


export default function middleware(req) {
    const token = req.cookies.get('token')?.value;
    if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL("/", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}