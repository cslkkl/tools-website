import { Metadata } from "next";

export const metadata: Metadata = { title: "隐私政策", description: "Toolbox 隐私政策——了解我们如何保护你的数据。" };

export default function ZhPrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">隐私政策</h1>
      <div className="prose max-w-none">
        <p><strong>最后更新：</strong>2026 年 5 月 24 日</p>
        <h2>我们对隐私的承诺</h2>
        <p>Toolbox 以隐私为核心设计理念。所有工具在你的浏览器中本地处理数据。我们不收集、不存储、不传输你在工具中输入的任何数据。</p>
        <h2>数据处理</h2>
        <ul>
          <li><strong>工具输入数据</strong>——你在任何工具中输入的文字、文件和数据处理均在浏览器中通过客户端 JavaScript 完成，绝不会发送到任何服务器。</li>
          <li><strong>无服务端存储</strong>——我们没有后端数据库，一切在浏览器中运行。</li>
          <li><strong>无需注册</strong>——使用任何工具都无需创建账号或提供个人信息。</li>
        </ul>
        <h2>广告</h2>
        <p>我们通过 Google AdSense 展示上下文广告。Google 可能使用 Cookie 投放广告。你可以通过访问 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google 广告设置</a>选择退出个性化广告。</p>
        <h2>第三方服务</h2>
        <p>我们的网站托管在 Vercel。Vercel 可能收集标准服务器日志（IP 地址、用户代理、请求时间）用于运维目的。</p>
        <h2>联系我们</h2>
        <p>如对本隐私政策有任何疑问，请联系我们。</p>
      </div>
    </div>
  );
}
