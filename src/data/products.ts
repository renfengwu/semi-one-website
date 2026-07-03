export type ProductCategory = 'MOSFET' | '功率 IC' | 'TVS' | 'IGBT' | '模拟开关';

export type Product = {
  partNumber: string;
  category: ProductCategory;
  packageName: string;
  config: string;
  vds: number;
  vgs: number;
  id: number;
  vgsThreshold: number;
  rdsOn: Partial<Record<'10V' | '4.5V' | '2.5V' | '1.8V', number>>;
  applications: string[];
  datasheetUrl: string;
};

const pdf = (file: string) => `http://www.semi-one.com/Uploads/pdf/${file}`;

export const products: Product[] = [
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
    datasheetUrl: pdf('PE54130GT.PDF')
  },
  {
    partNumber: 'PE86300RT',
    category: 'MOSFET',
    packageName: 'TOLL',
    config: 'S-N',
    vds: 60,
    vgs: 20,
    id: 300,
    vgsThreshold: 3,
    rdsOn: { '10V': 1.25 },
    applications: ['BMS/储能'],
    datasheetUrl: pdf('PE86300RT.PDF')
  },
  {
    partNumber: 'PES016N10R',
    category: 'MOSFET',
    packageName: 'TOLL',
    config: 'S-N',
    vds: 100,
    vgs: 20,
    id: 300,
    vgsThreshold: 3.3,
    rdsOn: { '10V': 1.3 },
    applications: ['BMS/储能'],
    datasheetUrl: pdf('PES016N10R.PDF')
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
    datasheetUrl: pdf('PE4612.PDF')
  },
  {
    partNumber: 'PED3312M',
    category: 'MOSFET',
    packageName: 'DFN3X3-8L',
    config: 'S-N',
    vds: 20,
    vgs: 12,
    id: 45,
    vgsThreshold: 0.7,
    rdsOn: { '4.5V': 3.4, '2.5V': 5 },
    applications: ['3C 数码电池'],
    datasheetUrl: pdf('PED3312M.pdf')
  },
  {
    partNumber: 'PED3018MAT',
    category: 'MOSFET',
    packageName: 'PDFN3.3X3.3-8L',
    config: 'S-N',
    vds: 30,
    vgs: 20,
    id: 18,
    vgsThreshold: 1.6,
    rdsOn: { '10V': 3.2 },
    applications: ['电动工具'],
    datasheetUrl: pdf('PED3018MAT.PDF')
  },
  {
    partNumber: 'PE30D10',
    category: 'MOSFET',
    packageName: 'SOP-8',
    config: 'D-N',
    vds: 30,
    vgs: 20,
    id: 10,
    vgsThreshold: 1.7,
    rdsOn: { '10V': 11, '4.5V': 16 },
    applications: ['无线充'],
    datasheetUrl: pdf('PE30D10.PDF')
  },
  {
    partNumber: 'PE4616T',
    category: 'MOSFET',
    packageName: 'SOP-8',
    config: 'N+P',
    vds: 30,
    vgs: 20,
    id: 4,
    vgsThreshold: 1.5,
    rdsOn: { '10V': 13, '4.5V': 18 },
    applications: ['电机驱动'],
    datasheetUrl: pdf('PE4616T.PDF')
  },
  {
    partNumber: 'PE3415T',
    category: 'MOSFET',
    packageName: 'SOT-23',
    config: 'S-P',
    vds: -20,
    vgs: 12,
    id: -4,
    vgsThreshold: -0.8,
    rdsOn: { '4.5V': 32, '2.5V': 48 },
    applications: ['电子烟'],
    datasheetUrl: pdf('PE3415T.PDF')
  },
  {
    partNumber: 'PES048N10G',
    category: 'MOSFET',
    packageName: 'DFN5X6-8L',
    config: 'S-N',
    vds: 100,
    vgs: 20,
    id: 80,
    vgsThreshold: 1.6,
    rdsOn: { '10V': 4, '4.5V': 6 },
    applications: ['PD'],
    datasheetUrl: pdf('PES048N10G.PDF')
  },
  {
    partNumber: 'PEJ70R380P',
    category: 'MOSFET',
    packageName: 'TO-263',
    config: 'S-N',
    vds: 700,
    vgs: 30,
    id: 12,
    vgsThreshold: 3.5,
    rdsOn: { '10V': 340 },
    applications: ['电源'],
    datasheetUrl: pdf('PEJ70R380P-V1.1 .PDF')
  },
  {
    partNumber: 'PE01P35K',
    category: 'MOSFET',
    packageName: 'TO-252-2L',
    config: 'S-P',
    vds: -100,
    vgs: 20,
    id: -30,
    vgsThreshold: -2,
    rdsOn: { '10V': 52, '4.5V': 60 },
    applications: ['电源'],
    datasheetUrl: pdf('PE01P35K-V1.1.PDF')
  }
];

export const productCategories: ProductCategory[] = [
  'MOSFET',
  '功率 IC',
  'TVS',
  'IGBT',
  '模拟开关'
];
