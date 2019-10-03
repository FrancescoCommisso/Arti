import React from "react";
import Styled from "styled-components";
import { accent } from "../shared/styledComponents";
import WhiteIcon from "./assets/whiteIcon.png";

const FooterDiv = Styled.div`
  position: absolute;
  bottom: 0;  
  display: flex;
  justify-content: center;
  height:50px;
  align-items: center;
  margin-top: 30px;
  background-color: black;
`;

export const Footer = () => {
  return <FooterDiv></FooterDiv>;
};
