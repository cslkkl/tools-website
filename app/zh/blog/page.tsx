import Link from "next/link";
import { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "博客 - 开发者工具使用技巧与指南",
  description: "免费在线开发工具的实用技巧、指南和资源。学习如何使用JSON格式化、Base64编码器、二维码生成器等工具。",
};

export default async function ZhBlogPage() {
  const posts = await Promise.resolve(getAllBlogPosts());

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">博客</h1>
      <p className="text-lg text-muted-foreground mb-10">开发者工具的使用技巧、指南和资源。</p>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">暂无文章，稍后再来！</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/zh/blog/${post.slug}`}
              className="block rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md">
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-2">
                <time dateTime={post.frontmatter.date}>
                  {new Date(post.frontmatter.date).toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" })}
                </time>
                <span>·</span>
                <span>{post.frontmatter.author}</span>
              </div>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{post.frontmatter.title}</h2>
              <p className="mt-2 text-muted-foreground line-clamp-2">{post.frontmatter.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <span key={tag} className="inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
