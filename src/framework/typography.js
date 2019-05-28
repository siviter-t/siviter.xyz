import Typography from "typography";

const typography = new Typography({
    title: "siviter.xyz",
    baseFontSize: "14px",
    baseLineHeight: 1.45,
    scaleRatio: 2,
    googleFonts: [
        { name: "Titillium Web", styles: ["700"] },
        { name: "Lato", styles: ["400", "700"] }
    ],
    headerFontFamily: ["Titillium Web", "sans-serif"],
    headerWeight: 700,
    bodyFontFamily: ["Lato", "sans-serif"],
    bodyWeight: 400,
    boldWeight: 700,
    blockMarginBottom: 1,
    includeNormalize: true,
    overrideStyles: () => {
        return {
            "b,strong": {
                fontFamily: "Titillium Web, sans-serif"                
            },
            "p": {
                marginBottom: "0.25em"
            },
            "h1,h2,h3,h4,h5,h6": {
                marginTop: "1em",
                marginBottom: "0.5em"
            },
            h1: {
                fontSize: "2em"
            },
            h2: {
                fontSize: "1.6em"
            },
            h3: {
                fontSize: "1.4em"
            },
            h4: {
                fontSize: "1.2em"
            },
            h5: {
                fontSize: "1.1em"
            },
            h6: {
                fontSize: "1em"
            }
        };
    }
});

export default typography;
