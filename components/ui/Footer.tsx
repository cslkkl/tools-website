"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const isZh = usePathname().startsWith("/zh");
  const t = isZh
    ? { blog:"博客", about:"关于", privacy:"隐私政策", terms:"服务条款", copy:"toolbox. 所有工具均在你浏览器本地运行，数据不会上传。" }
    : { blog:"Blog", about:"About", privacy:"Privacy", terms:"Terms", copy:"toolbox. All tools run locally in your browser." };

  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-muted-foreground">
            &copy; {new Date().getFullYear()} {t.copy}
          </p>
          <div className="flex items-center gap-6">
            <Link href={isZh?"/zh/blog":"/blog"} className="text-[13px] text-muted-foreground hover:text-foreground">{t.blog}</Link>
            <Link href={isZh?"/zh/about":"/about"} className="text-[13px] text-muted-foreground hover:text-foreground">{t.about}</Link>
            <Link href={isZh?"/zh/privacy":"/privacy"} className="text-[13px] text-muted-foreground hover:text-foreground">{t.privacy}</Link>
            <Link href={isZh?"/zh/terms":"/terms"} className="text-[13px] text-muted-foreground hover:text-foreground">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
