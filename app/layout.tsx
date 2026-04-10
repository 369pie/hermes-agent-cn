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
  title: 'Hermes Agent \u2014 \u4e00\u4e2a\u4e0e\u4f60\u5171\u540c\u6210\u957f\u7684 Agent | Nous Research',
  description: '\u4e00\u4e2a\u5f00\u6e90\u7684\u81ea\u4e3b Agent\uff0c\u5b83\u80fd\u5b66\u4f60\u7684\u9879\u76ee\uff0c\u8bb0\u4f4f\u5b83\u5b66\u5230\u7684\u4e00\u5207\uff0c\u8fd0\u884c\u8d8a\u4e45\u8d8a\u5f3a\u5927\u3002',
  openGraph: {
    title: 'Hermes Agent \u2014 AI Agent \u6846\u67b6',
    description: '\u4e00\u4e2a\u5f00\u6e90\u7684\u81ea\u4e3b Agent\uff0c\u5b83\u80fd\u5b66\u4f60\u7684\u9879\u76ee\uff0c\u8bb0\u4f4f\u5b83\u5b66\u5230\u7684\u4e00\u5207\uff0c\u8fd0\u884c\u8d8a\u4e45\u8d8a\u5f3a\u5927\u3002',
    type: 'website',
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
