import { labCapabilities, technologyTracks } from '../data/company';
import type { Language } from '../lib/i18n';

type TechnologyPageProps = {
  language: Language;
};

const copy = {
  zh: {
    eyebrow: 'Technology',
    title: '技术与创新',
    description: '用工艺路线、低损耗指标和实验室能力支撑功率器件持续迭代。',
    panelTitle: '平台路线',
    panelItems: ['Trench / SGT / SJ', 'IGBT / SiC / GaN', '可靠性实验室闭环'],
    mature: '已完成/量产平台',
    future: '规划与前瞻技术',
    labTitle: '实验室验证能力',
    labs: labCapabilities
  },
  en: {
    eyebrow: 'Technology',
    title: 'Technology & Innovation',
    description:
      'Process roadmaps, low-loss metrics and laboratory capability support continuous power-device iteration.',
    panelTitle: 'Platform Routes',
    panelItems: ['Trench / SGT / SJ', 'IGBT / SiC / GaN', 'Reliability lab loop'],
    mature: 'Released / mass-production platform',
    future: 'Roadmap and forward-looking technology',
    labTitle: 'Laboratory Validation',
    labs: [
      'Keysight B1506A transistor analyzer',
      'Transistor avalanche test system',
      'ESD/EMC testing',
      'X-ray and acoustic microscopy',
      'HTRB/HTGB and H3TRB',
      'HAST/B-HAST and thermal shock tests'
    ]
  },
  vi: {
    eyebrow: 'Công nghệ',
    title: 'Công nghệ & Đổi mới',
    description:
      'Lộ trình quy trình, chỉ số tổn hao thấp và năng lực phòng thí nghiệm hỗ trợ cải tiến liên tục cho linh kiện công suất.',
    panelTitle: 'Lộ trình nền tảng',
    panelItems: ['Trench / SGT / SJ', 'IGBT / SiC / GaN', 'Vòng kiểm chứng độ tin cậy'],
    mature: 'Nền tảng đã phát hành / sản xuất hàng loạt',
    future: 'Lộ trình và công nghệ định hướng tương lai',
    labTitle: 'Kiểm chứng phòng thí nghiệm',
    labs: [
      'Máy phân tích transistor Keysight B1506A',
      'Hệ thống thử nghiệm avalanche transistor',
      'Thử nghiệm ESD/EMC',
      'X-quang và kính hiển vi âm học',
      'HTRB/HTGB và H3TRB',
      'HAST/B-HAST và thử nghiệm sốc nhiệt'
    ]
  }
} satisfies Record<
  Language,
  {
    eyebrow: string;
    title: string;
    description: string;
    panelTitle: string;
    panelItems: string[];
    mature: string;
    future: string;
    labTitle: string;
    labs: string[];
  }
>;

export function TechnologyPage({ language }: TechnologyPageProps) {
  const text = copy[language];

  return (
    <section className="page-section page-section--technology">
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
        <div className="roadmap">
          {technologyTracks.map((track, index) => (
            <article key={track}>
              <span>0{index + 1}</span>
              <h2>{track}</h2>
              <p>{index < 4 ? text.mature : text.future}</p>
              <i aria-hidden="true" />
            </article>
          ))}
        </div>
        <section className="lab-console" aria-labelledby="lab-console-title">
          <h2 id="lab-console-title">{text.labTitle}</h2>
          <div className="lab-list">
            {text.labs.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
