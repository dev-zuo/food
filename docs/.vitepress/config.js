export default {
  base: '/zuo-ex',
  title: '左小白的经验积累',
  description: '生活就像一个循环，时而勤奋，时而懒惰，反反复复。人一般比较健忘，在一个地方跌倒一次，后面大概率还会犯同一个错误，为了更好的管理时间、精力，避免重复犯同一个错误。这里记录每天的经验总结，沉淀、积累。',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '思考', link: '/think/' },
      { text: '美食', link: '/food/' },
      { text: 'Github', link: 'https://github.com/zuoxiaobai/zuo-ex' }
    ],
    sidebar: {
      '/think/': [
        {
          text: '思考',
          items: [
            // This shows `/guide/index.md` page.
            { text: '心态', link: '/think/' }, // /guide/index.md
            { text: '技能', link: '/think/skill' }, // /guide/one.md
            // { text: 'Two', link: '/guide/two' } // /guide/two.md
          ]
        }
      ],
      '/food/': [
        {
          text: '美食',
          items: [
            // This shows `/guide/index.md` page.
            { text: '菜单食谱', link: '/food/' }, 
            { text: '做饭日常', link: '/food/daily' }, 
            { text: '计划菜单', link: '/food/pending' }, 
          ]
        }
      ]
    }
  }
}
