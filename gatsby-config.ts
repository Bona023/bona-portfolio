import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Bona Portfolio`,
        siteUrl: `https://www.yourdomain.tld`,
        description: "신입 개발자 김보나의 포트폴리오 사이트 입니다.",
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-postcss",
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [".mdx", ".md"],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 480,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/project-info/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `skill-img`,
                path: `${__dirname}/skill-img/`,
            },
        },
    ],
};

export default config;
