module.exports = {
    siteMetadata: {
        title: `Taylor Siviter`,
        subtitle: `Software Engineer, Automator, Tinkerer`,
        description:
            "Hello there. Infrequent writer of articles and lover of anything remotely technological.",
        siteName: `siviter.xyz`,
        url: `https://siviter.xyz`,
        email: `taylor@siviter.xyz`,
        linkedInUsername: `taylor-siviter`,
        gitHubUsername: `siviter-t`,
        codePenUsername: `siviter-t`,
        menuList: [
            {
                name: "Home",
                slug: "/"
            },
            {
                name: "Blog",
                slug: "/blog"
            }
        ]
    },
    plugins: [
        `gatsby-plugin-resolve-src`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/framework/typography`
            }
        },
        `gatsby-plugin-styled-components`,
        `@rhysforyou/gatsby-plugin-react-helmet-async`,
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/App.tsx`)
            }
        },
        `gatsby-plugin-netlify-cms`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: "blog"
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-mathjax`, `gatsby-remark-prismjs`]
            }
        }
    ]
};
