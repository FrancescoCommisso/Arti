import React, { Component } from "react";
import styled from "styled-components";
import {
  tablets,
  phones,
  smallPhones,
  accent
} from "../shared/styledComponents";
import { GoogleMap, Marker } from "react-google-maps";
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

  h1 {
    color: ${accent};
    font-family: typewcond;
  }

  p {
    font-size: 1.3em;
    margin-right: 10px;
    font-family: typewcond;
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
  }
`;

const MapDiv = styled.div`
  background-color: #bbb;
  border-radius: 5px;
  text-align: center;
  height: 100%;
  @media (${tablets}) {
    margin-top: 20px;
    height: 350px;
  }
  @media (${phones}) {
    margin-top: 20px;
    height: 350px;
  }
  @media (${smallPhones}) {
    margin-top: 20px;
    height: 250px;
  }
`;

export const Location = () => {
  const mapsStuff = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  return (
    <Wrapper id="find-us">
      <SubTitle>Find Us</SubTitle>
      <LocationGrid>
        <div>
          <h1>CONTACT </h1>
          <p>(905) 893 2774</p>
          <p>info@artiristorante.com</p>
          <h1>HOURS </h1>
          <Hours style={{ textAlign: "left", color: "black" }}></Hours>
          <h1>LOCATION</h1>
          <p>Islington & Rutherford</p>
          <p>{"5100 Rutherford Road, Woodbridge On L4H 2J2"}</p>
        </div>

        <MapDiv>
          {/* <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
          ></GoogleMap> */}
        </MapDiv>
      </LocationGrid>
    </Wrapper>
  );
};

const myStyles = [
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  }
];
