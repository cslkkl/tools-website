import { WebsiteJsonLd } from "@/components/seo/JsonLd";
import { ToolGrid } from "@/components/ui/ToolGrid";
import { AdBanner } from "@/components/ui/AdBanner";

export default function HomePage() {
  return (
    <>
      <WebsiteJsonLd />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
          Free Online Tools for{" "}
          <span className="text-primary">Developers</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Fast, free, and private online tools. JSON formatter, Base64 encoder,
          QR code generator, password generator, and more. All processing runs
          locally in your browser — your data never leaves your device.
        </p>
      </section>

      <AdBanner slot="HOME_TOP" format="horizontal" />

      {/* All Tools */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          All Tools
        </h2>
        <ToolGrid />
      </section>

      <AdBanner slot="HOME_BOTTOM" format="auto" />

      {/* Why Use Section */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-bold text-foreground text-center mb-10">
          Why Use Online Toolbox?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <span className="text-3xl">&#x1f510;</span>
            <h3 className="mt-3 font-semibold text-foreground">100% Private</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              All tools run locally in your browser. No data is ever uploaded to
              any server.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <span className="text-3xl">&#x26a1;</span>
            <h3 className="mt-3 font-semibold text-foreground">Fast & Free</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              No sign-up, no registration. Instant results with no waiting time.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <span className="text-3xl">&#x1f4f1;</span>
            <h3 className="mt-3 font-semibold text-foreground">Works Everywhere</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fully responsive. Works on desktop, tablet, and mobile browsers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
