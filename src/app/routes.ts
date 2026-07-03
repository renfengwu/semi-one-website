export type AppRoute = {
  path: string;
  label: string;
  labelEn: string;
};

export const routes: AppRoute[] = [
  { path: '/', label: '首页', labelEn: 'Home' },
  { path: '/products', label: '产品', labelEn: 'Products' },
  { path: '/applications', label: '应用', labelEn: 'Applications' },
  { path: '/technology', label: '技术', labelEn: 'Technology' },
  { path: '/quality', label: '质量', labelEn: 'Quality' },
  { path: '/about', label: '关于我们', labelEn: 'About' }
];

export function normalizePath(pathname: string) {
  const withoutRepoBase = pathname.replace(/^\/semi-one-website/, '') || '/';
  if (withoutRepoBase === '/Product/') return '/products';
  if (withoutRepoBase === '/applications/') return '/applications';
  if (withoutRepoBase === '/mosfet_support') return '/technology';
  if (withoutRepoBase === '/contact') return '/about';
  return withoutRepoBase;
}
