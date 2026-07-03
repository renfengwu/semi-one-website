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
    mature: '已完成/量产平台',
    future: '规划与前瞻技术',
    labs: labCapabilities
  },
  en: {
    eyebrow: 'Technology',
    title: 'Technology & Innovation',
    description:
      'Process roadmaps, low-loss metrics and laboratory capability support continuous power-device iteration.',
    mature: 'Released / mass-production platform',
    future: 'Roadmap and forward-looking technology',
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
    mature: 'Nền tảng đã phát hành / sản xuất hàng loạt',
    future: 'Lộ trình và công nghệ định hướng tương lai',
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
    mature: string;
    future: string;
    labs: string[];
  }
>;

export function TechnologyPage({ language }: TechnologyPageProps) {
  const text = copy[language];

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p>{text.description}</p>
      </div>
      <div className="roadmap">
        {technologyTracks.map((track, index) => (
          <article key={track}>
            <span>0{index + 1}</span>
            <h2>{track}</h2>
            <p>{index < 4 ? text.mature : text.future}</p>
          </article>
        ))}
      </div>
      <div className="lab-list">
        {text.labs.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
