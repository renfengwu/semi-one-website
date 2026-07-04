import { certifications } from '../data/certifications';
import type { Language } from '../lib/i18n';

type QualityPageProps = {
  language: Language;
};

const copy = {
  zh: {
    eyebrow: 'Quality',
    title: '质量与资质',
    description: '质量管控、合规管理、环境与职业健康安全体系共同构成供应商可信基础。',
    panelTitle: '体系覆盖',
    panelItems: ['质量管理', '环境与安全', '合规运营'],
    status: '证书编号与有效期上线前人工复核'
  },
  en: {
    eyebrow: 'Quality',
    title: 'Quality & Certifications',
    description:
      'Quality control, compliance, environmental management and occupational safety systems build supplier trust.',
    panelTitle: 'System Coverage',
    panelItems: ['Quality management', 'Environment & safety', 'Compliance operations'],
    status: 'Certificate number and validity require human review before publication'
  },
  vi: {
    eyebrow: 'Chất lượng',
    title: 'Chất lượng & Chứng nhận',
    description:
      'Kiểm soát chất lượng, quản lý tuân thủ, môi trường và an toàn sức khỏe nghề nghiệp tạo nền tảng tin cậy cho nhà cung cấp.',
    panelTitle: 'Phạm vi hệ thống',
    panelItems: ['Quản lý chất lượng', 'Môi trường & an toàn', 'Vận hành tuân thủ'],
    status: 'Số chứng chỉ và thời hạn hiệu lực cần được rà soát trước khi công bố'
  }
} satisfies Record<
  Language,
  {
    eyebrow: string;
    title: string;
    description: string;
    panelTitle: string;
    panelItems: string[];
    status: string;
  }
>;

export function QualityPage({ language }: QualityPageProps) {
  const text = copy[language];

  return (
    <section className="page-section page-section--quality">
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
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <article key={cert.name}>
              <small>QMS-0{index + 1}</small>
              <h2>
                {language === 'vi' ? cert.nameVi : language === 'en' ? cert.nameEn : cert.name}
              </h2>
              <p>
                {language === 'vi' ? cert.scopeVi : language === 'en' ? cert.scopeEn : cert.scope}
              </p>
              <span>{text.status}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
