import Link from "next/link";
import { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog — Developer Tools Tips and Guides",
  description:
    "Tips, guides, and resources for online developer tools. Learn how to use JSON formatter, Base64 encoder, QR code generator, and more.",
};

export default async function BlogPage() {
  const posts = await Promise.resolve(getAllBlogPosts());

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
        Blog
      </h1>
      <p className="text-lg text-muted-foreground mb-10">
        Tips, guides, and resources for online developer tools.
      </p>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-2">
                <time dateTime={post.frontmatter.date}>
                  {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.frontmatter.author}</span>
              </div>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {post.frontmatter.title}
              </h2>
              <p className="mt-2 text-muted-foreground line-clamp-2">
                {post.frontmatter.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
