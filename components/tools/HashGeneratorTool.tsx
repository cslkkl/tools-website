"use client";

import { useState, useCallback } from "react";

type Algo = "SHA-1"|"SHA-256"|"SHA-384"|"SHA-512"|"MD5";

export default function HashGeneratorTool() {
  const [input, setInput] = useState("");
  const [algo, setAlgo] = useState<Algo>("SHA-256");
  const [hash, setHash] = useState("");

  const generate = useCallback(async () => {
    if (!input) { setHash(""); return; }
    const enc = new TextEncoder().encode(input);
    if (algo === "MD5") {
      setHash("MD5 requires SubtleCrypto (not available in basic mode). Use a different algorithm.");
      return;
    }
    try {
      const buf = await crypto.subtle.digest(algo, enc);
      const arr = Array.from(new Uint8Array(buf));
      setHash(arr.map(b=>b.toString(16).padStart(2,"0")).join(""));
    } catch { setHash("Error generating hash."); }
  }, [input, algo]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        {(["SHA-256","SHA-1","SHA-384","SHA-512","MD5"] as Algo[]).map(a=>(
          <button key={a} onClick={()=>setAlgo(a)}
            className={`px-3 py-1 rounded-full text-[13px] font-medium transition-colors ${algo===a?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`}>
            {a}
          </button>
        ))}
      </div>
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">Input Text</label>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={4}
          className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
          placeholder="Enter text to hash..." />
      </div>
      <button onClick={generate}
        className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-85">
        Generate Hash
      </button>
      {hash && (
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">{algo}</label>
          <div className="rounded-xl bg-muted/30 p-4 text-[13px] font-mono text-foreground break-all">{hash}</div>
          <button onClick={()=>navigator.clipboard.writeText(hash)}
            className="mt-2 text-[12px] text-muted-foreground hover:text-foreground">Copy to clipboard</button>
        </div>
      )}
    </div>
  );
}
