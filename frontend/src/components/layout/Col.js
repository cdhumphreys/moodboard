import styled, { css } from "styled-components";

const gridColumns = 12;

const Col = styled.div`
  position: relative;
  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
  width: 100%;

  ${(props) =>
    props.theme &&
    css`
      padding-left: ${props.theme.gridSpacing}px;
      padding-right: ${props.theme.gridSpacing}px;

      /* Small */
      ${
        props.sm &&
        (!isNaN(parseInt(props.sm))
          ? css`
              @media only screen and (min-width: ${props.theme.breakpointSm}px) {
                flex-basis: ${(100 * props.sm) / gridColumns}%;
                max-width: ${(100 * props.sm) / gridColumns}%;
              }
            `
          : css`
              @media only screen and (min-width: ${props.theme.breakpointSm}px) {
                flex: 0 0 auto;
                max-width: none;
                width: auto;
              }
            `)
      }

      /* Medium */
      ${
        props.md &&
        (!isNaN(parseInt(props.md))
          ? css`
              @media only screen and (min-width: ${props.theme.breakpointMd}px) {
                flex-basis: ${(100 * props.md) / gridColumns}%;
                max-width: ${(100 * props.md) / gridColumns}%;
              }
            `
          : css`
              @media only screen and (min-width: ${props.theme.breakpointMd}px) {
                flex: 0 0 auto;
                max-width: none;
                width: auto;
              }
            `)
      }

      /* Large */
      ${
        props.lg &&
        (!isNaN(parseInt(props.lg))
          ? css`
              @media only screen and (min-width: ${props.theme.breakpointLg}px) {
                flex: 0 0 ${(100 * props.lg) / gridColumns}%;
                max-width: ${(100 * props.lg) / gridColumns}%;
              }
            `
          : css`
              @media only screen and (min-width: ${props.theme.breakpointLg}px) {
                flex: 0 0 auto;
                max-width: none;
                width: auto;
              }
            `)
      }
      /* Extra Large */
      ${
        props.xl &&
        (!isNaN(parseInt(props.xl))
          ? css`
              @media only screen and (min-width: ${props.theme.breakpointXl}px) {
                flex: 0 0 ${(100 * props.xl) / gridColumns}%;
                max-width: ${(100 * props.xl) / gridColumns}%;
              }
            `
          : css`
              @media only screen and (min-width: ${props.theme.breakpointXl}px) {
                flex: 0 0 auto;
                max-width: none;
                width: auto;
              }
            `)
      }
    `}
`;

export default Col;
