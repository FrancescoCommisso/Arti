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
            margin: "auto"
          }}
        >
          <Icon style={{ margin: "20px" }} className="instagram big "></Icon>
          <Icon style={{ margin: "20px" }} className="twitter big "></Icon>
          <Icon style={{ margin: "20px" }} className="facebook big "></Icon>
        </div>
      </Wrapper>
    </Frame>
  );
};
