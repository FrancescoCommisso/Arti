import React from "react";

import { Nav } from "./components/Nav";
import { Menu } from "./components/Menu";
import { Location } from "./components/Location";
import { Page } from "./shared/styledComponents";

function App() {
  return (
    <div>
      <Nav tabs={["menu", "social", "locations", "reservations", "contact"]} />
      <Page />
      <Menu />
      <Location></Location>
    </div>
  );
}

export default App;
