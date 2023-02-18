import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Newletter from "../components/Newletter";
import Footer from "../components/Footer";


const Home = () => {
  
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Newletter />
      <Footer/>
     
   
    </div>
  );
};

export default Home;
