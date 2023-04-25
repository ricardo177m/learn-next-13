import { limiter } from "@/app/api/config/limiter";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const origin = request.headers.get("origin");

  const remaining = await limiter.removeTokens(1);
  console.log("remaining", remaining);

  if (remaining < 1)
    return new NextResponse(null, {
      status: 429,
      headers: {
        "Retry-After": "60",
        "Access-Control-Allow-Origins": origin || "*",
      },
    });

  return new Response("Hello, Next.js!");
}
