import { ArrowRight, Cpu, Factory, Globe2, ShieldCheck } from 'lucide-react';
import { companyProfile, labCapabilities, technologyTracks } from '../data/company';
import { applications } from '../data/applications';
import type { Language } from '../lib/i18n';

type HomePageProps = {
  language: Language;
};

const homeText = {
  zh: {
    eyebrow: '功率半导体器件平台',
    title: companyProfile.nameZh,
    lede: '研发、制造、销售和技术服务一体化的国家高新技术企业,面向高效率电源、电池管理与电机驱动系统。',
    products: '查看产品',
    technology: '技术路线',
    proofValues: ['2011', '40+', '4.5亿+', '99+'],
    proofLabels: ['成立时间', '研发团队', '2024 销售额', '专利/布图/软著'],
    systems: [
      ['SGT / Trench / SJ', '低 FOM 与高可靠性 MOSFET 平台'],
      ['IGBT / SiC / GaN', '面向高功率密度的中长期路线'],
      ['Reliability Lab', '雪崩、ESD/EMC、HTRB/HTGB、HAST/B-HAST']
    ],
    technologyTracks: '技术路线',
    lab: '实验室能力',
    quality: '质量体系',
    global: '全球布局',
    applications: '应用领域',
    applicationsTitle: '从电池系统到电机驱动'
  },
  en: {
    eyebrow: 'Power Semiconductor Platform',
    title: companyProfile.nameEn,
    lede: 'A national high-tech enterprise integrating R&D, manufacturing, sales and technical service for high-efficiency power, battery and motor systems.',
    products: 'Explore Products',
    technology: 'Technology Roadmap',
    proofValues: ['2011', '40+', '450M+', '99+'],
    proofLabels: ['Founded', 'R&D Team', '2024 Sales', 'Patents / Layouts / Software'],
    systems: [
      ['SGT / Trench / SJ', 'Low-FOM and high-reliability MOSFET platform'],
      ['IGBT / SiC / GaN', 'Roadmap for higher power density'],
      ['Reliability Lab', 'Avalanche, ESD/EMC, HTRB/HTGB, HAST/B-HAST']
    ],
    technologyTracks: 'Technology Tracks',
    lab: 'Laboratory Capability',
    quality: 'Quality Systems',
    global: 'Global Network',
    applications: 'Applications',
    applicationsTitle: 'From battery systems to motor drives'
  },
  vi: {
    eyebrow: 'Nền tảng linh kiện công suất bán dẫn',
    title: companyProfile.nameEn,
    lede: 'Doanh nghiệp công nghệ cao quốc gia tích hợp R&D, sản xuất, kinh doanh và dịch vụ kỹ thuật cho nguồn hiệu suất cao, quản lý pin và điều khiển động cơ.',
    products: 'Xem sản phẩm',
    technology: 'Lộ trình công nghệ',
    proofValues: ['2011', '40+', '450M+', '99+'],
    proofLabels: [
      'Thành lập',
      'Đội ngũ R&D',
      'Doanh thu 2024',
      'Bằng sáng chế / bố trí / phần mềm'
    ],
    systems: [
      ['SGT / Trench / SJ', 'Nền tảng MOSFET FOM thấp và độ tin cậy cao'],
      ['IGBT / SiC / GaN', 'Lộ trình cho mật độ công suất cao hơn'],
      ['Reliability Lab', 'Avalanche, ESD/EMC, HTRB/HTGB, HAST/B-HAST']
    ],
    technologyTracks: 'Lộ trình công nghệ',
    lab: 'Năng lực phòng thí nghiệm',
    quality: 'Hệ thống chất lượng',
    global: 'Mạng lưới toàn cầu',
    applications: 'Ứng dụng',
    applicationsTitle: 'Từ hệ thống pin đến điều khiển động cơ'
  }
} satisfies Record<
  Language,
  {
    eyebrow: string;
    title: string;
    lede: string;
    products: string;
    technology: string;
    proofValues: string[];
    proofLabels: string[];
    systems: string[][];
    technologyTracks: string;
    lab: string;
    quality: string;
    global: string;
    applications: string;
    applicationsTitle: string;
  }
>;

export function HomePage({ language }: HomePageProps) {
  const copy = homeText[language];

  return (
    <>
      <section className="hero-section">
        <img
          className="hero-backdrop"
          src={`${import.meta.env.BASE_URL}assets/hero-semiconductor-lab.webp`}
          alt="芯电元功率半导体产品、晶圆与实验室测试视觉"
        />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="hero-lede">{copy.lede}</p>
            <div className="hero-actions">
              <a className="button primary" href="/products">
                {copy.products}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href="/technology">
                {copy.technology}
              </a>
            </div>
          </div>

          <div className="hero-proof-grid" aria-label="公司关键数字">
            {companyProfile.proofPoints.map((item, index) => (
              <div key={item.label}>
                <strong>{copy.proofValues[index] ?? item.value}</strong>
                <span>{copy.proofLabels[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="systems-band" aria-label="核心技术平台">
        {copy.systems.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>

      <section className="section-grid">
        <article className="feature-panel">
          <Cpu aria-hidden="true" />
          <h2>{copy.technologyTracks}</h2>
          <p>{technologyTracks.join(' / ')}</p>
        </article>
        <article className="feature-panel">
          <Factory aria-hidden="true" />
          <h2>{copy.lab}</h2>
          <p>{labCapabilities.slice(0, 4).join('、')}</p>
        </article>
        <article className="feature-panel">
          <ShieldCheck aria-hidden="true" />
          <h2>{copy.quality}</h2>
          <p>ISO 9001 / ISO 14001 / ISO 45001 / ISO 37301</p>
        </article>
        <article className="feature-panel">
          <Globe2 aria-hidden="true" />
          <h2>{copy.global}</h2>
          <p>{companyProfile.locations.join(' · ')}</p>
        </article>
      </section>

      <section className="content-band">
        <div>
          <p className="eyebrow">{copy.applications}</p>
          <h2>{copy.applicationsTitle}</h2>
        </div>
        <div className="application-strip">
          {applications.slice(0, 6).map((item) => (
            <a key={item.name} href="/applications">
              {language === 'vi' ? item.nameVi : language === 'en' ? item.nameEn : item.name}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
