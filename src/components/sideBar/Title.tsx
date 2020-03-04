import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "framework/StyledComponents";

import { Media, Breakpoint } from "style/Media";
import { Link } from "components/part/Link";
import { Logo } from "components/sideBar/Logo";

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

    & svg {
        width: 10em;
        max-width: 100%;

        ${Media.max(Breakpoint.S)`
            width: 8em;
        `}

        & .letters {
            fill: ${props => props.theme.text.title};
        }

        & .inner-letters {
            fill: ${props => props.theme.sidebar};
            transition: fill 0.5s;
        }

        & .brackets {
            fill: ${props => props.theme.text.subtle};
            transition: fill 0.5s;
        }

        &:hover .inner-letters,
        &:hover .brackets {
            fill: ${props => props.theme.brandPastel};
        }

        &:active .inner-letters,
        &:active .brackets {
            fill: ${props => props.theme.brand};
        }
    }
`;

const TitleRender: React.FC<TitleData> = props => (
    <TitleContainer>
        <Link to="/">
            <Logo title={props.site.siteMetadata.title} />
        </Link>
    </TitleContainer>
);
