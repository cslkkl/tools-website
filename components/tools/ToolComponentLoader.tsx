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
};

function ToolSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
      <div className="h-4 bg-muted rounded w-1/3 mb-4" />
      <div className="h-48 bg-muted rounded" />
    </div>
  );
}

export function ToolComponentLoader({ slug }: { slug: string }) {
  const Component = toolComponents[slug];
  if (!Component) {
    return (
      <div className="rounded-xl border border-border bg-card p-6 text-center text-muted-foreground">
        Tool component not found.
      </div>
    );
  }

  return (
    <Suspense fallback={<ToolSkeleton />}>
      <Component />
    </Suspense>
  );
}
