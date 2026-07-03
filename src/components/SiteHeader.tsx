import type { Language } from '../lib/i18n';
import { routes } from '../app/routes';

type SiteHeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function SiteHeader({ language, onLanguageChange }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="芯电元首页">
        <img src={`${import.meta.env.BASE_URL}assets/semi-one-logo.png`} alt="芯电元 Semi-One" />
      </a>
      <nav className="primary-nav" aria-label="主导航">
        {routes.map((route) => (
          <a key={route.path} href={route.path}>
            {language === 'en' ? route.labelEn : route.label}
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
      </div>
    </header>
  );
}
