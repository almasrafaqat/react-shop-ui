import { Add, AtmOutlined, MenuSharp, Remove } from "@material-ui/icons";
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

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid teal;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const API = "https://dummyjson.com/products"
const Product = () => {
  const { getSingleProduct, SingleProduct, singleProductLoading } = useProductContext();
  const { id } = useParams();
  const { brand, category, description, price, rating, stock, thumbnail, title } = SingleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);


  return (
    <Container>
      <Navbar />
      <Announcement />
      {
        singleProductLoading ? <Spinner/> : <Wrapper>
          <ImageContainer>
            <Image src={thumbnail} />
          </ImageContainer>
          <InfoContainer>
            <Title>{title}</Title>
            <Rating>Rating:  <b style={{color: "teal"}}>{rating}</b></Rating>
            <Desc>
              {description}
            </Desc>
            <Price>$ {price}</Price>
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
            <Stock>Stock: <b>{stock}</b></Stock>
            <AddContainer>
           
              <AmountContainer>
                <Remove style={{cursor: "pointer"}}/>
                <Amount>1</Amount>
                <Add  style={{cursor: "pointer"}} />
              </AmountContainer>
              <Button>Add to Cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>

      }

      <Newletter />

      <Footer />
    </Container>
  );
};

export default Product;
