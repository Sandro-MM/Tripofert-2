// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const headers = new Headers(request.headers);
    headers.set('x-current-path', request.nextUrl.pathname);

    return NextResponse.next({
        request: {
            headers,
        },
    });
}

export const config = {
    matcher: [
        // Apply middleware to all routes except static files and APIs
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
