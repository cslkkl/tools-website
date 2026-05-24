"use client";

import { useState, useCallback } from "react";

const WORDS = ["lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","sed","do","eiusmod","tempor","incididunt","ut","labore","et","dolore","magna","aliqua","enim","ad","minim","veniam","quis","nostrud","exercitation","ullamco","laboris","nisi","ut","aliquip","ex","ea","commodo","consequat","duis","aute","irure","dolor","in","reprehenderit","in","voluptate","velit","esse","cillum","dolore","eu","fugiat","nulla","pariatur","excepteur","sint","occaecat","cupidatat","non","proident","sunt","in","culpa","qui","officia","deserunt","mollit","anim","id","est","laborum"];

export default function LoremIpsumTool() {
  const [mode, setMode] = useState<"paragraphs"|"words">("paragraphs");
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");

  const generate = useCallback(() => {
    if (mode === "words") {
      const result: string[] = [];
      for (let i = 0; i < count; i++) result.push(WORDS[i % WORDS.length]);
      setOutput(result.join(" ") + ".");
    } else {
      const paragraphs: string[] = [];
      for (let p = 0; p < count; p++) {
        const wc = 40 + Math.floor(Math.random() * 60);
        const words: string[] = [];
        for (let i = 0; i < wc; i++) words.push(WORDS[Math.floor(Math.random() * WORDS.length)]);
        const first = words[0]; words[0] = first.charAt(0).toUpperCase() + first.slice(1);
        paragraphs.push(words.join(" ") + ".");
      }
      setOutput(paragraphs.join("\n\n"));
    }
  }, [mode, count]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex gap-1.5">
          {(["paragraphs","words"] as const).map(m => (
            <button key={m} onClick={()=>setMode(m)}
              className={`px-3 py-1 rounded-full text-[13px] font-medium transition-colors ${mode===m?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`}>
              {m.charAt(0).toUpperCase()+m.slice(1)}
            </button>
          ))}
        </div>
        <select value={count} onChange={e=>setCount(+e.target.value)}
          className="rounded-xl border border-border/50 bg-background px-3 py-1.5 text-[13px] text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
          {[1,3,5,10,20,50].map(n=><option key={n} value={n}>{n}</option>)}
        </select>
      </div>
      <button onClick={generate}
        className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-85 transition-opacity">
        Generate
      </button>
      {output && (
        <div className="rounded-xl bg-muted/30 p-5 text-[14px] text-foreground leading-relaxed whitespace-pre-wrap">{output}</div>
      )}
      {output && (
        <button onClick={()=>navigator.clipboard.writeText(output)}
          className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
          Copy to clipboard
        </button>
      )}
    </div>
  );
}
