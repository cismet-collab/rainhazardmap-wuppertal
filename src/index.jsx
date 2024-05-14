import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";

import TopicMapContextProvider from "react-cismap/contexts/TopicMapContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <TopicMapContextProvider appKey="ais-generix-texts-tester">
      <App />
    </TopicMapContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
