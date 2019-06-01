import styled from "framework/StyledComponents";

export const PostTitle = styled.h1`
    font-size: 2.25em;
`;

export const PostListTitle = styled.h2`
    margin: 0.75em 0 0.25em;

    & a {
        color: ${props => props.theme.text.title};

        &:before {
            width: 100%;
            left: 0;
            bottom: 0.05em;
        }
    }
`;
