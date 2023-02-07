import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 12px;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
    
`;

const Product = styled.div``;
const ProductDetails = styled.div``;
const Image = styled.img``;
const Details = styled.div``;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span``;
const ProductSize = styled.span``;
const PriceDetails = styled.div``;

const Summary = styled.div`
    flex: 1;
    background-color: black;
`;



const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Your Cart (0)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetails>
                        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                        <Details>
                            <ProductName><b>Product: </b> Geniune Leather Hand Made in Pakistan</ProductName>
                            <ProductId><b>ID: </b></ProductId>
                            <ProductColor />
                            <ProductSize><b>Size: </b> Small</ProductSize>
                        </Details>
                    </ProductDetails>
                    <PriceDetails>Price</PriceDetails>
                </Product>
            </Info>
            <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Newletter />
      <Footer />
    </Container>
  );
};

export default Cart;
