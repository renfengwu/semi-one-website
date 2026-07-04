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
    panelTitle: '场景覆盖',
    panelItems: ['6 个应用入口', '电池 / 电源 / 电机', '型号到系统映射'],
    recommended: '推荐'
  },
  en: {
    eyebrow: 'Applications',
    title: 'Applications',
    description:
      'Connecting recommended devices with engineering needs across battery, power and motor systems.',
    panelTitle: 'Scenario Coverage',
    panelItems: ['6 application routes', 'Battery / Power / Motor', 'Part-to-system mapping'],
    recommended: 'Recommended'
  },
  vi: {
    eyebrow: 'Ứng dụng',
    title: 'Giải pháp ứng dụng',
    description:
      'Kết nối linh kiện đề xuất với nhu cầu kỹ thuật trong pin, nguồn điện và hệ thống động cơ.',
    panelTitle: 'Phạm vi ứng dụng',
    panelItems: ['6 tuyến ứng dụng', 'Pin / Nguồn / Động cơ', 'Ánh xạ linh kiện-hệ thống'],
    recommended: 'Đề xuất'
  }
} satisfies Record<
  Language,
  {
    eyebrow: string;
    title: string;
    description: string;
    panelTitle: string;
    panelItems: string[];
    recommended: string;
  }
>;

export function ApplicationsPage({ language }: ApplicationsPageProps) {
  const text = copy[language];

  return (
    <section className="page-section page-section--applications">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.title}</h1>
          <p>{text.description}</p>
        </div>
        <aside className="page-hero-panel" aria-label={text.panelTitle}>
          <span>{text.panelTitle}</span>
          <ul>
            {text.panelItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="page-body">
        <div className="application-grid">
          {applications.map((item, index) => (
            <article className="application-card" key={item.name}>
              <small>0{index + 1}</small>
              <h2>
                {language === 'vi' ? item.nameVi : language === 'en' ? item.nameEn : item.name}
              </h2>
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
                <span>{text.recommended}</span>
                <strong>{item.featuredParts.join(' / ')}</strong>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
