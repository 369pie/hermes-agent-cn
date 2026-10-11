'use client'

const commands = [
  { cmd: 'hermes', desc: '交互式 TUI' },
  { cmd: 'hermes model', desc: '选择与管理模型' },
  { cmd: 'hermes tools', desc: '查看可用工具' },
  { cmd: 'hermes config set/get', desc: '读写配置' },
  { cmd: 'hermes gateway', desc: '消息网关（setup / install / start / stop / status）' },
  { cmd: 'hermes update', desc: '更新 Hermes' },
  { cmd: 'hermes doctor', desc: '环境诊断' },
  { cmd: 'hermes memory setup', desc: '可选外部记忆插件（向量/语义等）' },
  { cmd: 'hermes claw migrate', desc: '从 OpenClaw 迁移' },
  { cmd: 'hermes portal info', desc: 'Nous Portal 信息' },
  { cmd: 'hermes plugins install', desc: '安装插件' },
]

export default function CommandRef() {
  return (
    <div id="commands" className="g">
      <div className="gc col-span-full">
        <hgroup className="flex flex-col gap-2">
          <small className="font-serif text-[.9375rem] tracking-[0.1875rem]">
            <span className="font-sans font-bold">常用命令速查</span>
          </small>
          <p className="text-[0.85rem] leading-relaxed tracking-normal normal-case opacity-50">
            摘自官方 README；对话内还可使用 /model、/new、/retry、/compress、/usage、/stop 等斜杠命令。
          </p>
        </hgroup>
      </div>

      <div className="gc col-span-full p-0" style={{ borderBottom: 'none' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 [&>*]:border-b [&>*]:border-[rgba(255,230,203,0.15)] [&>*]:p-4 md:[&>*:nth-child(odd)]:border-r">
          {commands.map((c) => (
            <div key={c.cmd} className="flex flex-col gap-1 min-w-0">
              <code className="font-mono text-[0.75rem] tracking-normal normal-case opacity-90 break-all">
                {c.cmd}
              </code>
              <span className="text-[0.85rem] leading-relaxed tracking-normal normal-case opacity-50">
                {c.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
