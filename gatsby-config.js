module.exports = {
    siteMetadata: {
        title: `Taylor Siviter`,
        subtitle: `Developer, Programmer, Analyst, Techy`,
        domainName: `siviter.xyz`,
        email: `taylor@siviter.xyz`,
        linkedInUsername: `taylor-siviter`,
        gitHubUsername: `siviter-t`,
        codePenUsername: `siviter-t`
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
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/App.tsx`)
            }
        }
    ]
}
