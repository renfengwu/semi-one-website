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
    status: '证书编号与有效期上线前人工复核'
  },
  en: {
    eyebrow: 'Quality',
    title: 'Quality & Certifications',
    description:
      'Quality control, compliance, environmental management and occupational safety systems build supplier trust.',
    status: 'Certificate number and validity require human review before publication'
  },
  vi: {
    eyebrow: 'Chất lượng',
    title: 'Chất lượng & Chứng nhận',
    description:
      'Kiểm soát chất lượng, quản lý tuân thủ, môi trường và an toàn sức khỏe nghề nghiệp tạo nền tảng tin cậy cho nhà cung cấp.',
    status: 'Số chứng chỉ và thời hạn hiệu lực cần được rà soát trước khi công bố'
  }
} satisfies Record<Language, Record<string, string>>;

export function QualityPage({ language }: QualityPageProps) {
  const text = copy[language];

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p>{text.description}</p>
      </div>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article key={cert.name}>
            <h2>{language === 'vi' ? cert.nameVi : language === 'en' ? cert.nameEn : cert.name}</h2>
            <p>
              {language === 'vi' ? cert.scopeVi : language === 'en' ? cert.scopeEn : cert.scope}
            </p>
            <small>{text.status}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
