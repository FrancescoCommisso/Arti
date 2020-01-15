import React from "react";
import {
  SubTitle,
  Wrapper,
  Page,
  Frame,
  accent,
  tablets,
  phones,
  smallPhones,
  lightAccent,
  InfoItem,
  HalfOrNada,
  darkTexttColor,
  lightTextColor
} from "../shared/styledComponents";
import styled from "styled-components";
import { email, phone, hours } from "../shared/restaurantInfo";
import { Icon } from "semantic-ui-react";

const HoursGrid = styled.div`
  margin-top: 0px;
  list-style: none;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  margin: 0px;
  flex-basis: 50%;
  padding: 20px;

  @media (${tablets}) {
    flex-basis: 100%;
    text-align: center;
  }
`;

export const AccentDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-family: typewcond;
  background-color: ${accent};
  border-radius: 5px;
  flex-basis: 60%;
  flex: 1;
  flex-grow: 1;
  padding: 30px;
  color: ${lightTextColor};
  text-align: center;

  div {
    div {
      p {
        margin-bottom: 20px;
        font-size: 0.8rem;
      }
    }
    marginbottom: 10px;
  }

  @media (${tablets}) {
    flex-basis: 100%;
    text-align: center;
    p {
      text-align: center !important;
    }
  }
  @media (${smallPhones}) {
    padding: 15px;
    flex-basis: 100%;
    text-align: center;
  }
`;

const StyledSub = styled(SubTitle)`
  @media (${phones}) {
    font-size: 2.2rem;
    text-align: center;
    margin: 0px;
    margin-bottom: 15px;
  }
`;

const StyledLink = styled.a`
  color: white;
  :hover {
    color: ${lightAccent};
  }
`;

export const Hours = () => {
  return (
    <Frame id="hours" href="/hours">
      <Wrapper>
        <StyledSub>Hours & Reservations</StyledSub>
        <HalfOrNada>
          <HoursGrid style={{ margin: "auto" }}>
            <InfoItem
              align={"left"}
              title={"Tuesday to Thursday"}
              info={
                <div>
                  <p> Lunch: {hours.mondayThursday.lunch}</p>
                  <p>Dinner: {hours.mondayThursday.dinner}</p>
                </div>
              }
            ></InfoItem>
            <InfoItem
              align={"left"}
              title={"Friday"}
              info={
                <div>
                  <p>Lunch: {hours.friday.lunch}</p>
                  <p>Dinner: {hours.friday.dinner}</p>
                </div>
              }
            ></InfoItem>
            <InfoItem
              align={"left"}
              title={"Saturday"}
              info={
                <div>
                  <p></p>
                  <p>Dinner: {hours.saturday.dinner}</p>
                </div>
              }
            ></InfoItem>
            <InfoItem
              align={"left"}
              title={"Sunday"}
              info={
                <div>
                  <p> Reservations Only</p>
                </div>
              }
            ></InfoItem>
          </HoursGrid>
          <AccentDiv>
            <InfoItem
              secondary
              align={"center"}
              title={"Reservations"}
              info={
                <div>
                  <div>
                    <StyledLink href={"tel:9058932774"}>
                      <p>{`Phone: ${phone}`} </p>
                    </StyledLink>
                  </div>

                  <div>
                    <StyledLink href={"mailto: Info@Artiristorante.com"}>
                      <p> {`Email: ${email}`} </p>
                    </StyledLink>
                  </div>
                  <div>
                    <p>
                      Contact us for reservations, private events, catering, and
                      any other dining inquiries.
                    </p>
                  </div>
                </div>
              }
            ></InfoItem>
          </AccentDiv>
        </HalfOrNada>
      </Wrapper>
    </Frame>
  );
};
