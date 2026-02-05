import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 必须保持为 '/Uni/' 以匹配你的 GitHub 仓库名
  base: '/', 
  
  // 设置为中文，会让“最后更新时间”等插件自动转为中文
  lang: 'zh-CN', 
  title: "Uni",
  description: "한 번 둔 수는 후회하지 않고, 자신의 행동에 책임을 진다.",

  themeConfig: {
    // 导航栏汉化
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'こうりゃくぼん', link: '/markdown-examples' }
    ],

    // 侧边栏汉化：你可以根据自己的项目计划修改这里的文字
    sidebar: [
      {
        text: 'Delta Force',
        items: [
          { text: '改枪码', link: '/markdown-examples' }, 
          { text: '点位技巧', link: '/api-examples' } 
        ]
      },
      {
        text: 'League of Legends',
        items: [
          { text: '海克斯乱斗', link: '/solana-guide' }, 
          { text: '羁绊选择', link: '/rust-notes' }    
        ]
      }
    ],

    // 搜索框及底部翻页汉化
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面大纲'
    },
    lastUpdated: {
      text: '最后更新于'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shannoncheu/Uni' }
    ]
  }
})
