// import { getAllBlogs, getBlogBySlug } from "@/lib/blog.utils";
import { Metadata } from "next"

// Dynamically set metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = {
    title: "Blog not found",
    description: "The requested blog post could not be found.",
    metaDescription: "",
  }
  // const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: blog.title,
    description: blog.metaDescription,
  }
}

// Fetch single blog post from Firebase
export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  // const blog = await getBlogBySlug(params.slug)
  const blog = {
    title: "Blog not found",
    description: "The requested blog post could not be found.",
    metaDescription: "",
    author: "",
    date: "",
    content: "",
  }

  // console.log(blog)

  if (!blog) {
    return <div>Blog not found</div>
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-4 text-4xl font-bold">{blog.title}</h1>
      <p className="mb-8 text-gray-600">
        {blog.author} - {new Date(blog.date).toLocaleDateString()}
      </p>
      <article className="prose lg:prose-xl">{blog.content}</article>
    </div>
  )
}

// // Generate paths for each blog post
// export async function generateStaticParams(): Promise<{ slug: string }[]> {
//   const blogs = await getAllBlogs()
//   return blogs.map((blog) => ({ slug: blog.slug }))
// }
