import { applications } from '../data/applications';
import type { Language } from '../lib/i18n';

type ApplicationsPageProps = {
  language: Language;
};

const copy = {
  zh: {
    eyebrow: 'Applications',
    title: '应用方案',
    description: '围绕电池、电源、电机三类主轴,将推荐器件与工程诉求连接起来。',
    recommended: '推荐'
  },
  en: {
    eyebrow: 'Applications',
    title: 'Applications',
    description:
      'Connecting recommended devices with engineering needs across battery, power and motor systems.',
    recommended: 'Recommended'
  },
  vi: {
    eyebrow: 'Ứng dụng',
    title: 'Giải pháp ứng dụng',
    description:
      'Kết nối linh kiện đề xuất với nhu cầu kỹ thuật trong pin, nguồn điện và hệ thống động cơ.',
    recommended: 'Đề xuất'
  }
} satisfies Record<Language, Record<string, string>>;

export function ApplicationsPage({ language }: ApplicationsPageProps) {
  const text = copy[language];

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p>{text.description}</p>
      </div>
      <div className="application-grid">
        {applications.map((item) => (
          <article className="application-card" key={item.name}>
            <h2>{language === 'vi' ? item.nameVi : language === 'en' ? item.nameEn : item.name}</h2>
            <p>
              {language === 'vi'
                ? item.summaryVi
                : language === 'en'
                  ? item.summaryEn
                  : item.summary}
            </p>
            <ul>
              {(language === 'vi'
                ? item.needsVi
                : language === 'en'
                  ? item.needsEn
                  : item.needs
              ).map((need) => (
                <li key={need}>{need}</li>
              ))}
            </ul>
            <p className="part-list">
              {text.recommended}: {item.featuredParts.join(' / ')}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
