'use client'

import { useState } from 'react'

const installCmd = 'curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash'
const configCmd = 'hermes setup'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="font-mono cursor-pointer border-none bg-transparent text-[0.6875rem] tracking-widest uppercase hover:text-midground tap-highlight-transparent min-h-[44px] min-w-[44px] transition-colors flex items-center justify-center opacity-60"
    >
      {copied ? '已复制' : '复制'}
    </button>
  )
}

export default function Hero() {
  return (
    <div className="g">
      <div className="gc flex flex-col items-center justify-center gap-6 py-16 text-center md:py-24 col-span-full">
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <small className="font-serif text-[.9375rem] tracking-[0.1875rem] mb-4 opacity-70">
            完全开源 · 为国内环境深度优化
          </small>
          <span
            className="font-sans block text-4xl md:text-5xl font-bold mt-5"
            style={{ mixBlendMode: 'plus-lighter' }}
          >
            你的最强后盾：<br className="max-md:hidden" />全能型私人 Agent
          </span>
        </div>

        <div className="max-w-[600px] animate-slide-up" style={{ animationDelay: '0.25s' }}>
          <p className="text-[1.125rem] leading-relaxed tracking-normal normal-case opacity-60">
            打破平台护城河的限制。由私有服务器驱动，原生无缝对接微信、飞书、钉钉。凭借持久化记忆与自动构建的技能库，它将逐渐进化为最懂你的数字分身。
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 animate-slide-up w-full mt-4" style={{ animationDelay: '0.4s' }}>
          <div className="flex w-full min-w-0 max-w-[520px] flex-col gap-5 text-left">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <small className="font-serif text-[.9375rem] tracking-[0.1875rem] opacity-50">
                  1. 一键安装 <span className="opacity-50 text-[12px] font-sans ml-2">(支持国内网络直连优化)</span>
                </small>
                <CopyButton text={installCmd} />
              </div>
              <div className="bg-[rgba(4,28,28,0.4)] font-mono border border-[rgba(255,230,203,0.15)] px-3 py-3 text-[0.75rem] leading-relaxed lowercase">
                <code className="break-all">{installCmd}</code>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <small className="font-serif text-[.9375rem] tracking-[0.1875rem] opacity-50">
                  2. 交互式配置
                </small>
                <CopyButton text={configCmd} />
              </div>
              <div className="bg-[rgba(4,28,28,0.4)] font-mono border border-[rgba(255,230,203,0.15)] px-3 py-3 text-[0.75rem] leading-relaxed lowercase">
                <code className="break-all">{configCmd}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
