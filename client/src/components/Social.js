import React from "react";
import {
  SubTitle,
  Wrapper,
  Frame,
  lightAccent
} from "../shared/styledComponents";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const SocialIcon = styled(Icon)`
  margin: 20px;

  &&& {
    :hover {
      color: ${lightAccent};
    }
  }
`;

// const SocialIcon = Styled(Icon)`
//   margin: 20px;
// :hover{
//   color: ${lightAccent};
// }
// `;

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
            <SocialIcon className="instagram black huge "></SocialIcon>
          </a>
          <h3 style={{ fontFamily: "typewcond" }}>@Arti.Ristorante</h3>
        </div>
      </Wrapper>
    </Frame>
  );
};
