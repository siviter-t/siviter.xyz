import * as React from "react";
import { Helmet } from "react-helmet-async";
import { StaticQuery, graphql } from "gatsby";
import { FontAwesomeStylesheet } from "framework/FontAwesome";
import { Favicon } from "components/Favicon";

export const HeaderQuery = graphql`
    query HeaderQuery {
        site {
            siteMetadata {
                title
                description
                siteName
                url
            }
        }
    }
`;

export interface HeaderData {
    site: {
        siteMetadata: {
            title: string;
            description: string;
            siteName: string;
            url: string;
        };
    };
}

export interface MetadataParameters {
    baseTitle: string;
    slugTitle?: string;
    description: string;
    siteName: string;
    url: string;
    slug?: string;
}

function getMetadata(parameters: MetadataParameters) {
    if (!parameters) throw new Error("Cannot generate metadata without parameters");
    const title = parameters.slugTitle ? `${parameters.baseTitle} - ${parameters.slugTitle}` : parameters.baseTitle;
    const url = parameters.slug ? `${parameters.url}${parameters.slug}` : parameters.url;
    return [
        { name: "title", content: title },
        { name: "description", content: parameters.description },
        {
            property: "og:title",
            content: title
        },
        {
            property: "og:url",
            content: url
        },
        {
            property: "og:description",
            content: parameters.description
        },
        {
            property: "og:locale",
            content: "en"
        },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index, follow" },
        { property: "og:site_name", content: parameters.siteName }
    ];
}

function getTitle(baseTitle: string, slugTitle?: string) {
    if (!slugTitle) return baseTitle;
    return `${slugTitle} - ${baseTitle}`;
}

export interface HeaderProps {
    slugTitle?: string;
    slug?: string;
}

export class HeaderComponent extends React.PureComponent<HeaderProps> {
    public render() {
        return (
            <StaticQuery
                query={HeaderQuery}
                render={(data: HeaderData) => {
                    const baseTitle = data.site.siteMetadata.title;
                    const fullTitle = getTitle(baseTitle, this.props.slugTitle);
                    const metadata = getMetadata({
                        baseTitle: fullTitle,
                        description: data.site.siteMetadata.description,
                        siteName: data.site.siteMetadata.siteName,
                        url: data.site.siteMetadata.url,
                        slug: this.props.slug
                    });
                    return (
                        <>
                            <Helmet title={fullTitle} meta={metadata}>
                                <html lang="en" />
                            </Helmet>
                            <Favicon />
                            <FontAwesomeStylesheet />
                        </>
                    );
                }}
            />
        );
    }
}

export const Header = HeaderComponent;
