"use client";

import { useState, useCallback } from "react";

function simpleYamlToJson(yaml:string){
  const obj:Record<string,unknown>={};
  const lines=yaml.split("\n");let current:Record<string,unknown>=obj;
  for(const line of lines){
    const trimmed=line.trim();
    if(!trimmed||trimmed.startsWith("#"))continue;
    const m=trimmed.match(/^([\w-]+)\s*:\s*(.*)$/);
    if(m){
      const key=m[1];let val:string|number|boolean=m[2];
      if(val==="true")val=true;else if(val==="false")val=false;
      else if(val==="null"||val==="~")val=null as unknown as string;
      else if(/^\d+$/.test(val))val=Number(val);
      else if(/^["'].*["']$/.test(val))val=val.slice(1,-1);
      (current as Record<string,unknown>)[key]=val;
    }
  }
  return obj;
}

export default function YamlToJsonTool() {
  const [input,setInput]=useState(""); const [output,setOutput]=useState(""); const [error,setError]=useState("");
  const [mode,setMode]=useState<"y2j"|"j2y">("y2j");

  const convert=useCallback(()=>{
    setError("");setOutput("");
    if(!input.trim())return;
    if(mode==="y2j"){
      try{setOutput(JSON.stringify(simpleYamlToJson(input),null,2));}catch(e){setError((e as Error).message);}
    } else {
      try{const o=JSON.parse(input);setOutput(Object.entries(o).map(([k,v])=>`${k}: ${typeof v==="string"?v:JSON.stringify(v)}`).join("\n"));}catch(e){setError((e as Error).message);}
    }
  },[input,mode]);

  return (
    <div className="space-y-4">
      <div className="flex gap-1.5">
        {(["y2j","j2y"] as const).map(m=>(
          <button key={m} onClick={()=>setMode(m)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${mode===m?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`}>
            {m==="y2j"?"YAML → JSON":"JSON → YAML"}
          </button>
        ))}
      </div>
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">{mode==="y2j"?"YAML":"JSON"}</label>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={8}
          className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
          placeholder={mode==="y2j"?"name: John\nage: 30\n":"{\"name\":\"John\",\"age\":30}"} />
      </div>
      <button onClick={convert} className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-85">Convert</button>
      {error&&<div className="rounded-xl bg-red-50 dark:bg-red-950/50 px-4 py-3 text-[13px] text-red-600 dark:text-red-400">{error}</div>}
      {output&&(
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1.5">Output</label>
          <pre className="rounded-xl bg-muted/30 p-5 text-[13px] font-mono text-foreground whitespace-pre overflow-x-auto">{output}</pre>
          <button onClick={()=>navigator.clipboard.writeText(output)} className="mt-2 text-[12px] text-muted-foreground hover:text-foreground">Copy</button>
        </div>
      )}
    </div>
  );
}
