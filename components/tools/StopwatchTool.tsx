"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export default function StopwatchTool() {
  const [time,setTime]=useState(0); const [running,setRunning]=useState(false);
  const [laps,setLaps]=useState<number[]>([]);
  const [mode,setMode]=useState<"stopwatch"|"timer">("stopwatch");
  const [timerVal,setTimerVal]=useState(60);
  const ref=useRef<ReturnType<typeof setInterval>>(null);
  const startRef=useRef(0);

  const pad=(t:number)=>{const m=Math.floor(t/60);const s=t%60;const ms=Math.floor((t%1)*100);return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}.${String(ms).padStart(2,"0")}`;};

  useEffect(()=>{return ()=>{if(ref.current)clearInterval(ref.current);};},[]);

  const stopTimer=useCallback(()=>{
    if(ref.current){clearInterval(ref.current);ref.current=null;}
    setRunning(false);
  },[]);

  const start=useCallback(()=>{
    if(running)return;
    if(mode==="timer"){
      if(timerVal<=0)return;
      setTime(timerVal);startRef.current=timerVal;
      ref.current=setInterval(()=>{
        setTime(prev=>{if(prev<=0.05){stopTimer();return 0;}return prev-0.05;});
      },50);
    } else {
      startRef.current=performance.now()-time*1000;
      ref.current=setInterval(()=>{
        setTime((performance.now()-startRef.current)/1000);
      },50);
    }
    setRunning(true);
  },[running,mode,timerVal,time,stopTimer]);

  const reset=useCallback(()=>{
    stopTimer();
    setTime(mode==="timer"?timerVal:0);setLaps([]);
  },[mode,timerVal,stopTimer]);

  const lap=useCallback(()=>{if(mode==="stopwatch")setLaps(p=>[...p,time]);},[time,mode]);

  return (
    <div className="space-y-5 text-center">
      <div className="flex justify-center gap-1.5">
        {(["stopwatch","timer"] as const).map(m=>(
          <button key={m} onClick={()=>{stopTimer();setMode(m);setTime(m==="timer"?timerVal:0);setLaps([]);}}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${mode===m?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`}>
            {m==="stopwatch"?"Stopwatch":"Countdown"}
          </button>
        ))}
      </div>
      {mode==="timer"&&!running&&(
        <div className="flex justify-center items-center gap-2">
          <input type="number" value={timerVal} onChange={e=>setTimerVal(+e.target.value||0)} min={1}
            className="w-20 rounded-xl border border-border/50 bg-background px-3 py-2 text-center text-[14px] font-mono focus:outline-none focus:ring-2 focus:ring-primary/30" />
          <span className="text-[14px] text-muted-foreground">seconds</span>
        </div>
      )}
      <div className="text-[64px] sm:text-[80px] font-bold text-foreground tracking-tight font-mono leading-none py-4">{pad(time)}</div>
      <div className="flex justify-center gap-2">
        {!running?<button onClick={start} className="px-6 py-2 rounded-full bg-primary text-primary-foreground text-[14px] font-medium hover:opacity-85">Start</button>
          :<button onClick={stopTimer} className="px-6 py-2 rounded-full bg-red-500 text-white text-[14px] font-medium hover:opacity-85">Stop</button>}
        <button onClick={reset} className="px-6 py-2 rounded-full bg-muted text-muted-foreground text-[14px] font-medium hover:text-foreground">Reset</button>
        {mode==="stopwatch"&&<button onClick={lap} className="px-6 py-2 rounded-full bg-muted text-muted-foreground text-[14px] font-medium hover:text-foreground">Lap</button>}
      </div>
      {laps.length>0&&(
        <div className="max-h-48 overflow-y-auto text-left">
          {[...laps].reverse().map((l,i)=>
            <div key={i} className="flex justify-between py-1.5 px-3 rounded-lg text-[14px] font-mono text-foreground border-b border-border/30">
              <span className="text-muted-foreground">#{laps.length-i}</span><span>{pad(l)}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
