import React from "react";
import styled from "styled-components";
import { SubTitle } from "../shared/styledComponents";

const items = [
  {
    title: "The Vincenzo",
    desc: "A dope ass pizza with sausage and caramelized onions and shit."
  }
];

const MenuItemTitle = styled.h3`
  font-family: typewcond;
  font-weight: 1px;
`;

const MenuItemDesc = styled.p`
  font-family: typewcond;
  font-size: 1em;
`;

const MenuItem = ({ item }) => {
  return (
    <div style={{ margin: "50px" }}>
      <MenuItemTitle>{item.title.toUpperCase()}</MenuItemTitle>
      <MenuItemDesc>{item.desc}</MenuItemDesc>
    </div>
  );
};

export const Menu = () => {
  return (
    <div className={{ marginTop: "100px", width: "100%" }}>
      <SubTitle>Menu</SubTitle>
      {items.map(item => {
        return <MenuItem item={item}></MenuItem>;
      })}
    </div>
  );
};
