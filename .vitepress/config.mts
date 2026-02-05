import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 必须保持为 '/' 以匹配你的自定义域名 msu.im
  base: '/', 
  
  // 设置为中文，会让“最后更新时间”等插件自动转为中文
  lang: 'zh-CN', 
  title: "초보 마을 용사의 신화 만들기",
  description: "한 번 둔 수는 후회하지 않고, 자신의 행동에 책임을 진다.",

  // 新增：这里负责浏览器标签页的图标
  head: [
    // 确保你的 40*40 图标文件已放入 public 文件夹并命名为 logo.png
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

  themeConfig: {
    // 新增：导航栏左侧显示的图标
    logo: '/logo.png',

    // 导航栏汉化
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/markdown-examples' }
    ],

    // 侧边栏汉化
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