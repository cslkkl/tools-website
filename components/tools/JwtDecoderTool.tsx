"use client";

import { useState, useCallback } from "react";

export default function JwtDecoderTool() {
  const [input, setInput] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState("");

  const decode = useCallback(() => {
    setError(""); setHeader(""); setPayload("");
    if (!input.trim()) return;
    try {
      const parts = input.trim().split(".");
      if (parts.length !== 3) throw new Error("JWT must have 3 parts separated by dots");
      const decodePart = (str: string) => {
        const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
        return JSON.parse(atob(base64.padEnd(base64.length + (4 - (base64.length % 4)) % 4, "=")));
      };
      setHeader(JSON.stringify(decodePart(parts[0]), null, 2));
      setPayload(JSON.stringify(decodePart(parts[1]), null, 2));
    } catch (e) {
      setError(`Invalid JWT: ${(e as Error).message}`);
    }
  }, [input]);

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">JWT Token</label>
        <textarea value={input} onChange={e => setInput(e.target.value)} rows={4}
          className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
          placeholder="eyJhbGciOiJIUzI1NiIs..."
        />
      </div>
      <button onClick={decode}
        className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-85 transition-opacity">
        Decode
      </button>
      {error && <div className="rounded-xl bg-red-50 dark:bg-red-950/50 px-4 py-3 text-[13px] text-red-600 dark:text-red-400">{error}</div>}
      {header && (
        <div>
          <label className="block text-[13px] font-semibold text-foreground mb-1.5">Header</label>
          <pre className="rounded-xl bg-muted/50 p-4 text-[13px] font-mono text-foreground overflow-x-auto">{header}</pre>
        </div>
      )}
      {payload && (
        <div>
          <label className="block text-[13px] font-semibold text-foreground mb-1.5">Payload</label>
          <pre className="rounded-xl bg-muted/50 p-4 text-[13px] font-mono text-foreground overflow-x-auto">{payload}</pre>
        </div>
      )}
    </div>
  );
}
