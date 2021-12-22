import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.scss";
import Header from "./components/Header/index.js";
import Home from "./pages/Home/index.js";
import Places from "./components/Places";
import Curator from "./components/Curator";
import Footer from "./components/Footer";

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header />
      <Home />
      <Places />
      <Curator />
    </div>
    <Footer />
  </div>,
  document.getElementById("root")
);
