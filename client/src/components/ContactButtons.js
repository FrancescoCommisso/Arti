import React, { Component } from "react";
import { Wrapper } from "../shared/styledComponents";
import { phone, email } from "../shared/restaurantInfo";
import { Icon } from "semantic-ui-react";

export const ContactButtons = () => {
  return (
    <Wrapper style={{}}>
      <div style={{ display: "flex", alignContent: "center" }}>
        <div
          style={{
            width: "50%",
            backgroundColor: "blue",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "typewcond"
          }}
        >
          <Icon className="phone circular large"> </Icon>
          <p style={{ diaply: "inline" }}> {phone} </p>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "typewcond"
          }}
        >
          <Icon className="mail circular large"> </Icon>
          <p style={{ diaply: "inline" }}> {email} </p>
        </div>
      </div>
    </Wrapper>
  );
};
