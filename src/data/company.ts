const address = '深圳市南山区留仙大道3370号南山智园崇文园区3号楼1901/1902';

export const companyProfile = {
  nameZh: '深圳市芯电元科技有限公司',
  nameEn: 'Shenzhen Semi-One Technology Co., Ltd.',
  taglineZh: '专注于功率半导体器件',
  taglineEn: 'Specialized in power semiconductor devices',
  values: ['引领', '专业', '可靠', '共赢'],
  proofPoints: [
    { value: '2011', label: '成立时间' },
    { value: '40+', label: '研发团队' },
    { value: '4.5亿+', label: '2024 销售额' },
    { value: '99+', label: '专利/布图/软著' }
  ],
  locations: ['深圳', '无锡', '佛山', '上海', '香港', '台湾', '美国', '越南'],
  contact: {
    address,
    phone: '86-755-82771533',
    email: 'shuangling@semi-one.com',
    website: 'www.semi-one.com',
    mapUrl: `https://uri.amap.com/search?keyword=${encodeURIComponent(
      address
    )}&view=map&src=semi-one-website&callnative=0`
  },
  timeline: [
    {
      year: '2011-2012',
      event: '深圳公司成立,香港分公司成立',
      eventEn: 'Shenzhen company and Hong Kong branch established',
      eventVi: 'Thành lập công ty tại Thâm Quyến và chi nhánh Hồng Kông'
    },
    {
      year: '2016',
      event: '销售额突破 1 亿人民币',
      eventEn: 'Sales exceeded RMB 100 million',
      eventVi: 'Doanh thu vượt 100 triệu RMB'
    },
    {
      year: '2019',
      event: '国家高新技术企业,国家专利 12 项',
      eventEn: 'Recognized as a national high-tech enterprise with 12 national patents',
      eventVi: 'Được công nhận là doanh nghiệp công nghệ cao quốc gia, có 12 bằng sáng chế'
    },
    {
      year: '2020-2021',
      event: '12 寸 SGT 工艺量产,首款车规级晶圆量产',
      eventEn: '12-inch SGT process entered mass production; first automotive-grade wafer launched',
      eventVi:
        'Quy trình SGT 12 inch đi vào sản xuất hàng loạt; wafer cấp ô tô đầu tiên được sản xuất'
    },
    {
      year: '2022',
      event: '国家专利 50 余项,低 FOM MOSFET 量产',
      eventEn: 'More than 50 national patents; low-FOM MOSFETs entered mass production',
      eventVi: 'Hơn 50 bằng sáng chế quốc gia; MOSFET FOM thấp đi vào sản xuất hàng loạt'
    },
    {
      year: '2023-2024',
      event: '专精特新认证,SJMOS 量产,上海和美国设计公司成立',
      eventEn:
        'Specialized and innovative enterprise recognition; SJMOS mass production; Shanghai and US design entities established',
      eventVi:
        'Được công nhận doanh nghiệp chuyên sâu đổi mới; SJMOS sản xuất hàng loạt; thành lập đơn vị thiết kế tại Thượng Hải và Mỹ'
    }
  ]
};

export const technologyTracks = ['Trench MOS', 'SGT MOS', 'SJ MOS', 'IGBT', 'SiC MOS', 'GaN MOS'];

export const labCapabilities = [
  'Keysight B1506A 晶体管测试仪',
  '晶体管雪崩测试系统',
  'ESD/EMC 测试',
  'X 射线与声学显微镜',
  'HTRB/HTGB 与 H3TRB',
  'HAST/B-HAST 与温冲试验'
];
