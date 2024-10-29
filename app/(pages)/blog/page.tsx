// import { getAllBlogs } from "@/lib/blog.utils";
import { Metadata } from "next"
import { BlogCard } from "./BlogCard"
import { Blog } from "@/types/blog.types"

// Set metadata for SEO
export const metadata: Metadata = {
  title: "Blog",
  description: "Read our latest articles on web development, software, and business automation.",
}

// Fetch blogs from Firebase
export default async function BlogPage() {
  let blogs: Blog[] = []

  try {
    // blogs = await getAllBlogs(); // Fetch blogs with correct type
  } catch (error) {
    console.error("Failed to fetch blogs:", error)
    return <div className="text-center">Failed to load blogs.</div>
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-center text-4xl font-bold">Our Blog</h1>
      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No blogs available at the moment.</p>
      )}
    </div>
  )
}
