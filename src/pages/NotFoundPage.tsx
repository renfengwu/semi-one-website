import type { Language } from '../lib/i18n';
import { handleSiteNavigation, siteHref } from '../app/routes';

type NotFoundPageProps = {
  language: Language;
};

const copy = {
  zh: {
    title: '页面未找到',
    description: '请返回首页或使用导航访问产品、应用和技术内容。',
    action: '返回首页'
  },
  en: {
    title: 'Page not found',
    description:
      'Return home or use the navigation to access products, applications and technology.',
    action: 'Back to home'
  },
  vi: {
    title: 'Không tìm thấy trang',
    description: 'Quay lại trang chủ hoặc dùng điều hướng để xem sản phẩm, ứng dụng và công nghệ.',
    action: 'Về trang chủ'
  }
} satisfies Record<Language, Record<string, string>>;

export function NotFoundPage({ language }: NotFoundPageProps) {
  const text = copy[language];

  return (
    <section className="page-section page-section--not-found">
      <div className="section-heading">
        <div>
          <h1>{text.title}</h1>
          <p>{text.description}</p>
        </div>
      </div>
      <div className="page-body">
        <a
          className="button primary"
          href={siteHref('/')}
          onClick={(event) => handleSiteNavigation(event, '/')}
        >
          {text.action}
        </a>
      </div>
    </section>
  );
}
