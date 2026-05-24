"use client";

import { useState, useMemo } from "react";

export default function RegexTesterTool() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const matches = useMemo(() => {
    setError("");
    if (!pattern || !text) return [];
    try {
      const re = new RegExp(pattern, flags);
      const result: { match: string; index: number; groups?: string[] }[] = [];
      for (const m of text.matchAll(re)) {
        result.push({ match: m[0], index: m.index!, groups: m.length>1 ? [...m].slice(1) : undefined });
        if (!re.global && !re.sticky) { result.push(); break; }
      }
      return result;
    } catch (e) {
      setError((e as Error).message);
      return [];
    }
  }, [pattern, flags, text]);

  const highlighted = useMemo(() => {
    if (!pattern || !text || matches.length===0) return text;
    try {
      const re = new RegExp(pattern, flags);
      const parts: {text:string;hl:boolean}[] = [];
      let last = 0;
      for (const m of text.matchAll(re)) {
        if (m.index! > last) parts.push({ text: text.slice(last, m.index!), hl: false });
        parts.push({ text: m[0], hl: true });
        last = m.index! + m[0].length;
        if (!re.global && !re.sticky) break;
      }
      if (last < text.length) parts.push({ text: text.slice(last), hl: false });
      return parts;
    } catch { return [{text,hl:false}]; }
  }, [pattern, flags, text, matches]);

  return (
    <div className="space-y-5">
      <div className="flex gap-3">
        <div className="flex-1">
          <label className="block text-[13px] font-medium text-foreground mb-1">Pattern</label>
          <input value={pattern} onChange={e=>setPattern(e.target.value)}
            className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="\\d{3}-\\d{4}" />
        </div>
        <div className="w-24">
          <label className="block text-[13px] font-medium text-foreground mb-1">Flags</label>
          <input value={flags} onChange={e=>setFlags(e.target.value)}
            className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="g" />
        </div>
      </div>
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1">Test String</label>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={6}
          className="w-full rounded-xl border border-border/50 bg-background px-4 py-3 text-[14px] font-mono text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
          placeholder="Enter text to test against..." />
      </div>
      {error && <div className="rounded-xl bg-red-50 dark:bg-red-950/50 px-4 py-3 text-[13px] text-red-600 dark:text-red-400">{error}</div>}
      {highlighted && highlighted.length>0 && (
        <div className="rounded-xl bg-muted/30 p-4 text-[14px] font-mono leading-relaxed">
          {Array.isArray(highlighted) ? highlighted.map((p,i)=>
            <span key={i} className={p.hl?"bg-yellow-200 dark:bg-yellow-800/50 rounded-sm px-0.5":""}>{p.text}</span>
          ) : highlighted}
        </div>
      )}
      {matches.length > 0 && (
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1.5">Matches ({matches.length})</label>
          <div className="space-y-1">
            {matches.map((m,i)=>
              <div key={i} className="rounded-lg bg-muted/20 px-3 py-1.5 text-[13px] font-mono text-foreground">
                [{m.index}] &quot;{m.match}&quot;
                {m.groups && m.groups.some(g=>g!==undefined) && <span className="text-muted-foreground"> groups: [{m.groups.filter(g=>g!==undefined).join(", ")}]</span>}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
