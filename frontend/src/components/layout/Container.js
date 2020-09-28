import styled, { css } from "styled-components";

const Container = styled.div`
  ${(props) =>
    props.theme &&
    css`
      max-width: 100%;
      margin: 0 auto;
      padding-top: ${props.theme.spacingMd}px;
      padding-bottom: ${props.theme.spacingMd}px;
      padding-left: ${props.theme.spacingMd}px;
      padding-right: ${props.theme.spacingMd}px;

      @media only screen and (min-width: ${props.theme.breakpointSm}px) {
        max-width: ${0.98 * props.theme.breakpointSm}px;
      }

      @media only screen and (min-width: ${props.theme.breakpointMd}px) {
        max-width: ${0.98 * props.theme.breakpointMd}px;
      }

      @media only screen and (min-width: ${props.theme.breakpointLg}px) {
        max-width: ${0.95 * props.theme.breakpointLg}px;
      }

      @media only screen and (min-width: ${props.theme.breakpointXl}px) {
        max-width: ${0.8 * props.theme.breakpointXl}px;
      }
    `}
`;

export default Container;
