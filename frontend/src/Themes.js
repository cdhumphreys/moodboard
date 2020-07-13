const baseTheme = {
  breakpointSm: 320,
  breakpointMd: 768,
  breakpointLg: 1200,
  breakpointXl: 1920,
  // Margin/Padding in px
  spacingSm: 6,
  spacingMd: 12,
  spacingLg: 24,
  spacingXl: 36,
  // Font size in px
  fontSm: 12,
  fontMd: 16,
  fontLg: 24,
  fontXl: 36,
};

const darkThemePrimary = "#37474f";
const darkThemeShadowLightColour = "#58727e";
const darkThemeShadowDarkColour = "#161c20";

export const darkTheme = {
  ...baseTheme,
  fontFamily: "Roboto Mono, monospace",
  primaryBackgroundColour: darkThemePrimary,
  primaryTextColour: "#eeeeee",
  primaryHighlightColour: "#1976d2",
  shadowLightColour: darkThemeShadowLightColour,
  shadowDarkColour: darkThemeShadowDarkColour,
  boxShadowSm: `${baseTheme.spacingSm}px ${baseTheme.spacingSm}px ${
    2 * baseTheme.spacingSm
  }px ${darkThemeShadowDarkColour},
        -${baseTheme.spacingSm}px -${baseTheme.spacingSm}px ${
    2 * baseTheme.spacingSm
  }px ${darkThemeShadowLightColour}`,
  boxShadowMd: `${baseTheme.spacingMd}px ${baseTheme.spacingMd}px ${
    2 * baseTheme.spacingMd
  }px ${darkThemeShadowDarkColour},
        -${baseTheme.spacingMd}px -${baseTheme.spacingMd}px ${
    2 * baseTheme.spacingMd
  }px ${darkThemeShadowLightColour}`,
  boxShadowLg: `${baseTheme.spacingLg}px ${baseTheme.spacingLg}px ${
    2 * baseTheme.spacingLg
  }px ${darkThemeShadowDarkColour},
        -${baseTheme.spacingLg}px -${baseTheme.spacingLg}px ${
    2 * baseTheme.spacingLg
  }px ${darkThemeShadowLightColour}`,
  boxShadowSmInset: `inset ${baseTheme.spacingSm}px ${baseTheme.spacingSm}px ${
    2 * baseTheme.spacingSm
  }px ${darkThemeShadowDarkColour},
        -${baseTheme.spacingSm}px -${baseTheme.spacingSm}px ${
    2 * baseTheme.spacingSm
  }px ${darkThemeShadowLightColour}`,
  boxShadowMdInset: `inset ${baseTheme.spacingMd}px ${baseTheme.spacingMd}px ${
    2 * baseTheme.spacingMd
  }px ${darkThemeShadowDarkColour},
        -${baseTheme.spacingMd}px -${baseTheme.spacingMd}px ${
    2 * baseTheme.spacingMd
  }px ${darkThemeShadowLightColour}`,
  boxShadowLgInset: `inset ${baseTheme.spacingLg}px ${baseTheme.spacingLg}px ${
    2 * baseTheme.spacingLg
  }px ${darkThemeShadowDarkColour},
        -${baseTheme.spacingLg}px -${baseTheme.spacingLg}px ${
    2 * baseTheme.spacingLg
  }px ${darkThemeShadowLightColour}`,
};
