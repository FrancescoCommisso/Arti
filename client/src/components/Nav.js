import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Modal, Icon } from "semantic-ui-react";
import whiteIcon from "./assets/whiteIcon.png";

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 300ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;

const Bar = styled.div`
  z-index: 100
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: aAutoSignature;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  font-family: aAutoSignature;
  font-weight: 100;
  margin: 0;
  padding-top: 50px;
  color: #ffffff;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ArtIcon = styled.img`
  margin: 10px;
  width: 10vw;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavBurger = styled(Icon)`
  position: fixed;
  top: 18px;
  left: 25px;
  z-index: 100;
  color: ${({ color }) => color};
  @media (min-width: 768px) {
    visibility: hidden;
  }
  :hover {
    color: #c69c6c;
  }
`;

const NavButton = styled.button`
  font-family: typewcond;
  font-size: 2em;
  color: white;
  background-color: transparent;
  border: none;
  margin: 20px;
  outline: none;
  :hover {
    color: #c69c6c;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavModalButton = styled.button`
  font-family: typewcond;
  font-size: 2em;
  color: white;
  background-color: transparent;
  border: none;
  margin: 20px;
  outline: none;
  :hover {
    color: #c69c6c;
  }
`;

const NavModal = ({ open, tabs, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose} basic size="small">
      <Modal.Content style={{ text: "center" }}>
        <div>
          {tabs.map((tab, i) => {
            console.log("tab: ", tab);
            console.log("index: ", tab);

            return (
              <div style={{ margin: "25px" }} key={i}>
                {tab}
              </div>
            );
          })}
        </div>
      </Modal.Content>
    </Modal>
  );
};

const DropNav = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Nav = ({ children }) => {
  const [scrollPos, changeScrollPos] = useState(0);
  const [show, changeShow] = useState(true);
  const [modal, changeModal] = useState(false);

  const handleScroll = () => {
    let s = scrollPos;
    changeScrollPos(document.body.getBoundingClientRect().top);
    changeShow(document.body.getBoundingClientRect().top >= s);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBurgerClick = () => {
    changeModal(!modal);
  };
  return (
    <div>
      <Transition>
        <Bar className={show ? "active" : "hidden"}>
          <Title>Artigianale</Title>

          <DropNav style={{ margin: "20px" }}>
            {children.map(c => {
              return c;
            })}
          </DropNav>

          <ArtIcon src={whiteIcon} />
        </Bar>
        <NavModal
          handleClose={handleBurgerClick}
          tabs={children}
          open={modal}
        ></NavModal>
      </Transition>
      <NavBurger
        color={show ? "white" : "black"}
        onClick={handleBurgerClick}
        name="bars"
        size="big"
      ></NavBurger>
    </div>
  );
};
