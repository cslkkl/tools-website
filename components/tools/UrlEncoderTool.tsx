"use client";

import { useState, useCallback } from "react";

export default function UrlEncoderTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const handleProcess = useCallback(() => {
    if (!input.trim()) {
      setOutput("");
      return;
    }
    try {
      if (mode === "encode") {
        setOutput(encodeURIComponent(input));
      } else {
        setOutput(decodeURIComponent(input.trim()));
      }
    } catch {
      setOutput("Error: Invalid URL-encoded string.");
    }
  }, [input, mode]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setMode("encode")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            mode === "encode"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-border"
          }`}
        >
          Encode
        </button>
        <button
          onClick={() => setMode("decode")}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
            mode === "decode"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-border"
          }`}
        >
          Decode
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          {mode === "encode" ? "Text to URL-Encode" : "URL to Decode"}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={6}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
          placeholder={
            mode === "encode"
              ? "Enter text or URL to encode..."
              : "Enter URL-encoded string to decode..."
          }
        />
      </div>

      <button
        onClick={handleProcess}
        className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
      >
        {mode === "encode" ? "Encode" : "Decode"}
      </button>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          {mode === "encode" ? "URL-Encoded Output" : "Decoded Text"}
        </label>
        <textarea
          value={output}
          readOnly
          rows={6}
          className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm font-mono text-foreground resize-y"
          placeholder={mode === "encode" ? "Encoded result..." : "Decoded result..."}
        />
      </div>

      {output && (
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
