import React from "react";
import Button from "../components/Button";
import styled, { css } from "styled-components";

import Container from "../components/layout/Container";
import Row from "../components/layout/Row";
import Col from "../components/layout/Col";
import Input from "../components/Input";

const StyledHome = styled.div`
  ${(props) =>
    props.theme &&
    css`
      background-color: ${props.theme.primaryBackgroundColour};
      width: 100%;
      height: 100%;
    `};
`;
const Home = (props) => {
  return (
    <StyledHome>
      <Container>
        <h1>Home</h1>
        <Input placeholder="Search..." icon="search" type="text" />
        <Row>
          <Col>One</Col>
          <Col md="auto">Two</Col>
          <Col sm={2}>Three</Col>
        </Row>
        <Button circular size="md">
          Click Me!
        </Button>
      </Container>
    </StyledHome>
  );
};

export default Home;
