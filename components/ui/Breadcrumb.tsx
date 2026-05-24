import Link from "next/link";

interface BreadcrumbItem { label: string; href?: string; }
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem", position: i + 1, name: item.label,
      item: item.href ? `https://toolboxonline.online${item.href}` : undefined,
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>}
              {item.href ? <Link href={item.href} className="hover:text-foreground">{item.label}</Link>
                : <span className="text-foreground font-medium">{item.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
