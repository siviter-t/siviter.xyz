import * as React from "react";

import styled from "framework/StyledComponents";
import { Media, Breakpoint } from "style/Media";

import { TitleContent } from "components/sideBar/TitleContent";
import { SubTitleContent } from "components/sideBar/SubTitleContent";
import { MenuList } from "components/sideBar/MenuList";
import { EmailButton } from "components/sideBar/toolbar/EmailButton";
import { LinkedInButton } from "components/sideBar/toolbar/LinkedInButton";
import { GitHubButton } from "components/sideBar/toolbar/GitHubButton";
import { CodePenButton } from "components/sideBar/toolbar/CodePenButton";
import { ThemeSwapButton } from "components/sideBar/toolbar/ThemeSwapButton";

const SideBarContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
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

const SubTitle = styled.div`
    font-size: 1.25em;
    margin: 0 0 0.5em;
    color: ${props => props.theme.text.subtitle};
    text-align: center;
    ${Media.max(Breakpoint.S)`
        font-size: 1em;
    `}
`;

const Toolbar = styled.div`
    font-size: 1.5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

interface Props {
    isHomePage: boolean;
}

export class SideBarComponent extends React.PureComponent<Props> {
    public render() {
        return (
            <SideBarContainer>
                <Title>
                    <TitleContent />
                </Title>
                <SubTitle>
                    <SubTitleContent />
                </SubTitle>
                <MenuList isHomePage={this.props.isHomePage} />
                <Toolbar>
                    <EmailButton />
                    <LinkedInButton />
                    <GitHubButton />
                    <CodePenButton />
                    <ThemeSwapButton />
                </Toolbar>
            </SideBarContainer>
        );
    }
}

export const SideBar = SideBarComponent;
