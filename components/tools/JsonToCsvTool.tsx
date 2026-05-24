"use client";

import { useState, useCallback } from "react";

export default function JsonToCsvTool() {
  const [input,setInput]=useState(""); const [output,setOutput]=useState(""); const [error,setError]=useState("");

  const convert=useCallback(()=>{
    setError("");setOutput("");
    if(!input.trim()) return;
    try{const data=JSON.parse(input);const arr=Array.isArray(data)?data:[data];
      if(arr.length===0){setError("Empty array");return;}
      const keys=Object.keys(arr[0]);
      const csv=[keys.join(","),...arr.map((row:Record<string,unknown>)=>keys.map(k=>{const v=row[k];if(v===null||v===undefined)return"";const s=String(v);return s.includes(",")||s.includes('"')||s.includes("\n")?`"${s.replace(/"/g,'""')}"`:s;}).join(","))].join("\n");
      setOutput(csv);
    }catch(e){setError(`Invalid JSON: ${(e as Error).message}`);}
  },[input]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">JSON Array</label>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={8}
          className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
          placeholder='[{"name":"Alice","age":30},{"name":"Bob","age":25}]' />
      </div>
      <button onClick={convert} className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-85">Convert to CSV</button>
      {error && <div className="rounded-xl bg-red-50 dark:bg-red-950/50 px-4 py-3 text-[13px] text-red-600 dark:text-red-400">{error}</div>}
      {output && (
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1.5">CSV Output</label>
          <pre className="rounded-xl bg-muted/30 p-5 text-[13px] font-mono text-foreground whitespace-pre overflow-x-auto">{output}</pre>
          <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 text-[12px] text-muted-foreground hover:text-foreground">Copy</button>
        </div>
      )}
    </div>
  );
}
