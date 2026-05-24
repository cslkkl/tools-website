"use client";

import { useState, useMemo } from "react";

const units=["B","KB","MB","GB","TB","PB"] as const;

export default function FileSizeConverterTool() {
  const [value,setValue]=useState("1"); const [from,setFrom]=useState<typeof units[number]>("GB");

  const results=useMemo(()=>{
    const v=parseFloat(value);if(isNaN(v))return[];
    const toBytes=v*Math.pow(1024,units.indexOf(from));
    return units.map((u,i)=>({unit:u,value:toBytes/Math.pow(1024,i)}));
  },[value,from]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Value</label>
          <input value={value} onChange={e=>setValue(e.target.value)}
            className="w-28 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="1" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">From</label>
          <select value={from} onChange={e=>setFrom(e.target.value as typeof units[number])}
            className="rounded-xl border border-border/50 bg-background px-3 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
            {units.map(u=><option key={u}>{u}</option>)}
          </select>
        </div>
      </div>
      {results.length>0&&(
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {results.map(r=>{
            const display=r.value<0.001?r.value.toExponential(4):r.value>=1e12?r.value.toExponential(4):r.value.toLocaleString(undefined,{maximumFractionDigits:6});
            return (
              <div key={r.unit} className={`rounded-xl p-3 text-center ${r.unit===from?"bg-accent ring-1 ring-primary/20":""}`}>
                <div className="text-[16px] font-bold font-mono text-foreground break-all">{display}</div>
                <div className="text-[12px] text-muted-foreground mt-0.5">{r.unit}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
