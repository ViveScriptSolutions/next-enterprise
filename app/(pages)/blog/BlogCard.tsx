import { Blog } from "@/types/blog.types";
import Link from "next/link";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-2xl font-semibold mb-2">
        <Link
          href={`/blog/${blog.slug}`}
          className="text-blue-500 hover:underline"
          passHref
        >
          {blog.title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-4">{blog.metaDescription}</p>

      {/* Optional: Show blog date and author if available */}
      {blog.date && (
        <p className="text-gray-500 text-sm">
          Published on {new Date(blog.date).toDateString()}
        </p>
      )}
      {blog.author && <p className="text-gray-500 text-sm">By {blog.author}</p>}
    </div>
  );
}
