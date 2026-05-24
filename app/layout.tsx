import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Online Toolbox — Free Online Developer Tools",
    template: "%s | Online Toolbox",
  },
  description:
    "Free online tools for developers: JSON formatter, Base64 encoder, URL encoder, QR code generator, password generator, and more. All tools run locally in your browser. No data is ever uploaded.",
  keywords: [
    "online tools",
    "developer tools",
    "free online tools",
    "JSON formatter",
    "Base64 encoder",
    "QR code generator",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Online Toolbox",
    title: "Online Toolbox — Free Online Developer Tools",
    description:
      "Free online tools for developers. All processing happens in your browser.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Toolbox — Free Online Developer Tools",
    description:
      "Free online tools for developers. All processing happens in your browser.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
