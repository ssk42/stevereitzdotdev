const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Stephen Thurgood Reitz',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: "/stevereitzdotdev/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'ssk42/stevereitzdotdev',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    // navbar: false,
    nav: [
      {
        text: 'Blogs',
        link: '/Blogs/'
      },
      {
        text: 'Resume',
        link: '/Resume/'
      },
      {
        text: 'Portfolio',
        link: '/Portfolio/'
      },
    ],
    sidebar: {
      '/Resume/': [
        {
          title: 'Resume',
          collapsable: false,
          children: [
            'Work-Experience',
            'Volunteer-Experience',
            'Technical-Skills',
          ]
        }
      ],
      '/Blogs/': [
        {
          title: 'Blogs',
          collapsable: false,
          children: [
            '',
            'Example-Blog'
          ]
        }
      ],
      '/Portfolio/': [
        {
          title: 'Portfolio',
          collapsable: false,
          children: [
            'Salesforce-Projects',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
