import React from "react";

import { Nav } from "./components/Nav";
import { Menu } from "./components/Menu";
import { Location } from "./components/Location";
import { Page } from "./shared/styledComponents";
import { ComingSoon } from "./components/ComingSoon";
import { Landing } from "./components/Landing";

function App() {
  return (
    <div>
      <Nav tabs={["menu", "social", "location", "reservations", "contact"]} />

      <Landing style={{ zIndex: "-1" }}></Landing>
      <Menu></Menu>
      <Location></Location>
    </div>
  );
}

export default App;
