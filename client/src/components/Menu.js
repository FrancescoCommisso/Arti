import React from "react";
import styled from "styled-components";
import { SubTitle } from "../shared/styledComponents";

const items = [
  {
    title: "The Vincenzo",
    desc: "A dope ass pizza with sausage and caramelized onions and shit."
  },
  {
    title: "The Vincenzo",
    desc: "A dope ass pizza with sausage and caramelized onions and shit."
  },
  {
    title: "The Vincenzo",
    desc: "A dope ass pizza with sausage and caramelized onions and shit."
  },
  {
    title: "The Vincenzo",
    desc: "A dope ass pizza with sausage and caramelized onions and shit."
  },
  {
    title: "The Vincenzo",
    desc: "A dope ass pizza with sausage and caramelized onions and shit."
  },
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
`;

const Item = styled.div`
  margin: 10px;

  @media (min-width: 767px) {
    text-align: ${({ align }) => {
      return align;
    }};
  }
`;

const MenuGrid = styled.div`
  display: grid;
  padding: 20px;
  margin-top: 0;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  @media (max-width: 767px) {
    font-size: 1em;
    h3 {
      font-size: 2em;
    }
    p {
      font-size: 1.5em;
    }
    /* phones */
  }

  @media (max-width: 767px) and (orientation: portrait) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
  @media (min-width: 768px) {
    h3 {
      font-size: 2.5em;
    }
    p {
      font-size: 1.8em;
    }
  }
`;

const Wrapper = styled.div`
  margin: 30px;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

const MenuSubTitle = styled(SubTitle)`
  @media (max-width: 767px) {
    font-size: 5em;
    text-align: center;
  }
`;

const MenuItem = ({ item, align }) => {
  return (
    <Item align={align}>
      <MenuItemTitle>{item.title.toUpperCase()}</MenuItemTitle>
      <MenuItemDesc>{item.desc}</MenuItemDesc>
    </Item>
  );
};

export const Menu = () => {
  return (
    <Wrapper style={{}}>
      <MenuSubTitle>Menu</MenuSubTitle>
      <MenuGrid>
        {items.map((item, i) => {
          return (
            <MenuItem
              key={i}
              align={i % 2 == 0 ? "left" : "right"}
              item={item}
            ></MenuItem>
          );
        })}
      </MenuGrid>
    </Wrapper>
  );
};
