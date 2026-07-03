import { useMemo, useState } from 'react';
import { productCategories, products } from '../data/products';
import { applications } from '../data/applications';
import { filterProducts, uniqueOptions } from '../lib/productFilters';
import { ProductTable } from '../components/ProductTable';

export function ProductsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [application, setApplication] = useState('');
  const [maxVds, setMaxVds] = useState('');
  const packages = uniqueOptions(products.map((product) => product.packageName));
  const [packageName, setPackageName] = useState('');

  const filteredProducts = useMemo(
    () =>
      filterProducts(products, {
        query,
        category: category ? (category as (typeof productCategories)[number]) : undefined,
        application: application || undefined,
        packageName: packageName || undefined,
        maxVds: maxVds ? Number(maxVds) : undefined
      }),
    [application, category, maxVds, packageName, query]
  );

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">Products</p>
        <h1>产品中心</h1>
        <p>按型号、应用、封装和耐压筛选首批 MOSFET 代表器件。</p>
      </div>

      <form className="filter-grid" aria-label="产品筛选">
        <label>
          搜索型号
          <input value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <label>
          分类
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">全部</option>
            {productCategories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          应用
          <select value={application} onChange={(event) => setApplication(event.target.value)}>
            <option value="">全部</option>
            {applications.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
          </select>
        </label>
        <label>
          封装
          <select value={packageName} onChange={(event) => setPackageName(event.target.value)}>
            <option value="">全部</option>
            {packages.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          最高 |Vds|
          <input
            inputMode="numeric"
            placeholder="例如 100"
            value={maxVds}
            onChange={(event) => setMaxVds(event.target.value)}
          />
        </label>
      </form>

      <p className="result-count">匹配 {filteredProducts.length} 个器件</p>
      <ProductTable products={filteredProducts} />
    </section>
  );
}
