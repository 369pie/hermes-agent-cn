'use client'

const highlights = [
  '首个走新稳定发布流水线的版本；Docker 镜像 nousresearch/hermes-agent:stable / :latest',
  'Dashboard 认证与安全相关修复（含 Tenable Research 报告项）',
  '窗口内未逐条列出的能力包括：实时语音转写 stt.streaming、插件 host 隔离、本地模型 / llama.cpp CUDA、Kanban 统一工作流等',
  '官方称 v0.22.0 将发布更完整的策划版更新日志（截至调研日尚未发布）',
]

const sources = [
  { label: 'GitHub Releases', href: 'https://github.com/NousResearch/hermes-agent/releases' },
  { label: '官方文档', href: 'https://hermes-agent.nousresearch.com/docs/' },
  { label: 'README', href: 'https://github.com/NousResearch/hermes-agent' },
]

export default function LatestNews() {
  return (
    <div id="news" className="g">
      <div className="gc col-span-full">
        <hgroup className="flex flex-col gap-2">
          <small className="font-serif text-[.9375rem] tracking-[0.1875rem]">
            <span className="font-sans font-bold">最新动态</span>
          </small>
          <p className="text-[0.85rem] leading-relaxed tracking-normal normal-case opacity-50 max-w-[720px]">
            数据截至 2026-10-11，整理自官方 GitHub Releases 与文档；本站为中文非官方介绍站，请以官方渠道为准。
          </p>
        </hgroup>
      </div>

      <div className="gc col-span-full lg:col-span-2 p-6">
        <div className="flex flex-col gap-3 animate-slide-up">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span
              className="font-sans text-2xl font-bold tracking-normal normal-case"
              style={{ mixBlendMode: 'plus-lighter' }}
            >
              v0.21.6
            </span>
            <span className="font-mono text-[0.75rem] tracking-widest uppercase opacity-50">
              发布日期 2026-10-08
            </span>
          </div>
          <p className="text-[1rem] leading-relaxed tracking-normal normal-case opacity-60">
            补丁版本，汇总 v0.21.5 以来约 2,100 个 PR。桌面端、Termux 与微软商店渠道未随此版同步更新（见 Release 说明）。
          </p>
          <ul className="list-none flex flex-col gap-2 mt-1">
            {highlights.map((item, i) => (
              <li
                key={i}
                className="text-[0.9rem] leading-relaxed tracking-normal normal-case opacity-60 pl-3 border-l border-[rgba(255,230,203,0.2)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="gc col-span-full lg:col-span-1 p-6">
        <small className="font-serif text-[.9375rem] tracking-[0.1875rem] opacity-70 block mb-3">
          数据来源
        </small>
        <ul className="flex flex-col gap-2">
          {sources.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.85rem] tracking-normal normal-case opacity-60 hover:opacity-90 transition-opacity underline underline-offset-4 decoration-[rgba(255,230,203,0.25)]"
              >
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[0.75rem] leading-relaxed tracking-normal normal-case opacity-40 mt-6">
          前序版本：v0.21.5（2026-09-24）、v0.21.0 Pantheon（2026-08-31）等，详见 Releases 页。
        </p>
      </div>
    </div>
  )
}
