import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 必须保持为 '/Uni/' 以匹配你的 GitHub 仓库名
  base: '/Uni/', 
  
  // 设置为中文，会让“最后更新时间”等插件自动转为中文
  lang: 'zh-CN', 
  title: "Uni 攻略站",
  description: "游戏攻略与技术分享",

  themeConfig: {
    // 导航栏汉化
    nav: [
      { text: '首页', link: '/' },
      { text: '开发笔记', link: '/markdown-examples' }
    ],

    // 侧边栏汉化：你可以根据自己的项目计划修改这里的文字
    sidebar: [
      {
        text: '游戏攻略',
        items: [
          { text: '蛋仔派对进阶', link: '/markdown-examples' }, // 对应你感兴趣的蛋仔派对
          { text: 'Crazy Farm 提醒工具', link: '/api-examples' } // 对应你的 Rust 项目计划
        ]
      },
      {
        text: '技术研究',
        items: [
          { text: 'Solana 钱包监控', link: '/solana-guide' }, // 对应你的 Solana 兴趣
          { text: 'Rust 开发环境', link: '/rust-notes' }    // 对应你的 Rust 学习笔记
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
