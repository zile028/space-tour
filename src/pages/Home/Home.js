import React from "react";
import "./home.scss";
import images from "../../assets/home/background";

const style = {
  backgroundImage: `url(${images.desktop})`,
};

function Home() {
  return <section style={style} className="home-wraper"></section>;
}

export default Home;
