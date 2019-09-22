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
    <Page style={{ backgroundColor: "#c69c6c", overflow: "hidden" }}>
      <BSpan2>
        <LocationTitle style={{ color: "#fff" }}>Locations</LocationTitle>
      </BSpan2>
    </Page>
  );
};
