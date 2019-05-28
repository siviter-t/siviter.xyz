import * as React from "react";
import styled from "framework/StyledComponents";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

import { Icon } from "components/part/Icon";

const IconButtonStyle = styled.a`
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    display: inline-block;
    margin: 0 0.2em;
    padding: 0.1em 0.2em;
    border-radius: 0.6em;
    color: ${props => props.theme.text.title};
    border: 0.03em solid ${props => props.theme.text.title};
    box-shadow: 0 0 0.1em ${props => props.theme.text.shadow};
    transition: color 0.5s, border 0.5s, border-radius 0.25s;

    &:hover {
        border-radius: 0.55em;
        color: ${props => props.theme.brand};
        border: 0.03em solid ${props => props.theme.brand};
        box-shadow: 0 0 0.05em ${props => props.theme.text.shadow};
    }
`;

export interface IconButtonProps {
    fontAwesomeIcon?: IconDefinition;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export class IconButtonComponent extends React.PureComponent<IconButtonProps> {
    public render() {
        if (this.props.fontAwesomeIcon) {
            return (
                <IconButtonStyle href={this.props.href || "#"} onClick={this.props.onClick}>
                    <Icon fontAwesomeIcon={this.props.fontAwesomeIcon} />
                </IconButtonStyle>
            );
        }

        return null;
    }
}

export const IconButton = IconButtonComponent;
