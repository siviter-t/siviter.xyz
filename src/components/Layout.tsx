import * as React from "react";
import { connect } from "react-redux";
import { Location } from "@reach/router";

import { AppState } from "state/AppState";
import styled, { ThemeProvider } from "framework/StyledComponents";
import { Media, Breakpoint } from "style/Media";
import { SideBar } from "components/SideBar";

const GridContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${props => props.theme.background};
    transition: all 0.3s ease-in-out;
    display: flex;
    ${Media.max(Breakpoint.M)`
        flex-flow: column;
        overflow-y: auto;
    `}
    ${Media.fluidTypography(Breakpoint.XS, Breakpoint.L, 14, 16)}
    ${Media.fluidTypography(Breakpoint.L, Breakpoint.XL, 16, 28)}
`;

const SideBarColumn = styled.div<{ isExpanded: boolean }>`
    width: ${props => (props.isExpanded ? "100%" : "auto")};
    height: 100%;
    display: flex;
    flex-shrink: 0;
    background: ${props => props.theme.sidebar};
    box-shadow: -5px -5px 5px 2px ${props => props.theme.brand};
    ${props =>
        !props.isExpanded &&
        Media.max(Breakpoint.M)`
        height: auto;
        display: block;
    `}
    transition: width 0.3s ease-in-out;
`;

const MainColumn = styled.div<{ isShown: boolean }>`
    height: 100%;
    flex-grow: 3;

    & a {
        color: ${props => props.theme.brand};
        text-decoration: none;
    }

    ${Media.min(Breakpoint.M)`
        overflow-y: auto;
    `}
`;

const Main = styled.div`
    color: ${props => props.theme.text.normal};
    padding: 1em 5em 3em;

    ${Media.max(Breakpoint.S)`
        padding: 1em 3em 3em;
    `}

    ${Media.max(Breakpoint.XS)`
        padding: 1em 2em 3em;
    `}

    & a {
        color: ${props => props.theme.brand};
        font-weight: 700;
        text-decoration: none;
        position: relative;

        &:before {
            content: "";
            width: 90%;
            min-height: 1px;
            height: 1%;
            left: 5%;
            bottom: -0.1em;
            position: absolute;
            transition: background 0.5s ease-out;
        }

        &:hover {
            &:before {
                background: ${props => props.theme.brand};
            }
        }
    }

    & table {
        width: auto;
        max-width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding: 0;
        thead tr {
            background: ${props => props.theme.sidebar};
        }
        tr {
            border-top: 1px solid ${props => props.theme.sidebar};
            margin: 0;
            padding: 0;
            &:nth-child(2n) {
                background: ${props => props.theme.sidebar};
            }
            th {
                font-weight: bold;
                border: 1px solid ${props => props.theme.sidebar};
                margin: 0;
                padding: 4px 12px;
            }
            td {
                border: 1px solid ${props => props.theme.sidebar};
                margin: 0;
                padding: 4px 12px;
            }
            th:first-child,
            td:first-child {
                margin-top: 0;
            }
            th:last-child,
            td:last-child {
                margin-bottom: 0;
            }
        }
    }
`;

const mapStateToProps = (state: AppState) => ({
    theme: state.layout.theme
});

type LayoutProps = ReturnType<typeof mapStateToProps>;

class LayoutComponent extends React.PureComponent<LayoutProps> {
    public render() {
        return (
            <>
                <ThemeProvider theme={this.props.theme}>
                    <Location>
                        {({ location }) => {
                            const isHomePage = location.pathname === "/";
                            return (
                                <GridContainer>
                                    <SideBarColumn isExpanded={isHomePage}>
                                        <SideBar />
                                    </SideBarColumn>
                                    <MainColumn isShown={!isHomePage}>{this.renderMain(isHomePage)}</MainColumn>
                                </GridContainer>
                            );
                        }}
                    </Location>
                </ThemeProvider>
            </>
        );
    }

    public renderMain(isHomePage: boolean) {
        return isHomePage ? this.props.children : <Main>{this.props.children}</Main>;
    }
}

export const Layout = connect(mapStateToProps)(LayoutComponent);
