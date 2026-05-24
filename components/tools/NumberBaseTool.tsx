"use client";

import { useState, useCallback } from "react";

export default function NumberBaseTool() {
  const [input, setInput] = useState("42");
  const [fromBase, setFromBase] = useState(10);
  const [results, setResults] = useState<Record<number,string>>({});
  const [error, setError] = useState("");

  const convert = useCallback(() => {
    setError("");
    try {
      const n = parseInt(input.trim(), fromBase);
      if (isNaN(n)) { setError("Invalid input for selected base"); setResults({}); return; }
      setResults({ 2: "0b"+n.toString(2), 8: "0o"+n.toString(8), 10: String(n), 16: "0x"+n.toString(16).toUpperCase() });
    } catch { setError("Conversion error"); setResults({}); }
  }, [input, fromBase]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex-1 min-w-[120px]">
          <label className="block text-[13px] font-medium text-foreground mb-1">Number</label>
          <input value={input} onChange={e=>setInput(e.target.value)}
            className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="42" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">From</label>
          <select value={fromBase} onChange={e=>setFromBase(+e.target.value)}
            className="rounded-xl border border-border/50 bg-background px-3 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
            <option value={2}>BIN (2)</option><option value={8}>OCT (8)</option><option value={10}>DEC (10)</option><option value={16}>HEX (16)</option>
          </select>
        </div>
        <button onClick={convert}
          className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-85">
          Convert
        </button>
      </div>
      {error && <div className="rounded-xl bg-red-50 dark:bg-red-950/50 px-4 py-3 text-[13px] text-red-600 dark:text-red-400">{error}</div>}
      {Object.keys(results).length>0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[2,8,10,16].map(b=>(
            <div key={b} className={`rounded-xl p-4 ${b===fromBase?"bg-accent ring-1 ring-primary/20":""}`}>
              <div className="text-[11px] text-muted-foreground uppercase tracking-wide mb-1">{["","","BIN","","","","","OCT","","DEC","","","","","HEX"][b]}</div>
              <div className="text-[15px] font-mono font-semibold text-foreground break-all">{results[b]}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
