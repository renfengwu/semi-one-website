import type { Language } from '../lib/i18n';
import { handleSiteNavigation, routes, siteHref } from '../app/routes';

type SiteHeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function SiteHeader({ language, onLanguageChange }: SiteHeaderProps) {
  const routeLabel = (route: (typeof routes)[number]) => {
    if (language === 'en') return route.labelEn;
    if (language === 'vi') return route.labelVi;
    return route.label;
  };

  return (
    <header className="site-header">
      <a
        className="brand"
        href={siteHref('/')}
        aria-label="芯电元首页"
        onClick={(event) => handleSiteNavigation(event, '/')}
      >
        <img src={`${import.meta.env.BASE_URL}assets/semi-one-logo.png`} alt="芯电元 Semi-One" />
      </a>
      <nav className="primary-nav" aria-label="主导航">
        {routes.map((route) => (
          <a
            key={route.path}
            href={siteHref(route.path)}
            onClick={(event) => handleSiteNavigation(event, route.path)}
          >
            {routeLabel(route)}
          </a>
        ))}
      </nav>
      <div className="language-switcher" aria-label="语言切换">
        <button
          className={language === 'zh' ? 'active' : ''}
          type="button"
          onClick={() => onLanguageChange('zh')}
        >
          中文
        </button>
        <button
          className={language === 'en' ? 'active' : ''}
          type="button"
          onClick={() => onLanguageChange('en')}
        >
          EN
        </button>
        <button
          className={language === 'vi' ? 'active' : ''}
          type="button"
          onClick={() => onLanguageChange('vi')}
        >
          VI
        </button>
      </div>
    </header>
  );
}
