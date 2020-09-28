import React from "react";
import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  width: 100%;

  ${(props) =>
    props.theme &&
    css`
      margin-left: -${props.theme.gridSpacing}px;
      margin-right: -${props.theme.gridSpacing}px;
    `}
`;

export default Row;
