# PROGRESS · 芯电元官网升级 〔本项目活记忆 · 状态机〕

> **作用**:这是项目的“存档点”。任意 AI、任意重启会话,读它即可知道当前做到哪、下一步做什么、踩过什么坑。
> **更新时机**:每完成一个有意义步骤、每次会话结束前。
> **格式要求**:时间倒序,最新在上;短、准、可接力。

---

## 当前状态 (最后更新: 2026-07-04 · by Codex)

- **阶段**:`员工生活入口、图片放大查看、地图地址直达升级完成 / 本地完整门禁通过 / 待推送远端 CI、CD、Pages`
- **上一步完成**:`按用户继续要求扩大 GitHub skill 搜索,安装并读取第三方 frontend-design skill;导航新增“员工生活”锚点,首页首屏新增员工生活 CTA,员工生活真实照片支持点击放大、左右切换、Esc 关闭;关于页公司地址本身改为高德地图 URI 搜索链接,点击直接打开地图搜索结果;本地 format、lint、typecheck、coverage、build、Pages build、E2E、audit、docker build、Playwright 视觉/smoke 全部通过`
- **下一步 (TODO 第一条)**:`推送本轮交互升级到 main,观察 GitHub CI/CD/Pages,公网 smoke 复核员工生活导航锚点、图片放大查看、地址地图搜索直达、越南语和移动端无横向溢出`
- **阻塞项**:`Figma MCP 插件安装已请求但需用户在界面授权/OAuth,当前不能伪造 Figma 调用;新装 GitHub skill 需重启 Codex 后自动出现在技能列表;服务器 SSH 部署仍缺 SSH_HOST、SSH_USER 与 authorized_keys 授权;证书编号/有效期、客户名称/Logo、越南语正式营销措辞仍需人工复核`

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
- [x] 按用户反馈查找并使用 skill:已安装/读取 `figma-generate-design`、`playwright`、`screenshot`;因当前无 Figma MCP 与设计稿文件,改用 imagegen 主视觉与 Playwright/Screenshot 流程进行视觉 QA
- [x] 首页升级为更高端的科技官网首屏:全幅半导体实验室主视觉、技术平台矩阵、晶圆路线图、型号参数板、应用场景条带
- [x] 补齐越南语基础体验:顶部 VI 切换、核心页面与导航、首页主文案、产品/应用/质量/关于基础文案
- [x] 本轮高级视觉重构本地自检通过:format、lint、typecheck、coverage、build、E2E、audit、docker build、桌面/移动端截图检查
- [x] 合并 PR #1 到 `main`,观察 main CI/CD:CI 全绿,CD 已上传 `semi-one-website-dist` artifact 并推送 GHCR 镜像 `ghcr.io/renfengwu/semi-one-website:f28565fd9fcb5bf20861470494e93a9b2d6db640` 与 `latest`
- [x] 自主确定公网发布方式:公开仓库并启用 GitHub Pages workflow,目标地址 `https://renfengwu.github.io/semi-one-website/`
- [x] 修正 Vite/SPA 站内链接以兼容 GitHub Pages 项目子路径 `/semi-one-website/`
- [x] 推送 Pages workflow 后观察远端 Pages 部署:Pages run `28642487496` 全绿,公网 `https://renfengwu.github.io/semi-one-website/` 访问与浏览器 smoke 通过
- [x] 按用户明确要求继续去 GitHub 找 skill:从 `openai/skills` 安装并读取 `figma-use`、`figma-implement-design`、`playwright-interactive`
- [x] 说明 Figma MCP 真实状态:已请求安装 Figma 插件,但需要用户授权/OAuth;当前不能假装调用 Figma
- [x] 二次高级化首页:首屏改为工程平台指挥舱、硅片/器件视觉面板、技术路线读数、产品参数信号板与应用信号卡
- [x] 本地视觉 QA:生成 `test-results/visual-qa/after-redesign-home-desktop.png`、`after-redesign-home-mid.png`、`after-redesign-home-mobile.png`;三档视口无横向溢出、无控制台错误
- [x] 本轮二次高级化完整本地门禁:format、lint、typecheck、coverage、build、GITHUB_PAGES build、E2E、audit、docker build
- [x] 推送本轮二次高级化到 `main`:commit `530d289`;main CI 与 CD 通过
- [x] 定位 Pages 失败:构建与 artifact 上传成功,`actions/deploy-pages@v4` 创建 deployment 后返回 `Deployment failed, try again later`
- [x] 升级 Pages workflow actions:`configure-pages@v6`、`upload-pages-artifact@v5`、`deploy-pages@v5`
- [x] 推送 Pages action 升级并观察 GitHub CI、CD、Pages 最新 run
- [x] 公网 `https://renfengwu.github.io/semi-one-website/` smoke 验证首页、产品页导航、越南语切换
- [x] 2026-07-04 继续升级内页:产品中心、应用方案、技术与创新、质量与资质、关于、404 统一高级工程视觉
- [x] 2026-07-04 导航增加当前页高亮;Playwright 截图目录 `output/playwright/` 加入 `.gitignore`
- [x] 2026-07-04 本轮内页升级本地门禁通过:format、lint、typecheck、coverage、build、GITHUB_PAGES build、E2E、audit、docker build
- [x] 2026-07-04 本轮内页视觉 QA:桌面/移动端首页和 5 个核心内页均无横向溢出、控制台错误 0
- [x] 2026-07-04 推送本轮内页升级到 `main`,观察 GitHub CI、CD、Pages 最新 run
- [x] 2026-07-04 定位公网直访 `/products` 等内页会触发 GitHub Pages 404 fallback 控制台错误;已扩展 `scripts/copy-404.mjs` 为核心路由生成静态 `index.html`
- [x] 2026-07-04 静态内页入口修复本地门禁通过:format、lint、typecheck、coverage、build、GITHUB_PAGES build、E2E、audit、docker build
- [x] 2026-07-04 推送静态内页入口修复并观察 GitHub CI、CD、Pages 最新 run
- [x] 2026-07-04 公网 smoke 验证首页、产品页、应用/技术页、越南语切换与直访内页 200 化
- [x] 2026-07-04 按用户要求再次去 GitHub 找 skill:同步 `openai/skills`,官方 list helper 返回 403 后改用本地 clone 手动列目录;安装 `figma`、`figma-create-design-system-rules`
- [x] 2026-07-04 企业文化与动态视觉升级:首页新增文化动态控制台,关于页新增价值观原则;覆盖中文/英文/越南语;新增信号扫掠、数据流、矩阵脉冲、文化轨道和卡片交互
- [x] 2026-07-04 修复 Windows 本地 `npm run format:check` 因 `core.autocrlf=true` 误报 CRLF:在 `.prettierrc` 增加 `endOfLine:auto`
- [x] 2026-07-04 本轮文化动效升级本地门禁通过:format、lint、typecheck、coverage、build、GITHUB_PAGES build、E2E、audit、docker build、Playwright 截图/DOM/动效/越南语检查
- [x] 2026-07-04 推送本轮文化动效升级到 `main`:CI、CD 成功;Pages 首次 deploy 返回 `Deployment failed, try again later`,重新触发 workflow_dispatch 后成功
- [x] 2026-07-04 公网 smoke 发现 `/about/` 等 Pages 尾斜杠直访会落到前端 404;已修复路径归一化,并补单元测试覆盖 `/about/`、`/products/`、`/semi-one-website/about/`
- [x] 2026-07-04 推送尾斜杠直访修复到 `main`:CI `28700841925` success,CD `28700841935` success;Pages push run `28700841924` 和首次 workflow_dispatch `28700890283` 仍遇到 deploy-pages 临时失败,第三次 workflow_dispatch `28700954024` success;公网 smoke 通过
- [x] 2026-07-04 按用户要求再次从 GitHub 找 skill:同步 `openai/skills` 到 HEAD `49f948f`,安装 `figma-create-new-file`、`figma-generate-library`;当前仍无可调用 Figma MCP,不能伪造 Figma 文件操作
- [x] 2026-07-04 从 `data/` 员工生活资料筛选真实素材:2022 生日会、2023 阳朔、2024 羽毛球、2025 郴州、2025 年会,生成生产 WebP 并加入首页
- [x] 2026-07-04 首页新增员工生活模块:真实照片画廊、文化叙事、运动/生日会/团建/年会标签,覆盖中文/英文/越南语
- [x] 2026-07-04 员工生活模块本地门禁通过:format、lint、typecheck、coverage、build、GITHUB_PAGES build、E2E、audit、docker build、桌面/移动端截图、浏览器 smoke
- [x] 2026-07-04 推送员工生活升级到 `main`:commit `e8a232d`;CI `28701631293` success,CD `28701631292` success,Pages `28701631307` success;公网验证 `https://renfengwu.github.io/semi-one-website/` 通过
- [x] 2026-07-04 按用户要求继续扩大 GitHub skill 搜索:找到并安装第三方 `Sunwood-ai-labs/frontend-design-skill`,读取 `frontend-design` 设计规则后继续改官网视觉交互
- [x] 2026-07-04 导航和跳转增强:主导航新增“员工生活”锚点,首页首屏新增员工生活 CTA,员工生活模块新增关于/技术/产品/应用 4 个入口
- [x] 2026-07-04 图片查看增强:员工生活 5 张真实照片支持点击放大查看、上一张/下一张、Esc 关闭,桌面/移动端均已 E2E 覆盖
- [x] 2026-07-04 地图功能增强:关于页公司地址本身改为高德地图 URI 搜索链接,`keyword` 使用公司地址,带 `view=map` 与 `callnative=0`;页脚保留“打开地图”入口
- [x] 2026-07-04 本轮交互升级本地门禁通过:format、lint、typecheck、coverage、build、GITHUB_PAGES build、E2E、audit、docker build、Playwright 视觉/smoke
- [ ] 2026-07-04 推送本轮交互升级并观察 GitHub CI、CD、Pages 最新 run;公网验证 `https://renfengwu.github.io/semi-one-website/`
- [x] 会话结束前更新本文件

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
| 2026-07-03 | 仓库改为 public 并恢复 GitHub Pages 作为公网预览通道               | 用户要求 Codex 自主处理公网发布;公开风险扫描未发现密钥/原始资料入 Git,Pages 可无服务器闭环 |
| 2026-07-04 | Prettier 设置 `endOfLine:auto`                                     | 当前开发机 `core.autocrlf=true`,全仓库格式检查会因未改文件 CRLF 误报;设置跨平台换行兼容避免本地与 CI 结果不一致 |

---

## 验证记录

- 2026-07-03 本地通过:`npm run format:check`、`npm run lint`、`npm run typecheck`、`npm run test:run`、`npm run test:coverage`、`npm run build`、`npm run test:e2e`、`npm audit --audit-level=moderate`、`docker build -t semi-one-website:local .`
- 2026-07-03 覆盖率:`Statements 88.65% / Branches 80.34% / Functions 84.9% / Lines 89.91%`
- 2026-07-03 Playwright E2E:`chromium` 与 `mobile-chrome` 共 8 条通过;覆盖首页主入口、产品移动端搜索、旧站 `/Product/` 路径迁移、越南语切换
- 2026-07-03 视觉烟测:桌面/移动端关键页面无横向溢出、无破图、无控制台错误;截图暂存于 `test-results/visual-qa/`(不提交)
- 2026-07-03 使用 `imagegen` skill 生成并压缩新官网主视觉 `public/assets/hero-semiconductor-lab.webp`;首页切换为全幅半导体实验室/晶圆/功率器件视觉
- 2026-07-03 按用户要求继续找 skill:通过 `skill-installer` 安装并读取 `figma-generate-design`、`playwright`、`screenshot`;当前无 Figma MCP/设计稿,无法直接走 Figma 生成,已采用其分段设计与截图 QA 工作流落地。
- 2026-07-03 高级首页重构本地通过:`npm run format:check`、`npm run lint`、`npm run typecheck`、`npm run test:coverage`、`npm run build`、`npm run test:e2e`、`npm audit --audit-level=moderate`、`docker build -t semi-one-website:local .`
- 2026-07-03 高级首页重构覆盖率:`Statements 89.11% / Branches 80.34% / Functions 85.71% / Lines 90.4%`;Playwright E2E 8 条通过;依赖审计 0 漏洞。
- 2026-07-03 远端 PR CI 通过:GitHub Actions PR verify 包含格式、lint、typecheck、coverage、build、E2E、Docker build
- 2026-07-03 main CI 通过:run `28641302736`,包含 format、lint、typecheck、coverage、build、E2E、Docker build。
- 2026-07-03 main CD 通过:run `28641302668`,已上传 artifact `semi-one-website-dist`(385580 bytes),并推送 GHCR 镜像 `ghcr.io/renfengwu/semi-one-website:f28565fd9fcb5bf20861470494e93a9b2d6db640` 与 `latest`。
- 2026-07-03 公开前扫描:Git 记录未发现 `.env`、私钥、token、根目录原始 `data/` 文件;命中项均为文档中的 Secret 名称或公开 `src/data` 内容。
- 2026-07-03 Pages 发布改造本地通过:`npx prettier --check`(改动文件)、`npm run lint`、`npm run typecheck`、`npm run test:coverage`、`npm run build`、`GITHUB_PAGES=true npm run build`、Pages 子路径 Playwright smoke、`npm run test:e2e`、`npm audit --audit-level=moderate`、`docker build -t semi-one-website:local .`
- 2026-07-03 最新远端 main 全绿:`CI 28642487456`、`CD 28642487475`、`Pages 28642487496`;公网 Playwright smoke 通过,覆盖首页渲染、产品页 SPA 导航、越南语切换,无 404/控制台错误。
- 2026-07-03 按用户要求继续从 GitHub 找 skill:通过 `skill-installer` 从 `openai/skills` 安装并读取 `figma-use`、`figma-implement-design`、`playwright-interactive`;Figma 插件已请求安装但仍需用户授权/OAuth。
- 2026-07-03 二次高级化首页视觉 QA:截图 `after-redesign-home-desktop.png`、`after-redesign-home-mid.png`、`after-redesign-home-mobile.png`;Playwright 检查三档视口 `overflow=false`,控制台错误 0。
- 2026-07-03 二次高级化本地门禁通过:`npx prettier --check`(改动文件)、`npm run lint`、`npm run typecheck`、`npm run test:coverage`、`npm run build`、`GITHUB_PAGES=true npm run build`、`npm run test:e2e`、`npm audit --audit-level=moderate`、`docker build -t semi-one-website:local .`
- 2026-07-03 main CI `28644832626` 通过,CD `28644832635` 通过;Pages push run `28644832752` 与 workflow_dispatch run `28645043656` 均在 `actions/deploy-pages@v4` 部署步骤失败,前置 format/lint/typecheck/coverage/build/upload artifact 均成功。
- 2026-07-03 升级 Pages actions 后远端通过:main CI、CD、Pages 全绿;公网 Playwright smoke 通过,覆盖首页渲染、产品页 SPA 导航、越南语切换,无横向溢出、无控制台错误、无失败请求。
- 2026-07-04 内页高级视觉升级本地通过:`npx prettier --check`(改动源码/CSS)、`npm run lint`、`npm run typecheck`、`npm run test:coverage`、`npm run build`、`GITHUB_PAGES=true npm run build`、`npm run test:e2e`、`npm audit --audit-level=moderate`、`docker build -t semi-one-website:local .`
- 2026-07-04 内页视觉 QA:使用 Playwright 截图 `output/playwright/after-products.png`、`after-applications.png`、`after-technology.png`、`after-quality.png`、`after-about.png`、`after-products-mobile.png`;桌面/移动端 `/`、`/products`、`/applications`、`/technology`、`/quality`、`/about` 均 `overflow=false`,控制台错误 0。
- 2026-07-04 静态内页入口修复本地通过:`npx prettier --check`(改动源码/CSS/脚本)、`npm run lint`、`npm run typecheck`、`npm run test:coverage`、`npm run build`、`GITHUB_PAGES=true npm run build`、`npm run test:e2e`、`npm audit --audit-level=moderate`、`docker build -t semi-one-website:local .`;构建产物已确认生成 `dist/products/index.html`、`dist/applications/index.html`、`dist/technology/index.html`、`dist/quality/index.html`、`dist/about/index.html`。
- 2026-07-04 静态内页入口修复远端通过:commit `47f98a7`;CI `28700023368`、CD `28700023362`、Pages `28700023384` 均 success;公网 `/`、`/products`、`/applications`、`/technology`、`/quality`、`/about` 直访均 `status=200`,移动端 `overflow=false`,控制台错误 0,失败请求 0;越南语首页与产品页导航通过。
- 2026-07-04 企业文化动效升级本地通过:`npm run format:check`、`npm run lint`、`npm run typecheck`、`npm run test:coverage`、`npm run build`、`GITHUB_PAGES=true npm run build`、`npm run test:e2e`、`npm audit --audit-level=moderate`、`docker build -t semi-one-website:local .`;覆盖率 `Statements 86.5% / Branches 78.52% / Functions 81.17% / Lines 87.13%`;E2E 8 条通过;依赖审计 0 漏洞。
- 2026-07-04 企业文化动效视觉 QA:Playwright 截图 `output/playwright/culture-home-desktop.png`、`culture-home-mobile.png`、`culture-home-full.png`、`culture-about-desktop.png`、`culture-about-mobile.png`、`culture-about-full.png`;首页/关于页桌面与移动端均 `status=200`,横向溢出 false,控制台错误 0,失败请求 0;DOM 检查确认文化模块、动效 CSS、越南语文化文案存在。
- 2026-07-04 企业文化动效远端验证:commit `2b20065`;CI `28700614272` success,CD `28700614251` success;Pages push run `28700614273` 在 deploy-pages 返回临时失败,workflow_dispatch run `28700662269` success;公网首页与越南语 smoke 通过,但发现带尾斜杠内页落入前端 404。
- 2026-07-04 Pages 尾斜杠直访修复本地通过:`npm run format:check`、`npm run lint`、`npm run typecheck`、`npm run test:coverage`、`npm run build`、`GITHUB_PAGES=true npm run build`、`npm run test:e2e`、`npm audit --audit-level=moderate`、`docker build -t semi-one-website:local .`;本地 `/products/`、`/applications/`、`/technology/`、`/quality/`、`/about/` 均 `status=200`,非 404,横向溢出 false,`/about/` 企业文化文案存在。
- 2026-07-04 Pages 尾斜杠直访修复远端通过:commit `426cb8c`;CI `28700841925` success,CD `28700841935` success,Pages workflow_dispatch `28700954024` success;公网 `https://renfengwu.github.io/semi-one-website/`、`/products/`、`/applications/`、`/technology/`、`/quality/`、`/about/` 桌面/移动端均 `status=200`,非前端 404,横向溢出 false,控制台错误 0,失败请求 0;首页和关于页企业文化文案存在;越南语文化文案与标题存在。
- 2026-07-04 员工生活与真实素材升级:从 GitHub `openai/skills` HEAD `49f948f` 补装 `figma-create-new-file`、`figma-generate-library`;从 `data/` 筛选 5 张员工活动真实照片并生成 `public/assets/life-*.webp`;首页新增员工生活模块并覆盖 zh/en/vi。
- 2026-07-04 员工生活升级本地通过:`npm run format:check`、`npm run lint`、`npm run typecheck`、`npm run test:coverage`、`npm run build`、`GITHUB_PAGES=true npm run build`、`npm run test:e2e`、`npm audit --audit-level=moderate`、`docker build -t semi-one-website:local .`;E2E 8 条通过,覆盖率 `Statements 86.56% / Branches 78.52% / Functions 81.6% / Lines 87.28%`;依赖审计 0 漏洞。
- 2026-07-04 员工生活视觉与浏览器 smoke:截图 `output/playwright/life-home-desktop-full.png`、`life-home-mobile-full.png`;本地桌面/移动端 `/`、`/products/`、`/applications/`、`/technology/`、`/quality/`、`/about/` 均 `status=200`,横向溢出 false,前端 404 文案 0;首页 `.life-showcase-section` 存在,5 张 `life-*` 图片自然宽度均大于 0;越南语 `Đời sống nhân viên` 存在且无横向溢出。
- 2026-07-04 员工生活升级远端通过:commit `e8a232d`;CI `28701631293` success,CD `28701631292` success,Pages `28701631307` success;公网桌面/移动端 `/`、`/products/`、`/applications/`、`/technology/`、`/quality/`、`/about/` 均 `status=200`,横向溢出 false,前端 404 文案 0;首页 5 张 `life-*` 图片加载成功;越南语 `Đời sống nhân viên` 存在且无横向溢出。
- 2026-07-04 本轮交互升级本地通过:`npm run format:check`、`npm run lint`、`npm run typecheck`、`npm run test:coverage`、`npm run build`、`GITHUB_PAGES=true npm run build`、`npm run test:e2e`、`npm audit --audit-level=moderate`、`docker build -t semi-one-website:local .`;E2E 12 条通过;覆盖率 `Statements 85.12% / Branches 78.85% / Functions 78.09% / Lines 85.78%`;依赖审计 0 漏洞。
- 2026-07-04 本轮交互升级视觉与浏览器 smoke:截图 `output/playwright/nav-life-home.png`、`life-lightbox.png`、`about-map-link.png`、`life-lightbox-mobile.png`;本地桌面/移动端员工生活导航锚点 `lifeInViewport=true`,图片弹窗可打开/下一张/Esc 关闭,关于页地址 href 为 `https://uri.amap.com/search?...&view=map&src=semi-one-website&callnative=0`,首页/关于页横向溢出 false,控制台错误 0,失败请求 0。

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
- GitHub Pages 曾在私有仓库启用失败:GitHub API 返回 `Your current plan does not support GitHub Pages for this repository`;仓库改为 public 后已启用。
- GitHub Pages 已在仓库改为 public 后启用;Pages build 必须设置 `GITHUB_PAGES=true`,否则 Vite asset base 会错误。
- 不要对失败的 Pages run 使用 `gh run rerun --failed`:同一 run 会残留旧 `github-pages` artifact,导致 `deploy-pages` 报 multiple artifacts;应触发新的 Pages workflow run 或推新 commit。
- 若 Pages 在 `deploy-pages` 步骤仅报 `Deployment failed, try again later`,且 artifact 已成功上传,优先触发新的 run 或升级 Pages actions;2026-07-03 已将 Pages workflow 升至 `configure-pages@v6`、`upload-pages-artifact@v5`、`deploy-pages@v5`。
- GitHub Pages 对目录入口会以尾斜杠形式加载,前端路由必须把 `/about/`、`/products/` 等归一化到无尾斜杠路径;否则 HTTP 200 但渲染前端 404,普通状态码 smoke 看不出来。
- `figma-generate-design` skill 需要 Figma MCP(`use_figma`)和明确 Figma 文件;当前会话没有可用 Figma 工具/设计稿,不能伪造调用,只能按其设计流程配合 Playwright/Screenshot 做本地视觉验收。
- `figma-use` / `figma-implement-design` 已从 GitHub 安装到本机 skills,但 Figma 插件仍需要用户在 Codex 界面完成授权/OAuth;授权前没有 `use_figma` 工具可调用。
- 2026-07-04 官方 `skill-installer` 的 curated list helper 对 `openai/skills` 返回 HTTP 403 时,可先把 `https://github.com/openai/skills.git` 同步到临时目录后手动列 `SKILL.md` 路径,再用 `install-skill-from-github.py --repo openai/skills --path ...` 安装明确 skill。
- 2026-07-04 继续从 GitHub `openai/skills` 找到并安装 `figma-create-new-file`、`figma-generate-library`;安装成功后仍需重启 Codex 才会进入当前技能列表,且 Figma MCP/OAuth 未完成前不能真实调用 Figma。
- 员工生活照片来自根目录 `data/` 原始资料,生产仅提交压缩后的 `public/assets/life-*.webp`;不要把 `data/` 原始大文件加入 Git。
- 2026-07-04 第三方 `frontend-design` skill 已从 `Sunwood-ai-labs/frontend-design-skill` 安装到本机 skills;按 skill-installer 规则,完整纳入技能列表需重启 Codex,但本轮已直接读取本地 `SKILL.md` 并按其“明确视觉方向、生产级交互、避免通用模板感”的规则执行。
- 地图链接使用高德 URI API 搜索地址:`https://uri.amap.com/search?keyword=<地址>&view=map&src=semi-one-website&callnative=0`;地址文本本身必须保持为可点击链接,不要只保留旁边按钮。

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
- [x] 2026-07-03 继续按用户要求找 skill,完成高级首页二次重构:技术平台矩阵、晶圆路线图、型号参数板、越南语移动端截图验收
- [x] 2026-07-03 合并 PR #1 到 main,跑通完整 CI + CD:dist artifact 与 GHCR 镜像均已发布
- [x] 2026-07-03 仓库改 public 并启用 GitHub Pages workflow;本地验证 `/semi-one-website/` 子路径可渲染、导航和越南语可用
- [x] 2026-07-03 GitHub Pages 公网发布完成:CI/CD/Pages 全绿,公网 URL 浏览器 smoke 通过
- [x] 2026-07-03 按用户要求继续从 GitHub 找 skill 并安装 `figma-use`、`figma-implement-design`、`playwright-interactive`;首页重做为工程平台指挥舱与产品参数信号板风格

> 反臃肿:里程碑超过 15 条时,把更早内容合并成一行摘要,保持本文件可快速阅读。
