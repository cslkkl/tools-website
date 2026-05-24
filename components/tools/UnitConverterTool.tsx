"use client";

import { useState, useMemo } from "react";

type Unit = { name: string; toBase: (v:number)=>number; fromBase: (v:number)=>number; symbol: string };

const categories: Record<string,Unit[]> = {
  Length: [
    { name:"Meter", toBase:v=>v, fromBase:v=>v, symbol:"m" },
    { name:"Kilometer", toBase:v=>v*1000, fromBase:v=>v/1000, symbol:"km" },
    { name:"Centimeter", toBase:v=>v/100, fromBase:v=>v*100, symbol:"cm" },
    { name:"Millimeter", toBase:v=>v/1000, fromBase:v=>v*1000, symbol:"mm" },
    { name:"Inch", toBase:v=>v*0.0254, fromBase:v=>v/0.0254, symbol:"in" },
    { name:"Foot", toBase:v=>v*0.3048, fromBase:v=>v/0.3048, symbol:"ft" },
    { name:"Yard", toBase:v=>v*0.9144, fromBase:v=>v/0.9144, symbol:"yd" },
    { name:"Mile", toBase:v=>v*1609.344, fromBase:v=>v/1609.344, symbol:"mi" },
  ],
  Weight: [
    { name:"Kilogram", toBase:v=>v, fromBase:v=>v, symbol:"kg" },
    { name:"Gram", toBase:v=>v/1000, fromBase:v=>v*1000, symbol:"g" },
    { name:"Milligram", toBase:v=>v/1e6, fromBase:v=>v*1e6, symbol:"mg" },
    { name:"Pound", toBase:v=>v*0.453592, fromBase:v=>v/0.453592, symbol:"lb" },
    { name:"Ounce", toBase:v=>v*0.0283495, fromBase:v=>v/0.0283495, symbol:"oz" },
  ],
  Temperature: [
    { name:"Celsius", toBase(v){return v}, fromBase(v){return v}, symbol:"°C" },
    { name:"Fahrenheit", toBase(v){return (v-32)*5/9}, fromBase(v){return v*9/5+32}, symbol:"°F" },
    { name:"Kelvin", toBase(v){return v-273.15}, fromBase(v){return v+273.15}, symbol:"K" },
  ],
  Area: [
    { name:"Square Meter", toBase:v=>v, fromBase:v=>v, symbol:"m²" },
    { name:"Square Kilometer", toBase:v=>v*1e6, fromBase:v=>v/1e6, symbol:"km²" },
    { name:"Square Foot", toBase:v=>v*0.092903, fromBase:v=>v/0.092903, symbol:"ft²" },
    { name:"Acre", toBase:v=>v*4046.86, fromBase:v=>v/4046.86, symbol:"ac" },
    { name:"Hectare", toBase:v=>v*10000, fromBase:v=>v/10000, symbol:"ha" },
  ],
  Volume: [
    { name:"Liter", toBase:v=>v, fromBase:v=>v, symbol:"L" },
    { name:"Milliliter", toBase:v=>v/1000, fromBase:v=>v*1000, symbol:"mL" },
    { name:"Gallon (US)", toBase:v=>v*3.78541, fromBase:v=>v/3.78541, symbol:"gal" },
    { name:"Cup", toBase:v=>v*0.236588, fromBase:v=>v/0.236588, symbol:"cup" },
  ],
  Speed: [
    { name:"m/s", toBase:v=>v, fromBase:v=>v, symbol:"m/s" },
    { name:"km/h", toBase:v=>v/3.6, fromBase:v=>v*3.6, symbol:"km/h" },
    { name:"mph", toBase:v=>v*0.44704, fromBase:v=>v/0.44704, symbol:"mph" },
    { name:"Knot", toBase:v=>v*0.514444, fromBase:v=>v/0.514444, symbol:"kn" },
  ],
  Data: [
    { name:"Byte", toBase:v=>v, fromBase:v=>v, symbol:"B" },
    { name:"Kilobyte", toBase:v=>v*1024, fromBase:v=>v/1024, symbol:"KB" },
    { name:"Megabyte", toBase:v=>v*1048576, fromBase:v=>v/1048576, symbol:"MB" },
    { name:"Gigabyte", toBase:v=>v*1073741824, fromBase:v=>v/1073741824, symbol:"GB" },
    { name:"Terabyte", toBase:v=>v*1099511627776, fromBase:v=>v/1099511627776, symbol:"TB" },
  ],
};

export default function UnitConverterTool() {
  const [cat, setCat] = useState("Length");
  const [value, setValue] = useState("1");
  const [fromUnit, setFromUnit] = useState(categories["Length"][0]);
  const units = useMemo(() => categories[cat], [cat]);
  const results = useMemo(() => {
    const v = parseFloat(value); if (isNaN(v)) return [];
    const base = fromUnit.toBase(v);
    return units.map(u => ({ name: u.name, symbol: u.symbol, value: u.fromBase(base) }));
  }, [value, fromUnit, units]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {Object.keys(categories).map(c => (
          <button key={c} onClick={()=>{setCat(c);setFromUnit(categories[c][0]);setValue("1");}}
            className={`px-3 py-1 rounded-full text-[13px] font-medium transition-colors ${cat===c?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">Value</label>
          <input value={value} onChange={e=>setValue(e.target.value)}
            className="w-32 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-[14px] font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
        </div>
        <div>
          <label className="block text-[13px] font-medium text-foreground mb-1">From</label>
          <select value={fromUnit.name} onChange={e=>setFromUnit(units.find(u=>u.name===e.target.value)!)}
            className="rounded-xl border border-border/50 bg-background px-3 py-2.5 text-[14px] text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
            {units.map(u=><option key={u.name}>{u.name}</option>)}
          </select>
        </div>
      </div>
      {results.length>0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {results.map(r=>(
            <div key={r.name} className={`rounded-xl p-3 text-center ${r.name===fromUnit.name?"bg-accent ring-1 ring-primary/20":""}`}>
              <div className="text-[18px] font-semibold font-mono text-foreground">{r.value.toPrecision(6).replace(/\.?0+$/,"")}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">{r.symbol}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
