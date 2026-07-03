# PROGRESS · 芯电元官网升级 〔本项目活记忆 · 状态机〕

> **作用**:这是项目的“存档点”。任意 AI、任意重启会话,读它即可知道当前做到哪、下一步做什么、踩过什么坑。
> **更新时机**:每完成一个有意义步骤、每次会话结束前。
> **格式要求**:时间倒序,最新在上;短、准、可接力。

---

## 当前状态 (最后更新: 2026-07-03 · by Codex)

- **阶段**:`PR Review 中 / 六步交付流程第③步`
- **上一步完成**:`已实现 Vite/React 官网、GitHub Actions CI、交付型 CD(GitHub artifact + GHCR Docker image)、Docker/Nginx 静态部署包;PR #1 远端 CI 已全绿`
- **下一步 (TODO 第一条)**:`用户 Review 并合并 PR #1;合并后观察 main CD 发布 artifact 与 GHCR 镜像`
- **阻塞项**:`GitHub 当前套餐不支持私有仓库 Pages;公网 Pages 需升级套餐或改公开仓库。服务器 SSH 部署仍缺 SSH_HOST、SSH_USER 与 authorized_keys 授权。证书编号/有效期、客户名称/Logo、越南语正式营销措辞仍需人工复核`

---

## 待办清单 (TODO,按优先级)

- [x] 用户确认 `standards/00-project-context.md`、`standards/01-requirements.md`、`standards/PROGRESS.md`
- [x] 创建实施计划 `docs/superpowers/plans/2026-07-03-semi-one-website-ci-cd.md`
- [x] 初始化本地 Git 仓库并创建最小 main 引导提交
- [x] 创建私有 GitHub 仓库 `https://github.com/renfengwu/semi-one-website` 并推送 `main`
- [x] 生成专用部署 SSH key,并写入 GitHub Actions Secret:`SSH_PRIVATE_KEY`
- [ ] 将公钥 `C:\Users\admin\.ssh\semi-one-website-deploy.pub` 加入部署服务器 `authorized_keys`(服务器部署阶段)
- [ ] 在 GitHub 仓库配置 Actions Secrets:`SSH_HOST` / `SSH_USER`(服务器部署阶段)
- [x] 决定首个可自主闭环 CD 改用 GitHub Actions artifact + GHCR 镜像,服务器 SSH/Docker 部署后置
- [ ] 确认首版范围:客户名称/Logo、证书编号/有效期公开口径、越南语正式营销措辞母语复核
- [x] 从 `main` 开第一条 feature 分支:`feature/1-website-ci-cd`
- [x] 脚手架 Vite + React + TypeScript + ESLint + Prettier + Vitest + Playwright
- [x] 建立结构化内容数据:公司信息、产品分类、应用方案、技术路线、实验室、证书、联系信息
- [x] 从旧站和 PPT/XLS 抽取首批产品与应用数据,记录来源和更新时间
- [x] 筛选可公开素材并生成生产可用图片:Logo、芯片/晶圆/半导体主视觉
- [x] 实现首页、产品中心、应用方案、技术创新、质量资质、关于联系、中文/英文/越南语基础
- [x] 编写单元/组件/E2E 测试,覆盖产品筛选、语言切换、关键页面和移动端布局
- [x] 本地自检通过:format、lint、typecheck、test、coverage、E2E、build、audit、docker build、视觉烟测
- [x] 配置 GitHub Actions CI:PR 触发格式、lint、typecheck、test、coverage、E2E、build、docker build
- [x] 配置 CD workflow:main 合并后自动发布静态 `dist` artifact 与 GHCR Docker 镜像
- [x] 配置 Docker/Nginx 静态部署包与 `/health`;服务器 SSH CD 待服务器信息补齐后启用
- [x] 推送 feature 分支并创建 PR #1,远端 CI 全绿,等待人工 Review
- [ ] 用户合并 PR #1 后,观察 main CD,记录 artifact、GHCR 镜像和后续部署地址
- [ ] 会话结束前更新本文件

---

## 关键决策记录 (ADR)

| 日期       | 决策                                                               | 理由                                                                                       |
| ---------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 2026-07-03 | 首版采用 Vite + React + TypeScript 静态站,由 Docker + Nginx 部署   | 企业官网以内容、产品筛选和交互展示为主,无需首版引入后端;构建快、CI/CD 简洁、部署稳定       |
| 2026-07-03 | 部署主机端口优先 `8080`,回退 `8080-8089`                           | 本机检查常见端口未占用;按标准保留回退区间,避免误删他人容器                                 |
| 2026-07-03 | 原始 `data/` 资料作为参考源,生产只使用确认后的优化素材和结构化数据 | 避免把大文件、扫描件、未复核证书/客户信息直接公开或拖慢构建                                |
| 2026-07-03 | 本轮只更新 `00/01/PROGRESS`,不开始写代码                           | 用户明确要求先停下确认                                                                     |
| 2026-07-03 | GitHub 仓库使用私有仓库 `renfengwu/semi-one-website`               | 官网仍处于初始化阶段,避免未复核资料和发布配置提前公开                                      |
| 2026-07-03 | 首个 CD 目标调整为 GitHub Pages                                    | 用户要求 Codex 自主继续,但没有服务器地址/用户名;Pages 原计划可由 GitHub Actions 自主完成部署闭环 |
| 2026-07-03 | 首个 CD 目标由 GitHub Pages 改为 Actions artifact + GHCR           | GitHub API 返回当前套餐不支持私有仓库 Pages;交付型 CD 可在私有仓库中无额外密钥运行         |

---

## 验证记录

- 2026-07-03 本地通过:`npm run format:check`、`npm run lint`、`npm run typecheck`、`npm run test:run`、`npm run test:coverage`、`npm run build`、`npm run test:e2e`、`npm audit --audit-level=moderate`、`docker build -t semi-one-website:local .`
- 2026-07-03 覆盖率:`Statements 88.65% / Branches 80.34% / Functions 84.9% / Lines 89.91%`
- 2026-07-03 Playwright E2E:`chromium` 与 `mobile-chrome` 共 8 条通过;覆盖首页主入口、产品移动端搜索、旧站 `/Product/` 路径迁移、越南语切换
- 2026-07-03 视觉烟测:桌面/移动端关键页面无横向溢出、无破图、无控制台错误;截图暂存于 `test-results/visual-qa/`(不提交)
- 2026-07-03 使用 `imagegen` skill 生成并压缩新官网主视觉 `public/assets/hero-semiconductor-lab.webp`;首页切换为全幅半导体实验室/晶圆/功率器件视觉
- 2026-07-03 远端 PR CI 通过:GitHub Actions PR verify 包含格式、lint、typecheck、coverage、build、E2E、Docker build

---

## 已知坑 (GOTCHAS)

- 当前本地预览服务运行在 `http://localhost:5173/`;如端口被占用,后续可换用 Vite 自动回退端口。
- PPTX 文件缺少标准 ZIP 结束目录:`python-pptx` 无法读取;已用 `tar` 顺序抽取 `ppt/slides/*.xml` 获取文案。
- 证书 PDF 是扫描件:文本不可直接抽取;已渲染目视确认类别,但编号、日期、范围需上线前人工复核。
- XLS 为老式 Excel 97-2003 二进制格式:本地通过 Excel COM 读到发明、实用新型、软件著作权工作表;后续建议转换为 `.xlsx` 或 CSV 以便 CI 可复现。
- 旧官网为 ThinkPHP/Nginx 站点,产品表页面很大且 HTML 较旧;迁移时应结构化清洗数据,不要复刻旧站表格实现。
- 当前 `gh secret set` 版本不支持 `--body-file`:已改用 stdin 写入 `SSH_PRIVATE_KEY`;以后设置多行 Secret 可用 `Get-Content -Raw <file> | gh secret set <NAME> --repo <owner/repo>`。
- Docker CLI 曾因 Docker Desktop 服务未启动而首次构建失败;启动 Docker Desktop 后 `docker build -t semi-one-website:local .` 已通过。
- PR #1 首次远端 CI 在 `npm run test:coverage` 失败:根因是 `.gitignore` 的 `data/` 误伤 `src/data/`,本地文件存在但未提交。已改为只忽略根目录 `/data/`,并将 `src/data/*` 纳入版本库。
- GitHub Pages 启用失败:GitHub API 返回 `Your current plan does not support GitHub Pages for this repository`;私有仓库暂不能用 Pages,除非升级套餐或改公开仓库。

---

## 里程碑 (DONE)

- [x] 2026-07-03 读取 `standards/README.md`、`00`、`01`、`PROGRESS`、`02`~`06`
- [x] 2026-07-03 调研旧官网首页、产品、应用、技术支持、关于、质量、联系等公开内容
- [x] 2026-07-03 抽取中文/英文公司介绍 PPT 的核心信息
- [x] 2026-07-03 目视核验证书 PDF 类别,读取 XLS 中知识产权工作表
- [x] 2026-07-03 起草本项目上下文、用户故事验收标准和第一批 TODO
- [x] 2026-07-03 完成第①步建仓动作:本地 Git 初始化、GitHub 私有仓库创建、`main` 推送
- [x] 2026-07-03 生成部署专用 SSH key,已把私钥写入 GitHub Secret `SSH_PRIVATE_KEY`,公钥保存在 `C:\Users\admin\.ssh\semi-one-website-deploy.pub`
- [x] 2026-07-03 完成官网首版实现、本地全套门禁、视觉烟测、PR #1 创建与远端 CI 全绿
- [x] 2026-07-03 按用户反馈重做首页科技视觉,并补齐中文/英文/越南语切换与越南语核心页面文案

> 反臃肿:里程碑超过 15 条时,把更早内容合并成一行摘要,保持本文件可快速阅读。
