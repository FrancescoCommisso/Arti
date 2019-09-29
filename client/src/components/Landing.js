import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { phones, tablets, smallPhones } from "../shared/styledComponents";
import p1 from "./assets/photos/fulltable.jpg";
import p2 from "./assets/photos/saladplate.png";
import p3 from "./assets/photos/musclebowl.png";
import p4 from "./assets/photos/cheeseboard.png";

const photos = [p1, p2, p3, p4];

const Carousel1 = styled(Carousel)`
  width: 100%;
`;

const LandingDiv = styled.div`
  font-family: aAutoSignature;

  background-color: #000;
  text-align: center;
  padding: 20px;
  color: #fff;

  @media (${tablets}) {
  }
  @media (${phones}) {
  }
  @media (${smallPhones}) {
    font-size: 50em;
  }
`;

export const Landing = () => {
  return (
    <div style={{ zIndex: -1 }}>
      <Carousel1
        infiniteLoop={true}
        interval={5000}
        transitionTime={1000}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
      >
        {photos.map(p => {
          return (
            <div>
              <img src={p}></img>
            </div>
          );
        })}
      </Carousel1>
      <LandingDiv>
        <h1 style={{ fontFamily: "aAutoSignature" }}> (905) 893 2774</h1>
      </LandingDiv>
    </div>
  );
};
