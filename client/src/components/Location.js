import React, { Component } from "react";
import styled from "styled-components";
import { tablets, phones, smallPhones } from "../shared/styledComponents";

import { SubTitle, Wrapper } from "../shared/styledComponents";

const Hours = ({ style }) => {
  return (
    <div style={style}>
      <p>
        Sunday: 12pm - 10pm
        <br />
        Monday - Thursday: 10am - 10pm
        <br />
        Friday - Saturday: 11am - 1am
        <br />
      </p>
    </div>
  );
};

const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  font-family: typewcond;
  h3 {
    font-size: 1.6em;
  }
  p {
    font-size: 1.3em;
    margin-right: 10px;
  }
  @media (${tablets}) and (orientation: portrait) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
    p {
      font-size: 1.3em;
      margin-right: 10px;
      text-align: center;
    }
  }
  @media (${phones}) and (orientation: portrait) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
  @media (${smallPhones}) {
    grid-template-columns: repeat(1, 1fr);
    p {
      text-align: center;
    }
  }
`;

const MapDiv = styled.div`
  height: 200px;
  background-color: #bbb;
  text-align: center;
  vertical-align: baseline @media (${tablets}) {
    margin-top: 20px;
  }
`;

export const Location = () => {
  return (
    <Wrapper>
      <SubTitle>Find Us</SubTitle>
      <LocationGrid>
        <div style={{ color: "#c69c6c" }}>
          <h2 style={{ fontFamily: "typewcond", color: "" }}>
            ISLINGTON & RUTHERFORD
          </h2>
          <h3 style={{ fontFamily: "typewcond" }}>
            {"5100 Rutherford Road, Woodbridge On L4H 2J2".toUpperCase()}
          </h3>
          <Hours style={{ textAlign: "left", color: "black" }}></Hours>
        </div>
        <MapDiv>
          <p>This is going to be a map</p>{" "}
        </MapDiv>
      </LocationGrid>
    </Wrapper>
  );
};
