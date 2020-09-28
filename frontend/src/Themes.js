const baseTheme = {
  // From https://material-ui.com/customization/breakpoints/
  breakpointXs: 0,
  breakpointSm: 600,
  breakpointMd: 960,
  breakpointLg: 1280,
  breakpointXl: 1920,
  // Margin/Padding in px
  spacingXs: 3,
  spacingSm: 6,
  spacingMd: 12,
  spacingLg: 24,
  spacingXl: 36,
  // Grid
  gridSpacing: 16,
  // Font size in px
  fontSm: 12,
  fontMd: 16,
  fontLg: 24,
  fontXl: 36,
  // Z-indices
  zIndexTop: 100,
  zIndexMiddle: 10,
  zIndexNormal: 1,
  zIndexBottom: -1,
};

const darkThemePrimary = "#37474f";
const darkThemeShadowLightColour = "#58727e";
const darkThemeShadowDarkColour = "#161c20";

export const darkTheme = {
  ...baseTheme,
  fontFamily: "Roboto Mono, monospace",
  primaryBackgroundColour: darkThemePrimary,
  primaryBorderColour: "#333",
  primaryTextColour: "#eeeeee",
  primaryHighlightColour: "#1976d2",
  shadowLightColour: darkThemeShadowLightColour,
  shadowDarkColour: darkThemeShadowDarkColour,
  borderRadius: 5,
  boxShadowSm: `${baseTheme.spacingXs}px ${baseTheme.spacingXs}px ${
    2 * baseTheme.spacingXs
  }px ${darkThemeShadowDarkColour},
        -${baseTheme.spacingXs}px -${baseTheme.spacingXs}px ${2 * baseTheme.spacingXs}px ${darkThemeShadowLightColour}`,
  boxShadowMd: `${baseTheme.spacingSm}px ${baseTheme.spacingSm}px ${
    2 * baseTheme.spacingSm
  }px ${darkThemeShadowDarkColour},
        -${baseTheme.spacingSm}px -${baseTheme.spacingSm}px ${2 * baseTheme.spacingSm}px ${darkThemeShadowLightColour}`,
  boxShadowLg: `${baseTheme.spacingMd}px ${baseTheme.spacingMd}px ${
    2 * baseTheme.spacingMd
  }px ${darkThemeShadowDarkColour},
        -${baseTheme.spacingMd}px -${baseTheme.spacingMd}px ${2 * baseTheme.spacingMd}px ${darkThemeShadowLightColour}`,
  boxShadowSmInset: `inset ${baseTheme.spacingXs}px ${baseTheme.spacingXs}px ${
    2 * baseTheme.spacingXs
  }px ${darkThemeShadowDarkColour},
        -${baseTheme.spacingXs}px -${baseTheme.spacingXs}px ${2 * baseTheme.spacingXs}px ${darkThemeShadowLightColour}`,
  boxShadowMdInset: `inset ${baseTheme.spacingSm}px ${baseTheme.spacingSm}px ${
    2 * baseTheme.spacingSm
  }px ${darkThemeShadowDarkColour},
        -${baseTheme.spacingSm}px -${baseTheme.spacingSm}px ${2 * baseTheme.spacingSm}px ${darkThemeShadowLightColour}`,
  boxShadowLgInset: `inset ${baseTheme.spacingMd}px ${baseTheme.spacingMd}px ${
    2 * baseTheme.spacingMd
  }px ${darkThemeShadowDarkColour},
        -${baseTheme.spacingMd}px -${baseTheme.spacingMd}px ${2 * baseTheme.spacingMd}px ${darkThemeShadowLightColour}`,
};
