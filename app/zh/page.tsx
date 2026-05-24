import { WebsiteJsonLd } from "@/components/seo/JsonLd";
import { AdBanner } from "@/components/ui/AdBanner";
import { ToolCard } from "@/components/ui/ToolCard";
import { getToolsByCategory } from "@/lib/tools/registry";
import type { ToolCategory } from "@/lib/tools/types";

const sections: { category: ToolCategory; title: string; desc: string }[] = [
  { category: "developer", title: "开发者工具", desc: "JSON格式化、Base64编解码、JWT解析、SQL格式化、正则测试等。" },
  { category: "converter", title: "转换工具", desc: "单位换算、颜色转换、时间戳、进制、文件大小转换。" },
  { category: "math", title: "数学工具", desc: "百分比、平均数、折扣、随机数、温度转换。" },
  { category: "everyday", title: "日常工具", desc: "BMI计算、年龄计算、小费计算、秒表计时器。" },
  { category: "text", title: "文本工具", desc: "字数统计、大小写转换、文本对比、Markdown编辑器、Lorem Ipsum。" },
  { category: "design", title: "设计工具", desc: "调色板生成、比例计算器。" },
  { category: "content", title: "内容工具", desc: "Meta标签生成、URL Slug、Emoji选择器。" },
  { category: "security", title: "安全工具", desc: "密码生成、Hash哈希生成。" },
  { category: "image", title: "图片工具", desc: "图片压缩，不损失画质。" },
];

export default function ZhHomePage() {
  return (
    <>
      <WebsiteJsonLd />

      <section className="mx-auto max-w-3xl px-5 pt-20 pb-10 text-center">
        <h1 className="text-[40px] sm:text-[56px] font-bold text-foreground tracking-tight leading-[1.1]">
          免费的<span className="text-primary">在线工具</span>
        </h1>
        <p className="mt-4 text-[17px] text-muted-foreground leading-relaxed max-w-xl mx-auto">
          39 个免费在线工具，覆盖开发、设计、学习和日常需求。所有处理都在浏览器本地完成，无需注册。
        </p>
      </section>

      <AdBanner slot="HOME_TOP" format="horizontal" />

      <div className="mx-auto max-w-5xl px-5 pb-16 space-y-14">
        {sections.map(({ category, title, desc }) => {
          const tools = getToolsByCategory(category);
          if (tools.length === 0) return null;
          return (
            <section key={category}>
              <div className="mb-4">
                <h2 className="text-[22px] font-semibold text-foreground tracking-tight">{title}</h2>
                <p className="text-[14px] text-muted-foreground mt-1">{desc}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {tools.map(tool => <ToolCard key={tool.id} tool={tool} />)}
              </div>
            </section>
          );
        })}
      </div>

      <AdBanner slot="HOME_BOTTOM" format="auto" />

      <section className="mx-auto max-w-3xl px-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: "🔒", title: "隐私安全", desc: "所有工具都在浏览器本地运行，你的数据不会上传到任何服务器。" },
            { icon: "⚡", title: "即开即用", desc: "无需等待，无需加载。结果随输入即时显示。" },
            { icon: "🆓", title: "完全免费", desc: "无需账号，无需订阅，无使用限制。只做有用的工具。" },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <span className="text-[28px]">{item.icon}</span>
              <h3 className="mt-3 text-[17px] font-semibold text-foreground tracking-tight">{item.title}</h3>
              <p className="mt-2 text-[14px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
