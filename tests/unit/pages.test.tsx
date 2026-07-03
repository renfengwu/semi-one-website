import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import App from '../../src/app/App';
import { normalizePath, siteHref } from '../../src/app/routes';
import { AboutPage } from '../../src/pages/AboutPage';
import { ApplicationsPage } from '../../src/pages/ApplicationsPage';
import { NotFoundPage } from '../../src/pages/NotFoundPage';
import { QualityPage } from '../../src/pages/QualityPage';
import { TechnologyPage } from '../../src/pages/TechnologyPage';

function setPath(path: string) {
  window.history.pushState({}, '', path);
}

afterEach(() => {
  setPath('/');
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
    expect(normalizePath('/mosfet_support')).toBe('/technology');
    expect(normalizePath('/contact')).toBe('/about');
    expect(normalizePath('/semi-one-website/products')).toBe('/products');
  });

  it('builds internal links against the configured base path', () => {
    expect(siteHref('/')).toBe('/');
    expect(siteHref('/products')).toBe('/products');
    expect(siteHref('mailto:shuangling@semi-one.com')).toBe('mailto:shuangling@semi-one.com');
  });

  it('renders route-specific pages', () => {
    setPath('/technology');
    render(<App />);
    expect(screen.getByRole('heading', { name: '技术与创新' })).toBeInTheDocument();
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
    expect(screen.getByRole('link', { name: 'Sản phẩm' })).toBeInTheDocument();
  });
});
