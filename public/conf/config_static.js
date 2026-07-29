window.config = {
  // 网站标题
  siteName: 'Subconverter Web',
  // 后端 API 列表
  apiBackends: [
    {
      name: 'yanbolan',
      url: 'https://subweb.yuris.site',
    },
    {
      name: '本地服务',
      url: 'http://127.0.0.1:25500',
    },
    {
      name: '官方服务',
      url: 'https://sub.xeton.dev',
    },
  ],
  // 是否启用短链接功能 (true: 启用, false: 关闭)
  enableShortUrl: true,
  // 短域名服务地址
  shortUrl: 'https://s.ops.ci',
  // 首页菜单
  menuItem: [
    {
      title: '首页',
      link: '/',
      target: '',
    },
    {
      title: 'GitHub',
      link: 'https://github.com/Aethersailor/subweb',
      target: '_blank',
    },
  ],
  // 远程配置地址,可以自行按照格式添加。
  remoteConfigOptions: [
    {
      value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini',
      text: 'ACL4SSR Online',
    },
    {
      value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini',
      text: 'ACL4SSR Online Full',
    },
    {
      value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini',
      text: 'ACL4SSR Online Full AdblockPlus',
    },
    {
      value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini',
      text: 'ACL4SSR Online Full Netflix',
    },
    {
      value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini',
      text: 'ACL4SSR Online Full MultiMode',
    },
    {
      value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_MultiCountry.ini',
      text: 'ACL4SSR Online MultiCountry',
    },
  {
    value: 'https://raw.githubusercontent.com/9bingyin/routes-info/refs/heads/main/profile_min.ini',
    text: '极简配置',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini',
    text: 'ACL4 通用',
  },
  {
    value: 'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini',
    text: 'No-Urltest',
  },
  {
    value: 'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini',
    text: 'Urltest',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini',
    text: 'ACL_默认版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini',
    text: 'ACL_无测速版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini',
    text: 'ACL_去广告版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_MultiCountry.ini',
    text: 'ACL_多国家版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini',
    text: 'ACL_无Reject版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini',
    text: 'ACL_无测速精简版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini',
    text: 'ACL_全分组版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini',
    text: 'ACL_全分组谷歌版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini',
    text: 'ACL_全分组多模式版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini',
    text: 'ACL_全分组奈飞版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini',
    text: 'ACL_精简版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini',
    text: 'ACL_去广告精简版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini',
    text: 'ACL_Fallback精简版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini',
    text: 'ACL_多国家精简版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini',
    text: 'ACL_多模式精简版',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini',
    text: '默认',
  },
  {
    value: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini',
    text: '默认（自动测速）',
  },
  {
    value: 'https://raw.githubusercontent.com/youshandefeiyang/webcdn/main/SONY.ini',
    text: '默认（索尼电视专用）',
  },
  {
    value: 'https://gist.githubusercontent.com/tindy2013/1fa08640a9088ac8652dbd40c5d2715b/raw/default_with_clash_adg.yml',
    text: '默认（附带用于 Clash 的 AdGuard DNS）',
  },
  {
    value: 'https://raw.githubusercontent.com/WC-Dream/ACL4SSR/WD/Clash/config/ACL4SSR_Online_Full_Dream.ini',
    text: 'ACL_全分组 Dream修改版',
  },
  {
    value: 'https://raw.githubusercontent.com/WC-Dream/ACL4SSR/WD/Clash/config/ACL4SSR_Mini_Dream.ini',
    text: 'ACL_精简分组 Dream修改版',
  },
  {
    value: 'https://raw.githubusercontent.com/justdoiting/ClashRule/main/GeneralClashRule.ini',
    text: 'emby-TikTok-流媒体分组-去广告加强版',
  },
  {
    value: 'https://raw.githubusercontent.com/cutethotw/ClashRule/main/GeneralClashRule.ini',
    text: '流媒体通用分组',
  },
  {
    value: 'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini',
    text: 'NeteaseUnblock(仅规则，No-Urltest)',
  },
  {
    value: 'https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini',
    text: 'Basic(仅GEOIP CN + Final)',
  },
  ],
};
