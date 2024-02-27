import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: [
        "/",
        "/events/:id",
        "/api//weebhook/clerk",
        "/api/weebook/stripe",
        "/api/uploadthing"
    ],
    ignoredRoutes: [
        "/api//weebhook/clerk",
        "/api/weebook/stripe",
        "/api/uploadthing"
    ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};