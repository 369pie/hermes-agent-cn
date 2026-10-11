'use client'

export default function Hero() {
  return (
    <div className="g">
      <div className="gc flex flex-col items-center justify-center gap-6 py-16 text-center md:py-24 col-span-full">
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <small className="font-serif text-[.9375rem] tracking-[0.1875rem] mb-4 opacity-70">
            开源免费 · MIT 协议
          </small>
          <span
            className="font-sans block text-4xl md:text-5xl font-bold mt-5"
            style={{ mixBlendMode: 'plus-lighter' }}
          >
            你的最强后盾：<br className="max-md:hidden" />全能型私人 Agent
          </span>
        </div>

        <div className="max-w-[640px] animate-slide-up" style={{ animationDelay: '0.25s' }}>
          <p className="text-[1.125rem] leading-relaxed tracking-normal normal-case opacity-60">
            在你自己的机器或服务器上运行的自主 Agent。官方网关支持微信、飞书、钉钉、企业微信、QQ、元宝等 20+
            消息平台（各平台语音、线程、流式等能力不同）。凭借持久化记忆、技能自演化与子 Agent 并行，它会随使用逐渐贴合你的工作方式。
          </p>
          <p className="text-[0.85rem] leading-relaxed tracking-normal normal-case opacity-40 mt-4">
            最新正式版{' '}
            <a
              href="https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.6"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              v0.21.6
            </a>
            （2026-10-08）· 本站为中文非官方介绍，请以{' '}
            <a
              href="https://hermes-agent.nousresearch.com/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              官方文档
            </a>
            为准
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up mt-2" style={{ animationDelay: '0.4s' }}>
          <a
            href="#install"
            className="font-mono text-[0.7rem] tracking-widest uppercase px-5 py-3 border border-[rgba(255,230,203,0.25)] hover:border-[rgba(255,230,203,0.45)] transition-colors"
          >
            安装指南
          </a>
          <a
            href="https://hermes-agent.nousresearch.com/docs/user-guide/messaging"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.7rem] tracking-widest uppercase px-5 py-3 border border-[rgba(255,230,203,0.15)] opacity-60 hover:opacity-90 transition-opacity"
          >
            消息平台文档 ↗
          </a>
        </div>
      </div>
    </div>
  )
}
