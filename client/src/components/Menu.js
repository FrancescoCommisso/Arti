import React from "react";
import styled from "styled-components";
import {
  SubTitle,
  Wrapper,
  smallPhones,
  phones,
  tablets,
  accent,
  Frame
} from "../shared/styledComponents";
import {
  antipasto,
  pizza,
  pasta,
  Contorni,
  secondi,
  insalata
} from "./assets/menu";
import { Tab } from "semantic-ui-react";

const MenuItemTitle = styled.h3`
  font-family: typewcond;
  color: ${accent};
`;

const MenuItemDesc = styled.p`
  font-family: typewcond;
`;
const Item = styled.div`
  margin: 10px;
  h3 {
    font-size: 1.6em;
  }
  p {
    font-size: 1.3em;
    margin-right: 10px;
  }

  @media (${tablets}) {
    text-align: center;
    font-size: 1em;
  }
  @media (${phones}) {
    text-align: center;
    font-size: 1em;
  }
  @media (${smallPhones}) {
    text-align: center;
    font-size: 1em;
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  text-align: left;

  @media (${tablets}) and (orientation: portrait) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
  @media (${phones}) and (orientation: portrait) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
  @media (${smallPhones}) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`;

const panes = [
  {
    menuItem: "Antipasti",
    render: () => (
      <Tab.Pane attached={false}>
        <MenuGrid>
          {antipasto.map((item, i) => {
            return (
              <MenuItem
                key={i}
                align={i % 2 == 0 ? "left" : "right"}
                item={item}
              ></MenuItem>
            );
          })}
        </MenuGrid>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Insalate",
    render: () => (
      <Tab.Pane attached={false}>
        {" "}
        <MenuGrid>
          {insalata.map((item, i) => {
            return (
              <MenuItem
                key={i}
                align={i % 2 == 0 ? "left" : "right"}
                item={item}
              ></MenuItem>
            );
          })}
        </MenuGrid>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Pasta",
    render: () => (
      <Tab.Pane attached={false}>
        {" "}
        <MenuGrid>
          {pasta.map((item, i) => {
            return (
              <MenuItem
                key={i}
                align={i % 2 == 0 ? "left" : "right"}
                item={item}
              ></MenuItem>
            );
          })}
        </MenuGrid>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Pizza",
    render: () => (
      <Tab.Pane attached={false}>
        {" "}
        <MenuGrid>
          {pizza.map((item, i) => {
            return (
              <MenuItem
                key={i}
                align={i % 2 == 0 ? "left" : "right"}
                item={item}
              ></MenuItem>
            );
          })}
        </MenuGrid>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Secondi",
    render: () => (
      <Tab.Pane attached={false}>
        <MenuGrid>
          {secondi.map((item, i) => {
            return (
              <MenuItem
                key={i}
                align={i % 2 == 0 ? "left" : "right"}
                item={item}
              ></MenuItem>
            );
          })}
        </MenuGrid>
      </Tab.Pane>
    )
  },
  {
    menuItem: "Contorni",
    render: () => (
      <Tab.Pane attached={false}>
        {" "}
        <MenuGrid>
          {Contorni.map((item, i) => {
            return (
              <MenuItem
                key={i}
                align={i % 2 == 0 ? "left" : "right"}
                item={item}
              ></MenuItem>
            );
          })}
        </MenuGrid>
      </Tab.Pane>
    )
  }
];

const StyledTab = styled.div`
  .menu {
    font-family: typewcond !important;
    overflow: auto !important;
    font-size: 1.2em !important;
  }
`;
const MenuItem = ({ item, align }) => {
  return (
    <Item align={"align"}>
      <MenuItemTitle>{item.title}</MenuItemTitle>
      <MenuItemDesc>{item.desc}</MenuItemDesc>
    </Item>
  );
};

export const Menu = () => {
  return (
    <Frame id="menu" href="/menu">
      <Wrapper>
        <SubTitle>Menu</SubTitle>

        <StyledTab>
          <Tab
            grid={{ paneWidth: 12, tabWidth: 4 }}
            style={{ border: "none" }}
            menu={{
              borderless: true,
              attached: false,
              tabular: false,
              fluid: true
            }}
            panes={panes}
          ></Tab>
        </StyledTab>
      </Wrapper>
    </Frame>
  );
};
