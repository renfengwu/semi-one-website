import { ArrowRight, Cpu, Factory, Globe2, ShieldCheck } from 'lucide-react';
import { companyProfile, labCapabilities, technologyTracks } from '../data/company';
import { applications } from '../data/applications';
import { products } from '../data/products';
import { siteHref } from '../app/routes';
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
    applicationsTitle: '从电池系统到电机驱动',
    platformTitle: '围绕低损耗、高可靠和高功率密度建立技术平台',
    platformBody:
      '从 Trench、SGT 到 SJ MOS 与 IGBT/SiC/GaN 路线,芯电元用工艺平台、实验室验证和工程支持连接客户应用。',
    productTitle: '代表器件参数板',
    productLead: '按耐压、导阻、封装和应用快速识别首批公开型号。',
    productAction: '进入产品中心',
    applicationLead: '围绕电池、电源、电机与快充系统组织产品组合。',
    inspect: '查看方案'
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
    applicationsTitle: 'From battery systems to motor drives',
    platformTitle: 'Technology platforms for low loss, reliability and power density',
    platformBody:
      'From Trench and SGT to SJ MOS plus IGBT/SiC/GaN roadmaps, Semi-One connects process platforms, lab validation and engineering support.',
    productTitle: 'Representative Device Board',
    productLead:
      'Identify first public models by voltage rating, on-resistance, package and application.',
    productAction: 'Open Product Center',
    applicationLead:
      'Product portfolios organized around battery, power, motor and fast-charging systems.',
    inspect: 'Inspect solution'
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
    applicationsTitle: 'Từ hệ thống pin đến điều khiển động cơ',
    platformTitle: 'Nền tảng công nghệ cho tổn hao thấp, độ tin cậy và mật độ công suất',
    platformBody:
      'Từ Trench, SGT đến SJ MOS cùng lộ trình IGBT/SiC/GaN, Semi-One kết nối quy trình, kiểm chứng phòng thí nghiệm và hỗ trợ kỹ thuật.',
    productTitle: 'Bảng linh kiện đại diện',
    productLead:
      'Nhận diện nhanh các mã công khai đầu tiên theo điện áp, Rds(on), đóng gói và ứng dụng.',
    productAction: 'Mở trung tâm sản phẩm',
    applicationLead: 'Danh mục sản phẩm được tổ chức quanh hệ pin, nguồn, động cơ và sạc nhanh.',
    inspect: 'Xem giải pháp'
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
    platformTitle: string;
    platformBody: string;
    productTitle: string;
    productLead: string;
    productAction: string;
    applicationLead: string;
    inspect: string;
  }
>;

export function HomePage({ language }: HomePageProps) {
  const copy = homeText[language];
  const featuredProducts = products.slice(0, 4);
  const signatureItems = [
    {
      icon: Cpu,
      title: copy.technologyTracks,
      body: technologyTracks.join(' / ')
    },
    {
      icon: Factory,
      title: copy.lab,
      body: labCapabilities.slice(0, 4).join(' / ')
    },
    {
      icon: ShieldCheck,
      title: copy.quality,
      body: 'ISO 9001 / ISO 14001 / ISO 45001 / ISO 37301'
    },
    {
      icon: Globe2,
      title: copy.global,
      body: companyProfile.locations.join(' · ')
    }
  ];

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
              <a className="button primary" href={siteHref('/products')}>
                {copy.products}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href={siteHref('/technology')}>
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

      <section className="platform-section">
        <div className="platform-copy">
          <p className="eyebrow">{copy.technologyTracks}</p>
          <h2>{copy.platformTitle}</h2>
          <p>{copy.platformBody}</p>
        </div>
        <div className="platform-matrix" aria-label="技术平台矩阵">
          <div className="wafer-map" aria-hidden="true">
            {technologyTracks.map((track, index) => (
              <span key={track} style={{ ['--index' as string]: index }}>
                {track}
              </span>
            ))}
          </div>
          <div className="signature-grid">
            {signatureItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="product-command">
        <div className="product-command-heading">
          <p className="eyebrow">{copy.productTitle}</p>
          <h2>{copy.productLead}</h2>
          <a className="text-link" href={siteHref('/products')}>
            {copy.productAction}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="product-signal-grid">
          {featuredProducts.map((product) => (
            <a className="product-signal" key={product.partNumber} href={siteHref('/products')}>
              <span>{product.packageName}</span>
              <strong>{product.partNumber}</strong>
              <dl>
                <div>
                  <dt>Vds</dt>
                  <dd>{product.vds}V</dd>
                </div>
                <div>
                  <dt>Id</dt>
                  <dd>{product.id}A</dd>
                </div>
                <div>
                  <dt>Rds(on)</dt>
                  <dd>{Math.min(...Object.values(product.rdsOn))}mR</dd>
                </div>
              </dl>
            </a>
          ))}
        </div>
      </section>

      <section className="content-band">
        <div>
          <p className="eyebrow">{copy.applications}</p>
          <h2>{copy.applicationsTitle}</h2>
          <p>{copy.applicationLead}</p>
        </div>
        <div className="application-strip">
          {applications.slice(0, 6).map((item) => (
            <a key={item.name} href={siteHref('/applications')}>
              <span>
                {language === 'vi' ? item.nameVi : language === 'en' ? item.nameEn : item.name}
              </span>
              <small>{copy.inspect}</small>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
