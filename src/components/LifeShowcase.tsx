import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { handleSiteNavigation, siteHref } from '../app/routes';
import type { Language } from '../lib/i18n';

type LifeShowcaseProps = {
  language: Language;
};

const copy = {
  zh: {
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
      { label: '企业文化', path: '/about#about-culture-title' },
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
    ]
  },
  en: {
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
      { label: 'Culture', path: '/about#about-culture-title' },
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
    ]
  },
  vi: {
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
      { label: 'Văn hóa', path: '/about#about-culture-title' },
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
    ]
  }
} satisfies Record<
  Language,
  {
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
  }
>;

export function LifeShowcase({ language }: LifeShowcaseProps) {
  const text = copy[language];
  const [activeLifeIndex, setActiveLifeIndex] = useState<number | null>(null);
  const activeLifeItem = activeLifeIndex === null ? null : text.lifeItems[activeLifeIndex];

  useEffect(() => {
    if (activeLifeIndex === null) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveLifeIndex(null);
      if (event.key === 'ArrowLeft') {
        setActiveLifeIndex((current) =>
          current === null ? current : (current + text.lifeItems.length - 1) % text.lifeItems.length
        );
      }
      if (event.key === 'ArrowRight') {
        setActiveLifeIndex((current) =>
          current === null ? current : (current + 1) % text.lifeItems.length
        );
      }
    };

    document.body.classList.add('is-lightbox-open');
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('is-lightbox-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeLifeIndex, text.lifeItems.length]);

  const moveLifeImage = (direction: 1 | -1) => {
    setActiveLifeIndex((current) => {
      if (current === null) return current;
      return (current + direction + text.lifeItems.length) % text.lifeItems.length;
    });
  };

  return (
    <>
      <section className="life-showcase-section" id="life" aria-labelledby="life-title">
        <div className="life-showcase-head">
          <div>
            <p className="eyebrow">{text.lifeEyebrow}</p>
            <h2 id="life-title">{text.lifeTitle}</h2>
            <p>{text.lifeLead}</p>
          </div>
          <div className="life-quick-panel">
            <div className="life-stat-row" aria-label={text.lifeEyebrow}>
              {text.lifeStats.map((stat) => (
                <span key={stat}>{stat}</span>
              ))}
            </div>
            <div className="life-action-grid" aria-label="员工生活相关入口">
              {text.lifeActions.map((action) => (
                <a
                  key={action.path}
                  href={siteHref(action.path)}
                  onClick={(event) => handleSiteNavigation(event, action.path)}
                >
                  {action.label}
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="life-gallery">
          <article className="life-feature">
            <button
              className="life-photo-button"
              type="button"
              aria-label={`${text.lifeOpen}: ${text.lifeItems[0].title}`}
              onClick={() => setActiveLifeIndex(0)}
            >
              <img
                src={`${import.meta.env.BASE_URL}${text.lifeItems[0].image}`}
                alt={text.lifeItems[0].alt}
              />
              <span className="life-zoom-badge">
                <Maximize2 size={16} aria-hidden="true" />
                {text.lifeZoom}
              </span>
              <span className="life-photo-caption">
                <small>{text.lifeItems[0].kicker}</small>
                <strong>{text.lifeItems[0].title}</strong>
                <span>{text.lifeItems[0].body}</span>
              </span>
            </button>
          </article>
          <div className="life-card-grid">
            {text.lifeItems.slice(1).map((item, index) => (
              <article key={item.title} style={{ ['--index' as string]: index }}>
                <button
                  className="life-card-photo"
                  type="button"
                  aria-label={`${text.lifeOpen}: ${item.title}`}
                  onClick={() => setActiveLifeIndex(index + 1)}
                >
                  <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.alt} />
                  <span className="life-zoom-badge">
                    <Maximize2 size={15} aria-hidden="true" />
                    {text.lifeZoom}
                  </span>
                </button>
                <div>
                  <small>{item.kicker}</small>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeLifeItem ? (
        <div
          className="life-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="life-lightbox-title"
        >
          <button
            className="life-lightbox-scrim"
            type="button"
            aria-label={text.lifeClose}
            onClick={() => setActiveLifeIndex(null)}
          />
          <div className="life-lightbox-panel">
            <button
              className="life-lightbox-close"
              type="button"
              aria-label={text.lifeClose}
              onClick={() => setActiveLifeIndex(null)}
            >
              <X size={20} aria-hidden="true" />
            </button>
            <button
              className="life-lightbox-nav life-lightbox-nav--prev"
              type="button"
              aria-label={text.lifePrevious}
              onClick={() => moveLifeImage(-1)}
            >
              <ChevronLeft size={26} aria-hidden="true" />
            </button>
            <img
              src={`${import.meta.env.BASE_URL}${activeLifeItem.image}`}
              alt={activeLifeItem.alt}
            />
            <button
              className="life-lightbox-nav life-lightbox-nav--next"
              type="button"
              aria-label={text.lifeNext}
              onClick={() => moveLifeImage(1)}
            >
              <ChevronRight size={26} aria-hidden="true" />
            </button>
            <div className="life-lightbox-caption">
              <small>{activeLifeItem.kicker}</small>
              <h2 id="life-lightbox-title">{activeLifeItem.title}</h2>
              <p>{activeLifeItem.body}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
