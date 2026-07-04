import { expect, test } from '@playwright/test';

test('home page exposes primary routes and visual asset', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /深圳市芯电元科技有限公司/i })).toBeVisible();
  await expect(
    page.getByRole('navigation', { name: /主导航/i }).getByRole('link', { name: '产品' })
  ).toBeVisible();
  await expect(page.getByAltText(/功率半导体产品/)).toBeVisible();
  await expect(page.locator('#life')).toHaveCount(0);
  await page
    .getByRole('navigation', { name: /主导航/i })
    .getByRole('link', { name: '员工生活' })
    .click();
  await expect(page).toHaveURL(/\/about#life$/);
  await expect(page.locator('#life')).toBeInViewport();
  await expect(page.getByRole('heading', { name: /技术之外/ })).toBeVisible();
  await expect(page.locator('#life').getByText('员工生活', { exact: true })).toBeVisible();
  const lifeImage = page.getByAltText(/湖南郴州团建合影/);
  await expect(lifeImage).toBeVisible();
  await expect
    .poll(async () => lifeImage.evaluate((image) => (image as HTMLImageElement).naturalWidth))
    .toBeGreaterThan(0);
});

test('employee life photos open a larger image viewer', async ({ page }) => {
  await page.goto('/about');
  await page.getByRole('button', { name: /放大查看图片: 同一面旗帜/ }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole('heading', { name: '同一面旗帜下向下一程出发' })).toBeVisible();
  await page.getByRole('button', { name: '下一张' }).click();
  await expect(dialog.getByRole('heading', { name: '在户外场景里建立协作默契' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
});

test('employee life deep link lands inside the about page section', async ({ page }) => {
  await page.goto('/about#life');
  await expect(page.getByRole('heading', { name: /关于芯电元/ })).toBeVisible();
  await expect(page.locator('#life')).toBeInViewport();
  await expect(page.locator('#life').getByText('员工生活', { exact: true })).toBeVisible();
});

test('company address links directly to map search results', async ({ page }) => {
  await page.goto('/about');
  const mapLink = page.getByRole('link', {
    name: '深圳市南山区留仙大道3370号南山智园崇文园区3号楼1901/1902'
  });
  await expect(mapLink).toBeVisible();
  await expect(mapLink).toHaveAttribute('href', /uri\.amap\.com\/search/);
  await expect(mapLink).toHaveAttribute('href', /keyword=/);
  await expect(mapLink).toHaveAttribute('href', /view=map/);
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
  await page.locator('.language-switcher button').filter({ hasText: 'VI' }).click();
  await expect(
    page.getByRole('navigation', { name: /主导航/i }).getByRole('link', { name: 'Sản phẩm' })
  ).toBeVisible();
  await expect(page.getByText(/Nền tảng linh kiện công suất bán dẫn/i)).toBeVisible();
  await page
    .getByRole('navigation', { name: /主导航/i })
    .getByRole('link', { name: 'Đời sống' })
    .click();
  await expect(page).toHaveURL(/\/about#life$/);
  await expect(page.locator('#life')).toBeInViewport();
  await expect(
    page.locator('#life').getByText('Đời sống nhân viên', { exact: true })
  ).toBeVisible();
});
