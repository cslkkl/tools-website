"use client";

import { useState, useCallback } from "react";

const ENTITIES: Record<string,string> = {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};

export default function HtmlEntityTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");

  const convert = useCallback(() => {
    if (!input.trim()) { setOutput(""); return; }
    if (mode === "encode") {
      setOutput(input.replace(/[&<>"']/g, c => ENTITIES[c] || c));
    } else {
      const txt = document.createElement("textarea");
      txt.innerHTML = input; setOutput(txt.value);
    }
  }, [input, mode]);

  return (
    <div className="space-y-5">
      <div className="flex gap-1.5">
        {(["encode","decode"] as const).map(m => (
          <button key={m} onClick={()=>setMode(m)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${mode===m?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`}>
            {m.charAt(0).toUpperCase()+m.slice(1)}
          </button>
        ))}
      </div>
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">{mode==="encode"?"Text":"HTML Entities"}</label>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={6}
          className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
          placeholder={mode==="encode"?"<div class=\"hello\">World &amp; more</div>":"&lt;div class=&quot;hello&quot;&gt;"} />
      </div>
      <button onClick={convert}
        className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-85">
        {mode==="encode"?"Encode":"Decode"}
      </button>
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">Output</label>
        <textarea value={output} readOnly rows={6}
          className="w-full rounded-xl border border-border/50 bg-muted/30 px-4 py-3 text-[14px] font-mono text-foreground resize-y" />
      </div>
      {output && (
        <button onClick={()=>navigator.clipboard.writeText(output)}
          className="text-[13px] text-muted-foreground hover:text-foreground">Copy to clipboard</button>
      )}
    </div>
  );
}
