import { Fragment, useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import CartAmountToggle from "../components/CartAmountToggle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import Spinner from "../components/Spinner";
import { useCartContext } from "../context/cartcontext";
import { Link } from "../GlobalStyle";
import FormatPrice from "../helper/FormatPrice";
import { mobile } from "../responsive";

const Container = styled.div``;

const EmptyCart = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 32px;
  font-weight: 300;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
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
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 12px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductRating = styled.span``;

const ProductId = styled.span``;

const ProductBrand = styled.div``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;



const ProductPrice = styled.div`
  font-size: ${(props) => (props.type === "original" ? "18px" : "30px")};
  font-weight: ${(props) => props.type !== "original" && "200"};

  ${mobile({ marginBottom: "20px" })};
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  font-size: ${(props) => props.type === "total" && "24px"};
  font-weight: ${(props) => props.type === "total" && "500"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;
`;

const Cart = () => {
  const {
    cart,
    cartLoading,
    totalAmount,
    shippingFee,
    setIncrease,
    setDecrease,
    setRemove,
  } = useCartContext();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  if (cartLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      {cart.length === 0 ? (
        <EmptyCart>No Item In Cart</EmptyCart>
      ) : (
        <Wrapper>
          <Title>Your Bag</Title>
          <Top>
            <TopButton><Link to="/"> CONTINUE SHOPPING </Link></TopButton>
            <TopTexts>
              <TopText>Your Cart ({cart.length})</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {cart.map((curElem, index) => (
                <Fragment key={index}>
                  <Product>
                    <ProductDetails>
                      <Link to={`/singleproduct/${curElem.id}`}>
                        <Image src={curElem.image} />
                      </Link>
                      <Details>
                        <ProductName>
                          <b>Product: </b> {curElem.name}
                        </ProductName>
                        <ProductRating>
                          <b>Rating: </b>{" "}
                          <b style={{ color: "teal" }}>{curElem.rating}</b>
                        </ProductRating>
                        <ProductId>
                          <b>ID: {curElem.id} </b>
                        </ProductId>
                        <ProductPrice type="original">
                          <b>Price: </b>
                          <FormatPrice price={curElem.price} />
                        </ProductPrice>
                        <ProductBrand>
                          <b>Brand: </b>
                          {curElem.brand}
                        </ProductBrand>
                      </Details>
                    </ProductDetails>
                    <PriceDetails>
                      <ProductAmountContainer>
                        <CartAmountToggle
                          style="cart"
                          setIncrease={() => setIncrease(curElem.id)}
                          setDecrease={() => setDecrease(curElem.id)}
                          setRemove= {() => setRemove(curElem.id)}
                          amount={curElem.amount}
                        />
                      </ProductAmountContainer>
                      <ProductPrice>
                        <FormatPrice price={curElem.price * curElem.amount} />
                      </ProductPrice>
                    </PriceDetails>
                  </Product>
                  <Hr />
                </Fragment>
              ))}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY </SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>
                  {" "}
                  <FormatPrice price={totalAmount} />
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>
                  <FormatPrice price={shippingFee} />
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>
                  <FormatPrice price={totalAmount + shippingFee} />
                </SummaryItemPrice>
              </SummaryItem>
              <Button>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
      )}
      <Newletter />
      <Footer />
    </Container>
  );
};

export default Cart;
