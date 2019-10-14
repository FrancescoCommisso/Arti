import React from "react";

import { Nav } from "./components/Nav";
import { Menu } from "./components/Menu";
import { Landing } from "./components/Landing";
import { Social } from "./components/Social";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Styled from "styled-components";
import { FindUs } from "./components/FindUs";
import { Helmet } from "react-helmet";
import { Hours } from "./components/Hours";

const StyledLink = Styled(NavLink)`
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

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Artigianale Ristorante & Enotoca</title>
        <meta
          name="description"
          content="Traditional Italian Restaurant located in Woodbridge, Ontario."
        />
        <meta
          name="keywords"
          content="italian, traditional,vaughan,artigianale,wine,winery,enoteca,pizza, pasta, steak"
        />
      </Helmet>
      <Nav tabs={["menu", "location", "contact", "social"]}>
        <StyledLink
          to="#hours"
          className="StyledLink"
          activeClassName="selected"
          scroll={el => el.scrollIntoView({ behavior: "smooth" })}
        >
          HOURS
        </StyledLink>
        <StyledLink
          to="#menu"
          className="StyledLink"
          activeClassName="selected"
          scroll={el => el.scrollIntoView({ behavior: "smooth" })}
        >
          MENU
        </StyledLink>
        <StyledLink
          to="/#find-us"
          activeClassName="selected"
          className="StyledLink"
          scroll={el => el.scrollIntoView({ behavior: "smooth" })}
        >
          FIND US
        </StyledLink>
        <StyledLink
          to="/#social"
          activeClassName="selected"
          className="StyledLink"
          scroll={el => el.scrollIntoView({ behavior: "smooth" })}
        >
          SOCIAL
        </StyledLink>
      </Nav>

      <Landing style={{ zIndex: "-1" }}></Landing>

      <Hours></Hours>
      <Menu></Menu>
      <FindUs></FindUs>
      {/* <Reservations></Reservations> */}
      <Social></Social>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
