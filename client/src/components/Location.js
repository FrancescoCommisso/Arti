import React, { Component } from "react";
import styled from "styled-components";
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

const Hours = ({ style }) => {
  return (
    <div style={style}>
      <p>Sunday: 12pm - 10pm</p>
      <p>Monday - Thursday: 10am - 10pm</p>
      <p>Friday - Saturday: 11am - 1am</p>
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
  text-align: center;
  height: 100%;
  overflow: hidden;
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

export const Location = ({ google }) => {
  const defaultProps = {
    center: {
      lat: 43.81757,
      lng: -79.60238
    },
    zoom: 11
  };

  const mapOptions = {
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#212121"
          }
        ]
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#212121"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#181818"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1b1b1b"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#2c2c2c"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8a8a8a"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#373737"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#3c3c3c"
          }
        ]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
          {
            color: "#4e4e4e"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#3d3d3d"
          }
        ]
      }
    ] // straight out of something like snazzymaps
  };

  return (
    <Frame id="find-us">
      <Wrapper>
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
            <p>5100 Rutherford Road</p>
            <p> Woodbridge, Ontario</p>
            <p>L4H 2J2</p>
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
                ></img>
              </span>
            </GoogleMapReact>
          </MapDiv>
        </LocationGrid>
      </Wrapper>
    </Frame>
  );
};
