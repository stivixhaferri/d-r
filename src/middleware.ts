import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Create a route matcher to match any route starting with '/dashboard' or '/forum'
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)'])

export default clerkMiddleware(async (auth, req) => {
  // Check if the current route is a protected route
  if (isProtectedRoute(req)) {
    // Protect the route, which ensures that the user must be authenticated
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Match all routes except static assets and internals
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
