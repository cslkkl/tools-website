import { getAllTools, getToolsByCategory } from "@/lib/tools/registry";
import type { ToolCategory } from "@/lib/tools/types";
import { ToolCard } from "./ToolCard";

interface ToolGridProps { category?: ToolCategory }

export function ToolGrid({ category }: ToolGridProps) {
  const tools = category ? getToolsByCategory(category) : getAllTools();
  const liveTools = tools.filter(t => !("comingSoon" in t && t.comingSoon));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {liveTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
    </div>
  );
}
