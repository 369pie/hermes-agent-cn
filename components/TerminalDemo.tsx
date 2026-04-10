'use client'

import { useEffect, useRef, useState } from 'react'

const demoLines = [
  { type: 'user', text: 'Hermes，帮我汇总一下今天“飞书产研群”里提到了哪些线上异常，并分析可能的原因。' },
  { type: 'agent', text: '收到，正在为您调取关联频道的今日消息流分析...' },
  { type: 'agent', text: '\n分析完成。今天群内讨论主要集中在 2 个核心问题：\n\n1. 14:30 - [交易链路] 调用微信支付接口时出现 504 Gateway Timeout\n2. 16:15 - [用户中心] 会员服务无法拉取鉴权配置列表' },
  { type: 'agent', text: '\n\n诊断建议与自动排查路径：\n- 支付延时：怀疑与近期海外云网关 BGP 线路波动管控相关，建议查阅网关日志。\n- 权限列表：高概率为 Redis 集群主从状态同步延迟。\n\n是否需要我自动为您生成一份完整的线上运维复盘工单并推送到钉钉架构群？' },
]

export default function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (visibleLines < demoLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1)
      }, 1000 + visibleLines * 600)
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [visibleLines])

  return (
    <div id="demo" className="g">
      <div className="gc col-span-full lg:col-span-1">
        <hgroup className="flex flex-col gap-2">
          <small className="font-serif text-[.9375rem] tracking-[0.1875rem]">
            <span className="font-sans font-bold">中国区开发者真实体验评析</span>
          </small>
        </hgroup>

        <div className="mt-3 border-4 border-double border-inherit rounded-sm">
          <div className="flex items-center gap-3 border-b border-[rgba(255,230,203,0.1)] px-3 py-2 bg-[rgba(4,28,28,0.3)]">
            <div className="flex gap-1.5">
              <span className="size-2 rounded-full bg-[#ff5f56]" />
              <span className="size-2 rounded-full bg-[#ffbd2e]" />
              <span className="size-2 rounded-full bg-[#27c93f]" />
            </div>
            <span className="font-mono text-[0.625rem] tracking-widest uppercase opacity-50 ml-2">
              Hermes Agent Terminal
            </span>
          </div>

          <div
            ref={containerRef}
            className="h-[320px] overflow-x-hidden overflow-y-auto whitespace-pre-wrap p-5 font-mono text-[0.8rem] leading-[1.8] normal-case bg-[rgba(4,28,28,0.6)]"
          >
            {demoLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className={`mb-3 ${line.type === 'user' ? 'opacity-80' : ''}`}>
                <span className={line.type === 'user' ? 'text-midground' : 'text-[#a2e7cd]'} style={line.type === 'agent' ? { mixBlendMode: 'plus-lighter' } : {}}>
                  {line.type === 'user' ? '> ' : ''}
                  {line.text}
                </span>
              </div>
            ))}
            {visibleLines < demoLines.length && (
              <span className="inline-block dither ml-0.5 h-[1em] w-[1ch] animate-pulse" />
            )}
          </div>
        </div>
      </div>

      <div
        className="gc relative hidden border-l-0 lg:block overflow-hidden"
        style={{ backgroundColor: 'var(--background)' }}
      >
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/img/filler-bg0.jpg"
            className="h-full w-full object-cover transition-transform duration-[20s] hover:scale-110"
            style={{ mixBlendMode: 'overlay', filter: 'hue-rotate(20deg) saturate(1.8) contrast(1.2)' }}
          />
        </div>
        <small
          className="font-serif text-[.9375rem] tracking-[0.1875rem] absolute right-6 bottom-6 z-10 px-3 py-1 rounded bg-black/50 backdrop-blur"
          style={{ color: '#ffe6cb', fontStyle: 'italic' }}
        >
          深耕代码，洞察业务
        </small>
      </div>
    </div>
  )
}
