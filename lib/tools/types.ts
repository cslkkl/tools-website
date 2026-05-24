export type ToolCategory =
  | "developer"
  | "text"
  | "image"
  | "security"
  | "converter"
  | "math"
  | "everyday"
  | "design"
  | "content";

export interface ToolDefinition {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ToolCategory;
  icon: string;
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
}
