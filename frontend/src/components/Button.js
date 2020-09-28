import styled, { css } from "styled-components";

const Button = styled.button`
  ${(props) =>
    props.theme &&
    css`
      color: ${props.theme.primaryTextColour};
      background-color: ${props.primary ? props.theme.primaryHighlightColour : props.theme.primaryBackgroundColour};
      box-shadow: ${props.theme.boxShadowSm};
      padding: ${props.theme.spacingMd}px ${props.theme.spacingLg}px;
      margin: ${props.theme.spacingMd}px;
      transition: all 250ms ease-in-out;
      border: 1px solid ${props.theme.primaryBorderColour};
      box-sizing: border-box;

      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:active {
        box-shadow: ${props.theme.boxShadowSmInset};
      }

      &:hover {
        border-color:${props.theme.primaryHighlightColour};
      }

      border-radius: ${props.circular ? "50%" : props.theme.borderRadius + "px"};
      ${props.size === "sm"
        ? css`
            width: 30px;
            height: 30px;
          `
        : props.size === "md"
        ? css`
            width: 75px;
            height: 75px;
          `
        : props.size === "lg"
        ? css`
            width: 100px;
            height: 100px;
          `
        : props.size === "xl" &&
          css`
            width: 200px;
            height: 200px;
          `}

      a {
        text-decoration: none;
        color: ${props.theme.primaryTextColour};
      }
    `}
`;

export default Button;
