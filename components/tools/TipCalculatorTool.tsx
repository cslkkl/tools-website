"use client";

import { useState, useMemo } from "react";

export default function TipCalculatorTool() {
  const [bill,setBill]=useState(""); const [pct,setPct]=useState(15); const [people,setPeople]=useState(2);

  const calc=useMemo(()=>{
    const b=parseFloat(bill);if(isNaN(b)||b<=0||people<=0)return null;
    const tip=b*(pct/100); const total=b+tip;
    return {tip:tip.toFixed(2),total:total.toFixed(2),per:(total/people).toFixed(2)};
  },[bill,pct,people]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Bill Amount ($)</label>
          <input value={bill} onChange={e=>setBill(e.target.value)} type="number" step="0.01"
            className="w-36 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="100.00" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Tip %</label>
          <div className="flex gap-1.5">
            {[10,15,18,20,25].map(v=>(
              <button key={v} onClick={()=>setPct(v)}
                className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors ${pct===v?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`}>{v}%</button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">People</label>
          <input value={people} onChange={e=>setPeople(+e.target.value||1)} type="number" min="1"
            className="w-20 rounded-xl border border-border/50 bg-background px-3 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
      </div>
      {calc && (
        <div className="grid grid-cols-3 gap-3">
          {[{l:"Tip",v:`$${calc.tip}`},{l:"Total",v:`$${calc.total}`},{l:"Each",v:`$${calc.per}`}].map(x=>(
            <div key={x.l} className="rounded-xl bg-accent/30 p-4 text-center">
              <div className="text-[24px] font-bold text-foreground tracking-tight">{x.v}</div>
              <div className="text-[12px] text-muted-foreground mt-1">{x.l}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
