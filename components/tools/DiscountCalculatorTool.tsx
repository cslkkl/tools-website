"use client";

import { useState, useMemo } from "react";

export default function DiscountCalculatorTool() {
  const [price,setPrice]=useState(""); const [discount,setDiscount]=useState("");

  const calc=useMemo(()=>{
    const p=parseFloat(price); const d=parseFloat(discount);
    if(isNaN(p)||isNaN(d)) return null;
    const saved=p*(d/100); const final=p-saved;
    return {saved:saved.toFixed(2),final:final.toFixed(2)};
  },[price,discount]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Original Price ($)</label>
          <input value={price} onChange={e=>setPrice(e.target.value)} type="number"
            className="w-36 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="100.00" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Discount %</label>
          <input value={discount} onChange={e=>setDiscount(e.target.value)} type="number"
            className="w-28 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="20" />
        </div>
      </div>
      {calc && (
        <div className="grid grid-cols-2 gap-3">
          {[{l:"You Save",v:`$${calc.saved}`},{l:"Final Price",v:`$${calc.final}`}].map(x=>(
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
