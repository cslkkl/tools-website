"use client";

import { useState, useCallback } from "react";
import { marked } from "marked";

export default function MarkdownEditorTool() {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");

  const convert = useCallback(async () => {
    if (!markdown.trim()) {
      setHtml("");
      return;
    }
    const result = await marked.parse(markdown);
    setHtml(result);
  }, [markdown]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Markdown Input
          </label>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            rows={14}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
            placeholder="# Hello World

Type your **Markdown** here..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Live Preview
          </label>
          <div
            className="w-full rounded-lg border border-border bg-muted/30 px-4 py-3 min-h-[340px] prose prose-sm max-w-none overflow-y-auto"
            dangerouslySetInnerHTML={{
              __html: html || "<span class='text-muted-foreground'>Click &quot;Preview&quot; to see the rendered output...</span>",
            }}
          />
        </div>
      </div>

      <button
        onClick={convert}
        className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Preview
      </button>
    </div>
  );
}
