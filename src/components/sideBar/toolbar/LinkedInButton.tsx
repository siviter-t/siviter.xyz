import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { IconButton } from "components/part/IconButton";

const LinkedInQuery = graphql`
    query LinkedInButtonComponentQuery {
        site {
            siteMetadata {
                linkedInUsername
            }
        }
    }
`;

interface LinkedInData {
    site: {
        siteMetadata: {
            linkedInUsername: string;
        };
    };
}

export class LinkedInButtonComponent extends React.PureComponent {
    public render() {
        return (
            <StaticQuery
                query={LinkedInQuery}
                render={(data: LinkedInData) => (
                    <IconButton
                        href={`https://www.linkedin.com/in/${data.site.siteMetadata.linkedInUsername}`}
                        fontAwesomeIcon={faLinkedin}
                    />
                )}
            />
        );
    }
}

export const LinkedInButton = LinkedInButtonComponent;
