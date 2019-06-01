import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { AppState } from "state/AppState";
import { SetThemeAction } from "state/components/LayoutState";
import { Theme } from "style/Theme";
import { Light } from "style/theme/Light";
import { Dark } from "style/theme/Dark";
import { IconButton } from "components/part/IconButton";

function isNightTime() {
    const hours = new Date().getHours();
    return hours >= 19 || hours < 6;
}

const mapStateToProps = (state: AppState) => ({
    theme: state.layout.theme
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setTheme: (theme: Theme) => dispatch(SetThemeAction(theme))
});

type ThemeSwapProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export interface ThemeSwapState {
    isDark: boolean;
}

export class ThemeSwapButtonComponent extends React.PureComponent<ThemeSwapProps, ThemeSwapState> {
    constructor(props: ThemeSwapProps) {
        super(props);
        this.state = {
            isDark: this.props.theme === Dark
        };
    }

    public componentDidMount() {
        if (isNightTime()) {
            this.props.setTheme(Dark);
            this.setState({ isDark: true });
        }
    }

    public render() {
        return <IconButton onClick={this.onClick} fontAwesomeIcon={this.state.isDark ? faSun : faMoon} />;
    }

    private onClick = () => {
        this.state.isDark ? this.props.setTheme(Light) : this.props.setTheme(Dark);
        this.setState({ isDark: !this.state.isDark });
    };
}

export const ThemeSwapButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(ThemeSwapButtonComponent);
