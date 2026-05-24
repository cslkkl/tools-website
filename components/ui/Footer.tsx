import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-muted-foreground">
            &copy; {new Date().getFullYear()} toolbox. All tools run locally in your browser.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-[13px] text-muted-foreground hover:text-foreground">Blog</Link>
            <Link href="/about" className="text-[13px] text-muted-foreground hover:text-foreground">About</Link>
            <Link href="/privacy" className="text-[13px] text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="text-[13px] text-muted-foreground hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
