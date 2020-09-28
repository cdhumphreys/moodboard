import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;

  ${(props) =>
    props.theme &&
    css`
      z-index: ${props.theme.zIndexTop};
      background-color: ${props.theme.primaryBackgroundColour};
      padding: ${props.theme.spacingMd}px;
      box-shadow: ${props.theme.boxShadowSm};
      ul {
        display: flex;
        flex-direction: row;
        list-style: none;
      }
      ul li,
      ul li a {
        color: ${props.theme.primaryTextColour};
      }
    `}
`;

const Nav = (props) => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Button size="sm">
            <Link to="/">Home</Link>
          </Button>
        </li>
        <li>
          <Button size="sm">
            <Link to="/ui-dashboard">UI DASHBOARD</Link>
          </Button>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
