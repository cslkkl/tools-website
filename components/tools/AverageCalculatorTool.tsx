"use client";

import { useState, useMemo } from "react";

export default function AverageCalculatorTool() {
  const [input,setInput]=useState("");

  const stats=useMemo(()=>{
    const nums=input.split(/[\s,]+/).map(Number).filter(n=>!isNaN(n));
    if(nums.length===0)return null;
    const sum=nums.reduce((a,b)=>a+b,0);
    const mean=sum/nums.length;
    const sorted=[...nums].sort((a,b)=>a-b);
    const mid=Math.floor(sorted.length/2);
    const median=sorted.length%2===0?(sorted[mid-1]+sorted[mid])/2:sorted[mid];
    const freq=new Map<number,number>();nums.forEach(n=>freq.set(n,(freq.get(n)||0)+1));
    let mode:number[]=[];let max=0;freq.forEach((c,n)=>{if(c>max){mode=[n];max=c;}else if(c===max){mode.push(n);}});
    return {sum,mean:mean.toFixed(2),median:median.toFixed(2),mode:mode.slice(0,3).join(", "),min:Math.min(...nums),max:Math.max(...nums),count:nums.length};
  },[input]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">Enter numbers</label>
        <textarea value={input} onChange={e=>setInput(e.target.value)} rows={3}
          className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
          placeholder="1, 2, 3, 4, 5" />
        <div className="text-[12px] text-muted-foreground mt-1">Separate numbers with commas or spaces</div>
      </div>
      {stats&&(
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[{l:"Mean",v:stats.mean},{l:"Median",v:stats.median},{l:"Mode",v:stats.mode||"N/A"},{l:"Count",v:stats.count},{l:"Sum",v:stats.sum},{l:"Min",v:stats.min},{l:"Max",v:stats.max},{l:"Range",v:stats.max-stats.min}].map(x=>(
            <div key={x.l} className="rounded-xl bg-muted/20 p-3 text-center">
              <div className="text-[20px] font-bold text-foreground tracking-tight">{x.v}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">{x.l}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
