"use client";

import { useState, useMemo } from "react";

export default function TextToSlugTool() {
  const [input,setInput]=useState("");
  const slug=useMemo(()=>input.trim().toLowerCase().replace(/[^\w\s-]/g,"").replace(/[\s_]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),[input]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">Text</label>
        <input value={input} onChange={e=>setInput(e.target.value)}
          className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
          placeholder="Enter a title or phrase..." />
      </div>
      {slug&&(
        <div className="rounded-xl bg-muted/30 p-4 flex items-center justify-between gap-3">
          <div className="text-[18px] font-mono font-semibold text-foreground break-all">{slug}</div>
          <button onClick={()=>navigator.clipboard.writeText(slug)}
            className="flex-shrink-0 text-[13px] text-muted-foreground hover:text-foreground px-2 py-1">Copy</button>
        </div>
      )}
    </div>
  );
}
