"use client";

import { useState, useMemo } from "react";

export default function AspectRatioTool() {
  const [w,setW]=useState("1920"); const [h,setH]=useState("1080");
  const gcd=(a:number,b:number):number=>b?gcd(b,a%b):a;
  const calc=useMemo(()=>{
    const pw=parseFloat(w),ph=parseFloat(h);
    if(!pw||!ph)return null;
    const g=gcd(pw,ph);const rw=pw/g,rh=ph/g;
    const presets=[{l:"16:9",w:1920,h:1080},{l:"4:3",w:1024,h:768},{l:"1:1",w:1080,h:1080},{l:"21:9",w:2560,h:1080},{l:"3:2",w:1200,h:800}];
    return {ratio:`${rw}:${rh}`,decimal:(pw/ph).toFixed(4),presets:presets.map(p=>({l:p.l,w:p.w,h:p.h,matches:Math.abs(pw/ph-p.w/p.h)<0.01}))};
  },[w,h]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Width (px)</label>
          <input value={w} onChange={e=>setW(e.target.value)} type="number"
            className="w-28 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Height (px)</label>
          <input value={h} onChange={e=>setH(e.target.value)} type="number"
            className="w-28 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
      </div>
      {calc&&(
        <>
          <div className="rounded-2xl bg-accent/30 p-5 text-center">
            <div className="text-[13px] text-muted-foreground mb-1">Aspect Ratio</div>
            <div className="text-[36px] font-bold text-foreground tracking-tight">{calc.ratio}</div>
            <div className="text-[14px] text-muted-foreground mt-1">{calc.decimal}</div>
          </div>
          <div>
            <label className="block text-[13px] font-medium text-foreground mb-2">Common Ratios</label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {calc.presets.map(p=>(
                <div key={p.l} className={`rounded-xl p-3 text-center ${p.matches?"bg-primary/10 ring-1 ring-primary/20":""}`}>
                  <div className="text-[16px] font-bold text-foreground">{p.l}</div>
                  <div className="text-[12px] text-muted-foreground">{p.w}×{p.h}</div>
                  {p.matches&&<div className="text-[11px] text-primary mt-0.5 font-medium">Match</div>}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
