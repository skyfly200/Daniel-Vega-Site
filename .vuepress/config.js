module.exports = {
    title: "Daniel Vega",
    locales: {
        '/': {
            lang: 'en-EN',
            title: 'Daniel Vega',
            description: "Daniel Vega's Personal Website"
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    host: 'localhost',
    themeConfig: {
        search: false,
        docsDir: 'docs',
        nav: [{
                text: 'Start',
                link: '/docs/',
            },
            {
                text: 'Test',
                link: '/pages/test.html',
            },
            {
                text: 'NetlifyCMS Config Help',
                link: '/docs/netlifycms-configuration.html',
            }
        ],
        serviceWorker: {
          updatePopup: true
        }
    }
}
