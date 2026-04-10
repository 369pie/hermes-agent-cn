'use client'

import { useState } from 'react'

const navLinks = [
  { label: '中文文档', href: '/docs' },
  { label: 'GitHub', href: 'https://github.com/NousResearch/hermes-agent', external: true },
  { label: '加入社群', href: '#', external: false }, 
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="g hidden border-t border-b border-[rgba(255,230,203,0.15)] lg:grid">
        <a className="gc" href="/">
          <h2
            className="font-sans text-[2.625rem] leading-[1] tracking-[0.0525rem] font-bold"
            style={{ mixBlendMode: 'plus-lighter' }}
          >
            Hermes<br />Agent
          </h2>
        </a>

        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
            className="gc group relative cursor-pointer"
          >
            <small className="font-serif text-[.9375rem] tracking-[0.1875rem]">
              {link.label}
            </small>
            <span className="absolute inset-1 bg-midground pointer-events-none transition-opacity duration-250 group-hover:opacity-5 opacity-0" />
          </a>
        ))}

        <div className="gc flex items-start justify-between">
          <small className="font-serif text-[.9375rem] tracking-[0.1875rem] opacity-50">
            主题
          </small>
        </div>
      </header>

      <header className="flex items-center justify-between border border-[rgba(255,230,203,0.15)] p-4 lg:hidden">
        <a href="/">
          <h2
            className="font-sans text-[2.625rem] leading-[1] tracking-[0.0525rem] font-bold"
            style={{ mixBlendMode: 'plus-lighter' }}
          >
            Hermes<br />Agent
          </h2>
        </a>
        <button
          aria-label="打开菜单"
          className="relative z-50 cursor-pointer bg-transparent p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="size-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewBox="0 0 24 24">
            {menuOpen ? (
              <>
                <line x1="6" x2="18" y1="6" y2="18" />
                <line x1="6" x2="18" y1="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" x2="20" y1="8" y2="8" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="16" y2="16" />
              </>
            )}
          </svg>
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm lg:hidden" style={{ zIndex: 40 }}>
          <div className="flex flex-col gap-6 p-8 pt-24">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
                className="font-serif text-xl tracking-[0.1875rem]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
