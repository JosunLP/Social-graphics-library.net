module.exports = {
    title: 'Social-graphics-library',
    tagline: 'An easy to use JS tool to create Social Media Banners',
    url: 'https://sgl.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.png',
    organizationName: 'JosunLP', // Usually your GitHub org/user name.
    projectName: 'Social-graphics-library', // Usually your repo name.
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
                            label: 'Style Guide',
                            to: 'docs/',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                        label: 'Discord',
                        href: 'https://discord.gg/fraspbc',
                    }],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/JosunLP',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Social-graphics-library, Built with <3 and Docusaurus 2.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/josunlp/Social-graphics-library/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/josunlp/Social-graphics-library/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};