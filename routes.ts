/**
 * An array of routes that are accessible to the public
 * These routes don not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/auth/email-verification",
  "/about",
  "/contact",
  "/blog",
  "/dev",
  "/projects",
  "/services",
  "/cookie-policy",
  "/privacy-policy",
  "/refund-policy",
  "/terms-conditions",
]

/**
 * An array of routes that are used for authentication
 * These routes will redirect to /dashboard
 * @type {string[]}
 */
export const authRoutes = ["/auth/sign-in", "/auth/sign-up", "/auth/auth/error"]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after logged in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard"
