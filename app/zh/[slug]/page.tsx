import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getToolBySlug, getAllSlugs } from "@/lib/tools/registry";
import { getToolContentZh } from "@/lib/content/tools";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { AdBanner } from "@/components/ui/AdBanner";
import { RelatedTools } from "@/components/ui/RelatedTools";
import { ToolComponentLoader } from "@/components/tools/ToolComponentLoader";
import { SoftwareAppJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  const content = getToolContentZh(slug);
  const title = content?.frontmatter.title ?? `${tool.name} - 在线工具`;
  const description = content?.frontmatter.description ?? tool.description;
  return {
    title, description,
    keywords: content?.frontmatter.keywords ?? tool.keywords,
    openGraph: { title, description, type: "website", url: `/zh/${slug}` },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `/zh/${slug}` },
  };
}

export default async function ZhToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();
  const content = getToolContentZh(slug);
  const h1Title = content?.frontmatter.title ?? `${tool.name} - 在线工具`;

  return (
    <>
      <SoftwareAppJsonLd name={tool.name} description={tool.description} url={`https://toolboxonline.online/zh/${slug}`} />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumb items={[{ label: "首页", href: "/zh" }, { label: tool.name }]} />
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{h1Title}</h1>
        {content?.above && <div className="prose max-w-none mb-6"><MDXRemote source={content.above} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }} /></div>}
        <AdBanner slot="TOOL_ABOVE" format="horizontal" />
        <div className="rounded-xl border border-border bg-card p-4 sm:p-6 shadow-sm"><ToolComponentLoader slug={slug} /></div>
        <AdBanner slot="TOOL_BELOW" format="auto" />
        {content?.below && <div className="prose max-w-none mt-8"><MDXRemote source={content.below} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }} /></div>}
        <RelatedTools slug={slug} />
      </div>
    </>
  );
}
