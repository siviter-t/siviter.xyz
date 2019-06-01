import * as React from "react";

import styled from "framework/StyledComponents";
import { Link } from "components/part/Link";

export interface MenuItemProps {
    name: string;
    slug: string;
    isActive: boolean;
}

const MenuItemContainer = styled.span<{ isActive: boolean }>`
    font-size: 1.25em;
    padding: 0 0.5em;
    position: relative;

    & + &:before {
        content: "|";
        position: absolute;
        left: -0.2em;
        color: ${props => props.theme.text.subtle};
    }

    & a {
        color: ${props => props.theme.text.subtle};
        text-decoration: none;
        transition: color 0.5s;
        position: relative;

        &:before {
            content: "";
            width: 90%;
            min-height: 1px;
            height: 1%;
            left: 5%;
            bottom: -0.15em;
            position: absolute;
            background: ${props => (props.isActive ? props.theme.brand : "none")};
        }

        &:hover {
            color: ${props => props.theme.brand};
        }
    }
`;

export class MenuItemComponent extends React.PureComponent<MenuItemProps> {
    public render() {
        return (
            <MenuItemContainer isActive={this.props.isActive}>
                <Link to={this.props.slug}>{this.props.name}</Link>
            </MenuItemContainer>
        );
    }
}

export const MenuItem = MenuItemComponent;
