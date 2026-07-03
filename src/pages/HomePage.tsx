import { ArrowRight, Cpu, Factory, Globe2, ShieldCheck } from 'lucide-react';
import { companyProfile, labCapabilities, technologyTracks } from '../data/company';
import { applications } from '../data/applications';
import type { Language } from '../lib/i18n';

type HomePageProps = {
  language: Language;
};

export function HomePage({ language }: HomePageProps) {
  const isEnglish = language === 'en';
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{isEnglish ? 'Power Semiconductor Devices' : '功率半导体器件'}</p>
          <h1>{isEnglish ? companyProfile.nameEn : companyProfile.nameZh}</h1>
          <p className="hero-lede">
            {isEnglish
              ? 'A national high-tech enterprise specialized in R&D, production, sales and technical services.'
              : '研发、制造、销售和技术服务一体化的国家高新技术企业,面向高效率电源、电池与电机系统。'}
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/products">
              {isEnglish ? 'Explore Products' : '查看产品'}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="/technology">
              {isEnglish ? 'Technology Roadmap' : '技术路线'}
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="芯电元功率半导体视觉">
          <img
            src={`${import.meta.env.BASE_URL}assets/hero-power-semiconductor.jpg`}
            alt="芯电元功率半导体产品与晶圆背景"
          />
          <div className="hero-metric">
            <strong>SGT / Trench / SJ</strong>
            <span>低 FOM 与高可靠性平台</span>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="公司关键数字">
        {companyProfile.proofPoints.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section-grid">
        <article className="feature-panel">
          <Cpu aria-hidden="true" />
          <h2>{isEnglish ? 'Technology Tracks' : '技术路线'}</h2>
          <p>{technologyTracks.join(' / ')}</p>
        </article>
        <article className="feature-panel">
          <Factory aria-hidden="true" />
          <h2>{isEnglish ? 'Laboratory Capability' : '实验室能力'}</h2>
          <p>{labCapabilities.slice(0, 4).join('、')}</p>
        </article>
        <article className="feature-panel">
          <ShieldCheck aria-hidden="true" />
          <h2>{isEnglish ? 'Quality Systems' : '质量体系'}</h2>
          <p>ISO 9001 / ISO 14001 / ISO 45001 / ISO 37301</p>
        </article>
        <article className="feature-panel">
          <Globe2 aria-hidden="true" />
          <h2>{isEnglish ? 'Global Network' : '全球布局'}</h2>
          <p>{companyProfile.locations.join(' · ')}</p>
        </article>
      </section>

      <section className="content-band">
        <div>
          <p className="eyebrow">{isEnglish ? 'Applications' : '应用领域'}</p>
          <h2>{isEnglish ? 'From battery systems to motor drives' : '从电池系统到电机驱动'}</h2>
        </div>
        <div className="application-strip">
          {applications.slice(0, 6).map((item) => (
            <a key={item.name} href="/applications">
              {item.name}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
