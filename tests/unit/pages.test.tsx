import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from '../../src/app/App';
import { handleSiteNavigation, normalizePath, siteHref } from '../../src/app/routes';
import { LifeShowcase } from '../../src/components/LifeShowcase';
import { companyProfile } from '../../src/data/company';
import { AboutPage } from '../../src/pages/AboutPage';
import { ApplicationsPage } from '../../src/pages/ApplicationsPage';
import { NotFoundPage } from '../../src/pages/NotFoundPage';
import { QualityPage } from '../../src/pages/QualityPage';
import { TechnologyPage } from '../../src/pages/TechnologyPage';

function setPath(path: string) {
  window.history.pushState({}, '', path);
}

function navigationEvent(overrides = {}) {
  return {
    altKey: false,
    button: 0,
    ctrlKey: false,
    defaultPrevented: false,
    metaKey: false,
    shiftKey: false,
    preventDefault: vi.fn(),
    ...overrides
  };
}

afterEach(() => {
  setPath('/');
  vi.restoreAllMocks();
});

describe('static pages', () => {
  it('renders application, technology, quality, about, and not found content', () => {
    render(<ApplicationsPage language="zh" />);
    expect(screen.getByRole('heading', { name: '应用方案' })).toBeInTheDocument();

    render(<TechnologyPage language="zh" />);
    expect(screen.getByRole('heading', { name: '技术与创新' })).toBeInTheDocument();

    render(<QualityPage language="zh" />);
    expect(screen.getByRole('heading', { name: '质量与资质' })).toBeInTheDocument();

    render(<AboutPage language="zh" />);
    expect(screen.getByRole('heading', { name: '关于芯电元' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: companyProfile.contact.address })).toHaveAttribute(
      'href',
      companyProfile.contact.mapUrl
    );

    render(<NotFoundPage language="zh" />);
    expect(screen.getByRole('heading', { name: '页面未找到' })).toBeInTheDocument();
  });

  it('renders Vietnamese content on core pages', () => {
    render(<ApplicationsPage language="vi" />);
    expect(screen.getByRole('heading', { name: 'Giải pháp ứng dụng' })).toBeInTheDocument();

    render(<TechnologyPage language="vi" />);
    expect(screen.getByRole('heading', { name: 'Công nghệ & Đổi mới' })).toBeInTheDocument();

    render(<QualityPage language="vi" />);
    expect(screen.getByRole('heading', { name: 'Chất lượng & Chứng nhận' })).toBeInTheDocument();

    render(<AboutPage language="vi" />);
    expect(screen.getByRole('heading', { name: 'Về Semi-One' })).toBeInTheDocument();
  });
});

describe('App routing', () => {
  it('normalizes legacy paths', () => {
    expect(normalizePath('/Product/')).toBe('/products');
    expect(normalizePath('/applications/')).toBe('/applications');
    expect(normalizePath('/products/')).toBe('/products');
    expect(normalizePath('/about/')).toBe('/about');
    expect(normalizePath('/mosfet_support')).toBe('/technology');
    expect(normalizePath('/contact')).toBe('/about');
    expect(normalizePath('/semi-one-website/products')).toBe('/products');
    expect(normalizePath('/semi-one-website/about/')).toBe('/about');
    expect(normalizePath('/semi-one-website/')).toBe('/');
  });

  it('builds internal links against the configured base path', () => {
    expect(siteHref('/')).toBe('/');
    expect(siteHref('/products')).toBe('/products');
    expect(siteHref('/about#life')).toBe('/about#life');
    expect(siteHref('mailto:shuangling@semi-one.com')).toBe('mailto:shuangling@semi-one.com');
  });

  it('intercepts same-tab internal navigation without a page reload', () => {
    const event = navigationEvent();
    const listener = vi.fn();
    const scrollTo = vi.fn();
    Object.defineProperty(window, 'scrollTo', { value: scrollTo, writable: true });
    window.addEventListener('semi-one:navigation', listener);

    handleSiteNavigation(event, '/products');

    expect(event.preventDefault).toHaveBeenCalled();
    expect(window.location.pathname).toBe('/products');
    expect(listener).toHaveBeenCalled();
    expect(scrollTo).toHaveBeenCalledWith({ top: 0 });
    window.removeEventListener('semi-one:navigation', listener);
  });

  it('scrolls to the employee life section for hash navigation', () => {
    const event = navigationEvent();
    const target = document.createElement('div');
    const scrollIntoView = vi.fn();
    target.id = 'life';
    target.scrollIntoView = scrollIntoView;
    document.body.appendChild(target);
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0);
      return 0;
    });

    handleSiteNavigation(event, '/about#life');

    expect(event.preventDefault).toHaveBeenCalled();
    expect(window.location.pathname).toBe('/about');
    expect(window.location.hash).toBe('#life');
    expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start', behavior: 'smooth' });
    target.remove();
  });

  it('keeps modified clicks as normal browser navigation', () => {
    const event = navigationEvent({ metaKey: true });

    handleSiteNavigation(event, '/products');

    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it('renders route-specific pages', () => {
    setPath('/technology');
    render(<App />);
    expect(screen.getByRole('heading', { name: '技术与创新' })).toBeInTheDocument();
  });

  it('scrolls direct hash links after the route content renders', () => {
    const scrollIntoView = vi.fn();
    const originalScrollIntoView = window.HTMLElement.prototype.scrollIntoView;
    Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: scrollIntoView
    });
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      callback(0);
      return 0;
    });

    setPath('/about#life');
    render(<App />);

    expect(scrollIntoView).toHaveBeenCalledWith({ block: 'start' });

    if (originalScrollIntoView) {
      Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', {
        configurable: true,
        value: originalScrollIntoView
      });
    } else {
      Reflect.deleteProperty(window.HTMLElement.prototype, 'scrollIntoView');
    }
  });

  it('switches the homepage to English', async () => {
    setPath('/');
    render(<App />);
    await userEvent.click(screen.getByRole('button', { name: 'EN' }));
    expect(
      screen.getByRole('heading', { name: /Shenzhen Semi-One Technology/i })
    ).toBeInTheDocument();
  });

  it('switches the homepage and navigation to Vietnamese', async () => {
    setPath('/');
    render(<App />);
    await userEvent.click(screen.getByRole('button', { name: 'VI' }));
    expect(screen.getByText(/Nền tảng linh kiện công suất bán dẫn/i)).toBeInTheDocument();
    expect(
      within(screen.getByRole('navigation', { name: /主导航/i })).getByRole('link', {
        name: 'Sản phẩm'
      })
    ).toBeInTheDocument();
  });

  it('opens employee life photos in a keyboard-friendly viewer', async () => {
    render(<LifeShowcase language="zh" />);

    await userEvent.click(screen.getByRole('button', { name: /放大查看图片: 同一面旗帜/ }));
    let dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(
      within(dialog).getByRole('heading', { name: '同一面旗帜下向下一程出发' })
    ).toBeInTheDocument();
    expect(document.body).toHaveClass('is-lightbox-open');

    await userEvent.click(screen.getByRole('button', { name: '下一张' }));
    dialog = screen.getByRole('dialog');
    expect(
      within(dialog).getByRole('heading', { name: '在户外场景里建立协作默契' })
    ).toBeInTheDocument();

    await userEvent.keyboard('{ArrowLeft}');
    dialog = screen.getByRole('dialog');
    expect(
      within(dialog).getByRole('heading', { name: '同一面旗帜下向下一程出发' })
    ).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.body).not.toHaveClass('is-lightbox-open');
  });
});
