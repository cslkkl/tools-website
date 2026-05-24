"use client";

import { useState, useMemo } from "react";

function hslToHex(h:number,s:number,l:number):string{
  const a=s*Math.min(l,1-l)/100;const f=(n:number)=>{const k=(n+h/30)%12;return Math.round((l-a*Math.max(Math.min(k-3,9-k,1),-1))*255).toString(16).padStart(2,"0");};
  return `#${f(0)}${f(8)}${f(4)}`;
}
function hexToRgb(hex:string){const r=parseInt(hex.slice(1,3),16);const g=parseInt(hex.slice(3,5),16);const b=parseInt(hex.slice(5,7),16);return{r,g,b};}

const harmonies: Record<string, (h:number)=>number[][]> = {
  Complementary:(h)=>[[h,70,60],[(h+180)%360,70,60]],
  Analogous:(h)=>[[h,70,60],[(h+30)%360,70,55],[(h+60)%360,70,55]],
  Triadic:(h)=>[[h,70,60],[(h+120)%360,70,60],[(h+240)%360,70,60]],
  "Split Comp":(h)=>[[h,70,60],[(h+150)%360,70,55],[(h+210)%360,70,55]],
  Monochromatic:(h)=>[[h,40,90],[h,50,70],[h,60,50],[h,70,35],[h,80,20]],
};

export default function ColorPaletteTool() {
  const [base,setBase]=useState("#3b82f6");
  const [harmony,setHarmony]=useState<string>("Analogous");
  const rgb=useMemo(()=>{try{return hexToRgb(base);}catch{return null}},[base]);
  const palette=useMemo(()=>{
    if(!rgb) return[];
    const {r,g,b}=rgb;const max=Math.max(r,g,b)/255;const min=Math.min(r,g,b)/255;const l=(max+min)/2;
    let h=0;const d=max-min;if(d!==0){const s=l>0.5?d/(2-max-min):d/(max+min);if(max===r/255)h=((g-b)/(d*255)+(g<b?6:0))/6;else if(max===g/255)h=((b-r)/(d*255)+2)/6;else h=((r-g)/(d*255)+4)/6;}
    return harmonies[harmony](Math.round(h*360));
  },[rgb,harmony]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <input type="color" value={base} onChange={e=>setBase(e.target.value)} className="w-10 h-10 rounded-xl cursor-pointer border-0" />
        <input value={base} onChange={e=>setBase(e.target.value)}
          className="w-28 rounded-xl border border-border/50 bg-background px-3 py-2 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
        <select value={harmony} onChange={e=>setHarmony(e.target.value as keyof typeof harmonies)}
          className="rounded-xl border border-border/50 bg-background px-3 py-2 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
          {Object.keys(harmonies).map(k=><option key={k}>{k}</option>)}
        </select>
      </div>
      {palette.length>0 && (
        <div className="flex flex-wrap gap-3">
          {palette.map(([h,s,l],i)=>{
            const hex=hslToHex(h,s,l);
            return (
              <div key={i} className="rounded-2xl overflow-hidden ring-1 ring-border/20 shadow-sm" style={{width:110}}>
                <div className="h-20" style={{background:hex}} />
                <div className="bg-card p-3">
                  <div className="text-[13px] font-mono font-semibold text-foreground">{hex}</div>
                  <button onClick={()=>{navigator.clipboard.writeText(hex);}}
                    className="text-[11px] text-muted-foreground hover:text-foreground mt-0.5">Copy</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
