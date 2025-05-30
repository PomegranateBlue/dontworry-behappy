// src/middleware.ts
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options));
        },
      },
    }
  );

  // IMPORTANT: DO NOT REMOVE auth.getUser()
  return (async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const protectedRoutes = ['/note', '/notebox'];
    const path = request.nextUrl.pathname;

    if (!user && protectedRoutes.some((route) => path.startsWith(route))) {
      const url = request.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }

    return supabaseResponse;
  })();
}

// 미들웨어가 실행될 경로 지정
export const config = {
  matcher: ['/note/:path*', '/notebox/:path*'],
};
