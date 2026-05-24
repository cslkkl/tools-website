"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const toolComponents: Record<string, React.ComponentType> = {
  // Original 10
  "base64-encoder": dynamic(() => import("./Base64Tool")),
  "url-encoder": dynamic(() => import("./UrlEncoderTool")),
  "uuid-generator": dynamic(() => import("./UuidGeneratorTool")),
  "json-formatter": dynamic(() => import("./JsonFormatterTool")),
  "password-generator": dynamic(() => import("./PasswordGeneratorTool")),
  "word-counter": dynamic(() => import("./WordCounterTool")),
  "qr-code-generator": dynamic(() => import("./QrGeneratorTool")),
  "text-diff": dynamic(() => import("./TextDiffTool")),
  "image-compressor": dynamic(() => import("./ImageCompressorTool")),
  "markdown-editor": dynamic(() => import("./MarkdownEditorTool")),
  // Batch 1 (v2)
  "jwt-decoder": dynamic(() => import("./JwtDecoderTool")),
  "color-converter": dynamic(() => import("./ColorConverterTool")),
  "timestamp-converter": dynamic(() => import("./TimestampConverterTool")),
  "lorem-ipsum": dynamic(() => import("./LoremIpsumTool")),
  "regex-tester": dynamic(() => import("./RegexTesterTool")),
  "html-entity": dynamic(() => import("./HtmlEntityTool")),
  "number-base": dynamic(() => import("./NumberBaseTool")),
  // Batch 2 (v3 — 22 new)
  "unit-converter": dynamic(() => import("./UnitConverterTool")),
  "hash-generator": dynamic(() => import("./HashGeneratorTool")),
  "case-converter": dynamic(() => import("./CaseConverterTool")),
  "percentage-calculator": dynamic(() => import("./PercentageCalculatorTool")),
  "bmi-calculator": dynamic(() => import("./BmiCalculatorTool")),
  "age-calculator": dynamic(() => import("./AgeCalculatorTool")),
  "color-palette": dynamic(() => import("./ColorPaletteTool")),
  "sql-formatter": dynamic(() => import("./SqlFormatterTool")),
  "json-to-csv": dynamic(() => import("./JsonToCsvTool")),
  "tip-calculator": dynamic(() => import("./TipCalculatorTool")),
  "discount-calculator": dynamic(() => import("./DiscountCalculatorTool")),
  "average-calculator": dynamic(() => import("./AverageCalculatorTool")),
  "temperature-converter": dynamic(() => import("./TemperatureConverterTool")),
  "text-to-slug": dynamic(() => import("./TextToSlugTool")),
  "yaml-to-json": dynamic(() => import("./YamlToJsonTool")),
  "css-minifier": dynamic(() => import("./CssMinifierTool")),
  "aspect-ratio": dynamic(() => import("./AspectRatioTool")),
  "stopwatch": dynamic(() => import("./StopwatchTool")),
  "meta-tag-generator": dynamic(() => import("./MetaTagGeneratorTool")),
  "emoji-picker": dynamic(() => import("./EmojiPickerTool")),
  "random-number": dynamic(() => import("./RandomNumberTool")),
  "file-size-converter": dynamic(() => import("./FileSizeConverterTool")),
};

function ToolSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-3 bg-muted rounded-full w-1/3 mb-5" />
      <div className="h-48 bg-muted rounded-2xl" />
    </div>
  );
}

export function ToolComponentLoader({ slug }: { slug: string }) {
  const Component = toolComponents[slug];
  if (!Component) {
    return (
      <div className="text-center text-muted-foreground py-10 text-[14px]">
        Tool not found.
      </div>
    );
  }
  return (
    <Suspense fallback={<ToolSkeleton />}>
      <Component />
    </Suspense>
  );
}
