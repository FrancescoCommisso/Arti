import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import {
  phones,
  tablets,
  smallPhones,
  accent
} from "../shared/styledComponents";
import p1 from "./assets/photosMin2/cheeseboard.jpg";
import p2 from "./assets/photosMin2/gnocchi.jpg";
import p3 from "./assets/photosMin2/gnocchi2.jpg";
import p4 from "./assets/photosMin2/muscleplate.jpg";
import p5 from "./assets/photosMin2/meatknife.jpg";
import p6 from "./assets/photosMin2/saladplate.jpg";
import p7 from "./assets/photosMin2/sidepasta.jpg";
// import p8 from "./assets/photos2/warmsalad.jpg";

const photos = [p1, p2, p3, p4, p5, p6, p7];

const StyledCarousel = styled(Carousel)`
  max-height: 95vh;
  div {
    img {
    }
  }
  height: 1000px;

  overflow: hidden;
  @media (${tablets}) {
    height: auto;
    div {
      img {
        height: auto;
      }
    }
  }
  @media (${phones}) {
    height: auto;
  }
  @media (${smallPhones}) {
    height: auto;
  }
`;

const LandingDiv = styled.div`
  h1,
  h2,
  h3 {
    font-family: typewcond;
  }
  background-color: ${accent};
  text-align: center;
  padding-bottom: 10px;
  padding-top: 10px;
  color: #fff;
  font-weight: 100;
  max-height: 5vh;

  @media (${tablets}) {
  }
  @media (${phones}) {
  }
  @media (${smallPhones}) {
    h1 {
      font-size: 1em;
    }
  }
`;

const Banner = styled.div`
  background-color: ${accent};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  h1 {
    font-weight: 100;
    color: white;
    font-family: typewcond;
  }

  @media (${tablets}) {
  }
  @media (${phones}) {
    h1 {
      font-size: 1.3em;
    }
  }
  @media (${smallPhones}) {
    h1 {
      font-size: 1.3em;
    }
  }
`;

export const Landing = () => {
  return (
    <div style={{ zIndex: -1 }}>
      <StyledCarousel
        infiniteLoop={true}
        interval={5000}
        transitionTime={1000}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
      >
        {photos.map(p => {
          return (
            <div styled={{ backgroundColor: "#0f0" }}>
              <img src={p}></img>
            </div>
          );
        })}
      </StyledCarousel>
      <Banner>
        <h1>Come join us during our soft opening</h1>
      </Banner>
    </div>
  );
};
