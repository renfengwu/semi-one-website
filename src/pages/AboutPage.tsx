import { MapPin, Navigation } from 'lucide-react';
import { LifeShowcase } from '../components/LifeShowcase';
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
    panelTitle: '组织网络',
    panelItems: ['深圳总部', '8 个区域触点', '研发 / 制造 / 销售 / 服务'],
    valuesTitle: '企业文化',
    valuesLead: '芯电元的文化不是口号,而是研发、质量、供应和客户工程每天共同执行的工作方式。',
    values: [
      {
        title: '引领',
        body: '持续投入 Trench、SGT、SJ MOS 与宽禁带路线,用前瞻技术平台回应客户下一代系统需求。'
      },
      {
        title: '专业',
        body: '把器件参数、可靠性测试、热设计和现场支持整合成可验证、可追溯的方案。'
      },
      {
        title: '可靠',
        body: '以 ISO 管理体系、实验室验证和量产经验守住功率器件交付底线。'
      },
      {
        title: '共赢',
        body: '与客户、供应链、渠道伙伴共享路线图和应用经验,共同扩大功率半导体价值。'
      }
    ],
    contact: '联系我们',
    tel: '电话',
    mail: '邮箱',
    mailHint: '发送邮件到公司邮箱',
    map: '打开地图',
    mapHint: '自动打开地图并搜索公司地址'
  },
  en: {
    eyebrow: 'About',
    title: 'About Semi-One',
    description:
      'Founded in 2011 and headquartered in Nanshan, Shenzhen, Semi-One focuses on R&D, manufacturing, sales and technical service for power semiconductors.',
    panelTitle: 'Organization Network',
    panelItems: ['Shenzhen HQ', '8 regional touchpoints', 'R&D / Manufacturing / Sales / Service'],
    valuesTitle: 'Culture',
    valuesLead:
      'Semi-One treats culture as an operating method shared by R&D, quality, supply and customer engineering.',
    values: [
      {
        title: 'Leadership',
        body: 'Investment in Trench, SGT, SJ MOS and wide-bandgap roadmaps anticipates next-generation system requirements.'
      },
      {
        title: 'Expertise',
        body: 'Device parameters, reliability tests, thermal design and field support are integrated into verifiable solutions.'
      },
      {
        title: 'Reliability',
        body: 'ISO systems, laboratory validation and mass-production experience protect every device delivery baseline.'
      },
      {
        title: 'Win-win',
        body: 'Roadmaps and application learning are shared with customers, supply chains and channel partners to expand value together.'
      }
    ],
    contact: 'Contact',
    tel: 'Tel',
    mail: 'Mail',
    mailHint: 'Send an email to Semi-One',
    map: 'Open Map',
    mapHint: 'Open a map search for the company address'
  },
  vi: {
    eyebrow: 'Về chúng tôi',
    title: 'Về Semi-One',
    description:
      'Thành lập năm 2011 và đặt trụ sở tại Nam Sơn, Thâm Quyến, Semi-One tập trung vào R&D, sản xuất, kinh doanh và dịch vụ kỹ thuật cho linh kiện công suất bán dẫn.',
    panelTitle: 'Mạng lưới tổ chức',
    panelItems: [
      'Trụ sở Thâm Quyến',
      '8 điểm hỗ trợ khu vực',
      'R&D / Sản xuất / Kinh doanh / Dịch vụ'
    ],
    valuesTitle: 'Văn hóa doanh nghiệp',
    valuesLead:
      'Với Semi-One, văn hóa là phương thức vận hành chung của R&D, chất lượng, cung ứng và kỹ thuật khách hàng.',
    values: [
      {
        title: 'Dẫn dắt',
        body: 'Đầu tư vào Trench, SGT, SJ MOS và lộ trình bán dẫn băng rộng để đón trước nhu cầu hệ thống thế hệ mới.'
      },
      {
        title: 'Chuyên nghiệp',
        body: 'Thông số linh kiện, thử nghiệm độ tin cậy, thiết kế nhiệt và hỗ trợ hiện trường được hợp nhất thành giải pháp có thể kiểm chứng.'
      },
      {
        title: 'Đáng tin cậy',
        body: 'Hệ thống ISO, kiểm chứng phòng thí nghiệm và kinh nghiệm sản xuất hàng loạt bảo vệ chuẩn giao hàng.'
      },
      {
        title: 'Cùng thắng',
        body: 'Semi-One chia sẻ lộ trình và kinh nghiệm ứng dụng với khách hàng, chuỗi cung ứng và kênh đối tác.'
      }
    ],
    contact: 'Liên hệ',
    tel: 'Điện thoại',
    mail: 'Email',
    mailHint: 'Gửi email đến Semi-One',
    map: 'Mở bản đồ',
    mapHint: 'Mở bản đồ và tìm địa chỉ công ty'
  }
} satisfies Record<
  Language,
  {
    eyebrow: string;
    title: string;
    description: string;
    panelTitle: string;
    panelItems: string[];
    valuesTitle: string;
    valuesLead: string;
    values: { title: string; body: string }[];
    contact: string;
    tel: string;
    mail: string;
    mailHint: string;
    map: string;
    mapHint: string;
  }
>;

export function AboutPage({ language }: AboutPageProps) {
  const text = copy[language];

  return (
    <section className="page-section page-section--about">
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

      <div className="page-body about-body">
        <div className="about-main">
          <section className="culture-principles" aria-labelledby="about-culture-title">
            <div className="culture-principles-heading">
              <p className="eyebrow">{text.valuesTitle}</p>
              <h2 id="about-culture-title">{text.valuesTitle}</h2>
              <p>{text.valuesLead}</p>
            </div>
            <div className="culture-principle-grid">
              {text.values.map((item, index) => (
                <article key={item.title} style={{ ['--index' as string]: index }}>
                  <small>0{index + 1}</small>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

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
        </div>
        <aside className="contact-panel">
          <h2>{text.contact}</h2>
          <a
            className="contact-address"
            href={companyProfile.contact.mapUrl}
            target="_blank"
            rel="noreferrer"
            title={text.mapHint}
          >
            <MapPin size={18} aria-hidden="true" />
            <span>{companyProfile.contact.address}</span>
          </a>
          <p>
            {text.tel}: {companyProfile.contact.phone}
          </p>
          <p>
            {text.mail}:{' '}
            <a
              className="contact-email-link"
              href={`mailto:${companyProfile.contact.email}`}
              aria-label={text.mailHint}
              title={text.mailHint}
            >
              {companyProfile.contact.email}
            </a>
          </p>
          <p>{companyProfile.locations.join(' · ')}</p>
          <a
            className="contact-map-link"
            href={companyProfile.contact.mapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={text.mapHint}
          >
            <Navigation size={18} aria-hidden="true" />
            {text.map}
          </a>
        </aside>
      </div>
      <LifeShowcase language={language} />
    </section>
  );
}
