import { WebsiteJsonLd } from "@/components/seo/JsonLd";
import { ToolGrid } from "@/components/ui/ToolGrid";
import { AdBanner } from "@/components/ui/AdBanner";

export default function HomePage() {
  return (
    <>
      <WebsiteJsonLd />

      <section className="mx-auto max-w-3xl px-5 pt-20 pb-12 text-center">
        <h1 className="text-[40px] sm:text-[56px] font-bold text-foreground tracking-tight leading-[1.1]">
          Free tools for{" "}
          <span className="text-primary">developers</span>
        </h1>
        <p className="mt-4 text-[17px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Fast, private, and no sign-up required. Every tool runs locally in your browser.
        </p>
      </section>

      <AdBanner slot="HOME_TOP" format="horizontal" />

      <section className="mx-auto max-w-5xl px-5 pb-12">
        <ToolGrid />
      </section>

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
