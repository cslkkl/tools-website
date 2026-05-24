import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Online Toolbox",
  description:
    "Online Toolbox provides free, privacy-first online tools for developers. All tools run locally in your browser.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
        About Online Toolbox
      </h1>

      <div className="prose max-w-none">
        <p>
          Online Toolbox is a collection of free, privacy-first online tools for
          developers and everyday users. We believe that useful tools should be
          free, fast, and respect your privacy.
        </p>

        <h2>Our Mission</h2>
        <p>
          To provide the best collection of free online tools that work entirely
          in your browser. No data collection, no ads that track you, no
          registration walls — just tools that work.
        </p>

        <h2>Why We Built This</h2>
        <p>
          As developers, we found ourselves repeatedly searching for simple
          tools: a JSON formatter, a Base64 encoder, a UUID generator. Many
          existing options were slow, ad-heavy, or sent data to servers. We
          built Online Toolbox to solve our own problem, and we're sharing it
          with everyone.
        </p>

        <h2>Our Principles</h2>
        <ul>
          <li>
            <strong>Privacy First</strong> — All tools process data locally in
            your browser using JavaScript. Your data never leaves your device.
          </li>
          <li>
            <strong>Free Forever</strong> — All tools are free to use. We
            support the site with minimal, non-tracking display ads.
          </li>
          <li>
            <strong>Fast & Simple</strong> — No bloat, no account creation, no
            unnecessary features. Just tools that work.
          </li>
          <li>
            <strong>Open Web</strong> — We use standard web technologies and
            support all modern browsers.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          Have a tool suggestion or found a bug? We'd love to hear from you.
          Reach out via the contact information provided when available.
        </p>
      </div>
    </div>
  );
}
