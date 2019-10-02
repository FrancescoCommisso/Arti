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
  margin: 90px;
  overflow: auto;
  width: 70vw;
  @media (${tablets}) {
    margin: 70px;
    text-align: center;
    margin: 40px;
  }
  @media (${phones}) {
    margin: 70px;
    text-align: center;
    margin: 40px;
  }
  @media (${smallPhones}) {
    margin: 70px;
    text-align: center;
    margin: 40px;
  }
`;
