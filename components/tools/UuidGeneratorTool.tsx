"use client";

import { useState, useCallback } from "react";

export default function UuidGeneratorTool() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(1);
  const [uppercase, setUppercase] = useState(false);

  const generate = useCallback(() => {
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      const uuid = crypto.randomUUID();
      result.push(uppercase ? uuid.toUpperCase() : uuid);
    }
    setUuids(result);
  }, [count, uppercase]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-sm text-foreground">Count:</label>
          <select
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            {[1, 5, 10, 25, 50].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <label className="flex items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
            className="rounded border-border"
          />
          Uppercase
        </label>
      </div>

      <button
        onClick={generate}
        className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Generate
      </button>

      {uuids.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Generated UUIDs
          </label>
          <div className="rounded-lg border border-border bg-muted/50 p-3 space-y-1">
            {uuids.map((uuid, i) => (
              <div
                key={i}
                className="font-mono text-sm text-foreground py-1 px-2 rounded hover:bg-muted cursor-pointer transition-colors"
                onClick={() => navigator.clipboard.writeText(uuid)}
                title="Click to copy"
              >
                {uuid}
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Click any UUID to copy it to clipboard.
          </p>
        </div>
      )}
    </div>
  );
}
