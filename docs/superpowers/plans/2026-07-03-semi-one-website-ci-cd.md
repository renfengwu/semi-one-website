# Semi-One Website CI/CD Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first production-ready Semi-One corporate website and run the full GitHub Flow, CI, Docker-based CD, and `/health` deployment verification.

**Architecture:** The site is a Vite + React + TypeScript static application. Content is stored as typed data modules under `src/data` and rendered through page-level React components, with product filtering logic isolated in testable utilities. Deployment builds a static bundle into an Nginx Docker image and serves `/health` for CD verification.

**Tech Stack:** Node 24, Vite, React, TypeScript, Tailwind CSS, Vitest, Testing Library, Playwright, ESLint, Prettier, Docker, Nginx, GitHub Actions.

---

## File Structure

- Create `.gitignore`: ignore `node_modules`, build output, Playwright reports, local env files, raw generated scratch output, and local worktrees.
- Create `README.md`: document local commands, CI/CD flow, required GitHub Secrets, and deployment port behavior.
- Create `package.json`: scripts for dev, build, lint, typecheck, format check, unit tests, coverage, and E2E.
- Create `index.html`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `eslint.config.js`, `.prettierrc`, `postcss.config.js`, `tailwind.config.ts`.
- Create `src/main.tsx`, `src/app/App.tsx`, `src/app/routes.ts`, `src/styles/global.css`.
- Create `src/data/company.ts`, `src/data/products.ts`, `src/data/applications.ts`, `src/data/certifications.ts`, `src/data/navigation.ts`.
- Create `src/lib/productFilters.ts`, `src/lib/i18n.ts`, `src/lib/seo.ts`.
- Create `src/components/*`: layout, navigation, hero, cards, product table, filters, language switcher, CTA, footer.
- Create `src/pages/*`: home, products, applications, technology, quality, about-contact, not-found.
- Create `src/test/*`: render helpers and fixtures.
- Create `tests/unit/*`: Vitest unit/component tests.
- Create `tests/e2e/*`: Playwright critical path tests.
- Create `public/health`: static health file served as `/health`.
- Create `Dockerfile`, `nginx.conf`, `.dockerignore`.
- Create `.github/workflows/ci.yml`, `.github/workflows/cd.yml`.
- Modify `standards/PROGRESS.md` after each confirmation gate and module.

---

### Task 1: Repository Bootstrap And Confirmation Gate 1

**Files:**

- Create: `.gitignore`
- Create: `README.md`
- Modify: `standards/PROGRESS.md`

- [ ] **Step 1: Inspect toolchain and auth**

Run:

```powershell
git --version
gh --version
gh auth status
```

Expected: `git` and `gh` are available, and `gh auth status` shows a logged-in GitHub account. If GitHub CLI is not authenticated, stop and ask the user to log in.

- [ ] **Step 2: Initialize local repository**

Run:

```powershell
git init -b main
```

Expected: repository initialized on `main`.

- [ ] **Step 3: Create `.gitignore`**

Create:

```gitignore
node_modules/
dist/
coverage/
playwright-report/
test-results/
.env
.env.*
!.env.example
.worktrees/
*.log
*.tmp
```

- [ ] **Step 4: Create minimal `README.md`**

Create:

```markdown
# Semi-One Website Upgrade

Corporate website upgrade for Shenzhen Semi-One Technology Co., Ltd.

## Workflow

Development follows `standards/06-ai-collab-protocol.md`:

1. Create repository and configure GitHub Secrets.
2. Create a feature branch from `main`.
3. Build modules with tests.
4. Run local quality gates.
5. Open a PR and wait for CI.
6. Human review and merge trigger CD.

## Required GitHub Actions Secrets

- `SSH_PRIVATE_KEY`
- `SSH_HOST`
- `SSH_USER`

## Deployment

The app container is named `semi-one-website`.
The preferred host port is `8080`, with fallback through `8089`.
Health check path: `/health`.
```

- [ ] **Step 5: Commit minimal bootstrap**

Run:

```powershell
git add .gitignore README.md standards/00-project-context.md standards/01-requirements.md standards/PROGRESS.md docs/superpowers/plans/2026-07-03-semi-one-website-ci-cd.md
git commit -m "docs: initialize project standards"
```

Expected: commit succeeds with only documentation and bootstrap files.

- [ ] **Step 6: Create GitHub repository and push `main`**

Run:

```powershell
gh repo create semi-one-website --private --source . --remote origin --push
```

Expected: GitHub repository is created and `main` is pushed.

- [ ] **Step 7: Stop at confirmation gate 1**

Update `standards/PROGRESS.md` with repository URL and current stage. Tell the user to configure `SSH_PRIVATE_KEY`, `SSH_HOST`, and `SSH_USER` in GitHub Actions Secrets. Do not create the feature branch until the user confirms Secrets are configured.

---

### Task 2: Feature Branch And Frontend Scaffold

**Files:**

- Create: `package.json`, `index.html`, `vite.config.ts`, TypeScript, ESLint, Prettier, Tailwind, PostCSS config files
- Create: `src/main.tsx`, `src/app/App.tsx`, `src/styles/global.css`
- Test: `tests/unit/app-smoke.test.tsx`

- [ ] **Step 1: Create feature branch**

Run:

```powershell
git switch main
git pull
git switch -c feature/1-website-ci-cd
```

Expected: current branch is `feature/1-website-ci-cd`.

- [ ] **Step 2: Scaffold Vite React TypeScript**

Run:

```powershell
npm create vite@latest . -- --template react-ts
npm install
```

Expected: Vite files are created and dependencies install.

- [ ] **Step 3: Install project quality dependencies**

Run:

```powershell
npm install -D tailwindcss @tailwindcss/postcss postcss prettier eslint @eslint/js typescript-eslint vitest @testing-library/react @testing-library/jest-dom jsdom @playwright/test lucide-react
```

Expected: dev dependencies install without peer dependency errors.

- [ ] **Step 4: Configure scripts in `package.json`**

Use these scripts:

```json
{
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "tsc -b && vite build",
    "preview": "vite preview --host 0.0.0.0",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test"
  }
}
```

- [ ] **Step 5: Create smoke test**

Create `tests/unit/app-smoke.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../../src/app/App';

describe('App', () => {
  it('renders the Semi-One brand entry', () => {
    render(<App />);
    expect(screen.getByText(/芯电元/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 6: Implement minimal app shell**

Create `src/app/App.tsx`:

```tsx
export default function App() {
  return (
    <main>
      <h1>芯电元 Semi-One</h1>
      <p>Specialized in power semiconductor devices.</p>
    </main>
  );
}
```

- [ ] **Step 7: Run scaffold verification**

Run:

```powershell
npm run format:check
npm run lint
npm run typecheck
npm run test:run
npm run build
```

Expected: all commands pass.

- [ ] **Step 8: Commit scaffold**

Run:

```powershell
git add .
git commit -m "feat: scaffold website app"
```

---

### Task 3: Typed Content And Product Filtering

**Files:**

- Create: `src/data/company.ts`
- Create: `src/data/products.ts`
- Create: `src/data/applications.ts`
- Create: `src/data/certifications.ts`
- Create: `src/lib/productFilters.ts`
- Test: `tests/unit/productFilters.test.ts`

- [ ] **Step 1: Write product filter tests**

Create `tests/unit/productFilters.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { filterProducts } from '../../src/lib/productFilters';
import type { Product } from '../../src/data/products';

const products: Product[] = [
  {
    partNumber: 'PE54130GT',
    category: 'MOSFET',
    packageName: 'DFN5X6-8L',
    config: 'S-N',
    vds: 40,
    vgs: 20,
    id: 130,
    vgsThreshold: 1.6,
    rdsOn: { '10V': 1.1, '4.5V': 1.4 },
    applications: ['BMS/储能', '电动工具'],
    datasheetUrl: 'http://www.semi-one.com/Uploads/pdf/PE54130GT.pdf'
  },
  {
    partNumber: 'PE4612',
    category: 'MOSFET',
    packageName: 'CSP',
    config: 'S-N',
    vds: 22,
    vgs: 12,
    id: 4,
    vgsThreshold: 0.7,
    rdsOn: { '4.5V': 28, '2.5V': 38 },
    applications: ['3C 数码电池'],
    datasheetUrl: 'http://www.semi-one.com/Uploads/pdf/PE4612.pdf'
  }
];

describe('filterProducts', () => {
  it('matches part number queries case-insensitively', () => {
    expect(filterProducts(products, { query: 'pe541' })).toHaveLength(1);
    expect(filterProducts(products, { query: 'pe541' })[0].partNumber).toBe('PE54130GT');
  });

  it('filters by application and maximum Vds', () => {
    const result = filterProducts(products, { application: '3C 数码电池', maxVds: 30 });
    expect(result.map((item) => item.partNumber)).toEqual(['PE4612']);
  });
});
```

- [ ] **Step 2: Implement product data type**

Create `src/data/products.ts` with at least 18 representative products from the PPT and old site:

```ts
export type Product = {
  partNumber: string;
  category: 'MOSFET' | '功率 IC' | 'TVS' | 'IGBT' | '模拟开关';
  packageName: string;
  config: string;
  vds: number;
  vgs: number;
  id: number;
  vgsThreshold: number;
  rdsOn: Partial<Record<'10V' | '4.5V' | '2.5V' | '1.8V', number>>;
  applications: string[];
  datasheetUrl: string;
};

export const products: Product[] = [
  {
    partNumber: 'PE54130GT',
    category: 'MOSFET',
    packageName: 'DFN5X6-8L',
    config: 'S-N',
    vds: 40,
    vgs: 20,
    id: 130,
    vgsThreshold: 1.6,
    rdsOn: { '10V': 1.1, '4.5V': 1.4 },
    applications: ['BMS/储能', '电动工具'],
    datasheetUrl: 'http://www.semi-one.com/Uploads/pdf/PE54130GT.pdf'
  }
];
```

- [ ] **Step 3: Implement filter utility**

Create `src/lib/productFilters.ts`:

```ts
import type { Product } from '../data/products';

export type ProductFilter = {
  query?: string;
  category?: Product['category'];
  application?: string;
  packageName?: string;
  maxVds?: number;
};

export function filterProducts(products: Product[], filter: ProductFilter): Product[] {
  const query = filter.query?.trim().toLowerCase();

  return products.filter((product) => {
    if (query && !product.partNumber.toLowerCase().includes(query)) return false;
    if (filter.category && product.category !== filter.category) return false;
    if (filter.application && !product.applications.includes(filter.application)) return false;
    if (filter.packageName && product.packageName !== filter.packageName) return false;
    if (typeof filter.maxVds === 'number' && Math.abs(product.vds) > filter.maxVds) return false;
    return true;
  });
}
```

- [ ] **Step 4: Run tests**

Run:

```powershell
npm run test:run -- tests/unit/productFilters.test.ts
```

Expected: product filter tests pass.

- [ ] **Step 5: Commit typed content**

Run:

```powershell
git add src/data src/lib tests/unit/productFilters.test.ts
git commit -m "feat: add typed product content"
```

---

### Task 4: Website Pages And Responsive UI

**Files:**

- Create/modify: `src/app/App.tsx`, `src/app/routes.ts`
- Create: `src/components/*.tsx`
- Create: `src/pages/*.tsx`
- Modify: `src/styles/global.css`
- Test: `tests/unit/navigation.test.tsx`

- [ ] **Step 1: Write navigation test**

Create `tests/unit/navigation.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../../src/app/App';

describe('Navigation', () => {
  it('exposes the primary corporate sections', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /产品/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /应用/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /技术/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /质量/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Implement page structure**

Use semantic routes:

```ts
export const routes = [
  { path: '/', label: '首页' },
  { path: '/products', label: '产品' },
  { path: '/applications', label: '应用' },
  { path: '/technology', label: '技术' },
  { path: '/quality', label: '质量' },
  { path: '/about', label: '关于我们' }
] as const;
```

- [ ] **Step 3: Implement pages**

Each page must render real sourced content:

```tsx
export function TechnologyPage() {
  return (
    <section aria-labelledby="technology-title">
      <h1 id="technology-title">技术与创新</h1>
      <p>覆盖 Trench MOS、SGT MOS、SJ MOS、IGBT、SiC/GaN 的功率器件研发路线。</p>
    </section>
  );
}
```

- [ ] **Step 4: Build responsive styles**

`src/styles/global.css` must include Tailwind imports, accessible focus styles, stable layout sizing, and no decorative orphan backgrounds.

- [ ] **Step 5: Run page verification**

Run:

```powershell
npm run test:run -- tests/unit/navigation.test.tsx
npm run build
```

Expected: tests and build pass.

- [ ] **Step 6: Commit pages**

Run:

```powershell
git add src tests/unit/navigation.test.tsx
git commit -m "feat: build corporate website pages"
```

---

### Task 5: Product Center Interaction And I18n

**Files:**

- Modify: `src/components/ProductTable.tsx`
- Modify: `src/components/ProductFilters.tsx`
- Modify: `src/lib/i18n.ts`
- Modify: `src/data/company.ts`
- Test: `tests/unit/i18n.test.ts`, `tests/unit/productTable.test.tsx`

- [ ] **Step 1: Write i18n test**

Create `tests/unit/i18n.test.ts`:

```ts
import { describe, expect, it } from 'vitest';
import { getLocalizedText } from '../../src/lib/i18n';

describe('getLocalizedText', () => {
  it('returns English content when English is selected', () => {
    expect(getLocalizedText({ zh: '产品', en: 'Products' }, 'en')).toBe('Products');
  });

  it('falls back to Chinese when English content is missing', () => {
    expect(getLocalizedText({ zh: '质量' }, 'en')).toBe('质量');
  });
});
```

- [ ] **Step 2: Implement i18n helper**

Create `src/lib/i18n.ts`:

```ts
export type Language = 'zh' | 'en';
export type LocalizedText = { zh: string; en?: string };

export function getLocalizedText(text: LocalizedText, language: Language): string {
  return language === 'en' ? (text.en ?? text.zh) : text.zh;
}
```

- [ ] **Step 3: Write product table test**

Create `tests/unit/productTable.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ProductsPage } from '../../src/pages/ProductsPage';

describe('ProductsPage', () => {
  it('filters products by model text', async () => {
    render(<ProductsPage />);
    await userEvent.type(screen.getByLabelText(/搜索型号/i), 'PE54130');
    expect(screen.getByText('PE54130GT')).toBeInTheDocument();
  });
});
```

- [ ] **Step 4: Implement product interaction**

Product filters must use controlled inputs with labels, stable widths, and no layout shift. Product table rows must link to datasheets when `datasheetUrl` exists.

- [ ] **Step 5: Run tests**

Run:

```powershell
npm run test:run -- tests/unit/i18n.test.ts tests/unit/productTable.test.tsx
npm run build
```

Expected: tests and build pass.

- [ ] **Step 6: Commit interaction**

Run:

```powershell
git add src tests/unit/i18n.test.ts tests/unit/productTable.test.tsx
git commit -m "feat: add product filtering and language support"
```

---

### Task 6: E2E, Docker, CI And CD

**Files:**

- Create: `playwright.config.ts`
- Create: `tests/e2e/site.spec.ts`
- Create: `public/health`
- Create: `Dockerfile`
- Create: `nginx.conf`
- Create: `.dockerignore`
- Create: `.github/workflows/ci.yml`
- Create: `.github/workflows/cd.yml`
- Modify: `README.md`

- [ ] **Step 1: Create E2E test**

Create `tests/e2e/site.spec.ts`:

```ts
import { expect, test } from '@playwright/test';

test('home page exposes primary routes', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /芯电元|Semi-One/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /产品/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /应用/i })).toBeVisible();
});

test('product search works on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/products');
  await page.getByLabel(/搜索型号/i).fill('PE54130');
  await expect(page.getByText('PE54130GT')).toBeVisible();
});
```

- [ ] **Step 2: Configure Playwright**

Create `playwright.config.ts`:

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  webServer: {
    command: 'npm run dev -- --port 5173',
    url: 'http://127.0.0.1:5173',
    reuseExistingServer: !process.env.CI
  },
  use: {
    baseURL: 'http://127.0.0.1:5173',
    trace: 'on-first-retry'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile-chrome', use: { ...devices['Pixel 7'] } }
  ]
});
```

- [ ] **Step 3: Create Docker/Nginx files**

Create `public/health`:

```text
ok
```

Create `Dockerfile`:

```dockerfile
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

Create `nginx.conf`:

```nginx
server {
  listen 80;
  server_name _;
  root /usr/share/nginx/html;
  index index.html;

  location = /health {
    add_header Content-Type text/plain;
    try_files /health =200;
  }

  location /Product/ {
    return 301 /products;
  }

  location /applications/ {
    return 301 /applications;
  }

  location /mosfet_support {
    return 301 /technology;
  }

  location /contact {
    return 301 /about;
  }

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

- [ ] **Step 4: Create CI workflow**

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  pull_request:
  push:
    branches: [main]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: npm
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npm run format:check
      - run: npm run lint
      - run: npm run typecheck
      - run: npm run test:coverage
      - run: npm run build
      - run: npm run test:e2e
      - run: docker build -t semi-one-website:ci .
```

- [ ] **Step 5: Create CD workflow**

Create `.github/workflows/cd.yml`:

```yaml
name: CD

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configure SSH
        run: |
          mkdir -p ~/.ssh
          printf '%s\n' "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/deploy_key
          chmod 600 ~/.ssh/deploy_key
          ssh-keyscan -H "${{ secrets.SSH_HOST }}" >> ~/.ssh/known_hosts
      - name: Sync repository
        run: |
          rsync -az --delete -e "ssh -i ~/.ssh/deploy_key" ./ "${{ secrets.SSH_USER }}@${{ secrets.SSH_HOST }}:/opt/semi-one-website/"
      - name: Deploy container
        run: |
          ssh -i ~/.ssh/deploy_key "${{ secrets.SSH_USER }}@${{ secrets.SSH_HOST }}" 'bash -s' <<'DEPLOY'
          set -e
          cd /opt/semi-one-website
          docker build -t semi-one-website:latest .
          port_in_use() {
            ss -ltnH 2>/dev/null | grep -q ":$1 " && return 0
            docker ps --format "{{.Ports}}" 2>/dev/null | grep -q ":$1->" && return 0
            return 1
          }
          PORT=""
          for p in $(seq 8080 8089); do
            if ! port_in_use "$p"; then PORT="$p"; break; fi
          done
          [ -z "$PORT" ] && { echo "reserved port range is full"; exit 1; }
          docker rm -f semi-one-website 2>/dev/null || true
          docker run -d --name semi-one-website --restart unless-stopped -p ${PORT}:80 semi-one-website:latest
          sleep 3
          curl -fsS "http://localhost:${PORT}/health"
          echo "DEPLOYED_URL=http://${{ secrets.SSH_HOST }}:${PORT}/health"
          DEPLOY
```

- [ ] **Step 6: Run local gates**

Run:

```powershell
npm run format:check
npm run lint
npm run typecheck
npm run test:coverage
npm run build
npm run test:e2e
```

Expected: all local gates pass. Docker build is optional locally and required in CI.

- [ ] **Step 7: Commit CI/CD**

Run:

```powershell
git add .
git commit -m "ci: add website quality gates and deployment"
```

---

### Task 7: PR, CI Watch, Human Merge, CD Watch

**Files:**

- Modify: `standards/PROGRESS.md`

- [ ] **Step 1: Push feature branch**

Run:

```powershell
git push -u origin feature/1-website-ci-cd
```

Expected: branch is pushed.

- [ ] **Step 2: Create PR**

Run:

```powershell
gh pr create --base main --head feature/1-website-ci-cd --title "feat: launch Semi-One website with CI/CD" --body "closes #1"
```

Expected: PR URL is printed.

- [ ] **Step 3: Watch CI**

Run:

```powershell
gh run list --limit 5
gh run watch
```

Expected: PR CI passes. If CI fails, inspect logs, fix on the feature branch, rerun local gates, push, and watch again.

- [ ] **Step 4: Stop for human review**

Report PR URL and CI status. Do not merge the PR. The user performs review and merge.

- [ ] **Step 5: Watch CD after user merge**

After the user confirms the PR is merged, run:

```powershell
git switch main
git pull
gh run list --limit 5
gh run watch
```

Expected: CD passes and prints `DEPLOYED_URL=http://<host>:<port>/health`.

- [ ] **Step 6: Record completion**

Update `standards/PROGRESS.md` with final port, health check result, PR URL, CI result, CD result, and any gotchas.

---

## Self-Review

- Spec coverage: US-1 is covered by Tasks 1, 6, and 7. US-2 through US-8 are covered by Tasks 3 through 6. US-9 is covered by typed data modules and tests in Tasks 3 and 5. US-10 is covered by Nginx redirects in Task 6.
- Placeholder scan: The plan avoids vague implementation steps and gives exact paths, commands, and first-pass code for custom logic.
- Type consistency: Product type names, filter names, app routes, command names, Docker app name, port range, and health path match `standards/00-project-context.md` and `standards/01-requirements.md`.
