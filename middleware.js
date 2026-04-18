import { NextResponse } from 'next/server'
import Cookies from 'js-cookie'

export function middleware(request) {
  console.log("is touched")
  const token = request.cookies.get('auth_token')?.value
  const { pathname } = request.nextUrl

  // Public routes (no authentication needed)
  const publicRoutes = ['/', '/login', '/contact', '/about', '/services', '/why-choose-us']
  
  // Check if route requires authentication
  const isDashboardRoute = pathname.startsWith('/dashboard')
  const isProfileRoute = pathname.startsWith('/profile')
  
  const isProtectedRoute = isDashboardRoute || isProfileRoute
  console.log({isProtectedRoute, isDashboardRoute , isProfileRoute,token },"========dddddddddddd===== ")
  // if (isProtectedRoute && !token) {
  //   // Redirect to login if not authenticated
  //   const loginUrl = new URL('/login', request.url)
  //   // loginUrl.searchParams.set('from', pathname)
  //   return NextResponse.redirect(loginUrl)
  // }

  if (pathname === '/login' && token) {
    // Redirect to dashboard if already logged in
    console.log("dddddddddddddddddddddddddd")
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
  console.log("fffffffff")
  

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}