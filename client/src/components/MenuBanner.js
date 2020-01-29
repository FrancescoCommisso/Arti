import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

const Root = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

const MyButton = styled.button`
  background-color: white;
  font-family: typewcond;
  font-size: 2em;
  outline: none;
  :hover {
    color: #c69c6c;
  }
  border-radius: 4px;
`;

export const MenuBanner = () => {
  return (
    <Root>
      <MyButton
        style={{ padding: "20px", flexBasis: "50%", textAlign: "center" }}
      >
        Menu
      </MyButton>
    </Root>
  );
};
