import { expect, test } from '@playwright/test';

test('home page exposes primary routes and visual asset', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /深圳市芯电元科技有限公司/i })).toBeVisible();
  await expect(
    page.getByRole('navigation', { name: /主导航/i }).getByRole('link', { name: '产品' })
  ).toBeVisible();
  await expect(page.getByAltText(/功率半导体产品/)).toBeVisible();
  await expect(page.getByRole('heading', { name: /技术之外/ })).toBeVisible();
  await expect(page.getByText('员工生活')).toBeVisible();
  const lifeImage = page.getByAltText(/湖南郴州团建合影/);
  await expect(lifeImage).toBeVisible();
  await expect
    .poll(async () => lifeImage.evaluate((image) => (image as HTMLImageElement).naturalWidth))
    .toBeGreaterThan(0);
});

test('product search works on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/products');
  await page.getByLabel(/搜索型号/i).fill('PE54130');
  await expect(page.getByText('PE54130GT')).toBeVisible();
  await expect(page.getByText('PE4612')).toHaveCount(0);
});

test('legacy product path reaches product center', async ({ page }) => {
  await page.goto('/Product/');
  await expect(page.getByRole('heading', { name: '产品中心' })).toBeVisible();
});

test('Vietnamese language switch exposes localized navigation and hero copy', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'VI' }).click();
  await expect(
    page.getByRole('navigation', { name: /主导航/i }).getByRole('link', { name: 'Sản phẩm' })
  ).toBeVisible();
  await expect(page.getByText(/Nền tảng linh kiện công suất bán dẫn/i)).toBeVisible();
  await expect(page.getByText('Đời sống nhân viên')).toBeVisible();
});
