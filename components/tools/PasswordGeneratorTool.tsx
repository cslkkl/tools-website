"use client";

import { useState, useCallback } from "react";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function PasswordGeneratorTool() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [useLower, setUseLower] = useState(true);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [strength, setStrength] = useState("");

  const generate = useCallback(() => {
    let chars = "";
    if (useLower) chars += LOWERCASE;
    if (useUpper) chars += UPPERCASE;
    if (useNumbers) chars += NUMBERS;
    if (useSymbols) chars += SYMBOLS;

    if (!chars) {
      setPassword("");
      return;
    }

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[array[i] % chars.length];
    }

    // Ensure at least one of each selected type
    const types: { charSet: string; enabled: boolean }[] = [
      { charSet: LOWERCASE, enabled: useLower },
      { charSet: UPPERCASE, enabled: useUpper },
      { charSet: NUMBERS, enabled: useNumbers },
      { charSet: SYMBOLS, enabled: useSymbols },
    ];
    const enabled = types.filter((t) => t.enabled);
    if (enabled.length > 0 && length >= enabled.length) {
      const arr = result.split("");
      for (let i = 0; i < enabled.length && i < length; i++) {
        const c = enabled[i].charSet;
        arr[i] = c[array[length - 1 - i] % c.length];
      }
      // Shuffle
      for (let i = arr.length - 1; i > 0; i--) {
        const j = array[i] % (i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      result = arr.join("");
    }

    setPassword(result);

    // Simple strength estimate
    let entropy = 0;
    if (useLower) entropy += 26;
    if (useUpper) entropy += 26;
    if (useNumbers) entropy += 10;
    if (useSymbols) entropy += 20;
    const bits = Math.log2(entropy) * length;
    if (bits < 50) setStrength("Weak");
    else if (bits < 80) setStrength("Moderate");
    else if (bits < 100) setStrength("Strong");
    else setStrength("Very Strong");
  }, [length, useLower, useUpper, useNumbers, useSymbols]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            checked={useLower}
            onChange={(e) => setUseLower(e.target.checked)}
            className="rounded border-border"
          />
          a-z
        </label>
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            checked={useUpper}
            onChange={(e) => setUseUpper(e.target.checked)}
            className="rounded border-border"
          />
          A-Z
        </label>
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={(e) => setUseNumbers(e.target.checked)}
            className="rounded border-border"
          />
          0-9
        </label>
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={(e) => setUseSymbols(e.target.checked)}
            className="rounded border-border"
          />
          !@#$
        </label>
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm text-foreground">Length: {length}</label>
        <input
          type="range"
          min={6}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="flex-1 max-w-48 accent-primary"
        />
      </div>

      <button
        onClick={generate}
        className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Generate Password
      </button>

      {password && (
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Generated Password
          </label>
          <div className="flex gap-2">
            <input
              value={password}
              readOnly
              className="flex-1 rounded-lg border border-border bg-muted/50 px-3 py-2 font-mono text-sm text-foreground"
            />
            <button
              onClick={() => navigator.clipboard.writeText(password)}
              className="px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:bg-muted transition-colors whitespace-nowrap"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
