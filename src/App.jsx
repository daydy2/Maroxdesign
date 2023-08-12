// eslint-disable-next-line no-unused-vars
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./route/route";
import "./assets/fonts/stylesheet.css";
import "./style/style.scss";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
