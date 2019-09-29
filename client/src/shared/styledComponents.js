import styled from "styled-components";

export const smallPhones = "max-width: 361px";
export const phones = "max-width: 415px";
export const tablets = "max-width: 1024px";

export const background = "#191919";
export const accent = "#c69c6c";
export const textColor = "#fff";
export const subTitleColor = "#000";

const darkTheme = {
  background,
  accent,
  textColor,
  subTitleColor
};

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
  text-align: left;
  font-weight: 1;
  @media (${tablets}) {
    font-size: 3em;
  }
  @media (${phones}) {
    font-size: 3em;
    text-align: center;
  }
  @media (${smallPhones}) {
    font-size: 3em;
  }
`;

export const Wrapper = styled.div`
  margin: 70px;
  @media (${phones}) {
    text-align: center;
    margin: 40px;
  }
`;
