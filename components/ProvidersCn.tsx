'use client'

const domesticProviders = [
  { name: 'Kimi / Moonshot', note: '含国内站端点' },
  { name: 'z.ai / GLM（智谱）', note: 'OpenAI 兼容 API' },
  { name: 'MiniMax', note: '含国内站 / OAuth' },
  { name: 'Qwen / 阿里云 DashScope', note: '含国内端点、Coding Plan' },
  { name: '小米 MiMo', note: '' },
  { name: '腾讯 TokenHub / TokenPlan', note: 'v0.21.0 起列入目录' },
  { name: 'StepFun（阶跃）', note: '' },
  { name: 'DeepSeek', note: '' },
]

export default function ProvidersCn() {
  return (
    <div id="providers" className="g">
      <div className="gc col-span-full lg:col-span-1">
        <hgroup className="flex flex-col gap-2">
          <small className="font-serif text-[.9375rem] tracking-[0.1875rem]">
            <span className="font-sans font-bold">国内可用模型与提供商</span>
          </small>
          <p className="text-[0.9rem] leading-relaxed tracking-normal normal-case opacity-60 mt-2">
            除 Nous Portal（官称 300+ 模型）、OpenRouter、OpenAI、Anthropic 等全球提供商外，官方文档 integrations/providers
            列出多家对中国开发者友好的接入方式。本地推理可选 Ollama、LM Studio、vLLM、llama.cpp 等（上下文建议 ≥64K）。
          </p>
          <p className="text-[0.8rem] leading-relaxed tracking-normal normal-case opacity-40 mt-2">
            说明：对话默认会请求你所选模型提供商的 API；使用本地模型时，推理可在本机完成。Anthropic OAuth 仅适用于 Claude Max
            且含额外用量的情况。
          </p>
          <a
            href="https://hermes-agent.nousresearch.com/docs/integrations/providers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-[0.8rem] tracking-normal normal-case opacity-50 hover:opacity-80 underline underline-offset-4"
          >
            完整提供商列表 ↗
          </a>
        </hgroup>
      </div>

      <div className="gc col-span-full lg:col-span-2 p-0" style={{ borderBottom: 'none' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 [&>*]:border-b [&>*]:border-[rgba(255,230,203,0.15)] [&>*]:p-4 sm:[&>*:nth-child(odd)]:border-r">
          {domesticProviders.map((p) => (
            <div key={p.name} className="flex flex-col gap-1">
              <span className="font-serif text-[1rem] tracking-[0.08rem] font-bold normal-case opacity-90">
                {p.name}
              </span>
              {p.note ? (
                <span className="text-[0.85rem] tracking-normal normal-case opacity-50">{p.note}</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
