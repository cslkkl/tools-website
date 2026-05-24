"use client";

import { useEffect } from "react";

const CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

interface AdBannerProps {
  slot: string;
  format?: "auto" | "horizontal" | "rectangle" | "vertical";
}

export function AdBanner({ slot, format = "auto" }: AdBannerProps) {
  useEffect(() => {
    if (!CLIENT_ID) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // adblock or similar — fine
    }
  }, []);

  if (!CLIENT_ID) {
    return (
      <div className="ad-container my-6 flex items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 text-sm text-muted-foreground">
        Ad Unit #{slot}
      </div>
    );
  }

  return (
    <div className="ad-container my-6 flex justify-center overflow-hidden">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
