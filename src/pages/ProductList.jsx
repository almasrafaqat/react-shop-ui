import { useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Filters from "../components/Filters";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import ShopProducts from "../components/ShopProducts";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;



const ProductList = () => {


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Shop</Title>
      <Filters/>
      <ShopProducts />
      <Newletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
