export type Application = {
  name: string;
  nameEn: string;
  nameVi: string;
  summary: string;
  summaryEn: string;
  summaryVi: string;
  needs: string[];
  needsEn: string[];
  needsVi: string[];
  featuredParts: string[];
};

export const applications: Application[] = [
  {
    name: '3C 数码电池',
    nameEn: '3C Digital Batteries',
    nameVi: 'Pin kỹ thuật số 3C',
    summary: '面向紧凑电池保护和高能效便携设备,强调低阈值、低导阻和小封装。',
    summaryEn:
      'For compact battery protection and high-efficiency portable devices, emphasizing low threshold, low on-resistance and small packages.',
    summaryVi:
      'Dành cho bảo vệ pin nhỏ gọn và thiết bị di động hiệu suất cao, nhấn mạnh ngưỡng thấp, Rds(on) thấp và đóng gói nhỏ.',
    needs: ['低压平台', '小封装', '低 Rds(on)', '低功耗'],
    needsEn: ['Low-voltage platform', 'Small package', 'Low Rds(on)', 'Low power'],
    needsVi: ['Nền tảng điện áp thấp', 'Đóng gói nhỏ', 'Rds(on) thấp', 'Công suất thấp'],
    featuredParts: ['PE4612', 'PED3312M']
  },
  {
    name: 'BMS/储能',
    nameEn: 'BMS / Energy Storage',
    nameVi: 'BMS / Lưu trữ năng lượng',
    summary: '覆盖中高电流储能系统,关注过流能力、热设计和 TOLL/DFN 封装效率。',
    summaryEn:
      'For medium and high-current storage systems, focused on over-current capability, thermal design and TOLL/DFN package efficiency.',
    summaryVi:
      'Phục vụ hệ lưu trữ dòng trung và cao, tập trung vào khả năng quá dòng, thiết kế nhiệt và hiệu suất đóng gói TOLL/DFN.',
    needs: ['高电流', '低封装电阻', '热稳定', '高可靠性'],
    needsEn: ['High current', 'Low package resistance', 'Thermal stability', 'High reliability'],
    needsVi: ['Dòng cao', 'Điện trở đóng gói thấp', 'Ổn định nhiệt', 'Độ tin cậy cao'],
    featuredParts: ['PE54130GT', 'PE86300RT', 'PES016N10R']
  },
  {
    name: '电动工具',
    nameEn: 'Power Tools',
    nameVi: 'Dụng cụ điện',
    summary: '为高脉冲电流和高功率密度控制板提供低损耗 MOSFET 组合。',
    summaryEn:
      'Low-loss MOSFET combinations for control boards with high pulse current and high power density.',
    summaryVi:
      'Tổ hợp MOSFET tổn hao thấp cho bo điều khiển cần dòng xung cao và mật độ công suất cao.',
    needs: ['高功率密度', '雪崩耐受', '低延迟', '成本效率'],
    needsEn: ['High power density', 'Avalanche ruggedness', 'Low delay', 'Cost efficiency'],
    needsVi: ['Mật độ công suất cao', 'Chịu avalanche', 'Độ trễ thấp', 'Hiệu quả chi phí'],
    featuredParts: ['PED3018MAT', 'PE54130GT']
  },
  {
    name: '无线充',
    nameEn: 'Wireless Charging',
    nameVi: 'Sạc không dây',
    summary: '适用于同步整流和功率路径切换,平衡导通损耗与开关速度。',
    summaryEn:
      'For synchronous rectification and power-path switching, balancing conduction loss and switching speed.',
    summaryVi:
      'Phù hợp chỉnh lưu đồng bộ và chuyển mạch đường công suất, cân bằng tổn hao dẫn và tốc độ chuyển mạch.',
    needs: ['快开关', '低 Qg', '低 EMI', '双管方案'],
    needsEn: ['Fast switching', 'Low Qg', 'Low EMI', 'Dual-FET solution'],
    needsVi: ['Chuyển mạch nhanh', 'Qg thấp', 'EMI thấp', 'Giải pháp hai MOSFET'],
    featuredParts: ['PE30D10']
  },
  {
    name: '电机驱动',
    nameEn: 'Motor Drive',
    nameVi: 'Điều khiển động cơ',
    summary: '覆盖 N+P 组合管和桥式驱动场景,用于小型电机与控制模块。',
    summaryEn: 'N+P MOSFET and bridge-drive scenarios for compact motors and control modules.',
    summaryVi: 'Bao phủ MOSFET N+P và mạch cầu cho động cơ nhỏ và module điều khiển.',
    needs: ['N+P 配置', '桥式驱动', '封装兼容', '效率优化'],
    needsEn: ['N+P configuration', 'Bridge drive', 'Package compatibility', 'Efficiency tuning'],
    needsVi: ['Cấu hình N+P', 'Điều khiển cầu', 'Tương thích đóng gói', 'Tối ưu hiệu suất'],
    featuredParts: ['PE4616T']
  },
  {
    name: 'PD',
    nameEn: 'USB PD',
    nameVi: 'Sạc nhanh PD',
    summary: '面向快充协议、电源路径和同步整流应用,提供 30V-100V 平台选择。',
    summaryEn:
      '30V-100V platform choices for fast-charging protocols, power-path control and synchronous rectification.',
    summaryVi:
      'Các nền tảng 30V-100V cho giao thức sạc nhanh, điều khiển đường công suất và chỉnh lưu đồng bộ.',
    needs: ['高频效率', '协议控制', '端口保护', '低热损耗'],
    needsEn: [
      'High-frequency efficiency',
      'Protocol control',
      'Port protection',
      'Low thermal loss'
    ],
    needsVi: ['Hiệu suất tần số cao', 'Điều khiển giao thức', 'Bảo vệ cổng', 'Tổn hao nhiệt thấp'],
    featuredParts: ['PES048N10G']
  }
];
