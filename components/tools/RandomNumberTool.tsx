"use client";

import { useState, useCallback } from "react";

export default function RandomNumberTool() {
  const [min,setMin]=useState(1); const [max,setMax]=useState(100);
  const [count,setCount]=useState(1); const [decimal,setDecimal]=useState(false);
  const [results,setResults]=useState<number[]>([]);

  const generate=useCallback(()=>{
    const arr:number[]=[];
    for(let i=0;i<count;i++){
      const r=Math.random()*(max-min)+min;
      arr.push(decimal?parseFloat(r.toFixed(4)):Math.floor(r));
    }
    setResults(arr);
  },[min,max,count,decimal]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Min</label>
          <input type="number" value={min} onChange={e=>setMin(+e.target.value)}
            className="w-24 rounded-xl border border-border/50 bg-background px-3 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Max</label>
          <input type="number" value={max} onChange={e=>setMax(+e.target.value)}
            className="w-24 rounded-xl border border-border/50 bg-background px-3 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Count</label>
          <input type="number" value={count} onChange={e=>setCount(+e.target.value)} min={1} max={100}
            className="w-20 rounded-xl border border-border/50 bg-background px-3 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <label className="flex items-center gap-1.5 pb-1 text-[13px] text-foreground">
          <input type="checkbox" checked={decimal} onChange={e=>setDecimal(e.target.checked)} className="rounded" /> Decimals
        </label>
      </div>
      <button onClick={generate}
        className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-85">Generate</button>
      {results.length>0&&(
        <div className="flex flex-wrap gap-2">
          {results.map((n,i)=>(
            <div key={i} className="rounded-xl bg-accent/30 px-5 py-3 text-[22px] font-bold font-mono text-foreground tracking-tight">{n}</div>
          ))}
        </div>
      )}
    </div>
  );
}
