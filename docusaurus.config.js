module.exports = {
    title: 'Social-graphics-library',
    tagline: 'An easy to use JS tool to create Social Media Banners',
    url: 'https://JosunLP.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.png',
    organizationName: 'JosunLP', // Usually your GitHub org/user name.
    projectName: 'Social-graphics-library', // Usually your repo name.
    // scripts: ['./static/js/example.js'],
    themeConfig: {
        navbar: {
            title: 'Social-graphics-library',
            logo: {
                alt: 'Social-graphics-library Logo',
                src: 'img/logo.svg',
            },
            items: [{
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/josunlp',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                            label: 'Basic generation',
                            to: 'docs/',
                        },
                        {
                            label: 'Creating new style clases',
                            to: 'docs/new_style_classes/',
                        },
                        {
                            label: 'Multi calls',
                            to: 'docs/multi_calls/',
                        },
                        {
                            label: 'Inject Template (Experimental Feature)',
                            to: 'docs/inject_template/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Discord',
                            href: 'https://discord.gg/fraspbc',
                        },
                        {
                            label: 'FearNixx Gaming',
                            href: 'https://fearnixx.de/',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/josunlp/Social-graphics-library/',
                        },
                        {
                            label: 'NPM',
                            href: 'https://www.npmjs.com/package/social-graphics-library/',
                        },
                        {
                            label: 'Impressum',
                            href: 'https://josunlp.de/impressum/',
                        }
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Social-graphics-library, build with ❤ and Docusaurus 2.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/josunlp/Social-graphics-library/edit/master/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/josunlp/Social-graphics-library/edit/master/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};