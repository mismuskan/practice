import React from "react";
// import ReactDOM  from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";

// ReactDOM.render(
//     <>
//     <App/>
//     </>,document.getElementById("root")
// );
const root = document.querySelector("#root");
createRoot(root).render(<App/>);