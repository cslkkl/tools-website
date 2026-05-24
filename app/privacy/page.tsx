import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Online Toolbox. Learn how we protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
        Privacy Policy
      </h1>

      <div className="prose max-w-none">
        <p>
          <strong>Last updated:</strong> May 24, 2026
        </p>

        <h2>Our Commitment to Privacy</h2>
        <p>
          Online Toolbox is designed with privacy as a core principle. All tools
          process data locally in your browser. We do not collect, store, or
          transmit any data you enter into our tools.
        </p>

        <h2>Data Processing</h2>
        <ul>
          <li>
            <strong>Tool Input Data</strong> — All text, files, and data you
            enter into any tool is processed entirely in your browser using
            client-side JavaScript. It is never sent to any server.
          </li>
          <li>
            <strong>No Server-Side Storage</strong> — We do not have a backend
            database. Everything runs in your browser.
          </li>
          <li>
            <strong>No Account Required</strong> — You don't need to create an
            account or provide any personal information to use any tool.
          </li>
        </ul>

        <h2>Cookies and Tracking</h2>
        <p>
          We do not use cookies for tracking purposes. We do not use any
          analytics services that track individual users.
        </p>

        <h2>Advertising</h2>
        <p>
          We display contextual ads through Google AdSense. Google may use
          cookies to serve ads based on prior visits to our website or other
          websites. Google's use of advertising cookies enables it and its
          partners to serve ads based on your visit to our site and/or other
          sites on the Internet.
        </p>
        <p>
          You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          .
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our website is hosted on Vercel, which may collect standard server
          logs (IP address, user agent, request time) for operational purposes.
          Please refer to{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel's Privacy Policy
          </a>{" "}
          for more information.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be
          posted on this page.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us.
        </p>
      </div>
    </div>
  );
}
