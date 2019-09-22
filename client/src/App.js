import React from "react";

import { Nav } from "./components/Nav";
import { Menu } from "./components/Menu";
import { Location } from "./components/Location";
import { Page } from "./shared/styledComponents";
import { ComingSoon } from "./components/ComingSoon";

function App() {
  return (
    <div>
      <Nav tabs={["menu", "social", "locations", "reservations", "contact"]} />
      <Page></Page>
      <Menu></Menu>
      <Location></Location>
    </div>
  );
}

export default App;
