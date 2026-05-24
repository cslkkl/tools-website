import Link from "next/link";
import type { ToolDefinition } from "@/lib/tools/types";

export function ToolCard({ tool }: { tool: ToolDefinition }) {
  return (
    <Link
      href={`/${tool.slug}`}
      className="group block rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border/30 hover:shadow-md hover:ring-border/60 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent flex items-center justify-center text-[15px] font-semibold text-accent-foreground">
          {tool.icon}
        </span>
        <div className="min-w-0 pt-0.5">
          <h3 className="text-[15px] font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
            {tool.name}
          </h3>
          <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed line-clamp-2">
            {tool.shortDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
