"use client";

import { useState, useCallback } from "react";

const modes = ["UPPERCASE","lowercase","Title Case","Sentence case","camelCase","snake_case","kebab-case","CONSTANT_CASE"] as const;

function convert(text:string,mode:typeof modes[number]):string {
  const w=text.trim().split(/\s+/);
  switch(mode){
    case "UPPERCASE": return text.toUpperCase();
    case "lowercase": return text.toLowerCase();
    case "Title Case": return w.map(x=>x.charAt(0).toUpperCase()+x.slice(1).toLowerCase()).join(" ");
    case "Sentence case": return text.replace(/(^\w|\.\s+\w)/g,c=>c.toUpperCase()).toLowerCase();
    case "camelCase": return w.map((x,i)=>i===0?x.toLowerCase():x.charAt(0).toUpperCase()+x.slice(1).toLowerCase()).join("");
    case "snake_case": return w.map(x=>x.toLowerCase()).join("_");
    case "kebab-case": return w.map(x=>x.toLowerCase()).join("-");
    case "CONSTANT_CASE": return w.map(x=>x.toUpperCase()).join("_");
  }
}

export default function CaseConverterTool() {
  const [input, setInput] = useState("");

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">Enter text</label>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={4}
          className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
          placeholder="Type or paste your text here..." />
      </div>
      {input.trim() && (
        <div className="space-y-3">
          {modes.map(m=>{
            const r=convert(input,m);
            return (
              <div key={m} className="rounded-xl bg-muted/20 p-3 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wide mb-0.5">{m}</div>
                  <div className="text-[14px] font-mono text-foreground break-all">{r}</div>
                </div>
                <button onClick={()=>navigator.clipboard.writeText(r)}
                  className="flex-shrink-0 text-[12px] text-muted-foreground hover:text-foreground px-2 py-1">Copy</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
