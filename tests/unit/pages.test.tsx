import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import App from '../../src/app/App';
import { normalizePath } from '../../src/app/routes';
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
    render(<ApplicationsPage />);
    expect(screen.getByRole('heading', { name: '应用方案' })).toBeInTheDocument();

    render(<TechnologyPage />);
    expect(screen.getByRole('heading', { name: '技术与创新' })).toBeInTheDocument();

    render(<QualityPage />);
    expect(screen.getByRole('heading', { name: '质量与资质' })).toBeInTheDocument();

    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: '关于芯电元' })).toBeInTheDocument();

    render(<NotFoundPage />);
    expect(screen.getByRole('heading', { name: '页面未找到' })).toBeInTheDocument();
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
});
