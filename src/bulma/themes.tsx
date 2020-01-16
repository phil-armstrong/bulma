// Theme.tsx
import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const hsl = (hue: number, saturation: number, lightness: number) => `hsl(${hue}, ${saturation}%, ${lightness}%)`

export const theme = {
    color: {
        black: hsl(0, 0, 4),
        blackBis: hsl(0, 0, 7),
        blackTer: hsl(0, 0, 14),

        greyDarker: hsl(0, 0, 21),
        greyDark: hsl(0, 0, 29),
        grey: hsl(0, 0, 48),
        greyLight: hsl(0, 0, 71),
        greyLighter: hsl(0, 0, 86),
        greyLightest: hsl(0, 0, 93),

        whiteTer: hsl(0, 0, 96),
        whiteBis: hsl(0, 0, 98),
        white: hsl(0, 0, 100),

        orange: hsl(14, 100, 53),
        yellow: hsl(48, 100, 67),
        green: hsl(141, 53, 53),
        turquoise: hsl(171, 100, 41),
        cyan: hsl(204, 71, 53),
        blue: hsl(217, 71, 53),
        purple: hsl(271, 100, 71),
        red: hsl(348, 86, 61),
    },
    typeography: {
        familySansSerif: 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
        familyMonospace: 'monospace',
        renderMode: 'optimizeLegibility',

        size1: '3rem',
        size2: '2.5rem',
        size3: '2rem',
        size4: '1.5rem',
        size5: '1.25rem',
        size6: '1rem',
        size7: '0.75rem',

        weightLight: 300,
        weightNormal: 400,
        weightMedium: 500,
        weightSemibold: 600,
        weightBold: 700,
    },
    spacing: {
        blockSpacing: '1.5rem',
    },
    responsiveness: {
        gap: '32px',
        tablet: '769px',
        desktop: '1024px',
        widescreen: '1216px',
        widescreenEnabled: true,
        fullhd: '1408px',
        fullhdEnabled: true,
    },
    miscellaneous: {
        easing: 'ease-out',
        radiusSmall: '2px',
        radius: '4px',
        radiusLarge: '6px',
        radiusRounded: '290486px',
        speed: '86ms',
    },
    flags: {
        variableColumns: true,
    },
};

export const derivedVariables = {
    color: {
        primary: theme.color.turquoise,
        info: theme.color.cyan,
        success: theme.color.green,
        warning: theme.color.yellow,
        danger: theme.color.red,
        light: theme.color.whiteTer,
        dark: theme.color.greyDarker,
    }
}

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
