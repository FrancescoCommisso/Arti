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
    grid-template-columns: repeat(2, 1fr);
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

export const Location = () => {
  return (
    <Wrapper>
      <SubTitle>Location</SubTitle>
      <LocationGrid>
        <div style={{}}>
          <h2 style={{ fontFamily: "typewcond" }}>ISLINGTON & RUTHERFORD</h2>
          <h3 style={{ fontFamily: "typewcond" }}>
            {"5100 Rutherford Road, Woodbridge On L4H 2J2".toUpperCase()}
          </h3>
        </div>

        <Hours style={{ textAlign: "right" }}></Hours>
      </LocationGrid>
    </Wrapper>
  );
};
