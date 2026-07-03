import { companyProfile } from '../data/company';

export function AboutPage() {
  return (
    <section className="page-section about-layout">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h1>关于芯电元</h1>
        <p>芯电元成立于 2011 年,专注功率半导体研发、制造、销售与技术服务,总部位于深圳南山。</p>
      </div>
      <div className="timeline">
        {companyProfile.timeline.map((item) => (
          <article key={item.year}>
            <strong>{item.year}</strong>
            <span>{item.event}</span>
          </article>
        ))}
      </div>
      <aside className="contact-panel">
        <h2>联系我们</h2>
        <p>{companyProfile.contact.address}</p>
        <p>Tel: {companyProfile.contact.phone}</p>
        <p>Mail: {companyProfile.contact.email}</p>
      </aside>
    </section>
  );
}
