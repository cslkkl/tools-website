"use client";

import { useState, useRef, useCallback } from "react";

export default function ImageCompressorTool() {
  const [original, setOriginal] = useState<{ file: File; url: string } | null>(null);
  const [compressed, setCompressed] = useState<string | null>(null);
  const [quality, setQuality] = useState(0.8);
  const [originalSize, setOriginalSize] = useState("");
  const [compressedSize, setCompressedSize] = useState("");
  const [scale, setScale] = useState(1.0);
  const [compressing, setCompressing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const url = URL.createObjectURL(file);
      setOriginal({ file, url });
      setCompressed(null);
      setOriginalSize(formatSize(file.size));
      setCompressedSize("");
    },
    []
  );

  const compress = useCallback(() => {
    if (!original) return;
    setCompressing(true);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);

      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            setCompressed(url);
            setCompressedSize(formatSize(blob.size));
          }
          setCompressing(false);
        },
        original.file.type || "image/jpeg",
        quality
      );
    };
    img.src = original.url;
  }, [original, quality, scale]);

  const download = useCallback(() => {
    if (!compressed) return;
    const a = document.createElement("a");
    a.href = compressed;
    a.download = `compressed-${original?.file.name || "image"}`;
    a.click();
  }, [compressed, original]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-4 py-2 rounded-lg border border-border text-sm text-foreground hover:bg-muted transition-colors"
        >
          Select Image
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
        />

        <div className="flex items-center gap-2">
          <label className="text-sm text-foreground">Quality:</label>
          <input
            type="range"
            min={0.1}
            max={1}
            step={0.1}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-24 accent-primary"
          />
          <span className="text-sm text-muted-foreground">
            {Math.round(quality * 100)}%
          </span>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm text-foreground">Scale:</label>
          <select
            value={scale}
            onChange={(e) => setScale(Number(e.target.value))}
            className="rounded-lg border border-border bg-background px-2 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value={1}>100%</option>
            <option value={0.75}>75%</option>
            <option value={0.5}>50%</option>
            <option value={0.25}>25%</option>
          </select>
        </div>
      </div>

      {original && (
        <button
          onClick={compress}
          disabled={compressing}
          className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {compressing ? "Compressing..." : "Compress"}
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {original && (
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2">
              Original ({originalSize})
            </h3>
            <img
              src={original.url}
              alt="Original"
              className="max-w-full rounded-lg border border-border"
            />
          </div>
        )}
        {compressed && (
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2">
              Compressed ({compressedSize})
            </h3>
            <img
              src={compressed}
              alt="Compressed"
              className="max-w-full rounded-lg border border-border"
            />
            <button
              onClick={download}
              className="mt-3 px-4 py-1.5 rounded-md border border-border text-sm text-muted-foreground hover:bg-muted transition-colors"
            >
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(2)} MB`;
}
