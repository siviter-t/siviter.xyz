import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Location } from "@reach/router";

import styled from "framework/StyledComponents";
import { MenuItem } from "components/sideBar/MenuItem";

const MenuLineQuery = graphql`
    query MenuLineQuery {
        site {
            siteMetadata {
                menuList {
                    name
                    slug
                }
            }
        }
    }
`;

interface MenuItemData {
    name: string;
    slug: string;
}

interface MenuListData {
    site: {
        siteMetadata: {
            menuList: MenuItemData[];
        };
    };
}

const MenuContainer = styled.div`
    margin: 0 0 0.5em;
    text-align: center;
`;

export class MenuListComponent extends React.PureComponent {
    public render() {
        return (
            <MenuContainer>
                <Location>
                    {({ location }) => (
                        <StaticQuery
                            query={MenuLineQuery}
                            render={(data: MenuListData) =>
                                data.site.siteMetadata.menuList.map((menuItem, index) =>
                                    this.renderItem(menuItem, index, location.pathname)
                                )
                            }
                        />
                    )}
                </Location>
            </MenuContainer>
        );
    }

    public renderItem(menuItem: MenuItemData, index: number, currentPathName: string) {
        const isActive = currentPathName === menuItem.slug;
        return <MenuItem key={index} name={menuItem.name} slug={menuItem.slug} isActive={isActive} />;
    }
}

export const MenuList = MenuListComponent;
