import { SimpleInterpolation } from "styled-components";
import { css } from "framework/StyledComponents";

export enum Breakpoint {
    XL = 3840,
    L = 1920,
    M = 1280,
    S = 839,
    XS = 480
}

export const Media = {
    max: (breakpoint: Breakpoint) => {
        return (templateStrings: TemplateStringsArray, ...args: SimpleInterpolation[]) => {
            return css`
                @media (max-width: ${breakpoint}px) {
                    ${css(templateStrings, ...args)}
                }
            `;
        };
    },
    min: (breakpoint: Breakpoint) => {
        return (templateStrings: TemplateStringsArray, ...args: SimpleInterpolation[]) => {
            return css`
                @media (min-width: ${breakpoint}px) {
                    ${css(templateStrings, ...args)}
                }
            `;
        };
    },
    fluidTypography: (
        minWidth: number | Breakpoint,
        maxWidth: number | Breakpoint,
        minFontSize: number,
        maxFontSize: number
    ) => {
        return css`
            @media screen and (min-width: ${minWidth}px) {
                font-size: calc(
                    ${minFontSize}px + (${maxFontSize} - ${minFontSize}) *
                        ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth}))
                );
            }
        `;
    }
};
