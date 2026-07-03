import { companyProfile } from '../data/company';
import type { Language } from '../lib/i18n';

type AboutPageProps = {
  language: Language;
};

const copy = {
  zh: {
    eyebrow: 'About',
    title: '关于芯电元',
    description: '芯电元成立于 2011 年,专注功率半导体研发、制造、销售与技术服务,总部位于深圳南山。',
    contact: '联系我们',
    tel: '电话',
    mail: '邮箱'
  },
  en: {
    eyebrow: 'About',
    title: 'About Semi-One',
    description:
      'Founded in 2011 and headquartered in Nanshan, Shenzhen, Semi-One focuses on R&D, manufacturing, sales and technical service for power semiconductors.',
    contact: 'Contact',
    tel: 'Tel',
    mail: 'Mail'
  },
  vi: {
    eyebrow: 'Về chúng tôi',
    title: 'Về Semi-One',
    description:
      'Thành lập năm 2011 và đặt trụ sở tại Nam Sơn, Thâm Quyến, Semi-One tập trung vào R&D, sản xuất, kinh doanh và dịch vụ kỹ thuật cho linh kiện công suất bán dẫn.',
    contact: 'Liên hệ',
    tel: 'Điện thoại',
    mail: 'Email'
  }
} satisfies Record<Language, Record<string, string>>;

export function AboutPage({ language }: AboutPageProps) {
  const text = copy[language];

  return (
    <section className="page-section about-layout">
      <div className="section-heading">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p>{text.description}</p>
      </div>
      <div className="timeline">
        {companyProfile.timeline.map((item) => (
          <article key={item.year}>
            <strong>{item.year}</strong>
            <span>
              {language === 'vi' ? item.eventVi : language === 'en' ? item.eventEn : item.event}
            </span>
          </article>
        ))}
      </div>
      <aside className="contact-panel">
        <h2>{text.contact}</h2>
        <p>{companyProfile.contact.address}</p>
        <p>
          {text.tel}: {companyProfile.contact.phone}
        </p>
        <p>
          {text.mail}: {companyProfile.contact.email}
        </p>
      </aside>
    </section>
  );
}
