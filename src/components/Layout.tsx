import * as React from "react";
import { connect } from "react-redux";

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
    ${Media.max(Breakpoint.S)`
        display: block;
    `}
    ${Media.fluidTypography(Breakpoint.XS, Breakpoint.L, 14, 16)}
    ${Media.fluidTypography(Breakpoint.L, Breakpoint.XL, 16, 28)}
`;

const SideBarColumn = styled.div`
    height: 100%;
    display: flex;
    flex-shrink: 0;
    background: ${props => props.theme.sidebar};
    ${Media.max(Breakpoint.S)`
        height: auto;
        display: block;
    `}
`;

const MainColumn = styled.div`
    height: 100%;
    flex-grow: 3;

    & a {
        color: ${props => props.theme.brand};
        text-decoration: none;
    }

    &::before {
        content: "";
        position: absolute;
        width: 0.15em;
        top: 1%;
        height: 98%;
        margin-left: 0.5em;
        background: ${props => props.theme.sidebar};
        ${Media.max(Breakpoint.S)`
            display: none;
        `}
    }
`;

const Main = styled.div`
    color: ${props => props.theme.text.normal};
    padding: 1em 2em;

    & a {
        text-shadow: 0 0 0.025em ${props => props.theme.text.shadow};

        &:hover {
            text-shadow: 0 0 0.05em ${props => props.theme.text.shadow};
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
                    <GridContainer>
                        <SideBarColumn>
                            <SideBar />
                        </SideBarColumn>
                        <MainColumn>
                            <Main>{this.props.children}</Main>
                        </MainColumn>
                    </GridContainer>
                </ThemeProvider>
            </>
        );
    }
}

export const Layout = connect(mapStateToProps)(LayoutComponent);
