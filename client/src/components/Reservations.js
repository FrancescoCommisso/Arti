import React, { Component } from "react";
import { Frame, Wrapper, SubTitle } from "../shared/styledComponents";
import { phone, email } from "../shared/restaurantInfo";

export const Reservations = () => {
  return (
    <Frame>
      <Wrapper>
        <SubTitle>Reservations</SubTitle>
        <h1>{phone}</h1>
        <h1>{email}</h1>
      </Wrapper>
    </Frame>
  );
};
