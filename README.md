# Pawspa 宠物洗护

Pawspa 是一个面向猫狗洗护、美容造型和到店预约场景的单页展示网站。页面以低应激护理、透明价格和预约转化为核心，适合宠物门店、洗护工作室或服务品牌作为官网首页使用。

## 功能概览

- 品牌首屏展示：包含服务定位、主行动按钮和导航锚点
- 门店数据展示：评分、评估流程、专项护理和价格透明度
- 服务项目介绍：基础洗护、精致美容、猫咪专护、皮毛养护
- 洗护流程说明：线上预约、到店评估、温和洗护、护理反馈
- 价格套餐展示：日常护理、全套洗护、定制造型
- 用户反馈模块：展示宠物家长的服务评价
- 预约表单：收集宠物昵称、服务类型、联系方式和希望到店时间
- Supabase 写入：表单提交到 `/api/bookings`，由服务端写入 `bookings` 表
- 响应式布局：适配桌面端和平板、手机端浏览

## 技术栈

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [Supabase](https://supabase.com/) JavaScript SDK
- [TypeScript](https://www.typescriptlang.org/)
- CSS Modules 风格的全局样式组织
- npm 作为包管理工具

## 目录结构

```text
.
├── app/
│   ├── globals.css      # 全局样式和响应式布局
│   ├── layout.tsx       # 页面元信息和根布局
│   ├── page.tsx         # 首页内容和模块结构
│   ├── api/bookings/    # 预约写入接口
│   └── components/      # 客户端表单组件
├── lib/supabase/        # Supabase 服务端客户端
├── supabase/            # 建表 SQL
├── next.config.ts       # Next.js 配置
├── package.json         # 项目脚本和依赖
├── package-lock.json    # npm 锁文件
├── tsconfig.json        # TypeScript 配置
└── README.md
```

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

启动后访问：

```text
http://localhost:3000
```

## Supabase 配置

1. 在 Supabase SQL Editor 执行 [supabase/bookings.sql](/Users/jiheng/Documents/codex/pet_cat/supabase/bookings.sql)。
2. 复制 `.env.example` 为 `.env.local`，填入：

```bash
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_ANON_KEY=your-publishable-or-anon-key
```

`SUPABASE_ANON_KEY` 只在服务端 API Route 中读取，不要放到 `NEXT_PUBLIC_` 变量里。数据库 RLS policy 只允许匿名角色插入预约，不开放匿名读取。

## 常用脚本

```bash
npm run dev
```

启动本地开发环境。

```bash
npm run build
```

生成生产构建。

```bash
npm run start
```

启动生产构建后的服务。

```bash
npm run lint
```

运行项目 lint 检查。

## 部署

项目可以部署到支持 Next.js 的平台，例如 Vercel、Netlify 或自托管 Node.js 环境。

生产构建命令：

```bash
npm run build
```

生产启动命令：

```bash
npm run start
```

## Git 忽略策略

仓库已通过 `.gitignore` 排除以下不需要提交的内容：

- `node_modules/`
- `.next/`
- `.omx/`
- 本地环境变量文件
- 日志文件
- 构建产物和覆盖率目录
- 系统与编辑器临时文件
