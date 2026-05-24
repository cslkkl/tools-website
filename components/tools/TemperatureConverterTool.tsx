"use client";

import { useState, useMemo } from "react";

export default function TemperatureConverterTool() {
  const [value,setValue]=useState(""); const [from,setFrom]=useState<"C"|"F"|"K">("C");

  const results=useMemo(()=>{
    const v=parseFloat(value);if(isNaN(v))return null;
    if(from==="C")return {C:v,F:v*9/5+32,K:v+273.15};
    if(from==="F")return {C:(v-32)*5/9,F:v,K:(v-32)*5/9+273.15};
    return {C:v-273.15,F:(v-273.15)*9/5+32,K:v};
  },[value,from]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Value</label>
          <input value={value} onChange={e=>setValue(e.target.value)} type="number"
            className="w-28 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="0" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">From</label>
          <div className="flex gap-1.5">
            {(["C","F","K"] as const).map(u=>(
              <button key={u} onClick={()=>setFrom(u)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${from===u?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`}>
                {u==="C"?"°C":u==="F"?"°F":"K"}
              </button>
            ))}
          </div>
        </div>
      </div>
      {results&&(
        <div className="grid grid-cols-3 gap-3">
          {[{l:"Celsius",s:"°C",v:results.C},{l:"Fahrenheit",s:"°F",v:results.F},{l:"Kelvin",s:"K",v:results.K}].map(x=>(
            <div key={x.l} className={`rounded-xl p-4 text-center ${from===x.l.charAt(0)?"bg-accent ring-1 ring-primary/20":""}`}>
              <div className="text-[28px] font-bold text-foreground tracking-tight">{x.v.toFixed(2)}</div>
              <div className="text-[12px] text-muted-foreground mt-1">{x.s}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
