'use client'

const features = [
  {
    title: '官方网关 · 本土平台',
    desc:
      '文档列出的中国区相关通道包括钉钉、飞书 / Lark、企业微信（含 Callback）、微信、QQ、元宝等，并与 Telegram、Discord、Slack、WhatsApp 等并列。请查阅官方平台对比表了解语音、文件、线程、流式等差异。',
  },
  {
    title: '持久化记忆与技能演化',
    desc:
      '内置 MEMORY.md / USER.md 文件记忆（有字符上限，存于 ~/.hermes/memories/）与 SQLite FTS5 跨会话全文检索（session_search）；可选通过 hermes memory setup 接入 Supermemory、Mem0 等外部向量/语义记忆插件。技能可在使用中自我改进。',
  },
  {
    title: '自然语言定时任务',
    desc: '内置 Cron，可用自然语言配置定时作业，并投递到已配置的消息平台；v0.21.0 起支持带持久记忆与 continuity 的定时任务。',
  },
  {
    title: '子 Agent 并行与 Bot Mode',
    desc:
      '复杂任务可通过隔离子 Agent（delegate_task）并行执行，支持 execute_code 以 RPC 调用工具；v0.21.0 起可中途 steer，默认并发上限 10。Hermes Desktop 提供 Bot Mode（多命名 Bot 群聊、@提及）与 hermes peer 机器人私信。',
  },
  {
    title: '可私有部署与多运行后端',
    desc:
      '支持 Docker 与原生 Windows（PowerShell 安装脚本）、Linux、macOS；另有 7 种终端执行后端（local、Docker、SSH、Singularity、Modal、Daytona、Vercel Sandbox 等）。默认拒绝未授权网关用户，并提供命令审批等安全机制；选用云模型时对话会发送至对应提供商。',
  },
  {
    title: 'MCP、浏览器与 Web 能力',
    desc:
      '可连接任意 MCP 服务器（桌面端 Connectors / MCP 管理页，支持 OAuth）。内置浏览器自动化与视觉能力；通过 Nous Portal Tool Gateway 或自建后端可使用搜索、云浏览器、生图、TTS 等能力。',
  },
  {
    title: 'Hermes Desktop',
    desc:
      '官方提供 Windows / macOS 桌面应用（Simple / Advanced 界面、内置浏览器操控、CLI 命令面板 Ctrl+P 等）。安装包入口见 hermes-agent.nousresearch.com。',
  },
  {
    title: '全栈 Web 与解析能力',
    desc: '内置浏览器自动化与 AI 视觉；可完成多网页资料萃取与报告生成。搜索与生图等需配置 Tool Gateway 或相应提供商。',
  },
  {
    title: '开放生态',
    desc:
      '兼容 agentskills.io 技能标准；插件目录支持 SHA 固定安装。可从 OpenClaw 迁移（hermes claw migrate）。社区第三方微信桥 HermesClaw 非官方产品，接入前请自行甄别。',
  },
]

export default function Features() {
  return (
    <div id="features" className="g">
      <div className="gc col-span-full" style={{ order: 0 }}>
        <hgroup className="flex flex-col gap-2">
          <small className="font-serif text-[.9375rem] tracking-[0.1875rem]">
            <span className="font-sans font-bold">核心架构特性</span>
          </small>
          <p className="text-[0.85rem] tracking-normal normal-case opacity-50">
            表述依据官方 README 与文档（截至 2026-10-11）。
          </p>
        </hgroup>
      </div>

      <div className="gc col-span-full p-0" style={{ order: 0, borderBottom: 'none' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 [&>*]:border-b [&>*]:border-[rgba(255,230,203,0.15)] [&>*]:p-6 sm:[&>*:nth-child(odd)]:border-r lg:[&>*]:border-r lg:[&>*:nth-child(3n)]:border-r-0">
          {features.map((f, i) => (
            <div key={i} className="group relative">
              <div
                className="flex flex-col gap-3 animate-slide-up"
                style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              >
                <small
                  className="font-serif text-[1.05rem] tracking-[0.12rem] font-bold"
                  style={{ mixBlendMode: 'plus-lighter' }}
                >
                  {f.title}
                </small>
                <p className="text-[1rem] leading-relaxed tracking-normal normal-case opacity-60">
                  {f.desc}
                </p>
              </div>
              <span className="absolute inset-1 bg-midground pointer-events-none transition-opacity duration-250 group-hover:opacity-5 opacity-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
