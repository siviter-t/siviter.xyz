import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

const SubTitleQuery = graphql`
    query SubTitleContentQuery {
        site {
            siteMetadata {
                subtitle
            }
        }
    }
`;

interface SubTitleData {
    site: {
        siteMetadata: {
            subtitle: string;
        };
    };
}

export class SubTitleContentComponent extends React.PureComponent {
    public render() {
        return (
            <StaticQuery
                query={SubTitleQuery}
                render={(data: SubTitleData) => <>{data.site.siteMetadata.subtitle}</>}
            />
        );
    }
}

export const SubTitleContent = SubTitleContentComponent;
