import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
  width: 100%;
  font-family: aAutoSignature;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  font-weight: 100;
  margin: 0;
  margin-top: 50px;
  color: #ffffff;
`;

const TextButton = styled.button`
  font-family: typewcond;
  font-size: 2em;
  color: white;
  background-color: transparent;
  border: none;
  margin: 20px;
`;

export const Nav = ({ tabs }) => {
  const [scrollPos, changeScrollPos] = useState(0);
  const [show, changeShow] = useState(true);

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

  return (
    <Transition>
      <Bar className={show ? "active" : "hidden"}>
        <Title>Artigianale</Title>
        <div>
          {tabs.map(tab => {
            return <TextButton>{tab.toUpperCase()}</TextButton>;
          })}
        </div>
      </Bar>
    </Transition>
  );
};
