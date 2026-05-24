import { ToolDefinition, ToolCategory } from "./types";

export const tools: ToolDefinition[] = [
  {
    id: "json-formatter",
    slug: "json-formatter",
    name: "JSON Formatter",
    shortDescription: "Format, validate, and beautify JSON data",
    description:
      "Free online JSON formatter. Format, validate, and beautify your JSON code with syntax highlighting. All processing happens in your browser.",
    category: "developer",
    icon: "{ }",
    keywords: [
      "JSON formatter",
      "JSON beautifier",
      "JSON validator",
      "online JSON formatter",
    ],
    publishedAt: "2026-01-15",
  },
  {
    id: "base64-encoder",
    slug: "base64-encoder",
    name: "Base64 Encoder / Decoder",
    shortDescription: "Encode and decode Base64 strings",
    description:
      "Free online Base64 encoder and decoder. Convert text to Base64 and decode Base64 back to text instantly in your browser.",
    category: "developer",
    icon: "64",
    keywords: [
      "Base64 encoder",
      "Base64 decoder",
      "Base64 encode online",
      "Base64 decode online",
    ],
    publishedAt: "2026-01-15",
  },
  {
    id: "url-encoder",
    slug: "url-encoder",
    name: "URL Encoder / Decoder",
    shortDescription: "Encode and decode URL strings",
    description:
      "Free online URL encoder and decoder. URL-encode special characters or decode percent-encoded URLs back to plain text.",
    category: "developer",
    icon: "%",
    keywords: [
      "URL encoder",
      "URL decoder",
      "URL encode online",
      "URL decode online",
    ],
    publishedAt: "2026-01-16",
  },
  {
    id: "uuid-generator",
    slug: "uuid-generator",
    name: "UUID Generator",
    shortDescription: "Generate random UUIDs",
    description:
      "Free online UUID generator. Generate random UUID v4 identifiers instantly. Generate single or multiple UUIDs at once.",
    category: "developer",
    icon: "#",
    keywords: [
      "UUID generator",
      "GUID generator",
      "generate UUID online",
      "UUID v4 generator",
    ],
    publishedAt: "2026-01-16",
  },
  {
    id: "password-generator",
    slug: "password-generator",
    name: "Password Generator",
    shortDescription: "Generate strong random passwords",
    description:
      "Free online password generator. Create strong, secure random passwords with customizable length and character sets.",
    category: "security",
    icon: "**",
    keywords: [
      "password generator",
      "strong password generator",
      "random password generator",
      "secure password generator",
    ],
    publishedAt: "2026-01-18",
  },
  {
    id: "word-counter",
    slug: "word-counter",
    name: "Word Counter",
    shortDescription: "Count words, characters, and sentences",
    description:
      "Free online word counter. Count words, characters, sentences, paragraphs, and estimate reading time for any text.",
    category: "text",
    icon: "W",
    keywords: [
      "word counter",
      "character counter",
      "word count online",
      "character count tool",
    ],
    publishedAt: "2026-01-18",
  },
  {
    id: "qr-code-generator",
    slug: "qr-code-generator",
    name: "QR Code Generator",
    shortDescription: "Generate QR codes from text or URLs",
    description:
      "Free online QR code generator. Create QR codes from text, URLs, or any data. Download as PNG image.",
    category: "converter",
    icon: "[QR]",
    keywords: [
      "QR code generator",
      "QR code maker",
      "free QR code generator",
      "generate QR code online",
    ],
    publishedAt: "2026-01-20",
  },
  {
    id: "text-diff",
    slug: "text-diff",
    name: "Text Diff Checker",
    shortDescription: "Compare and find differences between texts",
    description:
      "Free online text diff checker. Compare two texts side by side and find differences instantly with highlighted changes.",
    category: "text",
    icon: "<>",
    keywords: [
      "text diff",
      "diff checker",
      "text compare",
      "online diff tool",
    ],
    publishedAt: "2026-01-20",
  },
  {
    id: "image-compressor",
    slug: "image-compressor",
    name: "Image Compressor",
    shortDescription: "Compress images without losing quality",
    description:
      "Free online image compressor. Reduce image file size while maintaining quality. All processing happens locally in your browser.",
    category: "image",
    icon: "[IMG]",
    keywords: [
      "image compressor",
      "compress image online",
      "reduce image size",
      "image optimizer",
    ],
    publishedAt: "2026-01-22",
  },
  {
    id: "markdown-editor",
    slug: "markdown-editor",
    name: "Markdown Editor",
    shortDescription: "Write and preview Markdown in real time",
    description:
      "Free online Markdown editor with live preview. Write Markdown and see the rendered HTML instantly.",
    category: "text",
    icon: "MD",
    keywords: ["Markdown editor","online Markdown editor","Markdown preview","Markdown to HTML"],
    publishedAt: "2026-01-22",
  },
  {
    id: "jwt-decoder",
    slug: "jwt-decoder",
    name: "JWT Decoder",
    shortDescription: "Decode JWT tokens and inspect claims",
    description:
      "Free online JWT decoder. Decode JWT tokens to view header, payload, and signature. All processing happens locally in your browser.",
    category: "developer",
    icon: "JWT",
    keywords: ["JWT decoder","JWT parser","decode JWT","JWT token viewer"],
    publishedAt: "2026-01-25",
  },
  {
    id: "color-converter",
    slug: "color-converter",
    name: "Color Converter",
    shortDescription: "Convert between HEX, RGB, and HSL formats",
    description:
      "Free online color converter. Convert colors between HEX, RGB, and HSL formats with live preview. Useful for designers and developers.",
    category: "converter",
    icon: "🎨",
    keywords: ["color converter","HEX to RGB","RGB to HSL","color picker online"],
    publishedAt: "2026-01-25",
  },
  {
    id: "timestamp-converter",
    slug: "timestamp-converter",
    name: "Timestamp Converter",
    shortDescription: "Convert Unix timestamps to human-readable dates",
    description:
      "Free online timestamp converter. Convert Unix timestamps to human-readable dates and vice versa. Supports seconds and milliseconds.",
    category: "developer",
    icon: "⏱",
    keywords: ["timestamp converter","Unix timestamp","epoch converter","timestamp to date"],
    publishedAt: "2026-01-26",
  },
  {
    id: "lorem-ipsum",
    slug: "lorem-ipsum",
    name: "Lorem Ipsum Generator",
    shortDescription: "Generate placeholder text for designs and mockups",
    description:
      "Free online Lorem Ipsum generator. Generate placeholder text with customizable length for your designs, mockups, and prototypes.",
    category: "text",
    icon: "Li",
    keywords: ["Lorem Ipsum generator","placeholder text","dummy text generator","filler text"],
    publishedAt: "2026-01-26",
  },
  {
    id: "regex-tester",
    slug: "regex-tester",
    name: "Regex Tester",
    shortDescription: "Test regular expressions with live matching",
    description:
      "Free online regular expression tester. Test regex patterns against text with live highlighting of matches and capture groups.",
    category: "developer",
    icon: ".*",
    keywords: ["regex tester","regex test online","regular expression tester","regex checker"],
    publishedAt: "2026-01-27",
  },
  {
    id: "html-entity",
    slug: "html-entity",
    name: "HTML Entity Encoder / Decoder",
    shortDescription: "Encode and decode HTML entities",
    description:
      "Free online HTML entity encoder and decoder. Convert special characters to HTML entities and decode them back to plain text.",
    category: "developer",
    icon: "<>",
    keywords: ["HTML entity encoder","HTML entity decoder","HTML encode online","HTML decode online"],
    publishedAt: "2026-01-27",
  },
  {
    id: "number-base",
    slug: "number-base",
    name: "Number Base Converter",
    shortDescription: "Convert between binary, octal, decimal, and hex",
    description:
      "Free online number base converter. Convert numbers between binary, octal, decimal, and hexadecimal formats instantly.",
    category: "converter",
    icon: "0x",
    keywords: ["number base converter","binary to hex","decimal to binary","hex converter"],
    publishedAt: "2026-01-28",
  },
];

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getAllTools(): ToolDefinition[] {
  return tools;
}

export function getToolsByCategory(category: ToolCategory): ToolDefinition[] {
  return tools.filter((t) => t.category === category);
}

export function getRelatedTools(
  slug: string,
  limit: number = 4
): ToolDefinition[] {
  const tool = getToolBySlug(slug);
  if (!tool) return [];
  return tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return tools.map((t) => t.slug);
}

export function getCategoryLabel(category: ToolCategory): string {
  const labels: Record<ToolCategory, string> = {
    developer: "Developer Tools",
    text: "Text Tools",
    image: "Image Tools",
    security: "Security Tools",
    converter: "Converter Tools",
  };
  return labels[category];
}
