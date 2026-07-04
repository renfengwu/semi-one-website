import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../../src/app/App';

describe('Navigation', () => {
  it('exposes the primary corporate sections', () => {
    render(<App />);
    const navigation = screen.getByRole('navigation', { name: /主导航/i });
    expect(within(navigation).getByRole('link', { name: '产品' })).toBeInTheDocument();
    expect(within(navigation).getByRole('link', { name: '应用' })).toBeInTheDocument();
    expect(within(navigation).getByRole('link', { name: '技术' })).toBeInTheDocument();
    expect(within(navigation).getByRole('link', { name: '质量' })).toBeInTheDocument();
    expect(within(navigation).getByRole('link', { name: '员工生活' })).toHaveAttribute(
      'href',
      '/#life'
    );
  });
});
