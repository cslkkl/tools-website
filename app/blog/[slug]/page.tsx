import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getBlogPost, getAllBlogSlugs } from "@/lib/content/blog";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { BlogPostingJsonLd } from "@/components/seo/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      url: `/blog/${slug}`,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <BlogPostingJsonLd
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        url={`https://toolboxonline.online/blog/${slug}`}
        datePublished={post.frontmatter.date}
        authorName={post.frontmatter.author}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.frontmatter.title },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
          {post.frontmatter.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-8">
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

        <div className="prose max-w-none">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug],
              },
            }}
          />
        </div>
      </article>
    </>
  );
}
