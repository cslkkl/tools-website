"use client";

import { useState, useCallback } from "react";

export default function CssMinifierTool() {
  const [input,setInput]=useState(""); const [output,setOutput]=useState(""); const [stats,setStats]=useState<{orig:number;min:number}|null>(null);

  const minify=useCallback(()=>{
    if(!input.trim()){setOutput("");setStats(null);return;}
    let r=input.replace(/\/\*[\s\S]*?\*\//g,"").replace(/\s+/g," ").replace(/\s*([{}:;,])\s*/g,"$1").replace(/;}/g,"}").trim();
    setOutput(r);setStats({orig:input.length,min:r.length});
  },[input]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">CSS Code</label>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={8}
          className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
          placeholder="body {\n  margin: 0;\n  padding: 0;\n}" />
      </div>
      <button onClick={minify} className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-85">Minify</button>
      {stats&&(
        <div className="flex gap-4 text-[13px] text-muted-foreground">
          <span>Original: <strong>{stats.orig}</strong> bytes</span>
          <span>Minified: <strong>{stats.min}</strong> bytes</span>
          <span className="text-green-600 dark:text-green-400">Saved: <strong>{((1-stats.min/stats.orig)*100).toFixed(1)}%</strong></span>
        </div>
      )}
      {output&&(
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1.5">Minified CSS</label>
          <pre className="rounded-xl bg-muted/30 p-5 text-[13px] font-mono text-foreground whitespace-pre-wrap break-all">{output}</pre>
          <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 text-[12px] text-muted-foreground hover:text-foreground">Copy</button>
        </div>
      )}
    </div>
  );
}
