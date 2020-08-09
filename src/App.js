import React, { Fragment } from "react";
import "./globals.css";

import Header from "./header";
import TopCardsList from "./topCardsList";
import BottomCardsList from "./bottomCardsList";
import Switch from "./switch";

function App() {
  return (
    <Fragment>
      <Header>
        <Switch />
      </Header>
      <TopCardsList />
      <BottomCardsList />
    </Fragment>
  );
}
export default App;

// En el componente header estamos enviado Switch como hijo (children)
