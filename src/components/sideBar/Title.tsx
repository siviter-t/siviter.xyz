import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "framework/StyledComponents";

import { Media, Breakpoint } from "style/Media";
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

export const Title: React.FC = () => <StaticQuery query={TitleQuery} render={TitleRender} />;

const TitleContainer = styled.h1`
    margin: 0 0 0.25em;
    text-align: center;

    & a {
        font-size: 2em;
        color: ${props => props.theme.text.title};
        letter-spacing: -0.05em;
        text-decoration: none;
        position: relative;

        &:before {
            content: "";
            width: 90%;
            min-height: 1px;
            height: 1%;
            left: 5%;
            bottom: 0.1em;
            position: absolute;
            transition: background 0.5s ease-out;
        }

        &:hover {
            &:before {
                background: ${props => props.theme.brand};
            }
        }

        ${Media.max(Breakpoint.S)`
            font-size: 1.5em;
        `}
    }
`;

const TitleRender: React.FC<TitleData> = props => (
    <TitleContainer>
        <Link to="/">{props.site.siteMetadata.title}</Link>
    </TitleContainer>
);
