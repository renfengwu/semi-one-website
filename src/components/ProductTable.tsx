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
          {products.map((product) => (
            <tr key={product.partNumber}>
              <td>{product.partNumber}</td>
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
                <a href={product.datasheetUrl} target="_blank" rel="noreferrer">
                  PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
