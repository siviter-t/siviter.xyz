import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

import { IconButton } from "components/part/IconButton";

const CodePenQuery = graphql`
    query CodePenButtonComponentQuery {
        site {
            siteMetadata {
                codePenUsername
            }
        }
    }
`;

interface CodePenData {
    site: {
        siteMetadata: {
            codePenUsername: string;
        };
    };
}

export class CodePenButtonComponent extends React.PureComponent {
    public render() {
        return (
            <StaticQuery
                query={CodePenQuery}
                render={(data: CodePenData) => (
                    <IconButton
                        href={`https://codepen.io/${data.site.siteMetadata.codePenUsername}`}
                        fontAwesomeIcon={faCodepen}
                    />
                )}
            />
        );
    }
}

export const CodePenButton = CodePenButtonComponent;
