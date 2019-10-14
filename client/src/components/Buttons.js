import React from "react";
import {
  Wrapper,
  Frame,
  lightAccent,
  phones,
  smallPhones,
  accent
} from "../shared/styledComponents";
import { Button, Icon, Modal, Image, Header } from "semantic-ui-react";
import Styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { phone, email } from "../shared/restaurantInfo";

const ButtonDiv = Styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    div{
        text-align: center;
    }
`;

const MyButton = Styled.a`
display:flex;
align-items: center;
justify-content: center;
background-color: ${({ primary }) => (primary ? accent : "white")}
color:  ${({ primary }) => (primary ? "white" : accent)}
border: solid 2px;
border-color:  ${accent};

text-align: center;
margin: 10px;
padding: 5px;
border-radius: 5px;

font-family: typewcond;
font-size: 1.5rem;
width: 50%;

:hover {
    color:${lightAccent};
}
`;
const HalfDiv = Styled.div`
display: flex;

@media (${phones}) and (orientation: portrait) {
    
    a{
        margin: 5px;
        padding: 5px;
        font-size: 1.3rem;
    }
  }

`;

const PhoneModal = () => {
  return (
    <Modal
      trigger={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "typewcond"
          }}
        >
          <HoverIcon className="phone circular large"> </HoverIcon>
          <p style={{ diaply: "inline" }}> {phone} </p>
        </div>
      }
    >
      <Modal.Header
        style={{
          padding: "0px;",
          margin: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ margin: "auto", textAlign: "center" }}>
          <Icon className="phone"></Icon>
        </div>
      </Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <h2 style={{ fontFamily: "typewcond", textAlign: "center" }}>
            (905) - 893 - 2774
          </h2>
          <HalfDiv>
            <CopyToClipboard
              text={"9058932774"}
              onCopy={() => {
                console.log("show text copied message");
              }}
            >
              <MyButton>Copy to clipboard</MyButton>
            </CopyToClipboard>

            <MyButton primary href={"tel:9058932774"}>
              Call
            </MyButton>
          </HalfDiv>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

const HoverIcon = Styled(Icon)`

    color: ${accent};
 
    &&&{
        box-shadow: 0 0 0 0.1em rgba(0,0,0,0) inset;
    }
    :hover{
      background-color: rgba(0, 0, 0, 0.5);

    }
`;

const EmailModal = () => {
  return (
    <Modal
      trigger={
        <div
          style={{
            display: "flex",
            fontSize: "1.3rem",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "typewcond"
          }}
        >
          <HoverIcon className="mail circular large"> </HoverIcon>
          <p style={{ diaply: "inline" }}> {email} </p>
        </div>
      }
    >
      <Modal.Header>
        <h1 style={{ textAlign: "center" }}>
          <Icon className="mail"></Icon>
        </h1>
      </Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <p
            style={{
              fontFamily: "typewcond",
              textAlign: "center",
              fontSize: "1.4rem"
            }}
          >
            Info@Artiristorante.com
          </p>
          <HalfDiv>
            <CopyToClipboard
              text={"Info@Artiristorante.com"}
              onCopy={() => {
                console.log("show text copied message");
              }}
            >
              <MyButton>Copy to clipboard</MyButton>
            </CopyToClipboard>

            <MyButton primary href={"mailto: Info@Artiristorante.com"}>
              Email
            </MyButton>
          </HalfDiv>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export const Buttons = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Wrapper
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          textAlign: "justify",
          alignItems: "center"
        }}
      >
        <ButtonDiv>
          <PhoneModal></PhoneModal>

          <EmailModal></EmailModal>
        </ButtonDiv>
      </Wrapper>
    </div>
  );
};
