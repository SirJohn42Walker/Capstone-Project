import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        height: 100%;
        font-family: Merienda, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    * {
        box-sizing: border-box;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }       

    #root, #__next {
        isolation: isolate;
    }

// Global Colors
    :root {
        --color1: #fcffeb; // Ivory
        --color2: #f7f3e3; // Cosmic Latte
        --color3: #fae3c6; // Bisque
        --color4: #93827f; // Cinerous
        --color5: #cb793a; // Ochre
        --color6: #f18805; // Tangerine
        --color7: #cc4a1d; // Rust Orange
        --color8: #9a031e; // Ruby Red
        --color9: #add9f4; // Uranium Blue
        --color10: #7180ac; // Glaucous
        --color11: #66999b; // Cadet Blue
        --color12: #3c7a89; // Teal Blue
        --color13: #134074; // Indigo Dye
        --color14: #0b2545; // Oxford Blue
        --color15: #8d6b94; // French Lilac
        --color16: #63264a; // Old Mauve
        --color17: #3d0b37; // Dark Purple
        --color18: #38040e; // Dark Sienna
        // I have no intention of using all 18 colors, but I want them to be ready at hand for trying stuff out.
    }

    @font-face {
        font-family: "Merienda";
        src: url("/fonts/Merienda-VariableFont_wght.ttf") format("truetype");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "HappyMonks";
        src: url("/fonts/HappyMonksMedievalLookingScript.ttf") format("truetype");
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: "KingCastle";
        src: url("/fonts/King Castle Free Version.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "Sharp";
        src: url("/fonts/sharp-serif.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "Christmas";
        src: url("/fonts/Best Christmas - Personal Use.otf") format("truetype");
        font-weight: 400;
        font-style: normal;
    }
`;

export default GlobalStyles;
