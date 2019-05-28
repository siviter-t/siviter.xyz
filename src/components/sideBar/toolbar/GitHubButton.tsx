import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { IconButton } from "components/part/IconButton";

const GitHubQuery = graphql`
    query GitHubButtonComponentQuery {
        site {
            siteMetadata {
                gitHubUsername
            }
        }
    }
`;

interface GitHubData {
    site: {
        siteMetadata: {
            gitHubUsername: string;
        };
    };
}

export class GitHubButtonComponent extends React.PureComponent {
    public render() {
        return (
            <StaticQuery
                query={GitHubQuery}
                render={(data: GitHubData) => (
                    <IconButton
                        href={`https://github.com/${data.site.siteMetadata.gitHubUsername}`}
                        fontAwesomeIcon={faGithub}
                    />
                )}
            />
        );
    }
}

export const GitHubButton = GitHubButtonComponent;
