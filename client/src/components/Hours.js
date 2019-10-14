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
  lightAccent
} from "../shared/styledComponents";
import { Buttons } from "./Buttons";
import { Card, Divider, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { Reservations } from "./Reservations";
import { email, phone, hours } from "../shared/restaurantInfo";

const HoursGrid = styled.div`
  margin-top: 0px;
  list-style: none;
  display: -ms-flexbox;
  display: -webkit-flex;
  text-align: center;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  margin: 0px;
  text-align: right;
  flex-basis: 50%;
  padding: 20px;

  @media (${tablets}) {
    flex-basis: 100%;
    text-align: center;
  }
`;

const HoursCard = styled.div`
  font-family: typewcond;
  margin: auto;
  flex-basis: 100%;

  &&& {
    padding-bottom: 40px;
    h2 {
      color: ${({ secondary }) => (secondary ? "white" : accent)};
      padding-right: ${({ align }) => (align === "left" ? "70px" : "0px")};
      padding-left: ${({ align }) => (align === "right" ? "70px" : "0px")};
      padding-bottom: 5px;
      font-weight: 200;
      font-family: typewcond;
      @media (${tablets}) {
        padding-left: 40px;
        padding-right: 40px;
      }
      @media (${tablets}) {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
    p {
      font-size: 1.3rem;
    }
  }
`;

const HoursItem = ({ title, info, secondary, align }) => {
  return (
    <HoursCard align={align} secondary={secondary}>
      <div style={{ marginBottom: "20px" }}>
        <h2
          style={{
            borderBottom: "solid 1px",
            display: "inline",

            borderColor: "rgba(0, 0, 0, 0.2)"
          }}
        >
          {title}
        </h2>
      </div>

      {info}
    </HoursCard>
  );
};

const HalfOrNada = styled.div`
  list-style: none;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row wrap;
  justify-content: space-between;
`;

export const HoursComp = () => {
  return (
    <HoursGrid>
      <HoursItem
        title={"Monday to Thursday"}
        info={
          <div>
            <p>Lunch: 11am - 3pm</p>
            <p>Dinner: 5pm - 10pm</p>
          </div>
        }
      ></HoursItem>
      <HoursItem
        title={"Friday and Saturday"}
        info={
          <div>
            <p>Lunch: 11am - 3pm</p>
            <p>Dinner: 5pm - 10pm</p>
          </div>
        }
      ></HoursItem>
      <HoursItem
        title={"Sunday"}
        info={
          <div>
            <p>Private Events Only</p>
          </div>
        }
      ></HoursItem>
    </HoursGrid>
  );
};

const AccentDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-family: typewcond;
  background-color: ${accent};
  border-radius: 5px;
  flex-basis: 60%;
  flex: 1;
  flex-grow: 1;
  text-align: left;
  padding: 30px;
  color: white;

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

export const Hours = () => {
  return (
    <Frame id="hours" href="/hours">
      <Wrapper>
        <StyledSub>Hours & Reservations</StyledSub>
        <HalfOrNada>
          <AccentDiv>
            <HoursItem
              secondary
              align={"left"}
              title={"Reservations"}
              info={
                <div>
                  <div>
                    <p>{`Phone: ${phone}`} </p>
                  </div>

                  <div>
                    <p> {`Email: ${email}`} </p>
                  </div>
                  <div>
                    <p style={{ color: "black" }}>
                      Contact us for reservations, private events, catering, and
                      any other dining inquiries.
                    </p>
                  </div>
                </div>
              }
            ></HoursItem>
          </AccentDiv>
          <HoursGrid style={{ margin: "auto" }}>
            <HoursItem
              align={"right"}
              title={"Monday to Thursday"}
              info={
                <div>
                  <p> Lunch: {hours.mondayThursday.lunch}</p>
                  <p>Dinner: {hours.mondayThursday.dinner}</p>
                </div>
              }
            ></HoursItem>
            <HoursItem
              align={"right"}
              title={"Friday and Saturday"}
              info={
                <div>
                  <p>Lunch: {hours.fridaySaturday.lunch}</p>
                  <p>Dinner: {hours.fridaySaturday.dinner}</p>
                </div>
              }
            ></HoursItem>
            <HoursItem
              align={"right"}
              title={"Sunday"}
              info={
                <div>
                  <p>Private Events Only</p>
                </div>
              }
            ></HoursItem>
          </HoursGrid>
        </HalfOrNada>
      </Wrapper>
    </Frame>
  );
};
