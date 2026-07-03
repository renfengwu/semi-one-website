import { labCapabilities, technologyTracks } from '../data/company';

export function TechnologyPage() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Technology</p>
        <h1>技术与创新</h1>
        <p>用工艺路线、低损耗指标和实验室能力支撑功率器件持续迭代。</p>
      </div>
      <div className="roadmap">
        {technologyTracks.map((track, index) => (
          <article key={track}>
            <span>0{index + 1}</span>
            <h2>{track}</h2>
            <p>{index < 4 ? '已完成/量产平台' : '规划与前瞻技术'}</p>
          </article>
        ))}
      </div>
      <div className="lab-list">
        {labCapabilities.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
