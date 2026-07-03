import { certifications } from '../data/certifications';

export function QualityPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Quality</p>
        <h1>质量与资质</h1>
        <p>质量管控、合规管理、环境与职业健康安全体系共同构成供应商可信基础。</p>
      </div>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article key={cert.name}>
            <h2>{cert.name}</h2>
            <p>{cert.scope}</p>
            <small>{cert.status}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
