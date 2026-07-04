import { useMemo, useState } from 'react';
import { productCategories, products } from '../data/products';
import { applications } from '../data/applications';
import { filterProducts, uniqueOptions } from '../lib/productFilters';
import { ProductTable } from '../components/ProductTable';
import type { Language } from '../lib/i18n';

type ProductsPageProps = {
  language: Language;
};

type ProductCopy = {
  eyebrow: string;
  title: string;
  description: string;
  panelTitle: string;
  deviceCount: string;
  voltageSpan: string;
  currentCeiling: string;
  packageCount: string;
  filterTitle: string;
  search: string;
  category: string;
  application: string;
  packageName: string;
  maxVds: string;
  all: string;
  placeholder: string;
  match: (count: number) => string;
};

const productText: Record<Language, ProductCopy> = {
  zh: {
    eyebrow: 'Products',
    title: '产品中心',
    description: '按型号、应用、封装和耐压筛选首批 MOSFET 代表器件。',
    panelTitle: '器件选型信号',
    deviceCount: '公开型号',
    voltageSpan: '耐压覆盖',
    currentCeiling: '电流上限',
    packageCount: '封装形态',
    filterTitle: '参数筛选台',
    search: '搜索型号',
    category: '分类',
    application: '应用',
    packageName: '封装',
    maxVds: '最高 |Vds|',
    all: '全部',
    placeholder: '例如 100',
    match: (count: number) => `匹配 ${count} 个器件`
  },
  en: {
    eyebrow: 'Products',
    title: 'Product Center',
    description:
      'Filter the first MOSFET representative devices by part number, application, package and voltage rating.',
    panelTitle: 'Device Selection Signal',
    deviceCount: 'Public parts',
    voltageSpan: 'Voltage span',
    currentCeiling: 'Current ceiling',
    packageCount: 'Package types',
    filterTitle: 'Parameter Console',
    search: 'Search part number',
    category: 'Category',
    application: 'Application',
    packageName: 'Package',
    maxVds: 'Max |Vds|',
    all: 'All',
    placeholder: 'e.g. 100',
    match: (count: number) => `${count} devices matched`
  },
  vi: {
    eyebrow: 'Sản phẩm',
    title: 'Trung tâm sản phẩm',
    description:
      'Lọc các linh kiện MOSFET đại diện theo mã sản phẩm, ứng dụng, kiểu đóng gói và điện áp chịu đựng.',
    panelTitle: 'Tín hiệu chọn linh kiện',
    deviceCount: 'Mã công khai',
    voltageSpan: 'Dải điện áp',
    currentCeiling: 'Dòng tối đa',
    packageCount: 'Kiểu đóng gói',
    filterTitle: 'Bảng lọc thông số',
    search: 'Tìm mã sản phẩm',
    category: 'Danh mục',
    application: 'Ứng dụng',
    packageName: 'Đóng gói',
    maxVds: '|Vds| tối đa',
    all: 'Tất cả',
    placeholder: 'ví dụ 100',
    match: (count: number) => `Khớp ${count} linh kiện`
  }
};

const categoryLabels: Record<string, Record<Language, string>> = {
  MOSFET: { zh: 'MOSFET', en: 'MOSFET', vi: 'MOSFET' },
  '功率 IC': { zh: '功率 IC', en: 'Power IC', vi: 'IC công suất' },
  TVS: { zh: 'TVS', en: 'TVS', vi: 'TVS' },
  IGBT: { zh: 'IGBT', en: 'IGBT', vi: 'IGBT' },
  模拟开关: { zh: '模拟开关', en: 'Analog Switch', vi: 'Công tắc analog' }
};

export function ProductsPage({ language }: ProductsPageProps) {
  const copy = productText[language];
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [application, setApplication] = useState('');
  const [maxVds, setMaxVds] = useState('');
  const packages = uniqueOptions(products.map((product) => product.packageName));
  const [packageName, setPackageName] = useState('');
  const absVdsValues = products.map((product) => Math.abs(product.vds));
  const absIdValues = products.map((product) => Math.abs(product.id));
  const minVds = Math.min(...absVdsValues);
  const maxProductVds = Math.max(...absVdsValues);
  const maxProductId = Math.max(...absIdValues);

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
    <section className="page-section page-section--products">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
        <aside className="page-hero-panel" aria-label={copy.panelTitle}>
          <span>{copy.panelTitle}</span>
          <dl>
            <div>
              <dt>{copy.deviceCount}</dt>
              <dd>{products.length}</dd>
            </div>
            <div>
              <dt>{copy.voltageSpan}</dt>
              <dd>
                {minVds}-{maxProductVds}V
              </dd>
            </div>
            <div>
              <dt>{copy.currentCeiling}</dt>
              <dd>{maxProductId}A</dd>
            </div>
            <div>
              <dt>{copy.packageCount}</dt>
              <dd>{packages.length}</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="page-body">
        <div className="filter-console">
          <div className="filter-console-heading">
            <span>{copy.filterTitle}</span>
            <strong>{copy.match(filteredProducts.length)}</strong>
          </div>
          <form className="filter-grid" aria-label="产品筛选">
            <label>
              {copy.search}
              <input value={query} onChange={(event) => setQuery(event.target.value)} />
            </label>
            <label>
              {copy.category}
              <select value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="">{copy.all}</option>
                {productCategories.map((item) => (
                  <option key={item} value={item}>
                    {categoryLabels[item][language]}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {copy.application}
              <select value={application} onChange={(event) => setApplication(event.target.value)}>
                <option value="">{copy.all}</option>
                {applications.map((item) => (
                  <option key={item.name} value={item.name}>
                    {language === 'vi' ? item.nameVi : language === 'en' ? item.nameEn : item.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {copy.packageName}
              <select value={packageName} onChange={(event) => setPackageName(event.target.value)}>
                <option value="">{copy.all}</option>
                {packages.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label>
              {copy.maxVds}
              <input
                inputMode="numeric"
                placeholder={copy.placeholder}
                value={maxVds}
                onChange={(event) => setMaxVds(event.target.value)}
              />
            </label>
          </form>
        </div>

        <ProductTable products={filteredProducts} />
      </div>
    </section>
  );
}
