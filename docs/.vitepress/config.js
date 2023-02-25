export default {
  // base: '/zuo-ex',
  title: 'dev-zuo 饮食日常',
  description: '记录菜单食谱、做饭日常，总结沉淀在食物方面的经验、思考。',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '菜单食谱', link: '/' },
      { text: '做饭日常', link: '/daily/23-02-25', activeMatch: '/daily/' },
      { text: 'Github', link: 'https://github.com/zuoxiaobai/food' }
    ],
    sidebar: {
      '/daily/': [
        {
          text: '做饭日常',
          items: [
            { text: '粉蒸鱼、蒸藕、红烧鱼块', link: '/daily/23-02-25' },
            { text: '粉蒸肉、蒸菜(茼蒿、土豆)', link: '/daily/23-02-19' },
            { text: '葱油手撕鸡、鲫鱼豆腐汤', link: '/daily/23-02-18' },
            { text: '红烧黄骨鱼、平菇鸡蛋汤', link: '/daily/22-12-04' },
            { text: '莲藕排骨汤、清炒红菜苔', link: '/daily/22-11-13' },
            { text: '小酥肉、手撕包菜', link: '/daily/22-11-06' },
            { text: '香酥藕夹、西红柿鸡蛋汤', link: '/daily/22-11-05' },
            { text: '凉拌鸡胸肉、家常豆腐(嫩)', link: '/daily/22-10-30' },
            { text: '清蒸鲈鱼、清炒红苋菜', link: '/daily/22-10-29' },
            { text: '土豆烧排骨、清炒空心菜', link: '/daily/22-10-22' },
            { text: '红烧鱼块、黄芽白菜', link: '/daily/22-10-05' },
            { text: '姜葱炒鸡、韭黄炒蛋', link: '/daily/22-10-04' },
            { text: '白灼虾、鱼香/小炒茄子', link: '/daily/22-10-03' },
            { text: '香辣虾尾、蒜蓉上海青', link: '/daily/22-10-02' },
            { text: '红烧鲫鱼、酱圆白菜', link: '/daily/22-10-01' },
            { text: '青椒回锅肉、尖椒豆腐皮', link: '/daily/22-09-25' },
            { text: '香干炒肉、白菜烧豆腐', link: '/daily/22-09-18' },
            { text: '白菜猪肉炖粉条、青椒炒青豆', link: '/daily/22-09-17' },
            { text: '豆豉鲮鱼油麦菜、青椒土豆片', link: '/daily/22-09-12' },
            { text: '大葱炒鸡蛋、大葱炒鸡胸肉', link: '/daily/22-09-11' },
            { text: '葱烧豆腐、青椒肉丝', link: '/daily/22-09-10' },
            { text: '香煎鸡翅、清炒小白菜', link: '/daily/22-09-04-a' },
            { text: '酱炒鸡蛋', link: '/daily/22-09-04' },
            { text: '罗非鱼、清炒黄瓜、番茄炒蛋', link: '/daily/22-09-03' },
            { text: '青椒鸡腿、青椒炒鸡蛋', link: '/daily/22-08-28' },
            { text: '青椒土豆丝、丝瓜炒蛋', link: '/daily/22-08-27' }
          ]
        }
      ],
      '/': [
        {
          text: 'Cook',
          items: [
            { text: '菜单食谱', link: '/' },
            { text: '计划菜单', link: '/pending' },
          ]
        }
      ],
    }
  }
}
