'use client'

export default function Footer() {
  return (
    <footer className="g border-b border-[rgba(255,230,203,0.15)] pb-4">
      <div className="gc border-r-0 lg:border-r">
        <small className="font-serif text-[1rem] tracking-[0.15rem] opacity-90 font-bold block mb-1">
          Hermes Agent 中文站
        </small>
        <small
          className="font-serif text-[0.85rem] tracking-[0.1rem] text-midground lowercase opacity-60"
        >
          v0.8.0 稳定版发布
        </small>
      </div>
      <div className="gc hidden md:block" />
      <div className="gc hidden lg:block" />
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
          <span className="opacity-50 ml-2">\u2197</span>
        </a>
      </div>
      <div className="gc">
        <small
          className="font-serif text-[.85rem] tracking-[0.1rem] text-midground leading-relaxed block"
          style={{ mixBlendMode: 'plus-lighter' }}
        >
          2026 \u00a9 MIT License <br />
          <span className="opacity-40 text-[0.75rem] mt-1 block"></span>
        </small>
      </div>
    </footer>
  )
}
