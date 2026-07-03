import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ProductsPage } from '../../src/pages/ProductsPage';

describe('ProductsPage', () => {
  it('filters products by model text', async () => {
    render(<ProductsPage language="zh" />);
    await userEvent.type(screen.getByLabelText(/搜索型号/i), 'PE54130');
    expect(screen.getByText('PE54130GT')).toBeInTheDocument();
    expect(screen.queryByText('PE4612')).not.toBeInTheDocument();
  });
});
