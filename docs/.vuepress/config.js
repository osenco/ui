module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Component Library 🥂',
            description: 'Documentation site for the Vue component library plugin'
        }
    },

    themeConfig: {
        base: '/ui/',
        repoLabel: 'Contribute!',
        repo: 'https://github.com/osenco/ui.git',
        docsDir: 'docs',
        editLinks: true,
        docsBranch: 'dev',
        editLinkText: 'Help us improve this page!',
        search: false,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                lastUpdated: 'Last Updated',
                // service worker is configured but will only register in production
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                },
                nav: [
                    { text: 'Getting Started', link: '/guide' },
                    { text: 'Components', link: '/components/' },
                    // external link to git repo...again
                    { text: 'GitHub', link: '' }
                ],
                sidebar: {
                    '/components/': [
                        {
                            title: 'Components',
                            collapsable: false,
                            children: ['container']
                        }
                    ]
                }
            }
        }
    }
}