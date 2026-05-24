"use client";

import { useState, useMemo } from "react";

export default function MetaTagGeneratorTool() {
  const [title,setTitle]=useState(""); const [desc,setDesc]=useState(""); const [url,setUrl]=useState(""); const [image,setImage]=useState("");

  const tags=useMemo(()=>{
    if(!title)return "";
    const lines=[
      `<title>${title}</title>`,
      `<meta name="description" content="${desc}">`,
      `<meta property="og:title" content="${title}">`,
      `<meta property="og:description" content="${desc}">`,
      `<meta property="og:type" content="website">`,
      url&&`<meta property="og:url" content="${url}">`,
      url&&`<link rel="canonical" href="${url}">`,
      image&&`<meta property="og:image" content="${image}">`,
      `<meta name="twitter:card" content="summary_large_image">`,
      `<meta name="twitter:title" content="${title}">`,
      `<meta name="twitter:description" content="${desc}">`,
      `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    ].filter(Boolean).join("\n");
    return lines;
  },[title,desc,url,image]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[{l:"Title",v:title,s:setTitle,p:"My Page Title"},{l:"Description",v:desc,s:setDesc,p:"A short description of the page"},{l:"URL",v:url,s:setUrl,p:"https://example.com/page"},{l:"OG Image URL",v:image,s:setImage,p:"https://example.com/og-image.jpg"}].map(({l,v,s,p})=>(
          <div key={l}>
            <label className="block text-[13px] font-medium text-foreground mb-1">{l}</label>
            <input value={v} onChange={e=>s(e.target.value)}
              className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder={p} />
          </div>
        ))}
      </div>
      {tags&&(
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1.5">Generated Meta Tags</label>
          <pre className="rounded-xl bg-muted/30 p-5 text-[13px] font-mono text-foreground whitespace-pre-wrap overflow-x-auto">{tags}</pre>
          <button onClick={()=>navigator.clipboard.writeText(tags)}
            className="mt-2 text-[12px] text-muted-foreground hover:text-foreground">Copy all</button>
        </div>
      )}
    </div>
  );
}
