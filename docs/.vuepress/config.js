module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Read the docs',
      description: 'Go beyond static'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '阅读文档',
      description: '超越静态'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'docs',
            link: '/docs/'
          }
        ],
        sidebar: [
          '/docs/',
          genSidebarConfig('', 'API')
        ]
      },
      '/zh/': {
        label: 'Chinese',
        selectText: 'languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'docs',
            link: '/zh/docs/'
          }
        ],
        sidebar: [
          '/zh/docs/',
          genSidebarConfig('/zh', 'API')
          
        ]
      }
    }
  }
}

function genSidebarConfig (lang, title) {
  return {
    title: `${title}`, 
    children: [
      `${lang}/docs/api/page-one`,
      `${lang}/docs/api/page-two`,
    ] 
  }
}