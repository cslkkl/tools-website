"use client";

import { useState, useMemo } from "react";

export default function PercentageCalculatorTool() {
  const [tab, setTab] = useState<0|1|2>(0);
  const [v1, setV1] = useState(""); const [v2, setV2] = useState("");

  type Result={label:string;value:string}|null;
  const result = useMemo(():Result=>{
    const a=parseFloat(v1); const b=parseFloat(v2);
    if(isNaN(a)||isNaN(b)) return null;
    if(tab===0) return {label:`${a}% of ${b}`,value:String(a/100*b)};
    if(tab===1) return {label:`${v1} is what % of ${v2}`,value:`${(a/b*100).toFixed(2)}%`};
    if(tab===2) {
      const inc=((b-a)/a*100);
      return {label:`% change from ${v1} to ${v2}`,value:`${inc>0?"+"+inc.toFixed(2):inc.toFixed(2)}%`};
    }
    return null;
  },[tab,v1,v2]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-1.5">
        {(["% of Number","Is What %","% Change"] as const).map((t,i)=>{
          return <button key={t} onClick={()=>setTab(i as 0|1|2)}
            className={`px-3 py-1 rounded-full text-[13px] font-medium transition-colors ${tab===i?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`}>
            {t}
          </button>;
        })}
      </div>
      <div className="flex flex-wrap items-center gap-3 text-[14px] text-foreground">
        {tab===0&&<><input value={v1} onChange={e=>setV1(e.target.value)} className="w-24 rounded-xl border border-border/50 bg-background px-3 py-2.5 text-center font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="%" /><span>% of</span><input value={v2} onChange={e=>setV2(e.target.value)} className="w-24 rounded-xl border border-border/50 bg-background px-3 py-2.5 text-center font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Num" /></>}
        {tab===1&&<><input value={v1} onChange={e=>setV1(e.target.value)} className="w-24 rounded-xl border border-border/50 bg-background px-3 py-2.5 text-center font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Part" /><span>is what % of</span><input value={v2} onChange={e=>setV2(e.target.value)} className="w-24 rounded-xl border border-border/50 bg-background px-3 py-2.5 text-center font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Whole" /></>}
        {tab===2&&<><input value={v1} onChange={e=>setV1(e.target.value)} className="w-24 rounded-xl border border-border/50 bg-background px-3 py-2.5 text-center font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="From" /><span>→</span><input value={v2} onChange={e=>setV2(e.target.value)} className="w-24 rounded-xl border border-border/50 bg-background px-3 py-2.5 text-center font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="To" /></>}
      </div>
      {result && (
        <div className="rounded-2xl bg-accent/50 p-5 text-center">
          <div className="text-[13px] text-muted-foreground mb-1">{result.label}</div>
          <div className="text-[32px] font-bold text-foreground tracking-tight">{result.value}</div>
        </div>
      )}
    </div>
  );
}
