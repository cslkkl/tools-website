"use client";

import { useState, useCallback } from "react";

export default function JsonFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);
  const [mode, setMode] = useState<"format" | "minify" | "validate">("format");

  const handleProcess = useCallback(() => {
    setError("");
    if (!input.trim()) {
      setOutput("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      if (mode === "minify") {
        setOutput(JSON.stringify(parsed));
      } else if (mode === "validate") {
        setOutput("Valid JSON! ✓\n\n" + JSON.stringify(parsed, null, indent));
      } else {
        setOutput(JSON.stringify(parsed, null, indent));
      }
    } catch (e) {
      if (mode === "validate") {
        setError(`Invalid JSON: ${(e as Error).message}`);
      } else {
        setError(`Invalid JSON: ${(e as Error).message}`);
      }
      setOutput("");
    }
  }, [input, mode, indent]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setMode("format")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            mode === "format"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-border"
          }`}
        >
          Format
        </button>
        <button
          onClick={() => setMode("minify")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            mode === "minify"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-border"
          }`}
        >
          Minify
        </button>
        <button
          onClick={() => setMode("validate")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            mode === "validate"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-border"
          }`}
        >
          Validate
        </button>

        {mode !== "minify" && (
          <select
            value={indent}
            onChange={(e) => setIndent(Number(e.target.value))}
            className="rounded-lg border border-border bg-background px-2 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value={2}>2 spaces</option>
            <option value={4}>4 spaces</option>
            <option value={0}>Tab</option>
          </select>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Input JSON
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={8}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
          placeholder='{"hello": "world"}'
        />
      </div>

      <button
        onClick={handleProcess}
        className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
      >
        {mode === "format" ? "Format" : mode === "minify" ? "Minify" : "Validate"}
      </button>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Output
        </label>
        <textarea
          value={output}
          readOnly
          rows={8}
          className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm font-mono text-foreground resize-y"
          placeholder="Result..."
        />
      </div>

      {output && mode !== "validate" && (
        <button
          onClick={() => navigator.clipboard.writeText(output)}
          className="px-4 py-1.5 rounded-md border border-border text-sm text-muted-foreground hover:bg-muted transition-colors"
        >
          Copy to Clipboard
        </button>
      )}
    </div>
  );
}
