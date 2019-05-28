import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { IconButton } from "components/part/IconButton";

const EmailQuery = graphql`
    query EmailButtonComponentQuery {
        site {
            siteMetadata {
                email
            }
        }
    }
`;

interface EmailData {
    site: {
        siteMetadata: {
            email: string;
        };
    };
}

export class EmailButtonComponent extends React.PureComponent {
    public render() {
        return (
            <StaticQuery
                query={EmailQuery}
                render={(data: EmailData) => (
                    <IconButton href={`mailto:${data.site.siteMetadata.email}`} fontAwesomeIcon={faEnvelope} />
                )}
            />
        );
    }
}

export const EmailButton = EmailButtonComponent;
