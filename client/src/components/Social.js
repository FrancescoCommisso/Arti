import React from "react";
import { SubTitle, Wrapper, Frame } from "../shared/styledComponents";
import Styled from "styled-components";
import { Icon } from "semantic-ui-react";

const SocialIcon = Styled(Icon)`

  &&{
 
    background-color: green;
  }
 
  color: #fff;
 
`;

export const Social = () => {
  return (
    <Frame id="social">
      <Wrapper>
        <SubTitle>Social</SubTitle>
        <div
          style={{
            textAlign: "center",
            fontFamily: "typewcond",
            maxWidth: "600px",
            overflow: "hidden",
            margin: "auto"
          }}
        >
          <a href="https://www.instagram.com/arti.ristorante">
            <Icon
              style={{ margin: "20px" }}
              className="instagram huge black"
            ></Icon>
          </a>
          <h3 style={{ fontFamily: "typewcond" }}>@Arti.Ristorante</h3>
        </div>
      </Wrapper>
    </Frame>
  );
};
