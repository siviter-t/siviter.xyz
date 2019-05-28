import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

import { Link } from "components/part/Link";

const TitleQuery = graphql`
    query TitleContentQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

interface TitleData {
    site: {
        siteMetadata: {
            title: string;
        };
    };
}

export class TitleContentComponent extends React.PureComponent {
    public render() {
        return (
            <StaticQuery
                query={TitleQuery}
                render={(data: TitleData) => <Link to="/">{data.site.siteMetadata.title}</Link>}
            />
        );
    }
}

export const TitleContent = TitleContentComponent;
