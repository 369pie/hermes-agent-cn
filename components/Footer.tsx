'use client'

const officialLinks = [
  { label: 'GitHub 仓库', href: 'https://github.com/NousResearch/hermes-agent' },
  { label: '官方文档', href: 'https://hermes-agent.nousresearch.com/docs/' },
  { label: 'Nous Portal', href: 'https://portal.nousresearch.com' },
  { label: 'Discord 社群', href: 'https://discord.gg/NousResearch' },
]

export default function Footer() {
  return (
    <footer className="g border-b border-[rgba(255,230,203,0.15)] pb-4">
      <div className="gc border-r-0 lg:border-r col-span-full lg:col-span-2">
        <small className="font-serif text-[1rem] tracking-[0.15rem] opacity-90 font-bold block mb-1">
          Hermes Agent 中文站
        </small>
        <small className="font-serif text-[0.85rem] tracking-[0.1rem] text-midground normal-case opacity-60 block mb-2">
          非 Nous Research 官方网站 · 内容整理自公开文档与 Releases
        </small>
        <small
          className="font-serif text-[0.85rem] tracking-[0.1rem] text-midground lowercase opacity-60"
        >
          跟踪版本 v0.21.6（2026-10-08）
        </small>
      </div>
      <div className="gc col-span-full lg:col-span-2">
        <small className="font-serif text-[.9rem] tracking-[0.12rem] opacity-50 block mb-2">
          官方链接
        </small>
        <ul className="flex flex-col gap-2">
          {officialLinks.map((link) => (
            <li key={link.href}>
              <a
                className="transition-opacity hover:opacity-70 flex items-center justify-between normal-case text-[0.85rem] opacity-70"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-serif tracking-[0.1rem]">{link.label}</span>
                <span className="opacity-50 ml-2">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="gc border-r-0 lg:border-r">
        <a
          className="transition-opacity hover:opacity-70 flex items-center justify-between"
          href="https://nousresearch.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <small className="font-serif text-[.9rem] tracking-[0.15rem] opacity-70">
            Nous Research
          </small>
          <span className="opacity-50 ml-2">↗</span>
        </a>
      </div>
      <div className="gc">
        <small
          className="font-serif text-[.85rem] tracking-[0.1rem] text-midground leading-relaxed block normal-case"
          style={{ mixBlendMode: 'plus-lighter' }}
        >
          2026 © 本站页面 MIT License（与 Hermes Agent 上游协议一致）<br />
          <span className="opacity-40 text-[0.75rem] mt-1 block">页面信息截至 2026-10-11</span>
        </small>
      </div>
    </footer>
  )
}
