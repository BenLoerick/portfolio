import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "../node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import RPSSimulator from "./views/RPSSimulator/RPSSimulator";

function App() {
  return (
    <div className="App">
      <RPSSimulator />
    </div>
  );
}

export default App;
