import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogContentDir = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    author: string;
  };
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  try {
    const files = fs.readdirSync(blogContentDir);
    const posts = files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => {
        const source = fs.readFileSync(path.join(blogContentDir, f), "utf-8");
        const { content, data } = matter(source);
        return {
          slug: f.replace(".mdx", ""),
          frontmatter: data as BlogPost["frontmatter"],
          content,
        };
      })
      .sort(
        (a, b) =>
          new Date(b.frontmatter.date).getTime() -
          new Date(a.frontmatter.date).getTime()
      );
    return posts;
  } catch {
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = path.join(blogContentDir, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;
    const source = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(source);
    return {
      slug,
      frontmatter: data as BlogPost["frontmatter"],
      content,
    };
  } catch {
    return null;
  }
}

export function getAllBlogSlugs(): string[] {
  try {
    const files = fs.readdirSync(blogContentDir);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(".mdx", ""));
  } catch {
    return [];
  }
}
