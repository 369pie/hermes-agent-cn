'use client'

import { useState } from 'react'

const installOptions = [
  {
    id: 'unix',
    label: 'Linux / macOS / WSL2',
    cmd: 'curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash',
  },
  {
    id: 'windows',
    label: 'Windows（原生 PowerShell）',
    cmd: 'iex (irm https://hermes-agent.nousresearch.com/install.ps1)',
  },
  {
    id: 'docker',
    label: 'Docker',
    cmd: 'docker pull nousresearch/hermes-agent',
  },
]

const afterInstall = [
  { label: '完整配置向导', cmd: 'hermes setup' },
  { label: 'Nous Portal + Tool Gateway（一次 OAuth）', cmd: 'hermes setup --portal' },
]

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

export default function InstallGuide() {
  const [active, setActive] = useState(installOptions[0].id)
  const current = installOptions.find((o) => o.id === active) ?? installOptions[0]

  return (
    <div id="install" className="g">
      <div className="gc col-span-full">
        <hgroup className="flex flex-col gap-2">
          <small className="font-serif text-[.9375rem] tracking-[0.1875rem]">
            <span className="font-sans font-bold">安装与首次配置</span>
          </small>
          <p className="text-[0.9rem] leading-relaxed tracking-normal normal-case opacity-50 max-w-[800px]">
            命令来自{' '}
            <a
              href="https://hermes-agent.nousresearch.com/docs/getting-started/installation"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 opacity-70 hover:opacity-100"
            >
              官方安装文档
            </a>
            。另可选 Hermes Desktop（Windows / macOS 安装包，见{' '}
            <a
              href="https://hermes-agent.nousresearch.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 opacity-70 hover:opacity-100"
            >
              hermes-agent.nousresearch.com
            </a>
            ）、Android aarch64 Termux APT 仓库、Nix/NixOS 等。
          </p>
        </hgroup>
      </div>

      <div className="gc col-span-full lg:col-span-2 p-6 pt-2">
        <div className="flex flex-wrap gap-2 mb-4">
          {installOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setActive(opt.id)}
              className={`font-mono text-[0.65rem] tracking-widest uppercase px-3 py-2 border transition-colors ${
                active === opt.id
                  ? 'border-[rgba(255,230,203,0.4)] bg-[rgba(4,28,28,0.5)]'
                  : 'border-[rgba(255,230,203,0.15)] opacity-50 hover:opacity-80'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <small className="font-serif text-[.9375rem] tracking-[0.1875rem] opacity-50">
            1. 安装
          </small>
          <CopyButton text={current.cmd} />
        </div>
        <div className="bg-[rgba(4,28,28,0.4)] font-mono border border-[rgba(255,230,203,0.15)] px-3 py-3 text-[0.75rem] leading-relaxed lowercase mt-1">
          <code className="break-all">{current.cmd}</code>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          {afterInstall.map((step, idx) => (
            <div key={step.cmd} className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <small className="font-serif text-[.9375rem] tracking-[0.1875rem] opacity-50">
                  {idx + 2}. {step.label}
                </small>
                <CopyButton text={step.cmd} />
              </div>
              <div className="bg-[rgba(4,28,28,0.4)] font-mono border border-[rgba(255,230,203,0.15)] px-3 py-3 text-[0.75rem] leading-relaxed lowercase">
                <code className="break-all">{step.cmd}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gc col-span-full lg:col-span-1 p-6">
        <small className="font-serif text-[.9375rem] tracking-[0.1875rem] opacity-70 block mb-3">
          消息网关入门
        </small>
        <p className="text-[0.9rem] leading-relaxed tracking-normal normal-case opacity-60 mb-3">
          配置与启停示例（各平台能力不同，默认拒绝未授权用户，支持白名单 / DM 配对码）：
        </p>
        <div className="bg-[rgba(4,28,28,0.4)] font-mono border border-[rgba(255,230,203,0.15)] px-3 py-3 text-[0.7rem] leading-relaxed lowercase">
          <code className="break-all block">hermes gateway setup</code>
          <code className="break-all block mt-2 opacity-70">hermes gateway start</code>
        </div>
        <a
          href="https://hermes-agent.nousresearch.com/docs/user-guide/messaging"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-[0.8rem] tracking-normal normal-case opacity-50 hover:opacity-80 underline underline-offset-4"
        >
          查看平台对比表 ↗
        </a>
      </div>
    </div>
  )
}
