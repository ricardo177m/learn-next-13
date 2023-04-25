import { NextResponse } from "next/server";

const allowedOrigins: string[] =
  JSON.parse(process.env.ALLOWED_ORIGINS as string) || [];

export function middleware(request: Request) {
  // console.log(request.method, request.url);

  const origin = request.headers.get("origin");

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, { status: 400 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
