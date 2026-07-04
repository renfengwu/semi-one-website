import { useEffect, useMemo, useState } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { companyProfile } from '../data/company';
import { AboutPage } from '../pages/AboutPage';
import { ApplicationsPage } from '../pages/ApplicationsPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ProductsPage } from '../pages/ProductsPage';
import { QualityPage } from '../pages/QualityPage';
import { TechnologyPage } from '../pages/TechnologyPage';
import { normalizePath } from './routes';
import type { Language } from '../lib/i18n';
import { applyPageMeta } from '../lib/seo';

function currentPath() {
  return normalizePath(window.location.pathname);
}

export default function App() {
  const [path, setPath] = useState(currentPath);
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    const onPopState = () => setPath(currentPath());
    window.addEventListener('popstate', onPopState);
    window.addEventListener('semi-one:navigation', onPopState);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('semi-one:navigation', onPopState);
    };
  }, []);

  useEffect(() => {
    const metaTitle =
      language === 'vi'
        ? 'Semi-One | Linh kiện công suất bán dẫn'
        : language === 'en'
          ? 'Semi-One | Power Semiconductor Devices'
          : path === '/'
            ? '芯电元 Semi-One | 功率半导体器件'
            : `芯电元${path}`;
    applyPageMeta({
      title: metaTitle,
      description:
        language === 'vi'
          ? 'Website Semi-One giới thiệu sản phẩm công suất bán dẫn, ứng dụng, lộ trình công nghệ và hệ thống chất lượng.'
          : language === 'en'
            ? 'Semi-One website for power semiconductor products, applications, technology roadmap and quality systems.'
            : '芯电元科技官网升级版,展示功率半导体产品、应用方案、技术路线与质量体系。'
    });
  }, [language, path]);

  const page = useMemo(() => {
    if (path === '/') return <HomePage language={language} />;
    if (path === '/products') return <ProductsPage language={language} />;
    if (path === '/applications') return <ApplicationsPage language={language} />;
    if (path === '/technology') return <TechnologyPage language={language} />;
    if (path === '/quality') return <QualityPage language={language} />;
    if (path === '/about') return <AboutPage language={language} />;
    return <NotFoundPage language={language} />;
  }, [language, path]);

  const mapLabel = language === 'vi' ? 'Mở bản đồ' : language === 'en' ? 'Open Map' : '打开地图';

  return (
    <div className="app-shell">
      <SiteHeader currentPath={path} language={language} onLanguageChange={setLanguage} />
      <main>{page}</main>
      <footer className="site-footer">
        <span>Copyright 2026 深圳市芯电元科技有限公司</span>
        <a href={companyProfile.contact.mapUrl} target="_blank" rel="noreferrer">
          {mapLabel}
        </a>
        <a href="mailto:shuangling@semi-one.com">shuangling@semi-one.com</a>
      </footer>
    </div>
  );
}
