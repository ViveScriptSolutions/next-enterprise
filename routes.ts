/**
 * An array of routes that are accessible to the public
 * These routes don not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/contact"]

/**
 * An array of routes that are used for authentication
 * These routes will redirect to /dashboard
 * @type {string[]}
 */
export const authRoutes = ["/sign-in", "/sign-up", "/auth/error"]

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
