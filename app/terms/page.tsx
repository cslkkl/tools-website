import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Online Toolbox.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
        Terms of Service
      </h1>

      <div className="prose max-w-none">
        <p>
          <strong>Last updated:</strong> May 24, 2026
        </p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using Online Toolbox, you agree to be bound by these
          Terms of Service. If you do not agree with any part of these terms,
          please do not use our website.
        </p>

        <h2>Description of Service</h2>
        <p>
          Online Toolbox provides free online tools that process data
          client-side in your browser. The tools are provided "as is" without
          warranty of any kind.
        </p>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the tools for any illegal or unauthorized purpose</li>
          <li>
            Attempt to disrupt or overload our services through automated means
          </li>
          <li>
            Upload or process content that is illegal, harmful, or violates
            others' rights
          </li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          The website, its source code, and its content are protected by
          applicable intellectual property laws. You may not copy, modify, or
          distribute any part of the website without permission.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          The tools are provided on an "as is" and "as available" basis. We make
          no warranties, expressed or implied, regarding the accuracy,
          reliability, or availability of the tools.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event shall Online Toolbox be liable for any indirect,
          incidental, special, consequential, or punitive damages arising out of
          your use of the tools.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use
          of the website after changes constitutes acceptance of the new terms.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about these Terms of Service, please contact us.
        </p>
      </div>
    </div>
  );
}
