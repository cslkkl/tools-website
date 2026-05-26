import { Metadata } from "next";

export const metadata: Metadata = { title: "服务条款", description: "Toolbox 服务条款。" };

export default function ZhTermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">服务条款</h1>
      <div className="prose max-w-none">
        <p><strong>最后更新：</strong>2026 年 5 月 24 日</p>
        <h2>服务说明</h2>
        <p>Toolbox 提供在浏览器本地处理的免费在线工具。所有工具按"现状"提供，不附带任何形式的担保。</p>
        <h2>可接受使用</h2>
        <p>你同意不：</p>
        <ul>
          <li>将工具用于任何非法或未经授权的目的</li>
          <li>通过自动化手段试图中断或超负荷使用我们的服务</li>
          <li>上传或处理违法、有害或侵犯他人权利的内容</li>
        </ul>
        <h2>免责声明</h2>
        <p>工具按"现状"和"可用"基础提供。我们不对工具的准确性、可靠性或可用性作任何明示或暗示的保证。</p>
        <h2>联系方式</h2>
        <p>如对这些条款有任何疑问，请联系我们。</p>
      </div>
    </div>
  );
}
