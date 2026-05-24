"use client";

import { useState, useMemo } from "react";

export default function BmiCalculatorTool() {
  const [unit, setUnit] = useState<"metric"|"imperial">("metric");
  const [h, setH] = useState(""); const [w, setW] = useState("");

  const bmi = useMemo(() => {
    const height = parseFloat(h); const weight = parseFloat(w);
    if (!height||!weight||height<=0||weight<=0) return null;
    if (unit==="metric") { const m=height/100; return weight/(m*m); }
    else { return (weight/(height*height))*703; }
  }, [h, w, unit]);

  const cat = useMemo(() => {
    if (bmi===null) return null;
    if (bmi<18.5) return {label:"Underweight",color:"#3b82f6"};
    if (bmi<25) return {label:"Normal weight",color:"#22c55e"};
    if (bmi<30) return {label:"Overweight",color:"#f59e0b"};
    return {label:"Obese",color:"#ef4444"};
  }, [bmi]);

  return (
    <div className="space-y-5">
      <div className="flex gap-1.5">
        {(["metric","imperial"] as const).map(u=>(
          <button key={u} onClick={()=>setUnit(u)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${unit===u?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`}>
            {u==="metric"?"Metric (cm/kg)":"Imperial (in/lb)"}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">{unit==="metric"?"Height (cm)":"Height (in)"}</label>
          <input value={h} onChange={e=>setH(e.target.value)} type="number"
            className="w-28 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="175" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">{unit==="metric"?"Weight (kg)":"Weight (lb)"}</label>
          <input value={w} onChange={e=>setW(e.target.value)} type="number"
            className="w-28 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="70" />
        </div>
      </div>
      {bmi!==null && (
        <div className="rounded-2xl p-6 text-center" style={{background:cat?cat.color+"15":undefined}}>
          <div className="text-[40px] font-bold text-foreground tracking-tight">{bmi.toFixed(1)}</div>
          {cat && <div className="text-[17px] font-semibold mt-1" style={{color:cat.color}}>{cat.label}</div>}
          <div className="text-[13px] text-muted-foreground mt-2">BMI = weight / height²</div>
        </div>
      )}
    </div>
  );
}
