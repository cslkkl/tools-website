"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const isZh = pathname.startsWith("/zh");
  const enPath = pathname.replace(/^\/zh/, "") || "/";
  const noZh = ["/blog","/about","/privacy","/terms"].some(p => enPath === p || enPath.startsWith(p + "/"));
  const toZh = noZh ? "/zh" : isZh ? "/" + pathname.slice(4) : "/zh" + pathname;

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="mx-auto max-w-5xl px-5 h-13 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={isZh ? "/zh" : "/"} className="text-[17px] font-semibold text-foreground tracking-tight hover:opacity-70">
            toolbox
          </Link>
          <nav className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={cn("text-[14px] transition-colors",
                  pathname.replace("/zh","") === link.href || (link.href === "/" && (pathname === "/" || pathname === "/zh"))
                    ? "text-foreground" : "text-muted-foreground hover:text-foreground")}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link href={toZh || "/zh"} className="text-[13px] text-muted-foreground hover:text-foreground px-2 py-1 rounded-full hover:bg-muted/50 transition-all">
            {isZh ? "EN" : "中文"}
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
