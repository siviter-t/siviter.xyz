import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import { Theme } from "style/Theme";

const { default: styled, css, keyframes, ThemeProvider } = styledComponents as ThemedStyledComponentsModule<Theme>;

export { styled as default, css, keyframes, ThemeProvider };
