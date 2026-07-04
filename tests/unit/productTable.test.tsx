import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ProductsPage } from '../../src/pages/ProductsPage';
import { products } from '../../src/data/products';

describe('ProductsPage', () => {
  it('filters products by model text', async () => {
    render(<ProductsPage language="zh" />);
    await userEvent.type(screen.getByLabelText(/搜索型号/i), 'PE54130');
    expect(screen.getByText('PE54130GT')).toBeInTheDocument();
    expect(screen.queryByText('PE4612')).not.toBeInTheDocument();
  });

  it('renders the full selection table with direct PDF and download links', async () => {
    render(<ProductsPage language="zh" />);
    await userEvent.type(screen.getByLabelText(/搜索型号/i), 'PE54130');

    const datasheet = products.find((product) => product.partNumber === 'PE54130GT')?.datasheetUrl;
    expect(products).toHaveLength(414);
    expect(datasheet).toBeDefined();
    expect(datasheet).toMatch(/PE54130GT\.PDF$/i);
    expect(screen.getByRole('link', { name: '打开 PE54130GT PDF' })).toHaveAttribute(
      'href',
      datasheet as string
    );
    expect(screen.getByRole('link', { name: '下载 PE54130GT PDF' })).toHaveAttribute(
      'download',
      'PE54130GT.pdf'
    );
  });
});
