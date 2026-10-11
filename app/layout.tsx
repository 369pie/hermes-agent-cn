import type { Metadata } from 'next'
import { Playfair_Display, Noto_Serif_SC, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import NoiseCanvas from '@/components/NoiseCanvas'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const notoSerif = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hermes Agent 中文网 — 开源自主 Agent 介绍（非官方）',
  description:
    'Hermes Agent 中文介绍站：官方网关支持微信、飞书、钉钉等企业协作平台，v0.21.6（2026-10-08），安装指南与国内模型提供商速览。请以 Nous Research 官方文档为准。',
  openGraph: {
    title: 'Hermes Agent 中文网',
    description:
      '开源 MIT 自主 Agent：持久化记忆、子 Agent 并行、MCP 与 20+ 消息平台。跟踪 v0.21.6，中文非官方介绍站。',
    type: 'website',
    url: 'https://hermes-ai-cn.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body
        className={`${playfair.variable} ${notoSerif.variable} ${inter.variable} ${jetbrains.variable} font-serif antialiased`}
      >
        {/* Background layers matching hermes site */}
        <NoiseCanvas />

        {/* z-1: Dark teal backdrop with difference blend */}
        <div
          className="pointer-events-none fixed inset-0"
          style={{
            zIndex: 1,
            backgroundColor: 'var(--background)',
            mixBlendMode: 'difference',
          }}
        />

        {/* z-2: Satellite terrain image */}
        <div
          className="pointer-events-none fixed inset-0"
          style={{
            zIndex: 2,
            mixBlendMode: 'difference',
            opacity: 0.033,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="h-[150dvh] w-auto min-w-[100dvw] object-cover invert"
            style={{ objectPosition: 'left top' }}
            src="/img/filler-bg0.jpg"
            fetchPriority="low"
          />
        </div>

        {/* z-99: Warm amber gradient overlay */}
        <div
          className="h-full w-full pointer-events-none fixed inset-0"
          style={{
            zIndex: 99,
            background: 'radial-gradient(ellipse at 0% 0%, rgba(255,189,56,0) 60%, rgba(255,189,56,0.35) 100%)',
            mixBlendMode: 'lighten',
            opacity: 0.22,
          }}
        />

        {/* Main content */}
        <main className="relative mx-auto max-w-[1600px] p-8" style={{ zIndex: 2 }}>
          {children}
        </main>
      </body>
    </html>
  )
}
