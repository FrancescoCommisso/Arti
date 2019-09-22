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
  font-size: 4em;
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
  margin: 20px;
  width: 15vw;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavBurger = styled(Icon)`
  position: fixed;
  top: 35px;
  left: 25px;
  color: #fff;
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
        {tabs.map(tab => {
          return (
            <div style={{ text: "center" }}>
              <NavModalButton key={tab}>{tab.toUpperCase()}</NavModalButton>
            </div>
          );
        })}
      </Modal.Content>
    </Modal>
  );
};

export const Nav = ({ tabs }) => {
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
    console.log("modal: ", modal);
  };
  return (
    <div>
      <Transition>
        <Bar className={show ? "active" : "hidden"}>
          <Title>Artigianale</Title>

          <ArtIcon src={whiteIcon} />
          {tabs.map(tab => {
            return <NavButton key={tab}>{tab.toUpperCase()}</NavButton>;
          })}
        </Bar>
        <NavModal
          handleClose={handleBurgerClick}
          tabs={tabs}
          open={modal}
        ></NavModal>
      </Transition>
      <NavBurger onClick={handleBurgerClick} name="bars" size="big"></NavBurger>
    </div>
  );
};
