"use client";

import { useState, useMemo } from "react";

function hexToRgb(hex: string) { const r=parseInt(hex.slice(1,3),16); const g=parseInt(hex.slice(3,5),16); const b=parseInt(hex.slice(5,7),16); return isNaN(r)?null:{r,g,b}; }
function rgbToHsl(r:number,g:number,b:number){r/=255;g/=255;b/=255;const M=Math.max(r,g,b),m=Math.min(r,g,b),d=M-m;let h=0,s=0;const l=(M+m)/2;if(d!==0){s=l>0.5?d/(2-M-m):d/(M+m);switch(M){case r:h=((g-b)/d+(g<b?6:0))/6;break;case g:h=((b-r)/d+2)/6;break;case b:h=((r-g)/d+4)/6;break}}return{h:Math.round(h*360),s:Math.round(s*100),l:Math.round(l*100)};}
function hslToRgb(h:number,s:number,l:number){h/=360;s/=100;l/=100;if(s===0)return{r:Math.round(l*255),g:Math.round(l*255),b:Math.round(l*255)};const q=l<0.5?l*(1+s):l+s-l*s,p=2*l-q;const c=(t:number)=>{if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;};return{r:Math.round(c(h+1/3)*255),g:Math.round(c(h)*255),b:Math.round(c(h-1/3)*255)};}

export default function ColorConverterTool() {
  const [hex, setHex] = useState("#3b82f6");
  const [rgb, setRgb] = useState("59, 130, 246");
  const [hsl, setHsl] = useState("217, 91%, 60%");
  const [source, setSource] = useState<"hex"|"rgb"|"hsl">("hex");

  const color = useMemo(() => {
    try {
      if (source==="hex" && /^#[0-9a-fA-F]{6}$/.test(hex)) {
        const r=hexToRgb(hex); if(!r) return null;
        const h=rgbToHsl(r.r,r.g,r.b);
        return { hex, rgb: `${r.r}, ${r.g}, ${r.b}`, hsl: `${h.h}, ${h.s}%, ${h.l}%`, display: hex };
      }
      if (source==="rgb") {
        const m=rgb.match(/^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/);
        if(!m) return null;
        const r=+m[1],g=+m[2],b=+m[3];
        if(r>255||g>255||b>255) return null;
        const h=rgbToHsl(r,g,b);
        const hx="#" + [r,g,b].map(c=>c.toString(16).padStart(2,"0")).join("");
        return { hex: hx, rgb: `${r}, ${g}, ${b}`, hsl: `${h.h}, ${h.s}%, ${h.l}%`, display: hx };
      }
      if (source==="hsl") {
        const m=hsl.match(/^(\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%$/);
        if(!m) return null;
        const h=+m[1],s=+m[2],l=+m[3];
        if(h>360||s>100||l>100) return null;
        const r=hslToRgb(h,s,l);
        const hx="#" + [r.r,r.g,r.b].map(c=>c.toString(16).padStart(2,"0")).join("");
        return { hex: hx, rgb: `${r.r}, ${r.g}, ${r.b}`, hsl: `${h}, ${s}%, ${l}%`, display: hx };
      }
    } catch { return null; }
    return null;
  }, [hex, rgb, hsl, source]);

  const update = (type:typeof source, val:string) => { setSource(type); if(type==="hex")setHex(val); if(type==="rgb")setRgb(val); if(type==="hsl")setHsl(val); };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        {color && <div className="w-10 h-10 rounded-xl ring-1 ring-border/30 shadow-sm" style={{background:color.display}} />}
        <div className="flex gap-1.5">
          {(["hex","rgb","hsl"] as const).map(t => (
            <button key={t} onClick={()=>setSource(t)}
              className={`px-3 py-1 rounded-full text-[13px] font-medium transition-colors ${source===t?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`}>
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">HEX</label>
          <input value={hex} onChange={e=>update("hex",e.target.value)}
            className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="#000000" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">RGB</label>
          <input value={rgb} onChange={e=>update("rgb",e.target.value)}
            className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="255, 255, 255" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">HSL</label>
          <input value={hsl} onChange={e=>update("hsl",e.target.value)}
            className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="0, 0%, 100%" />
        </div>
      </div>
    </div>
  );
}
