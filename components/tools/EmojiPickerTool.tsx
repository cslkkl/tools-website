"use client";

import { useState, useMemo } from "react";

const emojis:{cat:string;items:string[]}[]=[
  {cat:"Smileys",items:["😀","😂","🤣","😊","😍","🥰","😘","😜","🤪","😎","🤩","🥳","😢","😭","😤","😡","🥺","😱","🤔","🙄"]},
  {cat:"Gestures",items:["👍","👎","👏","🙌","🤝","💪","✌","🤞","🖖","👋","🤙","🙏","💅","🫶"]},
  {cat:"Objects",items:["🔥","⭐","❤","💔","💯","✅","❌","🎉","🎊","💰","💡","📌","🏆","🎯","💎","🔔","⚡","🌟","💩","👑"]},
  {cat:"Food",items:["🍕","🍔","🌮","🍣","🍩","🎂","☕","🍺","🥑","🍓","🍕","🧁","🍿","🥩","🍜"]},
  {cat:"Animals",items:["🐶","🐱","🦊","🐼","🐨","🐸","🦄","🐝","🦋","🐙","🦀","🐳","🦜","🐰"]},
  {cat:"Nature",items:["🌸","🌺","🌻","🌹","🍀","🌈","☀","🌙","⭐","🔥","💧","🌊","🌍","🌲"]},
  {cat:"Symbols",items:["©","®","™","➡","⬅","⬆","⬇","🔄","🔗","⚠","🚫","♻","⚜","∞","ℹ"]},
  {cat:"Tech",items:["💻","📱","🖥","⌨","🖱","🎮","📷","🔌","💾","📡","🤖","🧠","🛠"]},
];

export default function EmojiPickerTool() {
  const [search,setSearch]=useState("");
  const [copied,setCopied]=useState("");
  const filtered=useMemo(()=>{
    if(!search.trim())return emojis;
    const s=search.toLowerCase();
    return emojis.map(g=>({cat:g.cat,items:g.items.filter(e=>e.includes(s)||g.cat.toLowerCase().includes(s))})).filter(g=>g.items.length>0);
  },[search]);

  const copy=(emoji:string)=>{navigator.clipboard.writeText(emoji);setCopied(emoji);setTimeout(()=>setCopied(""),1200);};

  return (
    <div className="space-y-4">
      <input value={search} onChange={e=>setSearch(e.target.value)}
        className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
        placeholder="Search emojis..." />
      {filtered.map(g=>(
        <div key={g.cat}>
          <div className="text-[12px] font-medium text-muted-foreground uppercase tracking-wide mb-2">{g.cat}</div>
          <div className="flex flex-wrap gap-1.5">
            {g.items.map(e=>(
              <button key={e} onClick={()=>copy(e)}
                className={`text-[24px] p-2 rounded-xl transition-all hover:bg-muted ${copied===e?"ring-2 ring-primary scale-110":""}`}
                title={copied===e?"Copied!":""}>{e}</button>
            ))}
          </div>
        </div>
      ))}
      {copied&&<div className="text-center text-[13px] text-primary font-medium">Copied!</div>}
    </div>
  );
}
