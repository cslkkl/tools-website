import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getToolBySlug, getAllSlugs } from "@/lib/tools/registry";
import { getToolContent } from "@/lib/content/tools";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { AdBanner } from "@/components/ui/AdBanner";
import { RelatedTools } from "@/components/ui/RelatedTools";
import { ToolComponentLoader } from "@/components/tools/ToolComponentLoader";
import { SoftwareAppJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  const content = getToolContent(slug);
  const title = content?.frontmatter.title ?? `Online ${tool.name}`;
  const description =
    content?.frontmatter.description ?? tool.description;

  return {
    title,
    description,
    keywords: content?.frontmatter.keywords ?? tool.keywords,
    openGraph: {
      title,
      description,
      type: "website",
      url: `/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/${slug}`,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const content = getToolContent(slug);
  const h1Title =
    content?.frontmatter.title ?? `Online ${tool.name} — Free ${tool.name}`;

  return (
    <>
      <SoftwareAppJsonLd
        name={tool.name}
        description={tool.description}
        url={`https://onlinetoolbox.dev/${slug}`}
      />
      {content && (
        <FAQPageJsonLd
          faqs={extractFAQs(content.below)}
        />
      )}

      <div className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: tool.name },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          {h1Title}
        </h1>

        {/* Above-tool SEO content */}
        {content && content.above && (
          <div className="prose max-w-none mb-6">
            <MDXRemote
              source={content.above}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </div>
        )}

        {/* Ad Unit 1 */}
        <AdBanner slot="TOOL_ABOVE" format="horizontal" />

        {/* Tool Component */}
        <div className="rounded-xl border border-border bg-card p-4 sm:p-6 shadow-sm">
          <ToolComponentLoader slug={slug} />
        </div>

        {/* Ad Unit 2 */}
        <AdBanner slot="TOOL_BELOW" format="auto" />

        {/* Below-tool SEO content */}
        {content && content.below && (
          <div className="prose max-w-none mt-8">
            <MDXRemote
              source={content.below}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </div>
        )}

        <RelatedTools slug={slug} />
      </div>
    </>
  );
}

function extractFAQs(markdown: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];
  const lines = markdown.split("\n");
  let current: { question: string; answer: string } | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (line.startsWith("### ") || line.startsWith("## ")) {
      const heading = line.replace(/^#+\s*/, "");
      if (heading.toLowerCase().includes("frequently asked") || heading === "FAQ") {
        continue;
      }
      if (/^is |^can |^do |^what |^how |^why |^does |^are /i.test(heading)) {
        if (current) faqs.push(current);
        current = { question: heading.replace(/\?$/, ""), answer: "" };
      } else if (current) {
        faqs.push(current);
        current = null;
      }
    } else if (current && line && !line.startsWith("#") && !line.startsWith("---")) {
      current.answer += (current.answer ? " " : "") + line;
    }
  }
  if (current) faqs.push(current);
  return faqs.filter((f) => f.answer.length > 0).slice(0, 6);
}
