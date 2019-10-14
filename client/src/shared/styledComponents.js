import styled from "styled-components";

export const smallPhones = "max-width: 361px";

export const phones = "max-width: 415px";
export const tablets = "max-width: 1024px";

export const background = "#191919";
export let accent = "#c69c6c";
export const lightAccent = "#FFCB8F";

export const textColor = "#fff";
export const subTitleColor = "#000";

export const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  font-family: aAutoSignature;
  color: #ffffff;
`;

export const Page = styled.div`
  margin: 0px;
  padding: 0px;
  height: 100vh;
`;
export const SubTitle = styled.h1`
  font-family: aAutoSignature;
  font-size: 3em;
  text-align: center;
  font-weight: 1;
  margin: 40px;
  margin-bottom: 70px;
  @media (${tablets}) {
    font-size: 3em;
    margin-bottom: 20px;
  }
  @media (${phones}) {
    font-size: 3em;
    text-align: center;
    margin-bottom: 20px;
  }
  @media (${smallPhones}) {
    font-size: 3em;
    margin-bottom: 20px;
  }
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 85vw;
  @media (${tablets}) {
    padding-top: 20px;

    text-align: center;
    width: 85vw;
  }
  @media (${phones}) {
    padding-top: 20px;

    text-align: center;
    width: 85vw;
  }
  @media (${smallPhones}) {
    margin-top: 20px;

    text-align: center;
    width: 85vw;
  }
`;

export const mapOptions = {
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
