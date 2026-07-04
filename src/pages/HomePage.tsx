import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Cpu,
  Factory,
  Globe2,
  Layers3,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { companyProfile, labCapabilities, technologyTracks } from '../data/company';
import { applications } from '../data/applications';
import { products } from '../data/products';
import { handleSiteNavigation, siteHref } from '../app/routes';
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
    heroSignals: ['12 寸 SGT 量产', '车规级晶圆验证', '低 FOM MOSFET', '全球工程支持'],
    commandTitle: 'Semi-One Device Platform',
    commandStatus: 'R&D / Validation / Delivery',
    commandMeta: '从硅片工艺、封装热设计到可靠性验证的器件平台',
    proofValues: ['2011', '40+', '4.5亿+', '99+'],
    proofLabels: ['成立时间', '研发团队', '2024 销售额', '专利/布图/软著'],
    systemsTitle: '技术平台正在服务高电流、高效率和高可靠应用',
    systemsLead: '用产品参数、实验室验证和现场工程支持连接客户系统。',
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
    platformStats: ['低导阻', '热稳定', '量产交付'],
    cultureEyebrow: '企业文化',
    cultureTitle: '把“引领、专业、可靠、共赢”写进产品交付链路',
    cultureLead:
      '芯电元不只展示器件参数,更把研发路线、质量验证、现场支持和伙伴协同组织成一套可执行的工程承诺。',
    culturePanelTitle: 'Culture Operating System',
    culturePillars: [
      {
        title: '引领',
        body: '用产品路线和工艺平台提前响应高效率电源、储能与电机系统的下一代需求。'
      },
      {
        title: '专业',
        body: '以器件参数、可靠性验证和现场工程支持把研发语言转成客户可落地方案。'
      },
      {
        title: '可靠',
        body: '从工艺、封装、实验室到供应交付建立可追溯的质量闭环。'
      },
      {
        title: '共赢',
        body: '与客户、渠道和生态伙伴共同推进功率半导体国产化与全球化交付。'
      }
    ],
    lifeEyebrow: '员工生活',
    lifeTitle: '技术之外,还有一支一起奔赴现场的团队',
    lifeLead:
      '从运动赛场、生日会到年度旅行和年会,芯电元把彼此支持、协作与庆祝放进日常,让企业文化有真实的现场。',
    lifeStats: ['年度团建', '运动社群', '生日会', '年会共创'],
    lifeZoom: '放大查看',
    lifeOpen: '放大查看图片',
    lifeClose: '关闭图片查看',
    lifePrevious: '上一张',
    lifeNext: '下一张',
    lifeActions: [
      { label: '了解企业文化', path: '/about' },
      { label: '查看技术路线', path: '/technology' },
      { label: '进入产品中心', path: '/products' },
      { label: '浏览应用方案', path: '/applications' }
    ],
    lifeItems: [
      {
        kicker: '2025 郴州共行',
        title: '同一面旗帜下向下一程出发',
        body: '团队在山水之间完成连接,把共同目标带回产品、质量和客户现场。',
        image: 'assets/life-hunan-team.webp',
        alt: '芯电元团队 2025 年湖南郴州团建合影'
      },
      {
        kicker: '阳朔团队行',
        title: '在户外场景里建立协作默契',
        body: '跨团队交流不只发生在会议室,也发生在一起出发和互相照应的路上。',
        image: 'assets/life-yangshuo-team.webp',
        alt: '芯电元团队广西阳朔团建合影'
      },
      {
        kicker: '羽毛球比赛',
        title: '把活力带进组织节奏',
        body: '运动活动让团队保持轻快沟通,也让紧张研发与交付节奏有更好的支点。',
        image: 'assets/life-badminton-team.webp',
        alt: '芯电元羽毛球比赛团队合影'
      },
      {
        kicker: '生日会',
        title: '把每个普通日子认真庆祝',
        body: '生日会和团队聚会让价值观从口号变成被看见、被记住的日常体验。',
        image: 'assets/life-birthday.webp',
        alt: '芯电元员工生日会现场'
      },
      {
        kicker: '年会现场',
        title: '在复盘与分享中继续向前',
        body: '年会把年度成果、伙伴关系和下一阶段目标放到同一个现场里。',
        image: 'assets/life-annual-gathering.webp',
        alt: '芯电元年会交流现场'
      }
    ],
    capabilityStats: ['6 条技术路线', '6 类可靠性验证', '8 个区域触点', '4 套管理体系'],
    productTitle: '代表器件参数板',
    productLead: '按耐压、导阻、封装和应用快速识别首批公开型号。',
    productAction: '进入产品中心',
    productMeta: 'MOSFET / 功率 IC / TVS / IGBT / 模拟开关',
    applicationLead: '围绕电池、电源、电机与快充系统组织产品组合。',
    applicationSignal: '应用信号',
    inspect: '查看方案'
  },
  en: {
    eyebrow: 'Power Semiconductor Platform',
    title: companyProfile.nameEn,
    lede: 'A national high-tech enterprise integrating R&D, manufacturing, sales and technical service for high-efficiency power, battery and motor systems.',
    products: 'Explore Products',
    technology: 'Technology Roadmap',
    heroSignals: [
      '12-inch SGT mass production',
      'Automotive-grade wafer validation',
      'Low-FOM MOSFET',
      'Global engineering support'
    ],
    commandTitle: 'Semi-One Device Platform',
    commandStatus: 'R&D / Validation / Delivery',
    commandMeta:
      'Device platform spanning wafer process, thermal package design and reliability validation',
    proofValues: ['2011', '40+', '450M+', '99+'],
    proofLabels: ['Founded', 'R&D Team', '2024 Sales', 'Patents / Layouts / Software'],
    systemsTitle: 'Technology platforms for high-current, efficient and reliable applications',
    systemsLead:
      'Product parameters, laboratory validation and field engineering support connected into one delivery path.',
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
    platformStats: ['Low Rds(on)', 'Thermal stability', 'Mass delivery'],
    cultureEyebrow: 'Culture',
    cultureTitle: 'Leadership, expertise, reliability and win-win built into delivery',
    cultureLead:
      'Semi-One turns culture into an engineering operating system: product roadmaps, quality validation, field support and partner collaboration working as one promise.',
    culturePanelTitle: 'Culture Operating System',
    culturePillars: [
      {
        title: 'Leadership',
        body: 'Product roadmaps and process platforms anticipate the next needs of efficient power, storage and motor systems.'
      },
      {
        title: 'Expertise',
        body: 'Device data, reliability validation and field engineering translate R&D language into deployable solutions.'
      },
      {
        title: 'Reliability',
        body: 'A traceable quality loop links process, package, laboratory validation and supply delivery.'
      },
      {
        title: 'Win-win',
        body: 'Customers, channels and ecosystem partners advance local innovation and global power semiconductor delivery together.'
      }
    ],
    lifeEyebrow: 'Life at Semi-One',
    lifeTitle: 'Beyond technology, a team that moves together',
    lifeLead:
      'From sports and birthday gatherings to annual trips and year-end sessions, Semi-One turns culture into shared moments people can see and feel.',
    lifeStats: ['Annual trips', 'Sports clubs', 'Birthday gatherings', 'Year-end sessions'],
    lifeZoom: 'View larger',
    lifeOpen: 'Open larger image',
    lifeClose: 'Close image viewer',
    lifePrevious: 'Previous image',
    lifeNext: 'Next image',
    lifeActions: [
      { label: 'Explore Culture', path: '/about' },
      { label: 'Technology Roadmap', path: '/technology' },
      { label: 'Product Center', path: '/products' },
      { label: 'Applications', path: '/applications' }
    ],
    lifeItems: [
      {
        kicker: '2025 Chenzhou Trip',
        title: 'Moving toward the next stage under one flag',
        body: 'The team builds connection outdoors and brings that alignment back to products, quality and customer work.',
        image: 'assets/life-hunan-team.webp',
        alt: 'Semi-One team group photo during the 2025 Chenzhou trip'
      },
      {
        kicker: 'Yangshuo Team Trip',
        title: 'Collaboration built beyond meeting rooms',
        body: 'Cross-team trust grows through shared travel, conversation and looking after one another on the road.',
        image: 'assets/life-yangshuo-team.webp',
        alt: 'Semi-One team group photo in Yangshuo'
      },
      {
        kicker: 'Badminton Match',
        title: 'Keeping organizational energy moving',
        body: 'Sports activities keep communication light and give intense engineering schedules a healthier rhythm.',
        image: 'assets/life-badminton-team.webp',
        alt: 'Semi-One badminton match team group photo'
      },
      {
        kicker: 'Birthday Gathering',
        title: 'Celebrating the ordinary days with care',
        body: 'Birthday gatherings make values visible in daily work instead of leaving them as slogans.',
        image: 'assets/life-birthday.webp',
        alt: 'Semi-One employee birthday gathering'
      },
      {
        kicker: 'Annual Session',
        title: 'Reviewing, sharing and moving forward',
        body: 'Year-end sessions connect achievements, partnerships and the next stage of the roadmap in one room.',
        image: 'assets/life-annual-gathering.webp',
        alt: 'Semi-One annual gathering discussion scene'
      }
    ],
    capabilityStats: [
      '6 technology tracks',
      '6 reliability validations',
      '8 regional touchpoints',
      '4 management systems'
    ],
    productTitle: 'Representative Device Board',
    productLead:
      'Identify first public models by voltage rating, on-resistance, package and application.',
    productAction: 'Open Product Center',
    productMeta: 'MOSFET / Power IC / TVS / IGBT / Analog Switch',
    applicationLead:
      'Product portfolios organized around battery, power, motor and fast-charging systems.',
    applicationSignal: 'Application Signal',
    inspect: 'Inspect solution'
  },
  vi: {
    eyebrow: 'Nền tảng linh kiện công suất bán dẫn',
    title: companyProfile.nameEn,
    lede: 'Doanh nghiệp công nghệ cao quốc gia tích hợp R&D, sản xuất, kinh doanh và dịch vụ kỹ thuật cho nguồn hiệu suất cao, quản lý pin và điều khiển động cơ.',
    products: 'Xem sản phẩm',
    technology: 'Lộ trình công nghệ',
    heroSignals: [
      'Sản xuất SGT 12 inch',
      'Kiểm chứng wafer cấp ô tô',
      'MOSFET FOM thấp',
      'Hỗ trợ kỹ thuật toàn cầu'
    ],
    commandTitle: 'Nền tảng thiết bị Semi-One',
    commandStatus: 'R&D / Kiểm chứng / Giao hàng',
    commandMeta:
      'Nền tảng linh kiện bao phủ quy trình wafer, thiết kế nhiệt đóng gói và kiểm chứng độ tin cậy',
    proofValues: ['2011', '40+', '450M+', '99+'],
    proofLabels: [
      'Thành lập',
      'Đội ngũ R&D',
      'Doanh thu 2024',
      'Bằng sáng chế / bố trí / phần mềm'
    ],
    systemsTitle: 'Nền tảng công nghệ phục vụ ứng dụng dòng cao, hiệu suất cao và độ tin cậy cao',
    systemsLead:
      'Kết nối thông số sản phẩm, kiểm chứng phòng thí nghiệm và hỗ trợ kỹ thuật hiện trường.',
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
    platformStats: ['Rds(on) thấp', 'Ổn định nhiệt', 'Giao hàng hàng loạt'],
    cultureEyebrow: 'Văn hóa doanh nghiệp',
    cultureTitle: 'Dẫn dắt, chuyên nghiệp, đáng tin cậy và cùng thắng trong từng lần giao hàng',
    cultureLead:
      'Semi-One biến văn hóa thành hệ vận hành kỹ thuật: lộ trình sản phẩm, kiểm chứng chất lượng, hỗ trợ hiện trường và hợp tác đối tác cùng hướng tới một cam kết.',
    culturePanelTitle: 'Hệ điều hành văn hóa',
    culturePillars: [
      {
        title: 'Dẫn dắt',
        body: 'Lộ trình sản phẩm và nền tảng quy trình chủ động đáp ứng nhu cầu mới của nguồn hiệu suất cao, lưu trữ năng lượng và điều khiển động cơ.'
      },
      {
        title: 'Chuyên nghiệp',
        body: 'Thông số linh kiện, kiểm chứng độ tin cậy và kỹ thuật hiện trường chuyển ngôn ngữ R&D thành giải pháp triển khai được.'
      },
      {
        title: 'Đáng tin cậy',
        body: 'Vòng chất lượng có thể truy xuất kết nối quy trình, đóng gói, phòng thí nghiệm và giao hàng.'
      },
      {
        title: 'Cùng thắng',
        body: 'Khách hàng, kênh phân phối và đối tác sinh thái cùng thúc đẩy đổi mới và giao hàng toàn cầu.'
      }
    ],
    lifeEyebrow: 'Đời sống nhân viên',
    lifeTitle: 'Bên cạnh công nghệ là một đội ngũ cùng tiến về phía trước',
    lifeLead:
      'Từ thể thao, sinh nhật đến du lịch hằng năm và tiệc tổng kết, Semi-One biến văn hóa thành những khoảnh khắc chân thực.',
    lifeStats: ['Du lịch hằng năm', 'Câu lạc bộ thể thao', 'Sinh nhật', 'Tổng kết năm'],
    lifeZoom: 'Xem lớn',
    lifeOpen: 'Mở ảnh lớn',
    lifeClose: 'Đóng trình xem ảnh',
    lifePrevious: 'Ảnh trước',
    lifeNext: 'Ảnh tiếp theo',
    lifeActions: [
      { label: 'Văn hóa', path: '/about' },
      { label: 'Công nghệ', path: '/technology' },
      { label: 'Sản phẩm', path: '/products' },
      { label: 'Ứng dụng', path: '/applications' }
    ],
    lifeItems: [
      {
        kicker: 'Chuyến đi Sâm Châu 2025',
        title: 'Cùng xuất phát dưới một lá cờ',
        body: 'Đội ngũ kết nối trong không gian ngoài trời và mang sự đồng thuận đó trở lại sản phẩm, chất lượng và khách hàng.',
        image: 'assets/life-hunan-team.webp',
        alt: 'Ảnh tập thể Semi-One trong chuyến đi Sâm Châu năm 2025'
      },
      {
        kicker: 'Chuyến đi Dương Sóc',
        title: 'Xây dựng phối hợp ngoài phòng họp',
        body: 'Niềm tin giữa các nhóm được xây dựng qua hành trình chung, trò chuyện và hỗ trợ lẫn nhau.',
        image: 'assets/life-yangshuo-team.webp',
        alt: 'Ảnh tập thể Semi-One tại Dương Sóc'
      },
      {
        kicker: 'Giải cầu lông',
        title: 'Giữ nhịp năng lượng cho tổ chức',
        body: 'Hoạt động thể thao giúp giao tiếp nhẹ nhàng hơn và cân bằng nhịp R&D, sản xuất, giao hàng.',
        image: 'assets/life-badminton-team.webp',
        alt: 'Ảnh tập thể giải cầu lông Semi-One'
      },
      {
        kicker: 'Sinh nhật',
        title: 'Trân trọng những ngày bình thường',
        body: 'Sinh nhật và gặp gỡ đội ngũ làm cho giá trị doanh nghiệp trở nên gần gũi trong công việc hằng ngày.',
        image: 'assets/life-birthday.webp',
        alt: 'Hoạt động sinh nhật nhân viên Semi-One'
      },
      {
        kicker: 'Tổng kết năm',
        title: 'Cùng nhìn lại, chia sẻ và bước tiếp',
        body: 'Buổi tổng kết kết nối thành quả, quan hệ đối tác và mục tiêu cho giai đoạn tiếp theo.',
        image: 'assets/life-annual-gathering.webp',
        alt: 'Không gian trao đổi tại tiệc tổng kết Semi-One'
      }
    ],
    capabilityStats: [
      '6 lộ trình công nghệ',
      '6 nhóm kiểm chứng',
      '8 điểm hỗ trợ khu vực',
      '4 hệ quản trị'
    ],
    productTitle: 'Bảng linh kiện đại diện',
    productLead:
      'Nhận diện nhanh các mã công khai đầu tiên theo điện áp, Rds(on), đóng gói và ứng dụng.',
    productAction: 'Mở trung tâm sản phẩm',
    productMeta: 'MOSFET / Power IC / TVS / IGBT / Analog Switch',
    applicationLead: 'Danh mục sản phẩm được tổ chức quanh hệ pin, nguồn, động cơ và sạc nhanh.',
    applicationSignal: 'Tín hiệu ứng dụng',
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
    heroSignals: string[];
    commandTitle: string;
    commandStatus: string;
    commandMeta: string;
    proofValues: string[];
    proofLabels: string[];
    systemsTitle: string;
    systemsLead: string;
    systems: string[][];
    technologyTracks: string;
    lab: string;
    quality: string;
    global: string;
    applications: string;
    applicationsTitle: string;
    platformTitle: string;
    platformBody: string;
    platformStats: string[];
    cultureEyebrow: string;
    cultureTitle: string;
    cultureLead: string;
    culturePanelTitle: string;
    culturePillars: { title: string; body: string }[];
    lifeEyebrow: string;
    lifeTitle: string;
    lifeLead: string;
    lifeStats: string[];
    lifeZoom: string;
    lifeOpen: string;
    lifeClose: string;
    lifePrevious: string;
    lifeNext: string;
    lifeActions: { label: string; path: string }[];
    lifeItems: {
      kicker: string;
      title: string;
      body: string;
      image: string;
      alt: string;
    }[];
    capabilityStats: string[];
    productTitle: string;
    productLead: string;
    productAction: string;
    productMeta: string;
    applicationLead: string;
    applicationSignal: string;
    inspect: string;
  }
>;

export function HomePage({ language }: HomePageProps) {
  const copy = homeText[language];
  const featuredProducts = products.slice(0, 4);
  const dieCells = Array.from({ length: 48 }, (_, index) => index);
  const cultureCells = Array.from({ length: 24 }, (_, index) => index);
  const cultureRail = [...copy.culturePillars, ...copy.culturePillars];
  const signatureItems = [
    {
      icon: Cpu,
      title: copy.technologyTracks,
      body: technologyTracks.join(' / '),
      stat: copy.capabilityStats[0]
    },
    {
      icon: Factory,
      title: copy.lab,
      body: labCapabilities.slice(0, 4).join(' / '),
      stat: copy.capabilityStats[1]
    },
    {
      icon: ShieldCheck,
      title: copy.quality,
      body: 'ISO 9001 / ISO 14001 / ISO 45001 / ISO 37301',
      stat: copy.capabilityStats[3]
    },
    {
      icon: Globe2,
      title: copy.global,
      body: companyProfile.locations.join(' · '),
      stat: copy.capabilityStats[2]
    }
  ];
  const signalIcons = [Layers3, BadgeCheck, Zap, Activity];

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
              <a
                className="button primary"
                href={siteHref('/products')}
                onClick={(event) => handleSiteNavigation(event, '/products')}
              >
                {copy.products}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                className="button secondary"
                href={siteHref('/technology')}
                onClick={(event) => handleSiteNavigation(event, '/technology')}
              >
                {copy.technology}
              </a>
              <a
                className="button tertiary"
                href={siteHref('/about#life')}
                onClick={(event) => handleSiteNavigation(event, '/about#life')}
              >
                {copy.lifeEyebrow}
              </a>
            </div>
            <div className="hero-micro-grid" aria-label="核心平台信号">
              {copy.heroSignals.map((signal, index) => {
                const Icon = signalIcons[index] ?? Activity;
                return (
                  <div key={signal}>
                    <Icon size={18} aria-hidden="true" />
                    <span>{signal}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="hero-command-panel" aria-label={copy.commandTitle}>
            <div className="command-panel-top">
              <span>{copy.commandTitle}</span>
              <strong>{copy.commandStatus}</strong>
            </div>
            <div className="die-visual" aria-hidden="true">
              {dieCells.map((cell) => (
                <span className="die-cell" key={cell} />
              ))}
            </div>
            <p className="command-meta">{copy.commandMeta}</p>
            <div className="command-readout" aria-label="技术路线进度">
              {technologyTracks.map((track, index) => (
                <div
                  className="command-lane"
                  key={track}
                  style={{ ['--level' as string]: `${86 - index * 8}%` }}
                >
                  <span>{track}</span>
                  <i aria-hidden="true" />
                  <strong>{index < 3 ? 'MP' : 'R&D'}</strong>
                </div>
              ))}
            </div>
            <div className="hero-proof-grid" aria-label="公司关键数字">
              {companyProfile.proofPoints.map((item, index) => (
                <div key={item.label}>
                  <strong>{copy.proofValues[index] ?? item.value}</strong>
                  <span>{copy.proofLabels[index]}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="systems-band" aria-label="核心技术平台">
        <div className="systems-intro">
          <span>{copy.technologyTracks}</span>
          <strong>{copy.systemsTitle}</strong>
          <p>{copy.systemsLead}</p>
        </div>
        {copy.systems.map(([label, value], index) => (
          <article key={label}>
            <small>0{index + 1}</small>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      <section className="platform-section">
        <div className="platform-copy">
          <p className="eyebrow">{copy.technologyTracks}</p>
          <h2>{copy.platformTitle}</h2>
          <p>{copy.platformBody}</p>
          <div className="platform-metrics-strip">
            {copy.platformStats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>
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
                  <span className="signature-stat">{item.stat}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="culture-motion-section" aria-labelledby="culture-title">
        <div className="culture-copy">
          <p className="eyebrow">{copy.cultureEyebrow}</p>
          <h2 id="culture-title">{copy.cultureTitle}</h2>
          <p>{copy.cultureLead}</p>
          <div className="culture-signal-rail" aria-hidden="true">
            <div>
              {cultureRail.map((pillar, index) => (
                <span key={`${pillar.title}-${index}`}>{pillar.title}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="culture-console" aria-label={copy.culturePanelTitle}>
          <div className="culture-console-head">
            <span>{copy.culturePanelTitle}</span>
            <strong>{copy.commandStatus}</strong>
          </div>
          <div className="culture-flow" aria-hidden="true">
            {cultureCells.map((cell) => (
              <span key={cell} style={{ ['--index' as string]: cell }} />
            ))}
          </div>
          <div className="culture-pillar-grid">
            {copy.culturePillars.map((pillar, index) => (
              <article key={pillar.title} style={{ ['--index' as string]: index }}>
                <small>0{index + 1}</small>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-command">
        <div className="product-command-heading">
          <p className="eyebrow">{copy.productTitle}</p>
          <h2>{copy.productLead}</h2>
          <p className="product-command-meta">{copy.productMeta}</p>
          <a
            className="text-link"
            href={siteHref('/products')}
            onClick={(event) => handleSiteNavigation(event, '/products')}
          >
            {copy.productAction}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="product-signal-grid">
          {featuredProducts.map((product) => (
            <a
              className="product-signal"
              key={product.partNumber}
              href={siteHref('/products')}
              onClick={(event) => handleSiteNavigation(event, '/products')}
            >
              <div className="product-signal-header">
                <span>{product.category}</span>
                <small>{product.packageName}</small>
              </div>
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
              <div className="product-applications">
                {product.applications.map((application) => (
                  <span key={application}>{application}</span>
                ))}
              </div>
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
            <a
              key={item.name}
              href={siteHref('/applications')}
              onClick={(event) => handleSiteNavigation(event, '/applications')}
            >
              <small>{copy.applicationSignal}</small>
              <span>
                {language === 'vi' ? item.nameVi : language === 'en' ? item.nameEn : item.name}
              </span>
              <div className="application-needs">
                {(language === 'vi' ? item.needsVi : language === 'en' ? item.needsEn : item.needs)
                  .slice(0, 2)
                  .map((need) => (
                    <em key={need}>{need}</em>
                  ))}
              </div>
              <strong>
                {copy.inspect}
                <ArrowRight size={15} aria-hidden="true" />
              </strong>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
