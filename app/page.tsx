import { WebsiteJsonLd } from "@/components/seo/JsonLd";
import { AdBanner } from "@/components/ui/AdBanner";
import { ToolCard } from "@/components/ui/ToolCard";
import { getToolsByCategory } from "@/lib/tools/registry";
import type { ToolCategory } from "@/lib/tools/types";

const sections: { category: ToolCategory; title: string; desc: string }[] = [
  { category: "developer", title: "Developer Tools", desc: "JSON, Base64, JWT, SQL format, regex test, and more." },
  { category: "converter", title: "Converter Tools", desc: "Convert units, colors, timestamps, numbers, and file sizes." },
  { category: "math", title: "Math Tools", desc: "Percentages, averages, discounts, random numbers, temperatures." },
  { category: "everyday", title: "Everyday Tools", desc: "BMI, age calculator, tip calculator, stopwatch & timer." },
  { category: "text", title: "Text Tools", desc: "Word counter, case converter, diff checker, Markdown, lorem ipsum." },
  { category: "design", title: "Design Tools", desc: "Color palette generator, aspect ratio calculator." },
  { category: "content", title: "Content Tools", desc: "Meta tag generator, URL slug maker, emoji picker." },
  { category: "security", title: "Security Tools", desc: "Password generator, hash generator." },
  { category: "image", title: "Image Tools", desc: "Compress images without losing quality." },
];

export default function HomePage() {
  return (
    <>
      <WebsiteJsonLd />

      <section className="mx-auto max-w-3xl px-5 pt-20 pb-10 text-center">
        <h1 className="text-[40px] sm:text-[56px] font-bold text-foreground tracking-tight leading-[1.1]">
          Free tools for{" "}
          <span className="text-primary">everyone</span>
        </h1>
        <p className="mt-4 text-[17px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
          39 free tools for developers, designers, students, and everyday tasks.
          All processing runs locally in your browser — no sign-up required.
        </p>
      </section>

      <AdBanner slot="HOME_TOP" format="horizontal" />

      <div className="mx-auto max-w-5xl px-5 pb-16 space-y-14">
        {sections.map(({ category, title, desc }) => {
          const tools = getToolsByCategory(category);
          if (tools.length === 0) return null;
          return (
            <section key={category}>
              <div className="mb-4">
                <h2 className="text-[22px] font-semibold text-foreground tracking-tight">{title}</h2>
                <p className="text-[14px] text-muted-foreground mt-1">{desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {tools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
              </div>
            </section>
          );
        })}
      </div>

      <AdBanner slot="HOME_BOTTOM" format="auto" />

      <section className="mx-auto max-w-3xl px-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: "🔒", title: "Private", desc: "Everything runs in your browser. Your data never leaves your device." },
            { icon: "⚡", title: "Instant", desc: "No loading, no waiting. Results appear as fast as you type." },
            { icon: "🆓", title: "Free", desc: "No accounts, no subscriptions, no limits. Just tools that work." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <span className="text-[28px]">{item.icon}</span>
              <h3 className="mt-3 text-[17px] font-semibold text-foreground tracking-tight">{item.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
