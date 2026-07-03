# PROGRESS · 芯电元官网升级 〔本项目活记忆 · 状态机〕

> **作用**:这是项目的“存档点”。任意 AI、任意重启会话,读它即可知道当前做到哪、下一步做什么、踩过什么坑。
> **更新时机**:每完成一个有意义步骤、每次会话结束前。
> **格式要求**:时间倒序,最新在上;短、准、可接力。

---

## 当前状态 (最后更新: 2026-07-03 · by Codex)

- **阶段**:`初始化 / 六步交付流程第①步确认门`
- **上一步完成**:`已初始化本地 Git 仓库,创建私有 GitHub 仓库并推送 main;仓库地址 https://github.com/renfengwu/semi-one-website`
- **下一步 (TODO 第一条)**:`用户提供部署服务器 SSH_HOST 和 SSH_USER,并把公钥 C:\Users\admin\.ssh\semi-one-website-deploy.pub 加入服务器 authorized_keys`
- **阻塞项**:`SSH_PRIVATE_KEY 已由 Codex 生成并写入 GitHub Secret;仍缺 SSH_HOST、SSH_USER,且需确认服务器已信任对应公钥`

---

## 待办清单 (TODO,按优先级)

- [x] 用户确认 `standards/00-project-context.md`、`standards/01-requirements.md`、`standards/PROGRESS.md`
- [x] 创建实施计划 `docs/superpowers/plans/2026-07-03-semi-one-website-ci-cd.md`
- [x] 初始化本地 Git 仓库并创建最小 main 引导提交
- [x] 创建私有 GitHub 仓库 `https://github.com/renfengwu/semi-one-website` 并推送 `main`
- [x] 生成专用部署 SSH key,并写入 GitHub Actions Secret:`SSH_PRIVATE_KEY`
- [ ] 将公钥 `C:\Users\admin\.ssh\semi-one-website-deploy.pub` 加入部署服务器 `authorized_keys`
- [ ] 在 GitHub 仓库配置 Actions Secrets:`SSH_HOST` / `SSH_USER`
- [ ] 确认首版范围:中文+英文是否完整上线、越南语入口是否保留、是否展示客户名称/Logo、证书编号/有效期公开口径
- [ ] 用户确认 Secrets 已配置后,从 `main` 开第一条 feature 分支
- [ ] 脚手架 Vite + React + TypeScript + Tailwind + ESLint + Prettier + Vitest + Playwright
- [ ] 建立结构化内容数据:公司信息、产品分类、应用方案、技术路线、实验室、证书、联系信息
- [ ] 从旧站和 PPT/XLS 抽取首批产品与应用数据,记录来源和更新时间
- [ ] 筛选可公开素材并生成生产可用图片:Logo、芯片/晶圆/实验室/证书/企业形象图
- [ ] 实现首页、产品中心、应用方案、技术创新、质量资质、关于联系、多语言基础
- [ ] 编写单元/组件/E2E 测试,覆盖产品筛选、语言切换、关键页面和移动端布局
- [ ] 本地自检通过:format、lint、typecheck、test、coverage、E2E、build
- [ ] 配置 GitHub Actions CI:PR 触发格式、lint、typecheck、test、coverage、E2E、build、docker build
- [ ] 配置 Docker/Nginx 与 CD workflow:main 合并后自动部署,端口 `8080-8089` 回退,`/health` 检查
- [ ] 推送 feature 分支并创建 PR,等待 CI 和人工 Review
- [ ] 用户合并 PR 后,观察 CD,记录最终端口、健康检查和访问地址
- [ ] 会话结束前更新本文件

---

## 关键决策记录 (ADR)

| 日期 | 决策 | 理由 |
|---|---|---|
| 2026-07-03 | 首版采用 Vite + React + TypeScript 静态站,由 Docker + Nginx 部署 | 企业官网以内容、产品筛选和交互展示为主,无需首版引入后端;构建快、CI/CD 简洁、部署稳定 |
| 2026-07-03 | 部署主机端口优先 `8080`,回退 `8080-8089` | 本机检查常见端口未占用;按标准保留回退区间,避免误删他人容器 |
| 2026-07-03 | 原始 `data/` 资料作为参考源,生产只使用确认后的优化素材和结构化数据 | 避免把大文件、扫描件、未复核证书/客户信息直接公开或拖慢构建 |
| 2026-07-03 | 本轮只更新 `00/01/PROGRESS`,不开始写代码 | 用户明确要求先停下确认 |
| 2026-07-03 | GitHub 仓库使用私有仓库 `renfengwu/semi-one-website` | 官网仍处于初始化阶段,避免未复核资料和发布配置提前公开 |

---

## 已知坑 (GOTCHAS)

- 当前根目录不是 Git 仓库:后续需先建仓/初始化,再按 GitHub Flow 开 feature 分支。
- PPTX 文件缺少标准 ZIP 结束目录:`python-pptx` 无法读取;已用 `tar` 顺序抽取 `ppt/slides/*.xml` 获取文案。
- 证书 PDF 是扫描件:文本不可直接抽取;已渲染目视确认类别,但编号、日期、范围需上线前人工复核。
- XLS 为老式 Excel 97-2003 二进制格式:本地通过 Excel COM 读到发明、实用新型、软件著作权工作表;后续建议转换为 `.xlsx` 或 CSV 以便 CI 可复现。
- 旧官网为 ThinkPHP/Nginx 站点,产品表页面很大且 HTML 较旧;迁移时应结构化清洗数据,不要复刻旧站表格实现。
- 当前 `gh secret set` 版本不支持 `--body-file`:已改用 stdin 写入 `SSH_PRIVATE_KEY`;以后设置多行 Secret 可用 `Get-Content -Raw <file> | gh secret set <NAME> --repo <owner/repo>`。

---

## 里程碑 (DONE)

- [x] 2026-07-03 读取 `standards/README.md`、`00`、`01`、`PROGRESS`、`02`~`06`
- [x] 2026-07-03 调研旧官网首页、产品、应用、技术支持、关于、质量、联系等公开内容
- [x] 2026-07-03 抽取中文/英文公司介绍 PPT 的核心信息
- [x] 2026-07-03 目视核验证书 PDF 类别,读取 XLS 中知识产权工作表
- [x] 2026-07-03 起草本项目上下文、用户故事验收标准和第一批 TODO
- [x] 2026-07-03 完成第①步建仓动作:本地 Git 初始化、GitHub 私有仓库创建、`main` 推送
- [x] 2026-07-03 生成部署专用 SSH key,已把私钥写入 GitHub Secret `SSH_PRIVATE_KEY`,公钥保存在 `C:\Users\admin\.ssh\semi-one-website-deploy.pub`

> 反臃肿:里程碑超过 15 条时,把更早内容合并成一行摘要,保持本文件可快速阅读。
