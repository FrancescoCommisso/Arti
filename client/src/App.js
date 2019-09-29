import React from "react";

import { Nav } from "./components/Nav";
import { Menu } from "./components/Menu";
import { Location } from "./components/Location";
import { Page } from "./shared/styledComponents";
import { ComingSoon } from "./components/ComingSoon";
import { Landing } from "./components/Landing";
import { Contact } from "./components/Contact";
import { Social } from "./components/Social";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Nav tabs={["menu", "location", "contact", "social"]} />

      <Landing style={{ zIndex: "-1" }}></Landing>
      <Menu></Menu>
      <Location></Location>
      <Contact></Contact>
      <Social></Social>
      <Footer></Footer>
    </div>
  );
}

export default App;
