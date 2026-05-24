"use client";

import { useState, useRef, useCallback } from "react";
import QRCode from "qrcode";

export default function QrGeneratorTool() {
  const [text, setText] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [error, setError] = useState("");
  const [size, setSize] = useState(256);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generate = useCallback(async () => {
    setError("");
    if (!text.trim()) {
      setQrDataUrl("");
      return;
    }
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;
      await QRCode.toCanvas(canvas, text.trim(), { width: size, margin: 2 });
      setQrDataUrl(canvas.toDataURL("image/png"));
    } catch {
      setError("Failed to generate QR code. Please check your input.");
      setQrDataUrl("");
    }
  }, [text, size]);

  const download = useCallback(() => {
    if (!qrDataUrl) return;
    const a = document.createElement("a");
    a.href = qrDataUrl;
    a.download = "qrcode.png";
    a.click();
  }, [qrDataUrl]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Text or URL
          </label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Enter text or URL..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Size
          </label>
          <select
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="rounded-lg border border-border bg-background px-2 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value={128}>128px</option>
            <option value={256}>256px</option>
            <option value={512}>512px</option>
          </select>
        </div>
        <button
          onClick={generate}
          className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Generate
        </button>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />

      {qrDataUrl && (
        <div className="flex flex-col items-center gap-3">
          <img
            src={qrDataUrl}
            alt="Generated QR Code"
            className="rounded-lg border border-border"
          />
          <button
            onClick={download}
            className="px-4 py-1.5 rounded-md border border-border text-sm text-muted-foreground hover:bg-muted transition-colors"
          >
            Download PNG
          </button>
        </div>
      )}
    </div>
  );
}
