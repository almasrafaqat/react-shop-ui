import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newletter from "../components/Newletter";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Newletter />
   
    </div>
  );
};

export default Home;
