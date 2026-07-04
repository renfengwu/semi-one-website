import { Download, ExternalLink } from 'lucide-react';
import type { Product } from '../data/products';

type ProductTableProps = {
  products: Product[];
};

export function ProductTable({ products }: ProductTableProps) {
  return (
    <div className="table-shell" role="region" aria-label="产品参数表">
      <table className="product-table">
        <thead>
          <tr>
            <th>Part Num</th>
            <th>Package</th>
            <th>Config</th>
            <th>Vds</th>
            <th>Id</th>
            <th>Vgs(th)</th>
            <th>Rds(on)</th>
            <th>Datasheet</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={`${product.partNumber}-${product.packageName}-${product.config}-${index}`}>
              <td>
                {product.datasheetUrl ? (
                  <a
                    className="part-number-link"
                    href={product.datasheetUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`打开 ${product.partNumber} PDF`}
                  >
                    {product.partNumber}
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="part-number-static">{product.partNumber}</span>
                )}
              </td>
              <td>{product.packageName}</td>
              <td>{product.config}</td>
              <td>{product.vds}V</td>
              <td>{product.id}A</td>
              <td>{product.vgsThreshold}V</td>
              <td>
                {Object.entries(product.rdsOn)
                  .map(([voltage, value]) => `${value}mR@${voltage}`)
                  .join(' / ')}
              </td>
              <td>
                {product.datasheetUrl ? (
                  <a
                    className="datasheet-download"
                    href={product.datasheetUrl}
                    target="_blank"
                    rel="noreferrer"
                    download={`${product.partNumber}.pdf`}
                    aria-label={`下载 ${product.partNumber} PDF`}
                  >
                    <Download size={15} aria-hidden="true" />
                    下载
                  </a>
                ) : (
                  <span className="product-table-muted">暂无</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
