import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <div className="background_ball"></div>
      <Navbar />
      <Body />
      <div className="background_ball2"></div>
      <Footer/>
    </div>
  );
};

export default App;
