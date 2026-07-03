export type Application = {
  name: string;
  summary: string;
  needs: string[];
  featuredParts: string[];
};

export const applications: Application[] = [
  {
    name: '3C 数码电池',
    summary: '面向紧凑电池保护和高能效便携设备,强调低阈值、低导阻和小封装。',
    needs: ['低压平台', '小封装', '低 Rds(on)', '低功耗'],
    featuredParts: ['PE4612', 'PED3312M']
  },
  {
    name: 'BMS/储能',
    summary: '覆盖中高电流储能系统,关注过流能力、热设计和 TOLL/DFN 封装效率。',
    needs: ['高电流', '低封装电阻', '热稳定', '高可靠性'],
    featuredParts: ['PE54130GT', 'PE86300RT', 'PES016N10R']
  },
  {
    name: '电动工具',
    summary: '为高脉冲电流和高功率密度控制板提供低损耗 MOSFET 组合。',
    needs: ['高功率密度', '雪崩耐受', '低延迟', '成本效率'],
    featuredParts: ['PED3018MAT', 'PE54130GT']
  },
  {
    name: '无线充',
    summary: '适用于同步整流和功率路径切换,平衡导通损耗与开关速度。',
    needs: ['快开关', '低 Qg', '低 EMI', '双管方案'],
    featuredParts: ['PE30D10']
  },
  {
    name: '电机驱动',
    summary: '覆盖 N+P 组合管和桥式驱动场景,用于小型电机与控制模块。',
    needs: ['N+P 配置', '桥式驱动', '封装兼容', '效率优化'],
    featuredParts: ['PE4616T']
  },
  {
    name: 'PD',
    summary: '面向快充协议、电源路径和同步整流应用,提供 30V-100V 平台选择。',
    needs: ['高频效率', '协议控制', '端口保护', '低热损耗'],
    featuredParts: ['PES048N10G']
  }
];
