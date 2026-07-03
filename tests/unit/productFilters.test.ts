import { describe, expect, it } from 'vitest';
import type { Product } from '../../src/data/products';
import { filterProducts } from '../../src/lib/productFilters';

const products: Product[] = [
  {
    partNumber: 'PE54130GT',
    category: 'MOSFET',
    packageName: 'DFN5X6-8L',
    config: 'S-N',
    vds: 40,
    vgs: 20,
    id: 130,
    vgsThreshold: 1.6,
    rdsOn: { '10V': 1.1, '4.5V': 1.4 },
    applications: ['BMS/储能', '电动工具'],
    datasheetUrl: 'http://www.semi-one.com/Uploads/pdf/PE54130GT.pdf'
  },
  {
    partNumber: 'PE4612',
    category: 'MOSFET',
    packageName: 'CSP',
    config: 'S-N',
    vds: 22,
    vgs: 12,
    id: 4,
    vgsThreshold: 0.7,
    rdsOn: { '4.5V': 28, '2.5V': 38 },
    applications: ['3C 数码电池'],
    datasheetUrl: 'http://www.semi-one.com/Uploads/pdf/PE4612.pdf'
  }
];

describe('filterProducts', () => {
  it('matches part number queries case-insensitively', () => {
    const result = filterProducts(products, { query: 'pe541' });
    expect(result).toHaveLength(1);
    expect(result[0].partNumber).toBe('PE54130GT');
  });

  it('filters by application and maximum Vds', () => {
    const result = filterProducts(products, { application: '3C 数码电池', maxVds: 30 });
    expect(result.map((item) => item.partNumber)).toEqual(['PE4612']);
  });

  it('filters by category and package', () => {
    const result = filterProducts(products, { category: 'MOSFET', packageName: 'CSP' });
    expect(result.map((item) => item.partNumber)).toEqual(['PE4612']);
  });
});
