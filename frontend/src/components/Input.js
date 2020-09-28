import React from "react";
import styled, { css } from "styled-components";

const InputWrapper = styled.div`
`;

const StyledInput = styled.input`
  ${(props) =>
    props.theme &&
    css`
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      width: 100%;
      border-radius: ${props.theme.borderRadius}px;
      background-color: ${props.theme.primaryBackgroundColour};
      color: ${props.theme.primaryTextColour};
      box-shadow: ${props.theme.boxShadowSmInset};
      padding: ${props.theme.spacingSm}px ${props.theme.spacingMd}px;
    `}
`;
const Input = (props) => {
  return (
    <InputWrapper>
      {props.icon && <i className="material-icons">{props.icon}</i>}
      <StyledInput />
    </InputWrapper>
  );
};

export default Input;
