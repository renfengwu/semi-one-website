import type { Product, ProductCategory } from '../data/products';

export type ProductFilter = {
  query?: string;
  category?: ProductCategory;
  application?: string;
  packageName?: string;
  maxVds?: number;
};

export function filterProducts(products: Product[], filter: ProductFilter): Product[] {
  const query = filter.query?.trim().toLowerCase();

  return products.filter((product) => {
    if (query && !product.partNumber.toLowerCase().includes(query)) return false;
    if (filter.category && product.category !== filter.category) return false;
    if (filter.application && !product.applications.includes(filter.application)) return false;
    if (filter.packageName && product.packageName !== filter.packageName) return false;
    if (typeof filter.maxVds === 'number' && Math.abs(product.vds) > filter.maxVds) {
      return false;
    }
    return true;
  });
}

export function uniqueOptions(values: string[]) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, 'zh-CN'));
}
