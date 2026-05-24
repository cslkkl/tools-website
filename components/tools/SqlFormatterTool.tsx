"use client";

import { useState, useCallback } from "react";

function formatSQL(sql:string):string{
  const keywords=["SELECT","FROM","WHERE","AND","OR","INSERT","INTO","VALUES","UPDATE","SET","DELETE","CREATE","TABLE","ALTER","ADD","DROP","INDEX","JOIN","LEFT","RIGHT","INNER","OUTER","ON","AS","ORDER BY","GROUP BY","HAVING","LIMIT","OFFSET","UNION","CASE","WHEN","THEN","ELSE","END","IN","BETWEEN","LIKE","IS","NULL","NOT","DISTINCT","COUNT","SUM","AVG","MAX","MIN","ASC","DESC","BY"];
  let r=sql.trim().replace(/\s+/g," ");
  keywords.forEach(k=>{
    const re=new RegExp(`\\b(${k})\\b`,"gi");
    r=r.replace(re,"\n$1");
  });
  return r.replace(/\n\s*\n/g,"\n").replace(/^\n/,"").trim().split("\n").map((l,i)=>l.trim()+(i===0?"":"")).join("\n");
}

export default function SqlFormatterTool() {
  const [input,setInput]=useState(""); const [output,setOutput]=useState("");

  const fmt=useCallback(()=>{
    if(!input.trim()){setOutput("");return;}
    setOutput(formatSQL(input));
  },[input]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">SQL Query</label>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={8}
          className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
          placeholder="SELECT id,name,email FROM users WHERE active=1 ORDER BY name" />
      </div>
      <button onClick={fmt} className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-85">Format</button>
      {output && (
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1.5">Formatted SQL</label>
          <pre className="rounded-xl bg-muted/30 p-5 text-[14px] font-mono text-foreground whitespace-pre-wrap overflow-x-auto">{output}</pre>
          <button onClick={()=>navigator.clipboard.writeText(output)}
            className="mt-2 text-[12px] text-muted-foreground hover:text-foreground">Copy to clipboard</button>
        </div>
      )}
    </div>
  );
}
