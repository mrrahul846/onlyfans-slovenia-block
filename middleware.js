import { NextResponse } from 'next/server';

export const config = {
  matcher: '/:path*',
}

export default async function middleware(req) {
  const ip = req.headers.get("x-forwarded-for") || "8.8.8.8";
  const res = await fetch(https://ipapi.co/${ip}/json/);
  const data = await res.json();
  const country = data.country_name || "";
  
  if (country === "Slovenia") {
    return new Response("Access Denied: Not available in your country.", {
      status: 403,
    });
  }

  return NextResponse.redirect("https://onlyfans.com/ang3lina3");
}
