import styled from "framework/StyledComponents";

export const PostListItem = styled.div`
    margin: 0 0 1.5em;
    position: relative;

    &:not(:last-child) {
        border-bottom: 0.2em solid ${props => props.theme.sidebar};
    }

    &:before {
        content: "";
        width: 0.05em;
        min-width: 1px;
        height: 100%;
        left: -1em;
        position: absolute;
        transition: background 0.5s ease-out;
    }

    &:hover {
        &:before {
            background: ${props => props.theme.brand};
        }
    }
`;
