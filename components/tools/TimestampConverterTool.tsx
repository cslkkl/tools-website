"use client";

import { useState, useCallback } from "react";

export default function TimestampConverterTool() {
  const [ts, setTs] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const tsToDate = useCallback(() => {
    setError(""); setDate("");
    if (!ts.trim()) return;
    const n = Number(ts.trim());
    if (isNaN(n)) { setError("Invalid timestamp"); return; }
    const ms = n > 9999999999 ? n : n * 1000;
    const d = new Date(ms);
    if (isNaN(d.getTime())) { setError("Invalid timestamp"); return; }
    setDate(d.toISOString().replace("T"," ").slice(0,19) + " UTC\n" + d.toLocaleString());
  }, [ts]);

  const dateToTs = useCallback(() => {
    setError(""); setTs("");
    if (!date.trim()) return;
    const d = new Date(date.trim());
    if (isNaN(d.getTime())) { setError("Invalid date"); return; }
    const sec = Math.floor(d.getTime()/1000);
    setTs(`${sec}\n(ms: ${d.getTime()})`);
  }, [date]);

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">Unix Timestamp → Date</label>
        <div className="flex gap-2">
          <input value={ts} onChange={e=>setTs(e.target.value)}
            className="flex-1 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="1700000000" />
          <button onClick={tsToDate}
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-[13px] font-medium hover:opacity-85 transition-opacity whitespace-nowrap">
            Convert
          </button>
        </div>
        <button onClick={()=>{setTs(String(Math.floor(Date.now()/1000)));}}
          className="mt-1.5 text-[12px] text-muted-foreground hover:text-foreground">Use current time</button>
      </div>
      <div>
        <label className="block text-[13px] font-medium text-foreground mb-1.5">Human Date → Timestamp</label>
        <div className="flex gap-2">
          <input value={date} onChange={e=>setDate(e.target.value)}
            className="flex-1 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="2026-05-24 12:00" />
          <button onClick={dateToTs}
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-[13px] font-medium hover:opacity-85 transition-opacity whitespace-nowrap">
            Convert
          </button>
        </div>
      </div>
      {error && <div className="rounded-xl bg-red-50 dark:bg-red-950/50 px-4 py-3 text-[13px] text-red-600 dark:text-red-400">{error}</div>}
    </div>
  );
}
