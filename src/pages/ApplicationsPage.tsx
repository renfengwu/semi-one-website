import { applications } from '../data/applications';

export function ApplicationsPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Applications</p>
        <h1>应用方案</h1>
        <p>围绕电池、电源、电机三类主轴,将推荐器件与工程诉求连接起来。</p>
      </div>
      <div className="application-grid">
        {applications.map((item) => (
          <article className="application-card" key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.summary}</p>
            <ul>
              {item.needs.map((need) => (
                <li key={need}>{need}</li>
              ))}
            </ul>
            <p className="part-list">推荐: {item.featuredParts.join(' / ')}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
