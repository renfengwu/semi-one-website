export type AppRoute = {
  path: string;
  label: string;
  labelEn: string;
  labelVi: string;
};

export const routes: AppRoute[] = [
  { path: '/', label: '首页', labelEn: 'Home', labelVi: 'Trang chủ' },
  { path: '/products', label: '产品', labelEn: 'Products', labelVi: 'Sản phẩm' },
  { path: '/applications', label: '应用', labelEn: 'Applications', labelVi: 'Ứng dụng' },
  { path: '/technology', label: '技术', labelEn: 'Technology', labelVi: 'Công nghệ' },
  { path: '/quality', label: '质量', labelEn: 'Quality', labelVi: 'Chất lượng' },
  { path: '/about', label: '关于我们', labelEn: 'About', labelVi: 'Về chúng tôi' }
];

export function normalizePath(pathname: string) {
  const withoutRepoBase = pathname.replace(/^\/semi-one-website/, '') || '/';
  if (withoutRepoBase === '/Product/') return '/products';
  if (withoutRepoBase === '/applications/') return '/applications';
  if (withoutRepoBase === '/mosfet_support') return '/technology';
  if (withoutRepoBase === '/contact') return '/about';
  return withoutRepoBase;
}
