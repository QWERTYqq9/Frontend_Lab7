import React from "react";
import Header from "./Header";
import Content from "./Content";
import Image from "./Image";
import "./style.css";
import GoodsGallery from "./GoodsGallery";

function App() {
  return (
    <div className="App">
      <Header title="Больбут Станіслав Андрійович" />
      <Content />
      <Image />
      <GoodsGallery></GoodsGallery>
    </div>
  );
}

export default App;
