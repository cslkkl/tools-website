"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const toolComponents: Record<string, React.ComponentType> = {
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
  "jwt-decoder": dynamic(() => import("./JwtDecoderTool")),
  "color-converter": dynamic(() => import("./ColorConverterTool")),
  "timestamp-converter": dynamic(() => import("./TimestampConverterTool")),
  "lorem-ipsum": dynamic(() => import("./LoremIpsumTool")),
  "regex-tester": dynamic(() => import("./RegexTesterTool")),
  "html-entity": dynamic(() => import("./HtmlEntityTool")),
  "number-base": dynamic(() => import("./NumberBaseTool")),
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
