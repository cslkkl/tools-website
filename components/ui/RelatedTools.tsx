import { getRelatedTools } from "@/lib/tools/registry";
import { ToolCard } from "./ToolCard";

export function RelatedTools({ slug }: { slug: string }) {
  const related = getRelatedTools(slug);

  if (related.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-bold text-foreground mb-4">
        Related Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}
