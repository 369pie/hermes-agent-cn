'use client'

const features = [
  {
    title: '融入本土生态平台',
    desc: '系统级打通微信、飞书、钉钉、企业微信。PC 上处理深度工作，手机端随时跟进，真正做到无缝的全终端覆盖体系。',
  },
  {
    title: '具备记忆，越用越懂你',
    desc: '内置向量持久化记忆库与技能自演化机制。你的编码语境、项目架构背景与业务术语，它只需学一次便能受用一生。',
  },
  {
    title: '一句话完成自动化',
    desc: '告别繁琐的 Cron 脚本编写。用自然语言交代任务，即可在后台静默运行：实现自动推送早晨数据简报，或按时抓取监控告警。',
  },
  {
    title: '多智能体并行流水线',
    desc: '可将海量复杂业务拆解为并行子任务。隔离的子 Agent 独立执行 Python 脚本，支持无缝内网调用公司私有 API。',
  },
  {
    title: '私有部署，数据主权',
    desc: '支持 Docker 和轻量级原生运行环境。所有的代码信息、群聊记录和敏感资产百分百存留本地服务器，金融级别安全可控。',
  },
  {
    title: '全栈 Web 与解析能力',
    desc: '内置浏览器自动化与 AI 视觉能力。整合主流搜索引擎和复杂图文解析，一键完成多网页资料萃取、对比与报告生成。',
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
