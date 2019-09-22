import React, { Component } from "react";
import styled from "styled-components";
import { Page, SubTitle } from "../shared/styledComponents";

const BSpan1 = styled.span`
  display: inline-block;
  height: 100%;
  width: 20%;
  background-color: #00f;
`;
const BSpan2 = styled.span`
  display: inline-block;
  width: 80%;
  background-color: #c69c6c;
`;

const LocationTitle = styled(SubTitle)``;
export const Location = () => {
  return (
    <Page>
      <LocationTitle style={{ color: "#000" }}>Locations</LocationTitle>
    </Page>
  );
};
