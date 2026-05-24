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
    icon: "diff",
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
  // === NEW TOOLS BATCH 1 ===
  {
    id: "unit-converter", slug: "unit-converter", name: "Unit Converter",
    shortDescription: "Convert between length, weight, temperature, and more",
    description: "Free online unit converter. Convert between length, weight, temperature, area, volume, speed, and data units instantly.",
    category: "converter", icon: "↔", keywords: ["unit converter","length converter","weight converter","temperature converter"], publishedAt: "2026-02-01",
  },
  {
    id: "hash-generator", slug: "hash-generator", name: "Hash Generator",
    shortDescription: "Generate MD5, SHA-1, SHA-256, SHA-512 hashes",
    description: "Free online hash generator. Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text input. All processing happens in your browser.",
    category: "security", icon: "#️⃣", keywords: ["hash generator","MD5 generator","SHA256 generator","hash online"], publishedAt: "2026-02-01",
  },
  {
    id: "case-converter", slug: "case-converter", name: "Case Converter",
    shortDescription: "Convert text to uppercase, lowercase, title case, and more",
    description: "Free online case converter. Transform text between uppercase, lowercase, title case, sentence case, camelCase, and snake_case instantly.",
    category: "text", icon: "Aa", keywords: ["case converter","uppercase converter","lowercase converter","title case"], publishedAt: "2026-02-01",
  },
  {
    id: "percentage-calculator", slug: "percentage-calculator", name: "Percentage Calculator",
    shortDescription: "Calculate percentages quickly and easily",
    description: "Free online percentage calculator. Calculate percentages, percentage change, percentage of a number, and find the original value before percentage.",
    category: "math", icon: "%", keywords: ["percentage calculator","percent calculator","percentage change","calculate percentage"], publishedAt: "2026-02-02",
  },
  {
    id: "bmi-calculator", slug: "bmi-calculator", name: "BMI Calculator",
    shortDescription: "Calculate your Body Mass Index instantly",
    description: "Free online BMI calculator. Calculate your Body Mass Index (BMI) using metric or imperial units. Understand your weight category based on WHO guidelines.",
    category: "everyday", icon: "⚖", keywords: ["BMI calculator","body mass index","BMI chart","BMI calculator online"], publishedAt: "2026-02-02",
  },
  {
    id: "age-calculator", slug: "age-calculator", name: "Age Calculator",
    shortDescription: "Calculate your exact age in years, months, and days",
    description: "Free online age calculator. Calculate your exact age between any two dates. See your age in years, months, days, and total days.",
    category: "everyday", icon: "🎂", keywords: ["age calculator","date calculator","how old am I","days between dates"], publishedAt: "2026-02-03",
  },
  {
    id: "color-palette", slug: "color-palette", name: "Color Palette Generator",
    shortDescription: "Generate beautiful color palettes for your designs",
    description: "Free online color palette generator. Create harmonious color schemes using complementary, analogous, triadic, and monochromatic color harmonies.",
    category: "design", icon: "🎨", keywords: ["color palette generator","color scheme","color palette","design palette"], publishedAt: "2026-02-03",
  },
  {
    id: "sql-formatter", slug: "sql-formatter", name: "SQL Formatter",
    shortDescription: "Format and beautify SQL queries",
    description: "Free online SQL formatter. Beautify and format your SQL queries with proper indentation and capitalization. Supports SELECT, INSERT, UPDATE, and more.",
    category: "developer", icon: "SQL", keywords: ["SQL formatter","SQL beautifier","format SQL","SQL pretty print"], publishedAt: "2026-02-04",
  },
  {
    id: "json-to-csv", slug: "json-to-csv", name: "JSON to CSV Converter",
    shortDescription: "Convert JSON data to CSV format",
    description: "Free online JSON to CSV converter. Transform JSON arrays into CSV format for spreadsheet import. Supports nested objects with flattening.",
    category: "developer", icon: "→", keywords: ["JSON to CSV","convert JSON to CSV","JSON to Excel","JSON converter"], publishedAt: "2026-02-04",
  },
  // === NEW TOOLS BATCH 2 ===
  {
    id: "tip-calculator", slug: "tip-calculator", name: "Tip Calculator",
    shortDescription: "Calculate restaurant tips and split bills",
    description: "Free online tip calculator. Calculate tips based on percentage, split the bill among friends, and see the total per person instantly.",
    category: "everyday", icon: "💰", keywords: ["tip calculator","restaurant tip","bill splitter","gratuity calculator"], publishedAt: "2026-02-05",
  },
  {
    id: "discount-calculator", slug: "discount-calculator", name: "Discount Calculator",
    shortDescription: "Calculate sale prices and discounts",
    description: "Free online discount calculator. Calculate the final price after a percentage discount, find out how much you save, and compare before/after prices.",
    category: "math", icon: "🏷", keywords: ["discount calculator","sale price calculator","percent off calculator","discount percentage"], publishedAt: "2026-02-05",
  },
  {
    id: "average-calculator", slug: "average-calculator", name: "Average Calculator",
    shortDescription: "Calculate mean, median, mode, and range",
    description: "Free online average calculator. Calculate the mean, median, mode, and range for a set of numbers. Useful for students, teachers, and data analysis.",
    category: "math", icon: "Σ", keywords: ["average calculator","mean calculator","median calculator","mode calculator"], publishedAt: "2026-02-06",
  },
  {
    id: "temperature-converter", slug: "temperature-converter", name: "Temperature Converter",
    shortDescription: "Convert between Celsius, Fahrenheit, and Kelvin",
    description: "Free online temperature converter. Convert temperatures between Celsius, Fahrenheit, and Kelvin instantly. Perfect for cooking, science, and travel.",
    category: "math", icon: "🌡", keywords: ["temperature converter","Celsius to Fahrenheit","Fahrenheit to Celsius","Kelvin converter"], publishedAt: "2026-02-06",
  },
  {
    id: "text-to-slug", slug: "text-to-slug", name: "Text to Slug Converter",
    shortDescription: "Generate URL-friendly slugs from text",
    description: "Free online text to URL slug converter. Transform any text into a clean, URL-friendly slug. Perfect for blog posts, CMS entries, and file names.",
    category: "content", icon: "🔗", keywords: ["text to slug","URL slug generator","slugify","URL converter"], publishedAt: "2026-02-07",
  },
  {
    id: "yaml-to-json", slug: "yaml-to-json", name: "YAML to JSON Converter",
    shortDescription: "Convert YAML to JSON and vice versa",
    description: "Free online YAML to JSON converter. Convert between YAML and JSON formats instantly. Perfect for configuration files, API development, and DevOps workflows.",
    category: "developer", icon: "YJ", keywords: ["YAML to JSON","JSON to YAML","YAML converter","YAML parser"], publishedAt: "2026-02-07",
  },
  {
    id: "css-minifier", slug: "css-minifier", name: "CSS Minifier",
    shortDescription: "Minify CSS code to reduce file size",
    description: "Free online CSS minifier. Compress your CSS code by removing whitespace, comments, and unnecessary characters. Reduce file size for faster page loads.",
    category: "developer", icon: "CSS", keywords: ["CSS minifier","CSS compressor","minify CSS","CSS minify online"], publishedAt: "2026-02-08",
  },
  {
    id: "aspect-ratio", slug: "aspect-ratio", name: "Aspect Ratio Calculator",
    shortDescription: "Calculate aspect ratios for images and videos",
    description: "Free online aspect ratio calculator. Calculate the perfect dimensions for images, videos, and screens. Supports common ratios like 16:9, 4:3, and 1:1.",
    category: "design", icon: "📐", keywords: ["aspect ratio calculator","16:9 calculator","image ratio","screen ratio calculator"], publishedAt: "2026-02-08",
  },
  {
    id: "stopwatch", slug: "stopwatch", name: "Stopwatch & Timer",
    shortDescription: "Online stopwatch and countdown timer",
    description: "Free online stopwatch and countdown timer. Track time with precision, set countdowns, and record lap times. Works entirely in your browser.",
    category: "everyday", icon: "⏱", keywords: ["stopwatch","online timer","countdown timer","lap timer"], publishedAt: "2026-02-09",
  },
  // === NEW TOOLS BATCH 3 ===
  {
    id: "meta-tag-generator", slug: "meta-tag-generator", name: "Meta Tag Generator",
    shortDescription: "Generate SEO meta tags for your website",
    description: "Free online meta tag generator. Create complete SEO meta tags including title, description, Open Graph, and Twitter Card tags for your web pages.",
    category: "content", icon: "🏷", keywords: ["meta tag generator","SEO meta tags","Open Graph generator","meta tags"], publishedAt: "2026-02-10",
  },
  {
    id: "emoji-picker", slug: "emoji-picker", name: "Emoji Picker",
    shortDescription: "Browse, search, and copy emojis",
    description: "Free online emoji picker. Browse hundreds of emojis by category, search by keyword, and copy to clipboard with one click. Works on all devices.",
    category: "content", icon: "😀", keywords: ["emoji picker","emoji copy paste","emoji keyboard","emoji list"], publishedAt: "2026-02-10",
  },
  {
    id: "random-number", slug: "random-number", name: "Random Number Generator",
    shortDescription: "Generate random numbers within a range",
    description: "Free online random number generator. Generate random integers or decimals within a custom range. Useful for games, raffles, sampling, and testing.",
    category: "math", icon: "🎲", keywords: ["random number generator","RNG","random integer","pick random number"], publishedAt: "2026-02-11",
  },
  {
    id: "file-size-converter", slug: "file-size-converter", name: "File Size Converter",
    shortDescription: "Convert between KB, MB, GB, TB, and PB",
    description: "Free online file size converter. Convert between bytes, kilobytes, megabytes, gigabytes, terabytes, and petabytes. Essential for developers and IT professionals.",
    category: "converter", icon: "💾", keywords: ["file size converter","KB to MB","GB to MB","byte converter"], publishedAt: "2026-02-11",
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
    math: "Math Tools",
    everyday: "Everyday Tools",
    design: "Design Tools",
    content: "Content Tools",
  };
  return labels[category];
}
