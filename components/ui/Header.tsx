"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const isZh = pathname.startsWith("/zh");
  const enPath = pathname.replace(/^\/zh/, "") || "/";
  const toZh = isZh ? "/" + (pathname.slice(4) || "/") : "/zh" + pathname;

  const t = isZh
    ? { home: "首页", blog: "博客", about: "关于" }
    : { home: "Home", blog: "Blog", about: "About" };

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="mx-auto max-w-5xl px-5 h-13 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={isZh ? "/zh" : "/"} className="text-[17px] font-semibold text-foreground tracking-tight hover:opacity-70">
            toolbox
          </Link>
          <nav className="hidden sm:flex items-center gap-6">
            <Link href={isZh ? "/zh" : "/"} className={cn("text-[14px] transition-colors", pathname==="/"||pathname==="/zh"?"text-foreground":"text-muted-foreground hover:text-foreground")}>{t.home}</Link>
            <Link href={isZh ? "/zh/blog" : "/blog"} className={cn("text-[14px] transition-colors", enPath.startsWith("/blog")?"text-foreground":"text-muted-foreground hover:text-foreground")}>{t.blog}</Link>
            <Link href={isZh ? "/zh/about" : "/about"} className={cn("text-[14px] transition-colors", enPath.startsWith("/about")?"text-foreground":"text-muted-foreground hover:text-foreground")}>{t.about}</Link>
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
