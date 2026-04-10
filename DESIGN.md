# Hermes Agent 中文网 - Design System

基于 hermes-agent.nousresearch.com 原官网设计风格

---

## 1. Visual Philosophy

### Core Aesthetic
- **极简技术感**: 信息密度低，留白充足
- **终端/代码美学**: 类 CLI 的视觉元素
- **研究实验室感**: 精密、学术、前沿科技
- **深色原生**: 以深色为默认介质

### Design Principles
1. **少即是多**: 每个元素必须有明确目的
2. **字体驱动**: 用排版层次替代装饰元素
3. **技术诚实**: 不掩盖产品的技术本质
4. **研究感**: 像学术论文一样清晰、精确

---

## 2. Color Palette

### Background
- **Primary Black**: `#000000` - 纯黑背景
- **Elevated Black**: `#0a0a0a` - 提升表面
- **Card Black**: `#111111` - 卡片背景

### Text
- **Primary**: `#ffffff` - 纯白主文字
- **Secondary**: `#888888` - 中灰副文字
- **Muted**: `#555555` - 暗灰辅助文字
- **Accent Text**: `#aaaaaa` - 强调灰

### Accents
- **Brand Purple**: `#a855f7` - 品牌紫 (来自 Nous)
- **Brand Blue**: `#3b82f6` - 品牌蓝
- **Code Green**: `#22c55e` - 成功/代码绿
- **Terminal Cyan**: `#06b6d4` - 终端青

### Borders
- **Subtle**: `rgba(255,255,255,0.06)`
- **Default**: `rgba(255,255,255,0.1)`
- **Hover**: `rgba(255,255,255,0.15)`

---

## 3. Typography

### Font Stack
- **Primary**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`
- **Display**: `system-ui, -apple-system, sans-serif` (仅大标题)
- **Chinese**: `"PingFang SC", "Microsoft YaHei", sans-serif`

### Type Scale
| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| Hero | 48-64px | 700 | 主标题 |
| H1 | 32px | 600 | 页面标题 |
| H2 | 20px | 500 | 区块标题 |
| H3 | 16px | 500 | 小标题 |
| Body | 15px | 400 | 正文 |
| Code | 13px | 400 | 代码/终端 |
| Small | 12px | 400 | 辅助 |
| Label | 11px | 500 | 标签 uppercase |

### Typography Patterns
- 正文使用等宽字体营造技术感
- 大标题使用系统字体确保可读性
- 标签使用大写 + 字间距 0.05em
- 行高：标题 1.2，正文 1.6

---

## 4. Layout

### Container
- Max Width: 720px (窄版，聚焦内容)
- Padding: 24px mobile / 32px desktop
- 居中对齐

### Spacing
- 大区块间距: 120px
- 区块内间距: 64px
- 元素间距: 32px
- 紧凑间距: 16px
- 微间距: 8px

---

## 5. Components

### Navigation
```
Background: transparent
Border Bottom: 1px solid rgba(255,255,255,0.06)
Height: 56px
Font: 13px monospace
Links: opacity 0.6 → 1 on hover
```

### Hero Section
```
Min Height: 80vh
Display: flex, align-items: center, justify-content: center
Text Align: center
Tagline: uppercase, 11px, letter-spacing 0.1em, color #666
Title: 48-64px, font-weight 700, system font
Subtitle: 15px, monospace, color #888, max-width 560px
```

### Install Block (终端风格)
```
Background: #0a0a0a
Border: 1px solid rgba(255,255,255,0.08)
Border Radius: 8px
Font: 13px monospace
Padding: 20px
Box Shadow: 0 4px 24px rgba(0,0,0,0.4)
```

### Code Block
```
Background: #0a0a0a
Border: 1px solid rgba(255,255,255,0.06)
Border Radius: 6px
Font: 13px monospace
Line Numbers: optional, color #333
Prompt: "$" or ">" in #555
Command: #fff
Comment: #555
```

### Feature Item
```
Layout: flex row
Icon: 16px, color #666 → #fff on hover
Title: 14px, font-weight 500, color #fff
Description: 13px, monospace, color #666
Hover: opacity transition
```

### Button Primary
```
Background: #fff
Color: #000
Padding: 10px 20px
Border Radius: 6px
Font: 13px, font-weight 500
Hover: opacity 0.9
```

### Button Secondary
```
Background: transparent
Border: 1px solid rgba(255,255,255,0.15)
Color: #fff
Hover: border-color rgba(255,255,255,0.3)
```

### Footer
```
Border Top: 1px solid rgba(255,255,255,0.06)
Padding: 40px 0
Font: 12px monospace
Color: #555
Links: #888 → #fff
```

---

## 6. Special Elements

### Terminal Output (Nous style)
```
Font: 12px monospace
Color: #444 (dim)
Format: "OUTPUT {number} SEED: {random}"
Used for: decorative metadata, version info
```

### Seed/ID Display
```
color: #333
font-size: 11px
letter-spacing: 0.02em
Used for: version numbers, build IDs
```

### Section Label
```
uppercase
font-size: 11px
letter-spacing: 0.15em
color: #666
margin-bottom: 24px
```

---

## 7. Animations

### Transitions
- Default: `all 0.2s ease`
- Hover: `opacity 0.2s, border-color 0.2s`

### Effects
- 无复杂动画
- 无渐变背景
- 无阴影装饰
- 纯平面设计，靠层次和留白创造深度

---

## 8. Content Structure (参考原站)

```
[Nav]
Hermes Agent | 文档 | GitHub | Discord | 主题

[Hero]
标签: 开源免费 · MIT 协议
标题: 与你共同成长的 AI 智能体
副标题: 一个真正自主的智能体，运行在你的服务器上...

[Install]
1. Install
   $ curl -fsSL ... | bash
2. Configure
   $ hermes setup

[Features]
See It in Action
- Lives Where You Do (平台列表)
- Grows the Longer It Runs (记忆)
- Scheduled Automations (定时)
- Delegates & Parallelizes (子智能体)
- Real Sandboxing (沙盒)
- Full Web & Browser Control (网页控制)

[Footer]
版本号 | Nous Research 链接 | MIT License
```
