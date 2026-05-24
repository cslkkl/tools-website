"use client";

import { useState, useMemo } from "react";

export default function AgeCalculatorTool() {
  const [from,setFrom]=useState(""); const [to,setTo]=useState(new Date().toISOString().slice(0,10));

  const age=useMemo(()=>{
    const d1=new Date(from); const d2=new Date(to);
    if(isNaN(d1.getTime())||isNaN(d2.getTime())) return null;
    if(d1>d2) return null;
    let years=d2.getFullYear()-d1.getFullYear();
    let months=d2.getMonth()-d1.getMonth();
    let days=d2.getDate()-d1.getDate();
    if(days<0){months--;const prev=new Date(d2.getFullYear(),d2.getMonth(),0);days+=prev.getDate();}
    if(months<0){years--;months+=12;}
    const total=Math.floor((d2.getTime()-d1.getTime())/(1000*60*60*24));
    return {years,months,days,total};
  },[from,to]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Birth Date</label>
          <input type="date" value={from} onChange={e=>setFrom(e.target.value)}
            className="rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">To Date</label>
          <input type="date" value={to} onChange={e=>setTo(e.target.value)}
            className="rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
      </div>
      {age&&(
        <div className="grid grid-cols-4 gap-3">
          {[{v:age.years,l:"Years"},{v:age.months,l:"Months"},{v:age.days,l:"Days"},{v:age.total,l:"Total Days"}].map(x=>(
            <div key={x.l} className="rounded-xl bg-accent/30 p-4 text-center">
              <div className="text-[28px] font-bold text-foreground tracking-tight">{x.v}</div>
              <div className="text-[12px] text-muted-foreground mt-1">{x.l}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
