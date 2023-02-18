import { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import { useProductContext } from "../context/productcontext";
import { mobile } from "../responsive";
import Spinner from "../components/Spinner";
import FormatPrice from "../helper/FormatPrice";
import AddToCart from "../components/AddToCart";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;

const Title = styled.span`
  font-size: 30px;
  font-weight: 200;
`;

const Rating = styled.div`
  margin-top: 10px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterName = styled.div`
  margin: 0px 5px;
  cursor: pointer;
`;

const AddContainer = styled.div`
  margin-top: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Stock = styled.div``;

const StockAvailability = styled.b`
  color: ${(props) => (props.stock === "out" ? "red" : "blue")};
`;

const API = "https://dummyjson.com/products";
const Product = () => {
  const { getSingleProduct, SingleProduct, singleProductLoading } =
    useProductContext();
  const { id } = useParams();
  const {
    brand,
    category,
    description,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = SingleProduct;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getSingleProduct(`${API}/${id}`);
  }, []);

  return (
    <Container>
      <Navbar />
      <Announcement />
      {singleProductLoading ? (
        <Spinner />
      ) : (
        <Wrapper>
          <ImageContainer>
            <Image src={thumbnail} />
          </ImageContainer>
          <InfoContainer>
            <Title>{title}</Title>
            <Rating>
              Rating: <b style={{ color: "teal" }}>{rating}</b>
            </Rating>
            <Desc>{description}</Desc>
            <Price>
              <FormatPrice price={price} />
            </Price>
            <FilterContainer>
              <Filter>
                <FilterText>Brand: </FilterText>
                <FilterName>{brand}</FilterName>
              </Filter>
              <Filter>
                <FilterText>Category: </FilterText>
                <FilterName>{category}</FilterName>
              </Filter>
            </FilterContainer>
            <Stock>
              Stock:{" "}
              {stock > 0 ? (
                <StockAvailability>In Stock</StockAvailability>
              ) : (
                <StockAvailability stock="out">Out of Stock</StockAvailability>
              )}
            </Stock>
            <AddContainer>
              {/* addtocart included amount and state to increase decrease */}
              {stock > 0 && <AddToCart product={SingleProduct} />}
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}

      <Newletter />

      <Footer />
    </Container>
  );
};

export default Product;
