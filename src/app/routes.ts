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
  const configuredBase = import.meta.env.BASE_URL.replace(/\/$/, '');
  const withoutConfiguredBase =
    configuredBase && pathname.startsWith(configuredBase)
      ? pathname.slice(configuredBase.length) || '/'
      : pathname;
  const withoutRepoBase = withoutConfiguredBase.replace(/^\/semi-one-website/, '') || '/';
  const normalized = withoutRepoBase === '/' ? '/' : withoutRepoBase.replace(/\/+$/, '');
  if (normalized === '/Product') return '/products';
  if (normalized === '/mosfet_support') return '/technology';
  if (normalized === '/contact') return '/about';
  return normalized;
}

export function siteHref(path: string) {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!base) return path;
  if (path === '/') return `${base}/`;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function navigateTo(path: string) {
  window.history.pushState({}, '', siteHref(path));
  window.dispatchEvent(new Event('semi-one:navigation'));
  window.scrollTo({ top: 0 });
}

type SiteNavigationEvent = {
  altKey: boolean;
  button: number;
  ctrlKey: boolean;
  defaultPrevented: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  preventDefault: () => void;
};

export function handleSiteNavigation(event: SiteNavigationEvent, path: string) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey
  ) {
    return;
  }
  event.preventDefault();
  navigateTo(path);
}
