import Link from "next/link"
import { Blog } from "@/types/blog.types"

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="rounded-lg border p-4 shadow-md">
      <h2 className="mb-2 text-2xl font-semibold">
        <Link href={`/blog/${blog.slug}`} className="text-blue-500 hover:underline" passHref>
          {blog.title}
        </Link>
      </h2>
      <p className="mb-4 text-gray-600">{blog.metaDescription}</p>

      {/* Optional: Show blog date and author if available */}
      {blog.date && <p className="text-sm text-gray-500">Published on {new Date(blog.date).toDateString()}</p>}
      {blog.author && <p className="text-sm text-gray-500">By {blog.author}</p>}
    </div>
  )
}
