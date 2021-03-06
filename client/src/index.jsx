import { App } from "App";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// Import Grl Styles.
import "styles/scss/common/api.scss";
import "styles/scss/common/app.scss";

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// To log results (for example: reportWebVitals(console.log))
// Or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
