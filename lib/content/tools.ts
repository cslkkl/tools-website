import fs from "fs";
import path from "path";
import matter from "gray-matter";

const toolsContentDir = path.join(process.cwd(), "content", "tools");

export interface ToolContent {
  frontmatter: {
    title: string;
    description: string;
    keywords: string[];
  };
  above: string;
  below: string;
}

export function getToolContent(slug: string): ToolContent | null {
  try {
    const filePath = path.join(toolsContentDir, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const source = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(source);

    const splitMarker = "<!--tool-->";
    const markerIndex = content.indexOf(splitMarker);

    if (markerIndex === -1) {
      return {
        frontmatter: data as ToolContent["frontmatter"],
        above: content.trim(),
        below: "",
      };
    }

    return {
      frontmatter: data as ToolContent["frontmatter"],
      above: content.slice(0, markerIndex).trim(),
      below: content.slice(markerIndex + splitMarker.length).trim(),
    };
  } catch {
    return null;
  }
}

export function getToolContentZh(slug: string): ToolContent | null {
  try {
    // Try Chinese version first, fall back to English
    const zhPath = path.join(toolsContentDir, `${slug}-zh.mdx`);
    const enPath = path.join(toolsContentDir, `${slug}.mdx`);
    const filePath = fs.existsSync(zhPath) ? zhPath : enPath;
    if (!fs.existsSync(filePath)) return null;

    const source = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(source);
    const splitMarker = "<!--tool-->";
    const markerIndex = content.indexOf(splitMarker);
    if (markerIndex === -1) return { frontmatter: data as ToolContent["frontmatter"], above: content.trim(), below: "" };
    return { frontmatter: data as ToolContent["frontmatter"], above: content.slice(0, markerIndex).trim(), below: content.slice(markerIndex + splitMarker.length).trim() };
  } catch { return null; }
}

export function getAllToolSlugs(): string[] {
  try {
    const files = fs.readdirSync(toolsContentDir);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(".mdx", ""));
  } catch {
    return [];
  }
}
