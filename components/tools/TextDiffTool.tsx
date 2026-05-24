"use client";

import { useState, useCallback } from "react";
import { diffLines, Change } from "diff";

export default function TextDiffTool() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [result, setResult] = useState<Change[]>([]);
  const [stats, setStats] = useState({ added: 0, removed: 0, unchanged: 0 });

  const compare = useCallback(() => {
    const changes = diffLines(text1, text2);
    setResult(changes);

    let added = 0;
    let removed = 0;
    let unchanged = 0;
    for (const change of changes) {
      const lines = change.value.split("\n").filter((l) => l !== "").length;
      if (change.added) added += lines;
      else if (change.removed) removed += lines;
      else unchanged += lines;
    }
    setStats({ added, removed, unchanged });
  }, [text1, text2]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Original Text
          </label>
          <textarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            rows={10}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
            placeholder="Paste original text..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Modified Text
          </label>
          <textarea
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            rows={10}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
            placeholder="Paste modified text..."
          />
        </div>
      </div>

      <button
        onClick={compare}
        className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Compare
      </button>

      {result.length > 0 && (
        <>
          <div className="flex gap-4 text-sm">
            <span className="text-green-600 dark:text-green-400">
              +{stats.added} added
            </span>
            <span className="text-red-600 dark:text-red-400">
              -{stats.removed} removed
            </span>
            <span className="text-muted-foreground">
              {stats.unchanged} unchanged
            </span>
          </div>

          <div className="rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm leading-relaxed overflow-x-auto max-h-96 overflow-y-auto">
            {result.map((change, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap ${
                  change.added
                    ? "bg-green-100 dark:bg-green-950 text-green-900 dark:text-green-100"
                    : change.removed
                    ? "bg-red-100 dark:bg-red-950 text-red-900 dark:text-red-100"
                    : ""
                }`}
              >
                <span className="select-none mr-2 text-muted-foreground">
                  {change.added ? "+" : change.removed ? "-" : " "}
                </span>
                {change.value}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
