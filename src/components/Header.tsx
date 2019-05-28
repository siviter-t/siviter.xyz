import * as React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

export const TitleQuery = graphql`
    query HeaderComponentQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

export interface TitleData {
    site: {
        siteMetadata: {
            title: string;
        };
    };
}

export interface MetaEntry {
    name: "description" | "keywords";
    content: string;
}

export class HeaderComponent extends React.PureComponent {
    public render() {
        return (
            <StaticQuery
                query={TitleQuery}
                render={(data: TitleData) => {
                    const title = `${data.site.siteMetadata.title}`;
                    return <Helmet title={title} meta={[]} />;
                }}
            />
        );
    }
}

export const Header = HeaderComponent;
