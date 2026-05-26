import { Metadata } from "next";

export const metadata: Metadata = { title: "关于 Toolbox", description: "免费、注重隐私的在线工具集合。所有工具均在你浏览器本地运行。" };

export default function ZhAboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">关于 Toolbox</h1>
      <div className="prose max-w-none">
        <p>Toolbox 是一系列面向开发者和日常用户的免费在线工具。我们相信好用的工具应该是免费、快速且尊重隐私的。</p>
        <h2>我们的使命</h2>
        <p>提供最好的免费在线工具，全部在浏览器本地运行。不收集数据、不跟踪用户、不需要注册——只有能用的工具。</p>
        <h2>我们的原则</h2>
        <ul>
          <li><strong>隐私第一</strong>——所有工具均在你浏览器中使用 JavaScript 本地处理数据，数据绝不离开你的设备。</li>
          <li><strong>永久免费</strong>——所有工具均可免费使用，通过少量不追踪用户的展示广告维持运营。</li>
          <li><strong>快速简洁</strong>——没有多余的界面、无需注册、没有不必要的功能。只有好用的工具。</li>
        </ul>
        <h2>联系我们</h2>
        <p>有工具建议或发现了 bug？欢迎联系我们。</p>
      </div>
    </div>
  );
}
