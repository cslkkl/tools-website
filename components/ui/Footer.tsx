import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-sm mb-3 text-foreground">Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/json-formatter" className="text-sm text-muted-foreground hover:text-foreground transition-colors">JSON Formatter</Link></li>
              <li><Link href="/base64-encoder" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Base64 Encoder</Link></li>
              <li><Link href="/url-encoder" className="text-sm text-muted-foreground hover:text-foreground transition-colors">URL Encoder</Link></li>
              <li><Link href="/qr-code-generator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">QR Code Generator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3 text-foreground">More Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/password-generator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Password Generator</Link></li>
              <li><Link href="/word-counter" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Word Counter</Link></li>
              <li><Link href="/text-diff" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Text Diff</Link></li>
              <li><Link href="/markdown-editor" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Markdown Editor</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3 text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm mb-3 text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Online Toolbox. All tools run locally in your browser. No data is ever uploaded.</p>
        </div>
      </div>
    </footer>
  );
}
