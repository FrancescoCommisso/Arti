import React, { Component } from "react";
import styled from "styled-components";
import { mapOptions } from "../shared/styledComponents";
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

const MapDiv = styled.div`
  background-color: #bbb;
  border-radius: 4px;
  text-align: center;
  min-height: 400px;
  overflow: hidden;
  @media (${tablets}) {
    margin-top: 20px;
    height: 400ox;
    width: 100%;
  }
  @media (${phones}) {
    margin-top: 20px;
    height: 300ox;
  }
  @media (${smallPhones}) {
    margin-top: 20px;
    height: 200px;
  }
`;

const FindUsGrid = styled.div`
  display: grid;
  grid-template-columns: auto 600px;

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
    grid-template-columns: auto;
    h1 {
      text-align: center;
    }
    p {
      font-size: 1.3em;

      pxmargin-right: 10px;
      text-align: center;
    }
  }
  @media (${phones}) and (orientation: portrait) {
    grid-template-columns: auto;
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
    grid-template-columns: auto;
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
        <FindUsGrid>
          <div>
            <div
              style={{
                margin: "auto",
                textAlign: "justify"
              }}
            >
              <h1>LOCATION</h1>
              <p>5100 Rutherford Road</p>
              <p>Woodbridge, Ontario </p>
              <p>L4H 2J2</p>
            </div>

            <div style={{ margin: "auto" }}>
              <h1 style={{ marginTop: "30px" }}>HOURS</h1>
              <p>Monday - Thursday: 12pm - 3pm, 5pm - 10pm</p>
              <p>Friday - Saturday: 12pm - 3pm, 5am - 11pm</p>
              <p>Sunday: Private Events</p>
            </div>

            <div style={{ margin: "auto" }}>
              <h1 style={{ marginTop: "30px" }}>RESERVATIONS</h1>
              <p>Call: (905) 893 2774</p>
              <p>Email: info@artiristorante.com</p>
            </div>
          </div>

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
        </FindUsGrid>
      </Wrapper>
    </Frame>
  );
};
