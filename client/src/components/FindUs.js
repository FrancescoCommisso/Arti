import React, { Component } from "react";
import styled from "styled-components";
import { mapOptions, InfoItem, HalfOrNada } from "../shared/styledComponents";
import {
  tablets,
  phones,
  smallPhones,
  accent,
  Frame
} from "../shared/styledComponents";
import GoogleMapReact from "google-map-react";
import { SubTitle, Wrapper } from "../shared/styledComponents";
import AccentIcon from "./assets/AccentIcon.png";
import { Divider, Card } from "semantic-ui-react";
import { AccentDiv } from "./Hours";

const MapDiv = styled.div`
  border-radius: 4px;
  background-color: red;
  text-align: center;
  height: 400px;
  width: 800px;
  overflow: hidden;
  @media (${tablets}) and (orientation: portrait) {
    width: 100%;
    margin: auto;
    margin-top: 20px;
  }

  @media (${phones}) and (orientation: portrait) {
    width: 100%;
    margin: auto;
    margin-top: 20px;
  }
`;

const ContentDiv = styled.div`
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  margin-right: 20px;
  margin-bottom: 20px;

  @media (${tablets}) and (orientation: portrait) {
    width: 100%;
    margin: auto;
  }
  @media (${phones}) and (orientation: portrait) {
    width: 100%;
    margin: auto;
  }
`;

const FindUsGrid = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-between;
  h1 {
    color: ${accent};
    font-family: typewcond;
    text-align: left;
  }
  p {
    font-size: 1.3em;
    margin-right: 10px;
    font-family: typewcond;
    text-align: left;
  }
  @media (${tablets}) and (orientation: portrait) {
    h1 {
      text-align: center;
    }
    p {
      font-size: 1.3em;

      text-align: center;
    }
  }
  @media (${phones}) and (orientation: portrait) {
    text-align: center;
    h1 {
      text-align: center;
    }
    p {
      font-size: 1.3em;

      pxmargin-right: 10px;
      text-align: center;
    }
  }
  @media (${smallPhones}) {
  }
`;

export const FindUs = () => {
  const defaultProps = {
    center: {
      lat: 43.81757,
      lng: -79.60238
    },
    zoom: 10
  };

  return (
    <Frame id="find-us">
      <Wrapper>
        <SubTitle>Find Us</SubTitle>
        <HalfOrNada>
          <ContentDiv>
            <InfoItem
              title={"Location"}
              align={"left"}
              info={
                <div>
                  <p>5100 Rutherford Road</p>
                  <p>Woodbridge, Ontario </p>
                  <p>L4H 2J2</p>
                </div>
              }
            ></InfoItem>
          </ContentDiv>

          <MapDiv>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyC6sBVlb7ftQZATDbsjWq1F_I8fHu7a4is"
              }}
              options={mapOptions}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <span lat={43.81757} lng={-79.60238} text="My Marker">
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={AccentIcon}
                />
              </span>
            </GoogleMapReact>
          </MapDiv>
        </HalfOrNada>
      </Wrapper>
    </Frame>
  );
};
